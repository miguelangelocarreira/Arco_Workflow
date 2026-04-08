import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  loading: boolean;
  error: string;
  resetSent: boolean;
  onLogin: (data: { email: string; password: string }) => void;
  onForgotPassword: (email: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ loading, error, resetSent, onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    onLogin({ email, password });
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
              <X size={12} className="mt-[2px] shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {resetSent && (
            <div className="mb-4 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 px-3 py-2 rounded-xl">
              Email de recuperação enviado. Verifica a tua caixa de entrada.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all pr-12"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold rounded-2xl py-4 text-xs uppercase tracking-wide hover:bg-slate-200 transition active:scale-[0.98] disabled:opacity-70 mt-2"
            >
              {loading ? "A entrar..." : "Entrar"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => onForgotPassword(email)}
            className="w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors mt-4"
          >
            Esqueci-me da password
          </button>
        </div>
      </div>
    </div>
  );
};
