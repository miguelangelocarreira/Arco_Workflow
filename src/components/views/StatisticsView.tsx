import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ViewType, User, Client, Project, Quote } from '../../types';
import { formatCurrency, calcProjectTotal } from '../../utils/formatting';

interface StatisticsViewProps {
  currentUser: User | null;
  projects: Project[];
  clients: Client[];
  quotes: Quote[];
  setView: (view: ViewType) => void;
}

// ── Risk helpers ──────────────────────────────────────────────────────────────

type RiskLevel = 'red' | 'amber' | 'green';

function projectRisk(endDate: string | null): { level: RiskLevel; note: string } {
  if (!endDate) return { level: 'amber', note: 'Sem data definida' };
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const ed = new Date(endDate); ed.setHours(0, 0, 0, 0);
  const diff = Math.floor((ed.getTime() - today.getTime()) / 86400000);
  if (diff < 0) return { level: 'red', note: `Atrasado ${Math.abs(diff)}d` };
  if (diff <= 3) return { level: 'amber', note: `Entrega em ${diff}d` };
  return { level: 'green', note: `Entrega em ${diff}d` };
}

const BADGE_CLS: Record<RiskLevel, string> = {
  red:   'bg-red-50 text-red-500',
  amber: 'bg-amber-50 text-amber-600',
  green: 'bg-emerald-50 text-emerald-600',
};

// ── Component ─────────────────────────────────────────────────────────────────

export const StatisticsView: React.FC<StatisticsViewProps> = ({
  currentUser, projects, clients, quotes, setView,
}) => {
  const now = Date.now();
  const sevenDaysAgo = now - 7 * 86400000;

  // Week boundaries (Mon 00:00 → Sun 23:59)
  const weekStart = useMemo(() => {
    const d = new Date(); d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return d.getTime();
  }, []);
  const weekEnd = weekStart + 7 * 86400000;

  // ── Section 1: Liquidado ────────────────────────────────────────────────
  const thisWeekFaturar = useMemo(() =>
    projects.filter(p =>
      p.status === 'faturar' &&
      p.endDate != null &&
      new Date(p.endDate).getTime() >= weekStart &&
      new Date(p.endDate).getTime() < weekEnd
    ), [projects, weekStart, weekEnd]);

  const receberSemana     = useMemo(() => thisWeekFaturar.reduce((s, p) => s + calcProjectTotal(p), 0), [thisWeekFaturar]);
  const totalPago         = useMemo(() => projects.filter(p => p.status === 'pago').reduce((s, p) => s + calcProjectTotal(p), 0), [projects]);
  const pagoCount         = useMemo(() => projects.filter(p => p.status === 'pago').length, [projects]);
  const aprovadas         = useMemo(() => quotes.filter(q => q.status === 'aprovado'), [quotes]);
  const pipelineConfirm   = useMemo(() => aprovadas.reduce((s, q) => s + q.total, 0), [aprovadas]);

  // ── Section 2: Pipeline ─────────────────────────────────────────────────
  const semResposta       = useMemo(() => quotes.filter(q => q.status === 'enviado' && q.updatedAt < sevenDaysAgo), [quotes, sevenDaysAgo]);
  const aFaturarProjects  = useMemo(() => projects.filter(p => p.status === 'faturar'), [projects]);
  const aFaturar          = useMemo(() => aFaturarProjects.reduce((s, p) => s + calcProjectTotal(p), 0), [aFaturarProjects]);
  const emProducao        = useMemo(() => projects.filter(p => p.status === 'work'), [projects]);

  // ── Section 3: Exposição ────────────────────────────────────────────────
  const pendingQuotes = useMemo(() =>
    quotes
      .filter(q => q.status === 'enviado')
      .map(q => ({
        ...q,
        daysWaiting: Math.max(0, Math.floor((now - q.updatedAt) / 86400000)),
        clientName: clients.find(c => c.id === q.clientId)?.name ?? '—',
      }))
      .sort((a, b) => b.daysWaiting - a.daysWaiting),
    [quotes, clients] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const riskProjects = useMemo(() =>
    projects
      .filter(p => p.status === 'work')
      .map(p => ({
        ...p,
        ...projectRisk(p.endDate),
        clientName: clients.find(c => c.id === p.clientId)?.name ?? '—',
      }))
      .sort((a, b) => {
        const order: Record<RiskLevel, number> = { red: 0, amber: 1, green: 2 };
        return order[a.level] - order[b.level];
      }),
    [projects, clients]
  );

  // ── Style tokens ────────────────────────────────────────────────────────
  const sectionLbl = 'text-[11px] font-bold uppercase tracking-[0.06em] text-slate-400 mb-2 block';
  const card       = 'bg-white border border-slate-200 rounded-xl py-3.5 px-4';
  const val        = 'text-[22px] font-medium text-slate-900 leading-none';
  const sub        = 'text-[12px] text-slate-400 mt-1.5';
  const hint       = 'text-[11px] text-slate-300 mt-1';
  const badge      = (lvl: RiskLevel, days?: number) => {
    const color = days !== undefined ? (days >= 10 ? 'red' : days >= 7 ? 'amber' : 'green') : lvl;
    return `text-[11px] font-medium px-2 py-0.5 rounded-full ${BADGE_CLS[color]}`;
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-8 pb-16">

      {/* Mobile header */}
      <div className="flex items-center gap-2 md:hidden">
        <button onClick={() => setView('menu')} className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-medium text-slate-900">Dashboard</h1>
      </div>
      <div className="hidden md:block">
        <h1 className="text-xl font-medium text-slate-900 tracking-tight">Visão Geral</h1>
        <p className="text-sm text-slate-400 mt-0.5">Bem-vindo, {currentUser?.name}.</p>
      </div>

      {/* ── LIQUIDADO ─────────────────────────────────────────────────────── */}
      <section>
        <span className={sectionLbl}>Liquidado</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

          <div className={`${card} border-l-2 border-l-emerald-400`}>
            <p className={val}>{formatCurrency(receberSemana)}</p>
            <p className={sub}>A receber esta semana</p>
            <p className={hint}>{thisWeekFaturar.length} projeto{thisWeekFaturar.length !== 1 ? 's' : ''} em entrega</p>
          </div>

          <div className={card}>
            <p className={val}>{formatCurrency(totalPago)}</p>
            <p className={sub}>Faturação paga (total)</p>
            <p className={hint}>{pagoCount} projeto{pagoCount !== 1 ? 's' : ''} liquidado{pagoCount !== 1 ? 's' : ''}</p>
          </div>

          <div className={card}>
            <p className={val}>{formatCurrency(pipelineConfirm)}</p>
            <p className={sub}>Pipeline confirmado</p>
            <p className={hint}>{aprovadas.length} proposta{aprovadas.length !== 1 ? 's' : ''} aprovada{aprovadas.length !== 1 ? 's' : ''}</p>
          </div>

        </div>
      </section>

      {/* ── PIPELINE ──────────────────────────────────────────────────────── */}
      <section>
        <span className={sectionLbl}>Pipeline</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

          <div className={`${card} border-l-2 border-l-amber-400`}>
            <p className={val}>{semResposta.length}</p>
            <p className={sub}>Orçamentos sem resposta</p>
            <p className={hint}>Enviados há mais de 7 dias</p>
          </div>

          <div className={card}>
            <p className={val}>{formatCurrency(aFaturar)}</p>
            <p className={sub}>A faturar</p>
            <p className={hint}>{aFaturarProjects.length} projeto{aFaturarProjects.length !== 1 ? 's' : ''} concluído{aFaturarProjects.length !== 1 ? 's' : ''}</p>
          </div>

          <div className={card}>
            <p className={val}>{emProducao.length}</p>
            <p className={sub}>
              Em produção{emProducao.length === 1 ? ` — ${emProducao[0].title}` : ''}
            </p>
            {emProducao.length > 1 && <p className={hint}>projetos ativos</p>}
          </div>

        </div>
      </section>

      {/* ── EXPOSIÇÃO ─────────────────────────────────────────────────────── */}
      <section>
        <span className={sectionLbl}>Exposição</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          {/* Orçamentos pendentes */}
          <div className={card}>
            <p className="text-[12px] font-medium text-slate-500 mb-3">Orçamentos pendentes</p>
            {pendingQuotes.length === 0 ? (
              <p className="text-sm text-slate-300">Nenhum orçamento à espera de resposta.</p>
            ) : (
              <div className="space-y-0">
                {pendingQuotes.slice(0, 7).map(q => (
                  <div key={q.id} className="flex items-center justify-between gap-3 py-2 border-b border-slate-50 last:border-0">
                    <p className="text-sm text-slate-700 font-medium truncate flex-1">{q.clientName}</p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={badge('green', q.daysWaiting)}>{q.daysWaiting}d</span>
                      <span className="text-[12px] text-slate-500 font-medium">{formatCurrency(q.total)}</span>
                    </div>
                  </div>
                ))}
                {pendingQuotes.length > 7 && (
                  <p className={`${hint} pt-1`}>+{pendingQuotes.length - 7} orçamentos</p>
                )}
              </div>
            )}
          </div>

          {/* Projetos em risco */}
          <div className={card}>
            <p className="text-[12px] font-medium text-slate-500 mb-3">Projetos em risco</p>
            {riskProjects.length === 0 ? (
              <p className="text-sm text-slate-300">Sem projetos em produção.</p>
            ) : (
              <div className="space-y-0">
                {riskProjects.slice(0, 7).map(p => (
                  <div key={p.id} className="flex items-center justify-between gap-3 py-2 border-b border-slate-50 last:border-0">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-slate-700 font-medium truncate">{p.title}</p>
                      <p className="text-[11px] text-slate-400 truncate">{p.clientName}</p>
                    </div>
                    <span className={badge(p.level)}>{p.note}</span>
                  </div>
                ))}
                {riskProjects.length > 7 && (
                  <p className={`${hint} pt-1`}>+{riskProjects.length - 7} projetos</p>
                )}
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
