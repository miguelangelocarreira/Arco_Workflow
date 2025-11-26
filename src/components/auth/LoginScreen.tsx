import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sanitize } from '../../utils/formatting';

interface LoginScreenProps {
  loading: boolean;
  error: string;
  onLogin: (data: { name: string; email: string }) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ loading, error, onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    onLogin({ name: sanitize(name), email: sanitize(email) });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px]" />

      <div className="w-full max-w-sm relative z-10">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-1">
            <span className="text-4xl font-black text-white tracking-tighter">ARCO</span>
            <div className="h-2 w-2 rounded-full bg-orange-500 mt-2"></div>
          </div>
          <p className="text-slate-400 text-xs tracking-widest uppercase">Workflow Studio</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-2 text-center">Bem-vindo</h2>
          <p className="text-xs text-slate-400 text-center mb-6">Entre para aceder ao seu workspace.</p>

          {error && (
            <div className="mb-4 text-xs bg-red-500/10 border border-red-500/20 text-red-200 px-3 py-2 rounded-xl flex gap-2">
              <X size={12} className="mt-[2px]" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
              placeholder="Seu Nome"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
            <input
              type="email"
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
              placeholder="seu@email.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <button
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black font-bold rounded-2xl py-4 text-xs uppercase tracking-wide hover:bg-slate-200 transition active:scale-[0.98] disabled:opacity-70 mt-2"
            >
              {loading ? "A entrar..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};