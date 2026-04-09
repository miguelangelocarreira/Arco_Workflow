import React, { useState, useEffect } from 'react';
import {
  Users, Activity, Building2, Layers, DollarSign,
  ArrowLeft, Check, ToggleLeft, ToggleRight,
  Shield, ShieldOff,
} from 'lucide-react';
import { ViewType, User, CompanySettings, PipelineStatus, ActivityLog, QuoteSettings } from '../../types';
import { useSettings } from '../../hooks/useSettings';
import { subscribeActivity } from '../../utils/db';
import { formatCurrency } from '../../utils/formatting';

interface SettingsViewProps {
  currentUser: User;
  setView: (view: ViewType) => void;
  quoteSettings: QuoteSettings;
  savingQuoteSettings: boolean;
  updateQuoteSettings: (data: QuoteSettings) => Promise<void>;
}

type Tab = 'team' | 'activity' | 'company' | 'pipeline' | 'pricing';

const ACTION_LABELS: Record<string, string> = {
  created_project: 'criou o projeto',
  deleted_project: 'apagou o projeto',
  changed_status:  'alterou o estado',
  added_item:      'adicionou item a',
  removed_item:    'removeu item de',
  created_client:  'criou o cliente',
};

const formatTime = (ts: number) => {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (m < 1) return 'agora';
  if (m < 60) return `há ${m}m`;
  if (h < 24) return `há ${h}h`;
  if (d < 7) return `há ${d}d`;
  return new Date(ts).toLocaleDateString('pt-PT');
};

const inputCls = 'w-full bg-slate-50 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all';
const labelCls = 'text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1';

export const SettingsView: React.FC<SettingsViewProps> = ({
  currentUser, setView, quoteSettings, savingQuoteSettings, updateQuoteSettings,
}) => {
  const [tab, setTab] = useState<Tab>(currentUser.role === 'admin' ? 'team' : 'activity');
  const { company, pipeline, users, savingCompany, savingPipeline, updateCompany, updatePipeline, toggleUserActive, changeUserRole } = useSettings();

  // Company form
  const [companyForm, setCompanyForm] = useState<CompanySettings>({
    name: '', nif: '', address: '', zip: '', city: '', phone: '', email: '',
  });
  useEffect(() => { if (company) setCompanyForm(company); }, [company]);

  // Pipeline form
  const [pipelineForm, setPipelineForm] = useState<PipelineStatus[]>(pipeline);
  useEffect(() => { setPipelineForm(pipeline); }, [pipeline]);

  // Activity
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  useEffect(() => {
    if (tab !== 'activity') return;
    const unsub = subscribeActivity(setLogs, 100);
    return () => unsub();
  }, [tab]);

  // Pricing form (deep copy so edits don't mutate live settings)
  const [pricingForm, setPricingForm] = useState<QuoteSettings>(quoteSettings);
  useEffect(() => { setPricingForm(quoteSettings); }, [quoteSettings]);

  const isAdmin = currentUser.role === 'admin';

  const tabs: { id: Tab; label: string; icon: React.ReactNode; adminOnly?: boolean }[] = [
    { id: 'team',     label: 'Equipa',        icon: <Users size={16} />,      adminOnly: true },
    { id: 'activity', label: 'Atividade',     icon: <Activity size={16} /> },
    { id: 'company',  label: 'Empresa',       icon: <Building2 size={16} />,  adminOnly: true },
    { id: 'pipeline', label: 'Pipeline',      icon: <Layers size={16} />,     adminOnly: true },
    { id: 'pricing',  label: 'Orçamentação',  icon: <DollarSign size={16} />, adminOnly: true },
  ];

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button onClick={() => setView('stats')} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Configurações</h1>
          <p className="text-xs text-slate-400 mt-0.5">Gestão do sistema</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
        {tabs.filter(t => !t.adminOnly || isAdmin).map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              tab === t.id ? 'bg-[#1e293b] text-white' : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-200'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── EQUIPA ─────────────────────────────────────────────── */}
      {tab === 'team' && isAdmin && (
        <div className="space-y-3">
          <p className="text-xs text-slate-400 mb-4">
            Para adicionar utilizadores vai ao <strong>Firebase Console → Authentication → Add user</strong>. O perfil é criado automaticamente no primeiro login.
          </p>
          {users.length === 0 && <div className="text-center py-10 text-slate-300 text-sm">Nenhum utilizador registado ainda.</div>}
          {users.map(u => (
            <div key={u.uid} className="bg-white rounded-2xl p-4 border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black ${u.active ? 'bg-slate-100 text-slate-700' : 'bg-red-50 text-red-300'}`}>
                  {u.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className={`font-bold text-sm ${u.active ? 'text-slate-900' : 'text-slate-300 line-through'}`}>{u.name}</p>
                  <p className="text-xs text-slate-400">{u.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {u.uid !== currentUser.uid && (
                  <button
                    onClick={() => changeUserRole(u.uid, u.role === 'admin' ? 'user' : 'admin')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${u.role === 'admin' ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    {u.role === 'admin' ? <Shield size={12} /> : <ShieldOff size={12} />}
                    {u.role === 'admin' ? 'Admin' : 'User'}
                  </button>
                )}
                {u.uid === currentUser.uid && <span className="text-xs text-slate-300 font-bold px-3 py-1.5">Tu</span>}
                {u.uid !== currentUser.uid && (
                  <button
                    onClick={() => toggleUserActive(u.uid, !u.active)}
                    className={`transition-colors ${u.active ? 'text-emerald-400 hover:text-emerald-600' : 'text-red-300 hover:text-red-500'}`}
                  >
                    {u.active ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── ATIVIDADE ──────────────────────────────────────────── */}
      {tab === 'activity' && (
        <div className="space-y-2">
          {logs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Activity size={40} className="text-slate-200 mb-3" />
              <p className="text-slate-400 text-sm font-medium">Ainda sem atividade registada.</p>
            </div>
          )}
          {logs.map(log => (
            <div key={log.id} className="bg-white rounded-2xl p-4 border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-all">
              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-black text-slate-600 shrink-0">
                {log.userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800">
                  <span className="font-bold">{log.userName}</span>
                  {' '}{ACTION_LABELS[log.action] ?? log.action}{' '}
                  <span className="font-bold">{log.entityName}</span>
                  {log.details && <span className="text-slate-400"> — {log.details}</span>}
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  {new Date(log.timestamp).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <span className="text-xs text-slate-300 shrink-0">{formatTime(log.timestamp)}</span>
            </div>
          ))}
        </div>
      )}

      {/* ── EMPRESA ────────────────────────────────────────────── */}
      {tab === 'company' && isAdmin && (
        <form
          onSubmit={async e => { e.preventDefault(); await updateCompany(companyForm); }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4"
        >
          <p className="text-xs text-slate-400 mb-2">Estes dados aparecem nos orçamentos em PDF.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {([
              ['name', 'Nome da Empresa'], ['nif', 'NIF'], ['email', 'Email'],
              ['phone', 'Telefone'], ['address', 'Morada'], ['zip', 'Código Postal'], ['city', 'Cidade'],
            ] as [keyof CompanySettings, string][]).map(([field, label]) => (
              <div key={field} className={field === 'address' ? 'md:col-span-2' : ''}>
                <label className={labelCls}>{label}</label>
                <input className={inputCls} value={companyForm[field]} onChange={e => setCompanyForm({ ...companyForm, [field]: e.target.value })} />
              </div>
            ))}
          </div>
          <button type="submit" disabled={savingCompany} className="flex items-center gap-2 bg-[#1e293b] text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-700 transition-all disabled:opacity-70">
            <Check size={16} /> {savingCompany ? 'A guardar...' : 'Guardar'}
          </button>
        </form>
      )}

      {/* ── PIPELINE ───────────────────────────────────────────── */}
      {tab === 'pipeline' && isAdmin && (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-4">Personaliza os estados do pipeline. Os IDs não podem ser alterados.</p>
          <div className="space-y-3 mb-6">
            {pipelineForm.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-300 w-20 shrink-0">{s.id}</span>
                <input
                  className="flex-1 bg-slate-50 p-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100"
                  value={s.label}
                  onChange={e => { const next = [...pipelineForm]; next[i] = { ...next[i], label: e.target.value }; setPipelineForm(next); }}
                />
              </div>
            ))}
          </div>
          <button onClick={() => updatePipeline(pipelineForm)} disabled={savingPipeline} className="flex items-center gap-2 bg-[#1e293b] text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-700 transition-all disabled:opacity-70">
            <Check size={16} /> {savingPipeline ? 'A guardar...' : 'Guardar'}
          </button>
        </div>
      )}

      {/* ── ORÇAMENTAÇÃO ───────────────────────────────────────── */}
      {tab === 'pricing' && isAdmin && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Alterações a estes valores aplicam-se apenas a novos orçamentos. Os já guardados mantêm os valores que tinham.
            {quoteSettings.updatedAt && (
              <span className="ml-2 text-slate-300">Última atualização: {new Date(quoteSettings.updatedAt).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            )}
          </p>

          {/* Preços base */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Preços Base por Serviço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {([
                ['fotografia_produto',    'Fotografia de Produto (€/lote)'],
                ['fotografia_corporativa','Fotografia Corporativa (€/dia)'],
                ['video_institucional',   'Vídeo Institucional (€/projeto)'],
                ['reels_social',          'Reels / Conteúdo Social (€/peça)'],
                ['campanha_completa',     'Campanha Completa (€/projeto)'],
              ] as [keyof QuoteSettings['prices'], string][]).map(([field, label]) => (
                <div key={field}>
                  <label className={labelCls}>{label}</label>
                  <input
                    type="number" min={0} className={inputCls}
                    value={pricingForm.prices[field]}
                    onChange={e => setPricingForm(f => ({ ...f, prices: { ...f.prices, [field]: +e.target.value || 0 } }))}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nomes dos serviços */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Nomes dos Serviços</h3>
            <p className="text-xs text-slate-400 mb-4">Deixa em branco para usar o nome padrão.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {([
                ['fotografia_produto',    'Fotografia de Produto'],
                ['fotografia_corporativa','Fotografia Corporativa / Eventos'],
                ['video_institucional',   'Vídeo Institucional / Marca'],
                ['reels_social',          'Reels / Conteúdo Social'],
                ['campanha_completa',     'Campanha Completa (Foto + Vídeo)'],
              ] as [string, string][]).map(([key, defaultLabel]) => (
                <div key={key}>
                  <label className={labelCls}>{defaultLabel}</label>
                  <input
                    className={inputCls}
                    placeholder={defaultLabel}
                    value={pricingForm.labels?.[key as keyof NonNullable<typeof pricingForm.labels>] ?? ''}
                    onChange={e => setPricingForm(f => ({
                      ...f,
                      labels: { ...f.labels, [key]: e.target.value },
                    }))}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Multiplicadores */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Multiplicadores de Uso</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Digital Orgânico (×)</label>
                <input type="number" min={1} step={0.1} className={inputCls} value={pricingForm.multipliers.digital_organico}
                  onChange={e => setPricingForm(f => ({ ...f, multipliers: { ...f.multipliers, digital_organico: +e.target.value || 1 } }))} />
              </div>
              <div>
                <label className={labelCls}>Campanha Paga / Ads (×)</label>
                <input type="number" min={1} step={0.1} className={inputCls} value={pricingForm.multipliers.campanha_paga}
                  onChange={e => setPricingForm(f => ({ ...f, multipliers: { ...f.multipliers, campanha_paga: +e.target.value || 1 } }))} />
              </div>
            </div>
          </div>

          {/* Urgência */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Majoração de Urgência</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Urgente &lt;7 dias (%)</label>
                <input type="number" min={0} max={100} className={inputCls} value={Math.round(pricingForm.urgency.short * 100)}
                  onChange={e => setPricingForm(f => ({ ...f, urgency: { ...f.urgency, short: (+e.target.value || 0) / 100 } }))} />
              </div>
              <div>
                <label className={labelCls}>Muito urgente &lt;3 dias (%)</label>
                <input type="number" min={0} max={100} className={inputCls} value={Math.round(pricingForm.urgency.extreme * 100)}
                  onChange={e => setPricingForm(f => ({ ...f, urgency: { ...f.urgency, extreme: (+e.target.value || 0) / 100 } }))} />
              </div>
            </div>
          </div>

          {/* Custos adicionais */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Custos Adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelCls}>Custo por km (€)</label>
                <input type="number" min={0} step={0.01} className={inputCls} value={pricingForm.travel.perKm}
                  onChange={e => setPricingForm(f => ({ ...f, travel: { ...f.travel, perKm: +e.target.value || 0 } }))} />
              </div>
              <div>
                <label className={labelCls}>Taxa fixa deslocação (€)</label>
                <input type="number" min={0} className={inputCls} value={pricingForm.travel.fixedFee}
                  onChange={e => setPricingForm(f => ({ ...f, travel: { ...f.travel, fixedFee: +e.target.value || 0 } }))} />
              </div>
              <div>
                <label className={labelCls}>Ronda de revisão extra (€)</label>
                <input type="number" min={0} className={inputCls} value={pricingForm.revisionCost}
                  onChange={e => setPricingForm(f => ({ ...f, revisionCost: +e.target.value || 0 }))} />
              </div>
            </div>
          </div>

          <button
            onClick={() => updateQuoteSettings(pricingForm)}
            disabled={savingQuoteSettings}
            className="flex items-center gap-2 bg-[#1e293b] text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-700 transition-all disabled:opacity-70"
          >
            <Check size={16} /> {savingQuoteSettings ? 'A guardar...' : 'Guardar configurações'}
          </button>
        </div>
      )}
    </div>
  );
};
