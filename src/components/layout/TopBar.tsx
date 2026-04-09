import React, { useEffect, useRef } from 'react';
import { Search, X, Settings } from 'lucide-react';
import { User, ViewType } from '../../types';

interface TopBarProps {
  currentUser: User | null;
  isAdmin: boolean;
  globalSearchTerm: string;
  setGlobalSearchTerm: (term: string) => void;
  isSearchExpanded: boolean;
  setIsSearchExpanded: (expanded: boolean) => void;
  setView: (view: ViewType) => void;
  handleLogoClick: (e: React.MouseEvent) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentUser,
  isAdmin,
  globalSearchTerm,
  setGlobalSearchTerm,
  isSearchExpanded,
  setIsSearchExpanded,
  setView,
  handleLogoClick
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  return (
    <div className="bg-white px-6 py-4 sticky top-0 z-40 flex items-center justify-between h-[80px] border-b border-slate-50">
      <div className="flex items-center gap-3 md:hidden">
        <div
          className="flex items-center gap-1 cursor-pointer active:scale-95 transition-transform"
          onClick={handleLogoClick}
        >
          <span className="text-2xl font-black text-slate-900 tracking-tighter">ARCO</span>
          <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5"></div>
        </div>
        <button
          onClick={() => setView('settings')}
          className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <Settings size={20} />
        </button>
      </div>

      <div className={`flex items-center justify-end transition-all duration-300 ${isSearchExpanded ? 'flex-1 ml-4' : ''}`}>
        <div className={`relative flex items-center transition-all duration-300 origin-right ${isSearchExpanded ? 'w-full opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
          <input
            ref={searchInputRef}
            className="w-full bg-slate-100 border-none outline-none rounded-full py-2 pl-4 pr-10 text-sm font-medium text-slate-900 placeholder:text-slate-400"
            placeholder="Pesquisar..."
            value={globalSearchTerm}
            onChange={(e) => setGlobalSearchTerm(e.target.value)}
            onBlur={() => { if (!globalSearchTerm) setIsSearchExpanded(false); }}
          />
          <button
            onClick={() => { setGlobalSearchTerm(""); setIsSearchExpanded(false); }}
            className="absolute right-2 text-slate-400 hover:text-slate-700"
          >
            <X size={14} />
          </button>
        </div>

        {!isSearchExpanded && (
          <button
            onClick={() => setIsSearchExpanded(true)}
            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Search size={22} />
          </button>
        )}
      </div>

      <div className="hidden md:flex items-center gap-3 ml-4">
        <div className="flex flex-col text-right">
          <span className="text-xs font-bold text-slate-900">{currentUser?.name}</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">{isAdmin ? "Admin" : "User"}</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-900/20">
          {currentUser?.name?.charAt(0) || "U"}
        </div>
      </div>
    </div>
  );
};