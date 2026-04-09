import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowLeft, Printer, ChevronDown, ChevronUp, Check, FileText } from 'lucide-react';
import {
  ViewType, Client, Quote, QuoteMode, QuoteStatus, QuoteSettings, QuoteBreakdownItem, User,
} from '../../types';
import { subscribeClientQuotes } from '../../utils/db';
import { formatCurrency } from '../../utils/formatting';

// ── Static metadata (labels/docs — not prices, those come from settings) ─────

const SERVICE_INFO: Record<string, { label: string; unit: string; docs: string[] }> = {
  fotografia_produto: {
    label: 'Fotografia de Produto', unit: 'lote (10 SKUs)',
    docs: ['Briefing de produto', 'Lista de SKUs', 'Referências visuais'],
  },
  fotografia_corporativa: {
    label: 'Fotografia Corporativa / Eventos', unit: 'dia de shooting',
    docs: ['Briefing do evento', 'Lista de momentos chave', 'Acesso e logística'],
  },
  video_institucional: {
    label: 'Vídeo Institucional / Marca', unit: 'projeto',
    docs: ['Briefing de marca', 'Guião ou estrutura narrativa', 'Referências de estilo', 'Locais de filmagem'],
  },
  reels_social: {
    label: 'Reels / Conteúdo Social', unit: 'peça',
    docs: ['Briefing de conteúdo', 'Tom de voz', 'Formatos e plataformas'],
  },
  campanha_completa: {
    label: 'Campanha Completa (Foto + Vídeo)', unit: 'projeto',
    docs: ['Briefing estratégico', 'Moodboard', 'Guião', 'Lista de ativos', 'Aprovação de locais'],
  },
};

const AVENCA_ITEMS = [
  { id: 'reels', label: 'Reels', unit: 'un.' },
  { id: 'fotos_produto', label: 'Fotos de Produto', unit: 'SKUs' },
  { id: 'fotos_corporativas', label: 'Fotos Corporativas', unit: 'h' },
  { id: 'video_curto', label: 'Vídeos Curtos (até 60s)', unit: 'un.' },
  { id: 'stories', label: 'Stories / Slides', unit: 'un.' },
];

const AVENCA_DOCS = [
  'Briefing mensal de conteúdos', 'Calendário editorial', 'Guias de marca / style guide',
  'Acesso a plataformas de gestão', 'Contrato de avença (mínimo 3 meses)',
];

const STATUS_LABELS: Record<QuoteStatus, string> = {
  rascunho: 'Rascunho', enviado: 'Enviado', aprovado: 'Aprovado', recusado: 'Recusado', fatura: 'Fatura',
};
const STATUS_COLORS: Record<QuoteStatus, string> = {
  rascunho: 'bg-slate-100 text-slate-600',
  enviado: 'bg-blue-50 text-blue-600',
  aprovado: 'bg-emerald-50 text-emerald-600',
  recusado: 'bg-red-50 text-red-500',
  fatura: 'bg-purple-50 text-purple-600',
};
const NEXT_STATUSES: Partial<Record<QuoteStatus, QuoteStatus[]>> = {
  rascunho: ['enviado'],
  enviado: ['aprovado', 'recusado'],
  aprovado: ['fatura'],
};

// ── Props ─────────────────────────────────────────────────────────────────────

interface QuoteViewProps {
  clients: Client[];
  quoteSettings: QuoteSettings;
  currentUser: User;
  selectedQuote: Quote | null;
  defaultClientId: string | null;
  createQuote: (p: Omit<Quote, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'createdByName'>) => Promise<Quote>;
  updateQuote: (id: string, patch: Partial<Quote>) => Promise<void>;
  deleteQuote: (id: string) => Promise<void>;
  setView: (view: ViewType) => void;
  setSelectedClientId: (id: string) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────

export const QuoteView: React.FC<QuoteViewProps> = ({
  clients, quoteSettings, currentUser, selectedQuote, defaultClientId,
  createQuote, updateQuote, deleteQuote, setView, setSelectedClientId,
}) => {
  const isReadOnly = selectedQuote?.status === 'fatura';
  const isEditing = selectedQuote !== null;

  // Mode
  const [mode, setMode] = useState<QuoteMode>(selectedQuote?.mode ?? 'servico');

  // Client selector
  const [clientSearch, setClientSearch] = useState('');
  const [clientId, setClientId] = useState(selectedQuote?.clientId ?? defaultClientId ?? '');
  const [showClientDrop, setShowClientDrop] = useState(false);
  const clientDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = clients.find(c => c.id === clientId);
    if (c) setClientSearch(c.name);
  }, [clientId, clients]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (clientDropRef.current && !clientDropRef.current.contains(e.target as Node)) {
        setShowClientDrop(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Form
  const [form, setForm] = useState({
    servico: selectedQuote?.servico ?? 'fotografia_produto',
    quantidade: selectedQuote?.quantidade ?? 1,
    uso: selectedQuote?.uso ?? 'digital_organico',
    urgencia: selectedQuote?.urgencia ?? 0,
    deslocacao: selectedQuote?.deslocacao ?? false,
    deslocacaoKm: selectedQuote?.deslocacaoKm ?? 0,
    revisoes: selectedQuote?.revisoes ?? 1,
    desconto: selectedQuote?.desconto ?? 0,
    duracao: selectedQuote?.duracao ?? 3,
    precoAvenca: selectedQuote?.precoAvenca ?? 0,
    avencaItens: selectedQuote?.avencaItens ?? {} as Record<string, number>,
    notas: selectedQuote?.notas ?? '',
    servicoCustomLabel: selectedQuote?.servicoCustomLabel ?? '',
    servicoCustomUnit: selectedQuote?.servicoCustomUnit ?? 'un.',
    servicoCustomPrice: selectedQuote?.servicoCustomPrice ?? 0,
  });
  const upd = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm(f => ({ ...f, [k]: v }));

  // Status
  const [status, setStatus] = useState<QuoteStatus>(selectedQuote?.status ?? 'rascunho');

  // Calculation
  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState<QuoteBreakdownItem[]>([]);
  const [isNegotiable, setIsNegotiable] = useState(false);

  // Mobile summary toggle
  const [summaryOpen, setSummaryOpen] = useState(true);

  // Saving
  const [saving, setSaving] = useState(false);
  const [statusChanging, setStatusChanging] = useState(false);

  const selectedClient = useMemo(() => clients.find(c => c.id === clientId), [clients, clientId]);

  const svcInfo = useMemo(() => {
    if (form.servico === 'personalizado') {
      return { label: form.servicoCustomLabel || 'Personalizado', unit: form.servicoCustomUnit || 'un.', docs: [] as string[] };
    }
    const base = SERVICE_INFO[form.servico];
    if (!base) return null;
    const customLabel = quoteSettings.labels?.[form.servico as keyof NonNullable<typeof quoteSettings.labels>];
    return { ...base, label: (customLabel && customLabel.trim()) ? customLabel : base.label };
  }, [form.servico, form.servicoCustomLabel, form.servicoCustomUnit, quoteSettings.labels]);

  const filteredClients = useMemo(() => {
    if (!clientSearch || clientId) return [];
    const lower = clientSearch.toLowerCase();
    return clients.filter(c => c.name.toLowerCase().includes(lower) || c.email.toLowerCase().includes(lower)).slice(0, 6);
  }, [clientSearch, clientId, clients]);

  // ── Calculation ─────────────────────────────────────────────────────────────

  useEffect(() => {
    if (mode === 'servico') calcServico();
    else calcAvenca();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, form, quoteSettings]);

  function calcServico() {
    const basePrice = form.servico === 'personalizado'
      ? (form.servicoCustomPrice ?? 0)
      : (quoteSettings.prices[form.servico as keyof typeof quoteSettings.prices] ?? 0);
    if (form.uso === 'tv_ooh') {
      setIsNegotiable(true);
      setTotal(0);
      setBreakdown([{ label: 'TV / OOH / Licença Alargada', val: '—', detail: 'A negociar individualmente' }]);
      return;
    }
    setIsNegotiable(false);
    let useMult = 1.0;
    if (form.uso === 'digital_organico') useMult = quoteSettings.multipliers.digital_organico;
    else if (form.uso === 'campanha_paga') useMult = quoteSettings.multipliers.campanha_paga;

    const urgFrac = Number(form.urgencia);
    const base = basePrice * form.quantidade;
    const comUso = base * useMult;
    const comUrg = comUso * (1 + urgFrac);
    const desl = form.deslocacao ? form.deslocacaoKm * quoteSettings.travel.perKm + quoteSettings.travel.fixedFee : 0;
    const revExtra = Math.max(0, form.revisoes - 1) * quoteSettings.revisionCost;
    const subtotal = comUrg + desl + revExtra;
    const descontoVal = subtotal * (form.desconto / 100);
    const final = subtotal - descontoVal;

    const usoLabel = form.uso === 'digital_organico' ? 'Digital Orgânico' : 'Campanha Paga / Ads';
    const bd: QuoteBreakdownItem[] = [
      { label: svcInfo?.label ?? form.servico, val: base, detail: `${form.quantidade}× ${svcInfo?.unit ?? ''}` },
    ];
    if (useMult !== 1) bd.push({ label: 'Multiplicador de uso', val: comUso - base, detail: `×${useMult} — ${usoLabel}` });
    if (urgFrac > 0) bd.push({ label: 'Urgência', val: comUrg - comUso, detail: `+${urgFrac * 100}%` });
    if (desl > 0) bd.push({ label: 'Deslocação', val: desl, detail: `${form.deslocacaoKm} km` });
    if (revExtra > 0) bd.push({ label: 'Revisões adicionais', val: revExtra, detail: `${form.revisoes - 1} ronda${form.revisoes > 2 ? 's' : ''} extra` });
    if (form.desconto > 0) bd.push({ label: 'Desconto', val: -descontoVal, detail: `${form.desconto}%` });
    setBreakdown(bd);
    setTotal(final);
  }

  function calcAvenca() {
    setIsNegotiable(false);
    const monthly = Number(form.precoAvenca) || 0;
    const t = monthly * form.duracao;
    setBreakdown([{
      label: 'Pacote de conteúdos mensais',
      val: t,
      detail: `${formatCurrency(monthly)}/mês × ${form.duracao} meses`,
    }]);
    setTotal(t);
  }

  // ── Actions ─────────────────────────────────────────────────────────────────

  const handleBack = () => {
    const cid = selectedQuote?.clientId ?? defaultClientId;
    if (cid) { setSelectedClientId(cid); setView('client-detail'); }
    else setView('clients');
  };

  const handleSave = async () => {
    if (!clientId) { alert('Seleciona um cliente.'); return; }
    setSaving(true);
    try {
      const payload = {
        clientId, mode, status,
        ...form,
        total, breakdown, settingsSnapshot: quoteSettings,
      };
      if (isEditing && selectedQuote) {
        await updateQuote(selectedQuote.id, payload);
      } else {
        await createQuote(payload);
      }
      setSelectedClientId(clientId);
      setView('client-detail');
    } catch { alert('Erro ao guardar orçamento.'); }
    finally { setSaving(false); }
  };

  const handleStatusChange = async (newStatus: QuoteStatus) => {
    if (!selectedQuote) return;
    setStatusChanging(true);
    try {
      await updateQuote(selectedQuote.id, { status: newStatus });
      setStatus(newStatus);
    } finally { setStatusChanging(false); }
  };

  const handleDelete = async () => {
    if (!selectedQuote) return;
    if (!confirm('Eliminar este orçamento?')) return;
    await deleteQuote(selectedQuote.id);
    handleBack();
  };

  const handlePrint = () => window.print();

  // ── Input style helpers ──────────────────────────────────────────────────────
  const inputCls = `w-full bg-slate-50 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all ${isReadOnly ? 'opacity-60 cursor-not-allowed' : ''}`;
  const labelCls = 'text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1';

  // ── Summary content ──────────────────────────────────────────────────────────
  const SummaryContent = () => (
    <div className="space-y-4">
      {selectedClient && (
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Cliente</p>
          <p className="font-bold text-slate-900 text-sm">{selectedClient.name}</p>
        </div>
      )}
      <div className="bg-slate-50 rounded-xl p-3">
        <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
          {mode === 'servico' ? 'Serviço' : 'Avença'}
        </p>
        {mode === 'servico' ? (
          <>
            <p className="font-bold text-slate-800 text-sm">{svcInfo?.label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{form.quantidade}× {svcInfo?.unit}</p>
          </>
        ) : (
          <>
            <p className="font-bold text-slate-800 text-sm">Pacote Mensal</p>
            <p className="text-xs text-slate-400 mt-0.5">{form.duracao} meses</p>
            {AVENCA_ITEMS.filter(i => (form.avencaItens[i.id] ?? 0) > 0).map(i => (
              <p key={i.id} className="text-xs text-slate-400">{form.avencaItens[i.id]} {i.unit} {i.label}</p>
            ))}
          </>
        )}
      </div>
      <div className="space-y-1">
        {breakdown.map((row, i) => (
          <div key={i} className="flex justify-between text-xs py-1 border-b border-slate-100 last:border-0">
            <span className="text-slate-500">{row.label}</span>
            <span className={typeof row.val === 'number' && row.val < 0 ? 'text-emerald-600 font-medium' : 'text-slate-700 font-medium'}>
              {typeof row.val === 'number' ? formatCurrency(row.val) : row.val}
            </span>
          </div>
        ))}
      </div>
      <div className={`rounded-2xl p-4 ${isNegotiable ? 'bg-slate-100' : 'bg-[#1e293b]'}`}>
        <p className={`text-[10px] uppercase tracking-wider mb-1 ${isNegotiable ? 'text-slate-500' : 'text-slate-400'}`}>
          {mode === 'avenca' ? 'Total do Período' : 'Total s/ IVA'}
        </p>
        <p className={`text-2xl font-black ${isNegotiable ? 'text-slate-500' : 'text-white'}`}>
          {isNegotiable ? 'A negociar' : formatCurrency(total)}
        </p>
        {mode === 'avenca' && form.precoAvenca > 0 && (
          <p className="text-slate-400 text-xs mt-1">{formatCurrency(form.precoAvenca)} / mês</p>
        )}
      </div>
    </div>
  );

  // ── Print template ───────────────────────────────────────────────────────────
  const PrintTemplate = () => {
    const vatRate = quoteSettings.vatRate ?? 0.23;
    const archiveMonths = quoteSettings.archiveMonths ?? 6;
    const validityDays = quoteSettings.validityDays ?? 30;
    const conds = quoteSettings.conditions ?? {};

    const vatAmount = isNegotiable ? 0 : total * vatRate;
    const totalWithVat = isNegotiable ? 0 : total + vatAmount;

    const year = selectedQuote ? new Date(selectedQuote.createdAt).getFullYear() : new Date().getFullYear();
    const seq = selectedQuote
      ? String(parseInt(selectedQuote.id.slice(-3), 16) % 1000).padStart(3, '0')
      : '000';
    const ref = `AVP-${year}-${seq}`;

    const scope = mode === 'avenca'
      ? 'Avença de Conteúdos Mensais'
      : (svcInfo?.label ?? '');

    const condCards = ([
      { label: 'Pagamento',    value: conds.pagamento },
      { label: 'Entrega',      value: conds.entrega },
      { label: 'Revisões',     value: conds.revisoes },
      { label: 'Cancelamento', value: conds.cancelamento },
    ] as { label: string; value: string | undefined }[]).filter(c => c.value);

    const s = {
      wrap:     { fontFamily: 'system-ui,-apple-system,sans-serif', color: '#1e293b', maxWidth: 680, margin: '0 auto', padding: '2rem 1.5rem' } as React.CSSProperties,
      muted:    { color: '#94a3b8' } as React.CSSProperties,
      label:    { fontSize: 11, color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontWeight: 500, margin: '0 0 4px 0' },
      card:     { backgroundColor: '#f8fafc', borderRadius: 8, padding: '12px 14px' } as React.CSSProperties,
    };

    return (
      <div className="hidden print:block" style={s.wrap}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>
              ARCO<span style={{ color: '#f97316' }}>.</span>
            </div>
            <p style={{ fontSize: 12, ...s.muted, marginTop: 4 }}>arcodavelha.com</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={s.label}>Proposta Comercial</p>
            <p style={{ fontSize: 13, fontWeight: 500, margin: '4px 0 2px' }}>Ref: {ref}</p>
            <p style={{ fontSize: 12, ...s.muted }}>
              {new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Client + scope bar */}
        {selectedClient && (
          <div style={{ ...s.card, marginBottom: 28 }}>
            <p style={{ fontSize: 13, margin: '0 0 4px 0' }}>
              <span style={s.muted}>Para: </span>{selectedClient.name}
              {selectedClient.nif && <span style={s.muted}> · NIF {selectedClient.nif}</span>}
            </p>
            <p style={{ fontSize: 13, margin: 0 }}>
              <span style={s.muted}>Âmbito: </span>{scope}
            </p>
          </div>
        )}

        {/* Line items */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, borderBottom: '1px solid #e2e8f0', marginBottom: 4 }}>
            <span style={s.label}>Descrição</span>
            <span style={s.label}>Valor</span>
          </div>
          {breakdown.map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{row.label}</p>
                {row.detail && <p style={{ fontSize: 12, ...s.muted, margin: '2px 0 0' }}>{row.detail}</p>}
              </div>
              <span style={{ fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', marginLeft: 24, color: typeof row.val === 'number' && row.val < 0 ? '#10b981' : '#1e293b' }}>
                {typeof row.val === 'number' ? formatCurrency(row.val) : row.val}
              </span>
            </div>
          ))}
        </div>

        {/* Totals block */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
          {isNegotiable ? (
            <div style={{ padding: '14px 16px' }}>
              <p style={s.label}>Total</p>
              <p style={{ fontSize: 22, fontWeight: 500, margin: 0 }}>A negociar</p>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '14px 16px', borderRight: '1px solid #e2e8f0' }}>
                  <p style={s.label}>Total s/ IVA</p>
                  <p style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>{formatCurrency(total)}</p>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <p style={s.label}>IVA {Math.round(vatRate * 100)}%</p>
                  <p style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>{formatCurrency(vatAmount)}</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ ...s.label, margin: 0 }}>Total c/ IVA</p>
                <p style={{ fontSize: 22, fontWeight: 500, margin: 0 }}>{formatCurrency(totalWithVat)}</p>
              </div>
            </>
          )}
        </div>

        {/* Conditions grid */}
        {condCards.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 28 }}>
            {condCards.map(({ label, value }) => (
              <div key={label} style={s.card}>
                <p style={s.label}>{label}</p>
                <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ borderTop: '0.5px solid #e2e8f0', paddingTop: 16 }}>
          <p style={{ fontSize: 12, ...s.muted, margin: '0 0 4px' }}>
            Os ficheiros produzidos são propriedade do cliente após liquidação total. Originais em arquivo no estúdio por {archiveMonths} meses após entrega.
          </p>
          <p style={{ fontSize: 12, ...s.muted, margin: 0 }}>
            Proposta válida por {validityDays} dias. Este documento é uma proposta comercial e não constitui fatura.
          </p>
        </div>
      </div>
    );
  };

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <PrintTemplate />

      {/* Header */}
      <div className="print:hidden bg-white border-b border-slate-100 px-4 md:px-10 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button onClick={handleBack} className="p-2 bg-slate-50 rounded-full border border-slate-100">
            <ArrowLeft size={16} className="text-slate-700" />
          </button>
          <div>
            <h1 className="text-lg font-black text-slate-900 tracking-tight">
              {isEditing ? 'Orçamento' : 'Novo Orçamento'}
            </h1>
            {isEditing && (
              <p className="text-xs text-slate-400">{new Date(selectedQuote!.createdAt).toLocaleDateString('pt-PT')}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${STATUS_COLORS[status]}`}>
            {STATUS_LABELS[status]}
          </span>
          {isEditing && NEXT_STATUSES[status]?.map(ns => (
            <button
              key={ns}
              onClick={() => handleStatusChange(ns)}
              disabled={statusChanging}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all disabled:opacity-50"
            >
              → {STATUS_LABELS[ns]}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="print:hidden p-4 md:p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Form panel */}
          <div className="lg:col-span-2 space-y-4">

            {/* Mode toggle */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <label className={labelCls}>Tipo de proposta</label>
              <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mt-1">
                {(['servico', 'avenca'] as QuoteMode[]).map(m => (
                  <button
                    key={m}
                    onClick={() => !isReadOnly && setMode(m)}
                    disabled={isReadOnly}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                      mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {m === 'servico' ? 'Serviço' : 'Avença'}
                  </button>
                ))}
              </div>
            </div>

            {/* Client selector */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <label className={labelCls}>Cliente</label>
              <div className="relative mt-1" ref={clientDropRef}>
                <input
                  className={inputCls}
                  placeholder="Pesquisar cliente..."
                  value={clientSearch}
                  disabled={isReadOnly}
                  onChange={e => {
                    setClientSearch(e.target.value);
                    setClientId('');
                    setShowClientDrop(true);
                  }}
                  onFocus={() => { if (!clientId) setShowClientDrop(true); }}
                />
                {showClientDrop && filteredClients.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-lg z-10 overflow-hidden">
                    {filteredClients.map(c => (
                      <button
                        key={c.id}
                        className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center justify-between gap-4"
                        onMouseDown={() => {
                          setClientId(c.id);
                          setClientSearch(c.name);
                          setShowClientDrop(false);
                        }}
                      >
                        <span className="font-bold text-sm text-slate-900">{c.name}</span>
                        <span className="text-xs text-slate-400 shrink-0">{c.email}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Service fields */}
            {mode === 'servico' && (
              <div className="bg-white rounded-2xl p-4 border border-slate-100 space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Detalhe do Serviço</p>
                <div>
                  <label className={labelCls}>Serviço</label>
                  <select className={inputCls} value={form.servico} onChange={e => upd('servico', e.target.value)} disabled={isReadOnly}>
                    {Object.entries(SERVICE_INFO).map(([k, v]) => {
                      const customLabel = quoteSettings.labels?.[k as keyof NonNullable<typeof quoteSettings.labels>];
                      return <option key={k} value={k}>{(customLabel && customLabel.trim()) ? customLabel : v.label}</option>;
                    })}
                    <option value="personalizado">Personalizado</option>
                  </select>
                </div>

                {/* Custom service fields */}
                {form.servico === 'personalizado' && (
                  <div className="grid grid-cols-1 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Nome do serviço</label>
                        <input
                          className={inputCls} placeholder="ex: Drone, Podcast, Animação..."
                          value={form.servicoCustomLabel}
                          onChange={e => upd('servicoCustomLabel', e.target.value)}
                          disabled={isReadOnly}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Unidade</label>
                        <input
                          className={inputCls} placeholder="ex: dia, un., projeto..."
                          value={form.servicoCustomUnit}
                          onChange={e => upd('servicoCustomUnit', e.target.value)}
                          disabled={isReadOnly}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Preço base (€ por unidade)</label>
                      <input
                        type="number" min={0} className={inputCls} placeholder="ex: 500"
                        value={form.servicoCustomPrice || ''}
                        onChange={e => upd('servicoCustomPrice', +e.target.value || 0)}
                        disabled={isReadOnly}
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Quantidade <span className="normal-case text-slate-300 font-normal">({svcInfo?.unit})</span></label>
                    <input type="number" min={1} className={inputCls} value={form.quantidade} onChange={e => upd('quantidade', +e.target.value || 1)} disabled={isReadOnly} />
                  </div>
                  <div>
                    <label className={labelCls}>Uso final do conteúdo</label>
                    <select className={inputCls} value={form.uso} onChange={e => upd('uso', e.target.value)} disabled={isReadOnly}>
                      <option value="interno">Uso Interno</option>
                      <option value="digital_organico">Digital Orgânico (×{quoteSettings.multipliers.digital_organico})</option>
                      <option value="campanha_paga">Campanha Paga / Ads (×{quoteSettings.multipliers.campanha_paga})</option>
                      <option value="tv_ooh">TV / OOH / Licença Alargada</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Urgência</label>
                    <select className={inputCls} value={form.urgencia} onChange={e => upd('urgencia', +e.target.value)} disabled={isReadOnly}>
                      <option value={0}>Normal</option>
                      <option value={quoteSettings.urgency.short}>Urgente &lt;7 dias (+{quoteSettings.urgency.short * 100}%)</option>
                      <option value={quoteSettings.urgency.extreme}>Muito urgente &lt;3 dias (+{quoteSettings.urgency.extreme * 100}%)</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Rondas de revisão</label>
                    <input type="number" min={1} className={inputCls} value={form.revisoes} onChange={e => upd('revisoes', +e.target.value || 1)} disabled={isReadOnly} />
                    <p className="text-[10px] text-slate-400 mt-1">1ª incluída. Extra: {formatCurrency(quoteSettings.revisionCost)}/ronda</p>
                  </div>
                </div>
                <div>
                  <label className={`${labelCls} flex items-center gap-2 cursor-pointer`}>
                    <input type="checkbox" checked={form.deslocacao} onChange={e => upd('deslocacao', e.target.checked)} disabled={isReadOnly} className="accent-orange-500" />
                    <span className="normal-case font-bold text-slate-500">Inclui deslocação</span>
                  </label>
                  {form.deslocacao && (
                    <input type="number" min={0} placeholder="Km (ida)" className={`${inputCls} mt-2`} value={form.deslocacaoKm || ''} onChange={e => upd('deslocacaoKm', +e.target.value || 0)} disabled={isReadOnly} />
                  )}
                </div>
                <div>
                  <label className={labelCls}>Desconto (%)</label>
                  <input type="number" min={0} max={100} className={inputCls} value={form.desconto || ''} onChange={e => upd('desconto', +e.target.value || 0)} disabled={isReadOnly} />
                </div>

                {/* Documentation */}
                {svcInfo && (
                  <div>
                    <p className={labelCls}>Documentação necessária</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {svcInfo.docs.map(d => (
                        <span key={d} className="text-xs bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg text-slate-500">↗ {d}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Avença fields */}
            {mode === 'avenca' && (
              <div className="bg-white rounded-2xl p-4 border border-slate-100 space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pacote de Conteúdos Mensais</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Duração (meses)</label>
                    <input type="number" min={3} className={inputCls} value={form.duracao} onChange={e => upd('duracao', +e.target.value || 3)} disabled={isReadOnly} />
                  </div>
                  <div>
                    <label className={labelCls}>Valor mensal (€)</label>
                    <input type="number" min={0} placeholder="ex: 900" className={inputCls} value={form.precoAvenca || ''} onChange={e => upd('precoAvenca', +e.target.value || 0)} disabled={isReadOnly} />
                  </div>
                </div>
                <div>
                  <p className={labelCls}>Itens do pacote mensal</p>
                  <div className="space-y-2 mt-2">
                    <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400 uppercase tracking-wider pb-1">
                      <span>Conteúdo</span><span className="text-center">Qtd.</span><span className="text-center">Un.</span>
                    </div>
                    {AVENCA_ITEMS.map(item => (
                      <div key={item.id} className="grid grid-cols-3 gap-3 items-center">
                        <span className="text-sm text-slate-700">{item.label}</span>
                        <input
                          type="number" min={0} placeholder="0"
                          className="bg-slate-50 p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-100 text-center"
                          value={form.avencaItens[item.id] || ''}
                          onChange={e => upd('avencaItens', { ...form.avencaItens, [item.id]: +e.target.value || 0 })}
                          disabled={isReadOnly}
                        />
                        <span className="text-xs text-slate-400 text-center">{item.unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={labelCls}>Documentação necessária</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {AVENCA_DOCS.map(d => (
                      <span key={d} className="text-xs bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg text-slate-500">↗ {d}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <label className={labelCls}>Notas internas <span className="normal-case font-normal text-slate-300">(não aparecem no PDF)</span></label>
              <textarea
                rows={3}
                className={`${inputCls} resize-none mt-1`}
                placeholder="Contexto, condicionantes, observações..."
                value={form.notas}
                onChange={e => upd('notas', e.target.value)}
                disabled={isReadOnly}
              />
            </div>

            {/* Actions — mobile */}
            <div className="lg:hidden space-y-2 pb-24">
              {!isReadOnly && (
                <button onClick={handleSave} disabled={saving} className="w-full flex items-center justify-center gap-2 bg-[#1e293b] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-slate-700 transition-all disabled:opacity-70">
                  <Check size={16} /> {saving ? 'A guardar...' : isEditing ? 'Guardar alterações' : 'Guardar orçamento'}
                </button>
              )}
              <button onClick={handlePrint} className="w-full flex items-center justify-center gap-2 bg-white text-slate-700 font-bold py-3.5 rounded-xl text-sm border border-slate-200 hover:border-slate-300 transition-all">
                <Printer size={16} /> Exportar PDF
              </button>
              {isEditing && !isReadOnly && currentUser.role === 'admin' && (
                <button onClick={handleDelete} className="w-full py-3 rounded-xl text-sm font-bold text-red-400 hover:text-red-600 hover:bg-red-50 transition-all">
                  Eliminar orçamento
                </button>
              )}
            </div>
          </div>

          {/* Sidebar — desktop */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl border border-slate-100 p-5 sticky top-6 space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <FileText size={12} /> Resumo
              </p>
              <SummaryContent />
              <div className="space-y-2 pt-2 border-t border-slate-100">
                {!isReadOnly && (
                  <button onClick={handleSave} disabled={saving} className="w-full flex items-center justify-center gap-2 bg-[#1e293b] text-white font-bold py-3 rounded-xl text-sm hover:bg-slate-700 transition-all disabled:opacity-70">
                    <Check size={16} /> {saving ? 'A guardar...' : isEditing ? 'Guardar alterações' : 'Guardar orçamento'}
                  </button>
                )}
                <button onClick={handlePrint} className="w-full flex items-center justify-center gap-2 bg-slate-50 text-slate-700 font-bold py-3 rounded-xl text-sm hover:bg-slate-100 transition-all">
                  <Printer size={16} /> Exportar PDF
                </button>
                {isEditing && !isReadOnly && currentUser.role === 'admin' && (
                  <button onClick={handleDelete} className="w-full py-2 text-xs font-bold text-red-400 hover:text-red-600 transition-all">
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile summary collapsible */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 md:left-64 bg-white border-t border-slate-100 z-40">
          <button
            onClick={() => setSummaryOpen(o => !o)}
            className="w-full flex items-center justify-between px-5 py-3 text-sm font-bold text-slate-700"
          >
            <span>Resumo {!isNegotiable && `— ${formatCurrency(total)}`}</span>
            {summaryOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>
          {summaryOpen && (
            <div className="px-5 pb-4 max-h-[40vh] overflow-y-auto">
              <SummaryContent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
