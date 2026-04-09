import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, FileText, Activity, Plus } from 'lucide-react';
import { ViewType, Client, Project, Quote, ActivityLog } from '../../types';
import { subscribeClientActivity, subscribeClientQuotes } from '../../utils/db';
import { formatCurrency } from '../../utils/formatting';
import { calcProjectTotal } from '../../utils/project-calculations';
import { PROJECT_STATUSES } from '../../constants/project-data';

interface ClientDetailViewProps {
  selectedClient: Client | null;
  projects: Project[];
  setView: (view: ViewType) => void;
  setSelectedProjectId: (id: string) => void;
  onNewQuote: (clientId: string) => void;
  onViewQuote: (quote: Quote) => void;
}

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

const QUOTE_STATUS_COLORS: Record<string, string> = {
  rascunho: 'bg-slate-100 text-slate-600',
  enviado: 'bg-blue-50 text-blue-600',
  aprovado: 'bg-emerald-50 text-emerald-600',
  recusado: 'bg-red-50 text-red-500',
  fatura: 'bg-purple-50 text-purple-600',
};
const QUOTE_STATUS_LABELS: Record<string, string> = {
  rascunho: 'Rascunho', enviado: 'Enviado', aprovado: 'Aprovado', recusado: 'Recusado', fatura: 'Fatura',
};

export const ClientDetailView: React.FC<ClientDetailViewProps> = ({
  selectedClient, projects, setView, setSelectedProjectId, onNewQuote, onViewQuote,
}) => {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    if (!selectedClient) return;
    const u1 = subscribeClientActivity(selectedClient.id, setLogs);
    const u2 = subscribeClientQuotes(selectedClient.id, setQuotes);
    return () => { u1(); u2(); };
  }, [selectedClient]);

  const clientProjects = useMemo(
    () => projects.filter(p => p.clientId === selectedClient?.id),
    [projects, selectedClient]
  );

  const stats = useMemo(() => {
    const total = clientProjects.reduce((s, p) => s + calcProjectTotal(p), 0);
    const toInvoice = clientProjects.filter(p => p.status === 'faturar').reduce((s, p) => s + calcProjectTotal(p), 0);
    const paid = clientProjects.filter(p => p.status === 'pago').reduce((s, p) => s + calcProjectTotal(p), 0);
    return { total, toInvoice, paid };
  }, [clientProjects]);

  if (!selectedClient) {
    return (
      <div className="p-10 text-center text-slate-400">
        <p>Cliente não encontrado.</p>
        <button onClick={() => setView('clients')} className="mt-4 text-sm font-bold text-slate-600 underline">Voltar</button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button onClick={() => setView('clients')} className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">{selectedClient.name}</h1>
          {selectedClient.nif && <span className="text-xs font-mono text-slate-400">NIF: {selectedClient.nif}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">

          {/* Contact */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contacto</h2>
            <div className="space-y-2 text-sm text-slate-700">
              {selectedClient.email && <p className="flex items-center gap-2"><Mail size={14} className="text-slate-400" /> {selectedClient.email}</p>}
              {selectedClient.phone && <p className="flex items-center gap-2"><Phone size={14} className="text-slate-400" /> {selectedClient.phone}</p>}
              {selectedClient.address && (
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-slate-400 shrink-0" />
                  {selectedClient.address}{selectedClient.zip ? `, ${selectedClient.zip}` : ''}{selectedClient.city ? ` ${selectedClient.city}` : ''}
                </p>
              )}
            </div>
          </div>

          {/* Quotes */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Orçamentos ({quotes.length})
              </h2>
              <button
                onClick={() => onNewQuote(selectedClient.id)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:border-slate-300 transition-all"
              >
                <Plus size={12} /> Novo Orçamento
              </button>
            </div>
            {quotes.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-slate-100 text-center text-slate-300 text-sm">
                <FileText size={32} className="mx-auto mb-2 opacity-40" />
                Sem orçamentos criados.
              </div>
            ) : (
              <div className="space-y-2">
                {quotes.map(q => (
                  <button
                    key={q.id}
                    onClick={() => onViewQuote(q)}
                    className="w-full bg-white rounded-2xl p-4 border border-slate-100 hover:shadow-md transition-all text-left flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">
                        {q.mode === 'servico'
                          ? (q.servico?.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ?? 'Serviço')
                          : `Avença ${q.duracao}m`}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{new Date(q.createdAt).toLocaleDateString('pt-PT')}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${QUOTE_STATUS_COLORS[q.status] ?? ''}`}>
                        {QUOTE_STATUS_LABELS[q.status] ?? q.status}
                      </span>
                      <span className="text-sm font-bold text-slate-700">
                        {q.total > 0 ? formatCurrency(q.total) : '—'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Projetos ({clientProjects.length})
            </h2>
            {clientProjects.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-slate-100 text-center text-slate-300 text-sm">
                <FileText size={32} className="mx-auto mb-2 opacity-40" />
                Sem projetos associados.
              </div>
            ) : (
              <div className="space-y-2">
                {clientProjects.map(p => {
                  const status = PROJECT_STATUSES.find(s => s.id === p.status);
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setSelectedProjectId(p.id); setView('project-detail'); }}
                      className="w-full bg-white rounded-2xl p-4 border border-slate-100 hover:shadow-md transition-all text-left flex items-center justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 text-sm truncate">{p.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {p.startDate || '—'}
                          {p.urgent && <span className="ml-2 text-orange-500 font-bold">URGENTE</span>}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${status?.color ?? ''}`}>
                          {status?.label ?? p.status}
                        </span>
                        <span className="text-sm font-bold text-slate-700">{formatCurrency(calcProjectTotal(p))}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Activity */}
          {logs.length > 0 && (
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Activity size={12} /> Atividade
              </h2>
              <div className="space-y-2">
                {logs.slice(0, 20).map(log => (
                  <div key={log.id} className="bg-white rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-black text-slate-600 shrink-0">
                      {log.userName.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-800">
                        <span className="font-bold">{log.userName}</span>
                        {' '}{ACTION_LABELS[log.action] ?? log.action}{' '}
                        <span className="font-bold">{log.entityName}</span>
                        {log.details && <span className="text-slate-400"> — {log.details}</span>}
                      </p>
                    </div>
                    <span className="text-xs text-slate-300 shrink-0">{formatTime(log.timestamp)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total de Projetos</p>
            <p className="text-3xl font-black text-slate-900">{clientProjects.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Volume Total</p>
            <p className="text-2xl font-black text-slate-900">{formatCurrency(stats.total)}</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <p className="text-xs text-purple-500 font-bold uppercase tracking-wider mb-1">A Faturar</p>
            <p className="text-2xl font-black text-purple-700">{formatCurrency(stats.toInvoice)}</p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
            <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider mb-1">Pago</p>
            <p className="text-2xl font-black text-emerald-700">{formatCurrency(stats.paid)}</p>
          </div>
          <button
            onClick={() => onNewQuote(selectedClient.id)}
            className="w-full flex items-center justify-center gap-2 bg-[#1e293b] text-white font-bold py-3 rounded-xl text-sm hover:bg-slate-700 transition-all"
          >
            <Plus size={16} /> Novo Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};
