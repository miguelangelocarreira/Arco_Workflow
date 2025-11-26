import React from 'react';
import { StatusBadge } from '../ui/StatusBadge';
import { ViewType, Project, Client } from '../../types';

interface SearchResultsViewProps {
  searchResults: {
    projects: Project[];
    clients: Client[];
  };
  clients: Client[];
  setSelectedProjectId: (id: string) => void;
  setView: (view: ViewType) => void;
  setGlobalSearchTerm: (term: string) => void;
}

export const SearchResultsView: React.FC<SearchResultsViewProps> = ({
  searchResults,
  clients,
  setSelectedProjectId,
  setView,
  setGlobalSearchTerm
}) => (
  <div className="p-4 md:p-10 space-y-8">
    <h2 className="text-xl font-black text-slate-900">Resultados da Pesquisa</h2>
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-2">
        Projetos ({searchResults.projects.length})
      </h3>
      {searchResults.projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.projects.map(p => (
            <button 
              key={p.id} 
              onClick={() => { 
                setSelectedProjectId(p.id); 
                setView("project-detail"); 
                setGlobalSearchTerm(""); 
              }} 
              className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left group"
            >
              <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
              <span className="text-xs text-slate-500 block mb-2">
                {clients.find(c => c.id === p.clientId)?.name}
              </span>
              <StatusBadge status={p.status} />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">Nenhum projeto encontrado.</p>
      )}
    </div>
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-2">
        Clientes ({searchResults.clients.length})
      </h3>
      {searchResults.clients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.clients.map(c => (
            <div key={c.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-1">
              <span className="font-bold text-slate-900">{c.name}</span>
              <span className="text-xs text-slate-500">{c.email}</span>
              <span className="text-xs text-slate-400">{c.phone}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">Nenhum cliente encontrado.</p>
      )}
    </div>
  </div>
);