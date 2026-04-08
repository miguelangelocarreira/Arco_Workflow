import React, { useMemo } from 'react';
import { PieChart, FileText, FolderKanban, ArrowLeft, BarChart3 } from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { PaidInvoicesDonut } from '../charts/PaidInvoicesDonut';
import { ViewType, User, Client, Project } from '../../types';
import { formatCurrency, calcProjectTotal } from '../../utils/formatting';

interface StatisticsViewProps {
  currentUser: User | null;
  projects: Project[];
  clients: Client[];
  setView: (view: ViewType) => void;
}

export const StatisticsView: React.FC<StatisticsViewProps> = ({ currentUser, projects, clients, setView }) => {
  const totalConcluido = useMemo(
    () => projects.filter(p => p.status === "pago").reduce((acc, p) => acc + calcProjectTotal(p), 0),
    [projects]
  );
  const totalPipeline = useMemo(
    () => projects.filter(p => p.status === "orçamento" || p.status === "agendado").reduce((acc, p) => acc + calcProjectTotal(p), 0),
    [projects]
  );
  const pendingInvoices = useMemo(
    () => projects.filter(p => p.status === "faturar").reduce((acc, p) => acc + calcProjectTotal(p), 0),
    [projects]
  );
  const activeProjects = useMemo(
    () => projects.filter(p => p.status === "work").length,
    [projects]
  );

  const topClients = useMemo(() => {
    const projectsByClient = new Map<string, number>();
    for (const p of projects) {
      if (p.status === 'pago') {
        projectsByClient.set(p.clientId, (projectsByClient.get(p.clientId) || 0) + calcProjectTotal(p));
      }
    }
    return clients
      .map(c => ({ ...c, total: projectsByClient.get(c.id) || 0 }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 3);
  }, [clients, projects]);

  return (
    <div className="p-4 md:p-10 space-y-6">
      <div className="flex items-center gap-2 mb-2 md:hidden">
        <button onClick={() => setView("menu")} className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Dashboard</h1>
      </div>

      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Visão Geral</h1>
          <p className="text-slate-400 text-sm">Bem-vindo de volta, {currentUser?.name}.</p>
        </div>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Coluna Esquerda: Gráfico Donut (ocupa 1 coluna em desktop) */}
        <div className="lg:col-span-1">
          <PaidInvoicesDonut projects={projects} clients={clients} />
        </div>

        {/* Coluna Direita: KPIs (ocupa 2 colunas em desktop) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            label="Pipeline"
            value={formatCurrency(totalPipeline)}
            icon={<PieChart size={20} className="text-blue-500" />}
            helper="Orçamentos e Agendados"
          />
          <StatCard
            label="A Faturar"
            value={formatCurrency(pendingInvoices)}
            icon={<FileText size={20} className="text-purple-500" />}
            helper="Projetos concluídos"
          />
          <StatCard
            label="Em Produção"
            value={activeProjects.toString()}
            icon={<FolderKanban size={20} className="text-amber-500" />}
            helper="Projetos ativos"
          />

          {/* Top Clientes */}
          <div className="sm:col-span-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mt-2">
            <h3 className="font-bold text-slate-900 mb-4">Top Clientes (Pagos)</h3>
            <div className="space-y-4">
              {topClients.map((c) => {
                const percentage = totalConcluido > 0 ? (c.total / totalConcluido) * 100 : 0;
                return (
                  <div key={c.id}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>{c.name}</span>
                      <span>{formatCurrency(c.total)} ({percentage.toFixed(1)}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1e293b]" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
              {totalConcluido === 0 && (
                <p className="text-xs text-slate-400">Ainda não existem pagamentos registados.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm min-h-[200px] flex flex-col items-center justify-center text-center">
        <BarChart3 size={32} className="text-slate-200 mb-2" />
        <p className="text-sm text-slate-400 font-medium">Gráfico de Faturação Mensal</p>
        <span className="text-xs text-slate-300">Disponível brevemente</span>
      </div>
    </div>
  );
};
