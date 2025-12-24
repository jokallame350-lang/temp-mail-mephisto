import React from 'react';
import { Mail, Shield, Globe, Moon, Sun, Crown } from 'lucide-react';
import { Mailbox } from '../types';
// Language tipini basitçe string olarak alıyoruz, import hatasını önlemek için
type Language = 'en' | 'tr';

interface HeaderProps {
  accounts: Mailbox[];
  currentAccount: Mailbox | null;
  onSwitchAccount: (id: string) => void;
  onNewAccount: () => void;
  // EKLENEN EKSİK PROP:
  onOpenPremium: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  lang: string;
  setLang: (lang: any) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  accounts, currentAccount, onSwitchAccount, onNewAccount, onOpenPremium, 
  theme, toggleTheme, lang, setLang 
}) => {
  
  return (
    <header className="w-full max-w-7xl mx-auto p-4 flex items-center justify-between z-20 relative">
      <div className="flex items-center gap-3">
        <div className="relative">
           <div className="absolute inset-0 bg-red-500 blur-lg opacity-20 animate-pulse" />
           <Mail className="w-8 h-8 text-red-600 relative z-10" />
        </div>
        <span className="text-xl font-black tracking-tighter italic hidden md:block text-slate-900 dark:text-white">
          MEPHISTO <span className="text-red-600">TEMP MAIL</span>
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-500 dark:text-slate-400"
        >
          <Globe className="w-4 h-4" />
        </button>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-500 dark:text-slate-400"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button 
          onClick={onOpenPremium}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white font-black text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-red-600/20 transition-all active:scale-95"
        >
          <Crown className="w-3 h-3" />
          <span className="hidden sm:block">PREMIUM</span>
        </button>
      </div>
    </header>
  );
};

export default Header;