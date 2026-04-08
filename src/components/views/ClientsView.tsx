import React, { useState } from 'react';
import { ArrowLeft, CreditCard as Edit3, Mail, Phone, MapPin } from 'lucide-react';
import { ViewType, Client } from '../../types';

interface ClientsViewProps {
  clients: Client[];
  createClient: (payload: Partial<Client>) => Promise<Client>;
  setView: (view: ViewType) => void;
}

export const ClientsView: React.FC<ClientsViewProps> = ({ clients, createClient, setView }) => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    nif: "", 
    address: "", 
    zip: "", 
    city: "" 
  });
  const [saving, setSaving] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) {
      alert("O nome da empresa é obrigatório.");
      return;
    }
    setSaving(true);
    try {
      await createClient(form);
      setForm({ name: "", email: "", phone: "", nif: "", address: "", zip: "", city: "" });
      alert("Cliente criado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar cliente.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={() => setView("menu")} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <h1 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Clientes</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <form onSubmit={handleCreate} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3 sticky top-6">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Novo Cliente</h3>
            <input 
              className="w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all" 
              placeholder="Nome da Empresa *" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              required 
            />
            <input 
              className="w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all" 
              placeholder="Email" 
              value={form.email} 
              onChange={e => setForm({...form, email: e.target.value})} 
            />
            <input 
              className="w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all" 
              placeholder="Telefone" 
              value={form.phone} 
              onChange={e => setForm({...form, phone: e.target.value})} 
            />
            <div className="grid grid-cols-2 gap-2">
              <input 
                className="bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all" 
                placeholder="NIF" 
                value={form.nif} 
                onChange={e => setForm({...form, nif: e.target.value})} 
              />
              <input 
                className="bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all" 
                placeholder="Cidade" 
                value={form.city} 
                onChange={e => setForm({...form, city: e.target.value})} 
              />
            </div>
            <input 
              className="w-full bg-slate-50 p-3 rounded-xl text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all" 
              placeholder="Morada" 
              value={form.address} 
              onChange={e => setForm({...form, address: e.target.value})} 
            />
            <button 
              disabled={saving} 
              className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wide hover:bg-slate-800 transition-colors disabled:opacity-70 active:scale-[0.98]"
            >
              {saving ? "A Guardar..." : "Adicionar Cliente"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-2">
          {clients.map(c => (
            <div key={c.id} className="bg-white p-5 rounded-2xl border border-slate-50 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-lg">{c.name}</span>
                  {c.nif && <span className="text-[10px] bg-slate-100 px-2 rounded text-slate-500 font-mono">NIF: {c.nif}</span>}
                </div>
                <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-3">
                  <span className="flex items-center gap-1"><Mail size={12}/> {c.email || "Sem email"}</span>
                  <span className="flex items-center gap-1"><Phone size={12}/> {c.phone || "Sem telefone"}</span>
                </div>
                {c.address && <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><MapPin size={12}/> {c.address}, {c.city}</p>}
              </div>
              <button className="p-2 text-slate-300 hover:text-slate-500 self-end md:self-center bg-slate-50 rounded-lg">
                <Edit3 size={18} />
              </button>
            </div>
          ))}
          {clients.length === 0 && (
            <div className="text-center py-10 opacity-50">
              <p>Sem clientes registados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};