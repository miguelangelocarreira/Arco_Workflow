import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Sparkles,
  Printer,
  Trash2
} from 'lucide-react';
import { ViewType, Project, Client, User, ServiceSuggestion } from '../../types';
import { PROJECT_STATUSES, SERVICE_SUGGESTIONS } from '../../constants/project-data';
import { formatCurrency, calcProjectTotal } from '../../utils/formatting';

interface ProjectDetailViewProps {
  selectedProject: Project | null;
  clients: Client[];
  currentUser: User | null;
  isAdmin: boolean;
  updateProject: (id: string, patch: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  setView: (view: ViewType) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  selectedProject,
  clients,
  currentUser,
  isAdmin,
  updateProject,
  deleteProject,
  setView
}) => {
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("1");

  if (!selectedProject) return null;

  const p = selectedProject;
  const client = clients.find(c => c.id === p.clientId);

  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !price) return;
    const newItem = { id: crypto.randomUUID(), desc, price: Number(price), qty: Number(qty) };
    await updateProject(p.id, { items: [...p.items, newItem] });
    setDesc("");
    setPrice("");
    setQty("1");
  };

  const addSuggestion = async (suggestion: ServiceSuggestion) => {
    const newItems = suggestion.items.map(it => ({ ...it, id: crypto.randomUUID() }));
    await updateProject(p.id, { items: [...p.items, ...newItems] });
  };

  const removeItem = async (itemId: string) => {
    await updateProject(p.id, { items: p.items.filter(i => i.id !== itemId) });
  };

  const handleDelete = async () => {
    if (!window.confirm(`Tens a certeza que queres apagar o projeto "${p.title}"? Esta ação não pode ser desfeita.`)) return;
    await deleteProject(p.id);
    setView("projects");
  };

  const PrintTemplate = () => (
    <div className="hidden print:block fixed inset-0 bg-white z-[100] p-10 font-serif text-black">
      <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest mb-2">ARCO</h1>
          <p className="text-sm">Workflow Studio</p>
        </div>
        <div className="text-right text-sm">
          <p>Data: {new Date().toLocaleDateString()}</p>
          <p>Ref: {p.id.split('-').pop()}</p>
        </div>
      </div>

      <div className="flex justify-between mb-10">
        <div className="w-1/2">
          <h3 className="font-bold border-b border-gray-300 mb-2 uppercase text-xs">Cliente</h3>
          <p className="font-bold text-lg">{client?.name}</p>
          <p>{client?.address}</p>
          <p>{client?.zip} {client?.city}</p>
          <p>NIF: {client?.nif}</p>
        </div>
        <div className="w-1/3">
          <h3 className="font-bold border-b border-gray-300 mb-2 uppercase text-xs">Projeto</h3>
          <p className="font-bold">{p.title}</p>
          <p>Status: {p.status.toUpperCase()}</p>
        </div>
      </div>

      <table className="w-full mb-10 text-sm">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="text-left py-2">Descrição</th>
            <th className="text-right py-2">Qtd</th>
            <th className="text-right py-2">Preço Unit.</th>
            <th className="text-right py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {p.items.map(it => (
            <tr key={it.id} className="border-b border-gray-200">
              <td className="py-2">{it.desc}</td>
              <td className="text-right py-2">{it.qty}</td>
              <td className="text-right py-2">{formatCurrency(it.price)}</td>
              <td className="text-right py-2 font-bold">{formatCurrency(it.qty * it.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <div className="w-1/3 text-right space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatCurrency(p.items.reduce((acc, it) => acc + (it.qty * it.price), 0))}</span>
          </div>
          <div className="flex justify-between">
            <span>Desconto:</span>
            <span>{p.discount}%</span>
          </div>
          <div className="flex justify-between">
            <span>IVA (23%):</span>
            <span>{formatCurrency(calcProjectTotal(p) - (calcProjectTotal(p) / 1.23))}</span>
          </div>
          <div className="flex justify-between text-xl font-black border-t-2 border-black pt-2">
            <span>Total:</span>
            <span>{formatCurrency(calcProjectTotal(p))}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-10 pb-20 max-w-4xl mx-auto">
      <PrintTemplate />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setView("projects")} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden">
            <ArrowLeft size={16} className="text-slate-700" />
          </button>
          <div className="flex items-center gap-1 md:hidden">
            <span className="text-xl font-black text-slate-900 tracking-tight">ARCO</span>
            <div className="h-1.5 w-1.5 rounded-full bg-slate-900 mt-1"></div>
          </div>
          <h1 className="hidden md:block text-2xl font-black text-slate-900">{p.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <div className="flex flex-wrap gap-4 justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{client?.name}</h2>
                <p className="text-xs text-slate-400">{client?.email}</p>
              </div>
              <div className="relative inline-block">
                <select
                  className="appearance-none bg-slate-50 border border-slate-100 text-slate-700 text-xs font-bold py-2 pl-4 pr-10 rounded-xl uppercase hover:bg-slate-100 transition-colors cursor-pointer"
                  value={p.status}
                  onChange={e => updateProject(p.id, { status: e.target.value as Project['status'] })}
                >
                  {PROJECT_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
                <ChevronRight size={14} className="absolute right-3 top-2.5 text-slate-400 rotate-90 pointer-events-none" />
              </div>
            </div>

            {p.urgent && (
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-orange-100 rounded-full text-orange-600">
                    <Calendar size={14} />
                  </div>
                  <span className="text-xs font-bold text-orange-700">Projeto Urgente</span>
                </div>
              </div>
            )}

            <div className="flex gap-4 text-xs text-slate-500 border-t border-slate-50 pt-4">
              <div className="bg-slate-50 px-3 py-2 rounded-lg">
                <span className="block font-bold text-slate-400 text-[10px] uppercase">Data Início</span>
                {new Date(p.startDate).toLocaleDateString('pt-PT')}
              </div>
              <div className="bg-slate-50 px-3 py-2 rounded-lg">
                <span className="block font-bold text-slate-400 text-[10px] uppercase">Entrega</span>
                {p.endDate ? new Date(p.endDate).toLocaleDateString('pt-PT') : "--"}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-amber-500" />
              <h3 className="font-bold text-slate-900 text-sm">Sugestões Rápidas</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {SERVICE_SUGGESTIONS.map(s => (
                <button
                  key={s.id}
                  onClick={() => addSuggestion(s)}
                  className={`flex-shrink-0 p-4 rounded-2xl border flex flex-col items-start gap-2 min-w-[140px] hover:shadow-md transition-all active:scale-95 ${s.color} border-slate-100`}
                >
                  {s.icon}
                  <span className="font-bold text-xs text-left">{s.title}</span>
                  <span className="text-[10px] opacity-70">Adicionar</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Itens & Orçamento</h3>

            <form onSubmit={addItem} className="bg-slate-50 p-3 rounded-2xl mb-4 flex flex-col md:flex-row gap-2">
              <input
                className="flex-[2] bg-white rounded-xl px-4 py-3 text-sm font-medium outline-none placeholder:text-slate-400"
                placeholder="Descrição do serviço..."
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  className="w-16 bg-white rounded-xl px-3 py-3 text-sm outline-none"
                  placeholder="1"
                  value={qty}
                  onChange={e => setQty(e.target.value)}
                />
                <input
                  type="number"
                  className="w-24 bg-white rounded-xl px-3 py-3 text-sm outline-none"
                  placeholder="€"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#1e293b] text-white rounded-xl px-4 py-3 text-sm font-bold hover:bg-slate-700 transition-colors"
                >
                  +
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {p.items.map(it => (
                <div key={it.id} className="flex justify-between items-start border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                  <div>
                    <span className="block text-sm font-bold text-slate-800">{it.desc}</span>
                    <span className="text-xs text-slate-400">{it.qty} x {formatCurrency(it.price)}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold text-slate-900">{formatCurrency(it.qty * it.price)}</span>
                    <button
                      onClick={() => removeItem(it.id)}
                      className="text-red-300 hover:text-red-500 text-[10px] uppercase font-bold mt-1"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col items-end gap-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-slate-400">Desconto (%)</span>
                <input
                  type="number"
                  className="w-12 text-right bg-slate-50 rounded px-1 font-bold"
                  value={p.discount}
                  onChange={e => updateProject(p.id, { discount: Number(e.target.value) })}
                />
              </div>
              <div className="flex items-center gap-4 text-2xl font-black text-slate-900">
                <span>Total</span>
                <span className="text-orange-600">{formatCurrency(calcProjectTotal(p))}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.print()}
            className="w-full bg-[#1e293b] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 hover:bg-slate-800 transition-all active:scale-[0.98]"
          >
            <Printer size={18} /> Exportar PDF
          </button>
          {isAdmin && (
            <button
              onClick={handleDelete}
              className="w-full bg-red-50 text-red-500 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-all active:scale-[0.98]"
            >
              <Trash2 size={18} /> Apagar Projeto
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
