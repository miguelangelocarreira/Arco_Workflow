import React, { useMemo } from 'react';
import { Plus, ArrowLeft, FolderKanban } from 'lucide-react';
import { StatusBadge } from '../ui/StatusBadge';
import { PROJECT_STATUSES } from '../../constants/project-data';
import { ViewType, Client, Project } from '../../types';
import { formatCurrency, calcProjectTotal } from '../../utils/formatting';

interface ProjectsViewProps {
  projects: Project[];
  clients: Client[];
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  setView: (view: ViewType) => void;
  setSelectedProjectId: (id: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects,
  clients,
  filterStatus,
  setFilterStatus,
  setView,
  setSelectedProjectId
}) => {
  const filteredProjects = useMemo(() => {
    let list = [...projects];
    if (filterStatus && filterStatus !== "todos") {
      list = list.filter((p) => p.status === filterStatus);
    } else {
      list = list.filter((p) => p.status !== "arquivado" && p.status !== "lixo");
    }
    return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }, [projects, filterStatus]);

  return (
    <div className="p-4 md:p-10 space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => setView("menu")} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden">
            <ArrowLeft size={16} className="text-slate-700" />
          </button>
          <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Workspace</h1>
        </div>
        <button 
          onClick={() => setView("create-project")} 
          className="p-2 md:px-6 md:py-3 bg-[#1e293b] text-white rounded-full md:rounded-2xl shadow-lg shadow-blue-900/20 flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95"
        >
          <Plus size={20} /> <span className="hidden md:inline font-bold text-sm">Novo Projeto</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[{id: "todos", label: "Tudo"}, ...PROJECT_STATUSES].map(s => (
            <button 
              key={s.id} 
              onClick={() => setFilterStatus(s.id)} 
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filterStatus === s.id 
                  ? "bg-[#1e293b] text-white" 
                  : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
        {filteredProjects.map(p => (
          <button 
            key={p.id} 
            onClick={() => { setSelectedProjectId(p.id); setView("project-detail"); }} 
            className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full relative group active:scale-[0.99]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors">
                <FolderKanban size={20} />
              </div>
              <StatusBadge status={p.status} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
              {clients.find(c => c.id === p.clientId)?.name || "Cliente Desconhecido"}
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-tight mb-4 line-clamp-2">{p.title}</h3>

            <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-end">
              <div>
                <span className="text-[10px] text-slate-400 block">Total Estimado</span>
                <span className="text-sm font-black text-slate-900 block">{formatCurrency(calcProjectTotal(p))}</span>
              </div>
              <span className="text-[10px] text-slate-400">{new Date(p.createdAt).toLocaleDateString('pt-PT')}</span>
            </div>
          </button>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-20 opacity-50">
            <p>Sem projetos encontrados.</p>
          </div>
        )}
      </div>
    </div>
  );
};