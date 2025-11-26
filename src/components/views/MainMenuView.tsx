import React from 'react';
import { Briefcase, BarChart3, Layers, FolderOpen, UserPlus } from 'lucide-react';
import { ViewType } from '../../types';

interface MainMenuViewProps {
  setView: (view: ViewType) => void;
  setFilterStatus: (status: string) => void;
}

export const MainMenuView: React.FC<MainMenuViewProps> = ({ setView, setFilterStatus }) => (
  <div className="p-6 flex flex-col h-full justify-between md:hidden pb-24">
    <div>
      <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
        <button 
          onClick={() => setView("create-project")} 
          className="aspect-square bg-[#1e293b] rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-xl shadow-blue-900/10 active:scale-95 transition-all group"
        >
          <div className="p-3 bg-white/10 rounded-2xl text-orange-500">
            <Briefcase size={24} strokeWidth={2} />
          </div>
          <div className="text-left">
            <span className="text-white font-bold text-lg leading-tight block">Novo<br/>Projeto</span>
            <div className="h-1 w-4 bg-orange-500 rounded-full mt-2"></div>
          </div>
        </button>
        
        <button 
          onClick={() => setView("stats")} 
          className="aspect-square bg-white rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-lg shadow-slate-200/50 border border-slate-100 active:scale-95 transition-all group"
        >
          <div className="p-3 bg-slate-50 rounded-2xl text-[#1e293b]">
            <BarChart3 size={24} strokeWidth={2} />
          </div>
          <div className="text-left">
            <span className="text-[#1e293b] font-bold text-lg leading-tight block">Esta-<br/>tísticas</span>
            <div className="h-1 w-4 bg-[#1e293b] rounded-full mt-2"></div>
          </div>
        </button>
        
        <button 
          onClick={() => setView("projects")} 
          className="aspect-square bg-[#1e293b] rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-xl shadow-blue-900/10 active:scale-95 transition-all group"
        >
          <div className="p-3 bg-white/10 rounded-2xl text-orange-500">
            <Layers size={24} strokeWidth={2} />
          </div>
          <div className="text-left">
            <span className="text-white font-bold text-lg leading-tight block">Work-<br/>space</span>
            <div className="h-1 w-4 bg-orange-500 rounded-full mt-2"></div>
          </div>
        </button>
        
        <button 
          onClick={() => { setFilterStatus("orçamento"); setView("projects"); }} 
          className="aspect-square bg-white rounded-[2rem] p-5 flex flex-col justify-between items-start shadow-lg shadow-slate-200/50 border border-slate-100 active:scale-95 transition-all group"
        >
          <div className="p-3 bg-slate-50 rounded-2xl text-[#1e293b]">
            <FolderOpen size={24} strokeWidth={2} />
          </div>
          <div className="text-left">
            <span className="text-[#1e293b] font-bold text-lg leading-tight block">Orça-<br/>mento</span>
            <div className="h-1 w-4 bg-[#1e293b] rounded-full mt-2"></div>
          </div>
        </button>
      </div>
      
      <button 
        onClick={() => setView("clients")} 
        className="w-full bg-slate-100 rounded-[1.5rem] py-4 px-6 flex items-center justify-center gap-2 text-[#1e293b] font-bold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all min-h-[56px]"
      >
        <UserPlus size={18} /> Adicionar Cliente
      </button>
    </div>
  </div>
);