import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ViewType, Client, Project } from '../../types';

interface CreateProjectViewProps {
  clients: Client[];
  createProject: (payload: Partial<Project>) => Promise<Project>;
  setView: (view: ViewType) => void;
  setSelectedProjectId: (id: string) => void;
}

export const CreateProjectView: React.FC<CreateProjectViewProps> = ({
  clients,
  createProject,
  setView,
  setSelectedProjectId
}) => {
  const [title, setTitle] = useState("");
  const [clientId, setClientId] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState("");

  const sortedClients = useMemo(() => {
    return [...clients].sort((a, b) => a.name.localeCompare(b.name));
  }, [clients]);

  useEffect(() => {
    if (!clientId && sortedClients.length > 0) {
      setClientId(sortedClients[0].id);
    }
  }, [sortedClients, clientId]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !clientId) return;
    
    const newP = await createProject({ 
      clientId, 
      title, 
      urgent: isUrgent, 
      startDate: new Date(startDate).toISOString(), 
      endDate: endDate ? new Date(endDate).toISOString() : null 
    });
    
    setSelectedProjectId(newP.id);
    setView("project-detail");
  };

  return (
    <div className="p-4 md:p-10 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={() => setView("menu")} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Novo Projeto</h1>
      </div>

      <form onSubmit={handleCreate} className="space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block">Cliente</label>
            <div className="relative">
              <select 
                className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-none font-bold text-slate-700 appearance-none focus:ring-2 focus:ring-blue-100" 
                value={clientId} 
                onChange={e => setClientId(e.target.value)}
              >
                {sortedClients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
              <ChevronRight size={16} className="absolute right-4 top-4 text-slate-400 rotate-90 pointer-events-none" />
            </div>
            {clients.length === 0 && (
              <button type="button" onClick={() => setView('clients')} className="text-xs text-blue-500 font-bold mt-2 ml-1">
                + Criar novo cliente
              </button>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block">Título do Projeto</label>
            <input 
              className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-none font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-100" 
              placeholder="Ex: Vídeo Institucional" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block">Início</label>
              <input 
                type="date" 
                className="w-full p-4 rounded-2xl bg-slate-50 font-bold text-slate-700 outline-none" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)} 
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2 block">Entrega (Opcional)</label>
              <input 
                type="date" 
                className="w-full p-4 rounded-2xl bg-slate-50 font-bold text-slate-700 outline-none" 
                value={endDate} 
                onChange={e => setEndDate(e.target.value)} 
              />
            </div>
          </div>
        </div>

        <div 
          onClick={() => setIsUrgent(!isUrgent)} 
          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
            isUrgent ? "bg-orange-50 border-orange-200" : "bg-white border-slate-100"
          }`}
        >
          <div className={`w-12 h-7 rounded-full relative transition-colors ${
            isUrgent ? "bg-orange-500" : "bg-slate-200"
          }`}>
            <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${
              isUrgent ? "left-6" : "left-1"
            }`}></div>
          </div>
          <span className={`font-bold text-sm ${
            isUrgent ? "text-orange-700" : "text-slate-500"
          }`}>
            Marcar como Urgente
          </span>
        </div>

        <button 
          disabled={clients.length === 0} 
          className="w-full bg-[#ea580c] text-white font-bold text-sm py-4 rounded-2xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          CRIAR PROJETO
        </button>
      </form>
    </div>
  );
};