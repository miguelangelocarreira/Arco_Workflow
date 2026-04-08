import React from 'react';
import { LogOut, BarChart3, Layers, Briefcase, Users, Activity } from 'lucide-react';
import { ViewType } from '../../types';

interface SidebarProps {
  view: ViewType;
  setView: (view: ViewType) => void;
  setGlobalSearchTerm: (term: string) => void;
  handleLogout: () => void;
  handleLogoClick: (e: React.MouseEvent) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ view, setView, setGlobalSearchTerm, handleLogout, handleLogoClick }) => (
  <div className="hidden md:flex flex-col w-64 bg-[#1e293b] h-screen fixed left-0 top-0 z-50 shadow-2xl">
    <div className="p-8 flex items-center gap-2 h-[80px] cursor-pointer hover:opacity-90 transition-opacity" onClick={handleLogoClick}>
      <span className="text-3xl font-black text-white tracking-tighter font-sans">ARCO</span>
      <div className="h-2 w-2 rounded-full bg-orange-500 mt-2"></div>
    </div>

    <div className="flex-1 px-4 space-y-2 pt-4">
      <button
        onClick={() => { setView('stats'); setGlobalSearchTerm(""); }}
        className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${view === 'stats' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        <BarChart3 size={20} /> <span className="font-bold text-sm">Dashboard</span>
      </button>
      <button
        onClick={() => { setView('projects'); setGlobalSearchTerm(""); }}
        className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${view === 'projects' || view === 'project-detail' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        <Layers size={20} /> <span className="font-bold text-sm">Projetos</span>
      </button>
      <button
        onClick={() => { setView('create-project'); setGlobalSearchTerm(""); }}
        className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${view === 'create-project' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        <Briefcase size={20} /> <span className="font-bold text-sm">Novo Projeto</span>
      </button>
      <button
        onClick={() => { setView('clients'); setGlobalSearchTerm(""); }}
        className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${view === 'clients' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        <Users size={20} /> <span className="font-bold text-sm">Clientes</span>
      </button>
      <button
        onClick={() => { setView('activity'); setGlobalSearchTerm(""); }}
        className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${view === 'activity' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        <Activity size={20} /> <span className="font-bold text-sm">Atividade</span>
      </button>
    </div>

    <div className="p-6 border-t border-white/10">
      <button onClick={handleLogout} className="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-2">
        <LogOut size={14} /> Sair do Sistema
      </button>
    </div>
  </div>
);
