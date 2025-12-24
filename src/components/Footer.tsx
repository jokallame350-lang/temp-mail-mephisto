import React from 'react';
import { Mail } from 'lucide-react';
import { translations, Language } from '../translations';

interface FooterProps {
  // HATA ÇÖZÜMÜ: lang prop'u eklendi
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];
  
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <Mail className="w-5 h-5 text-red-600" />
          <span className="text-sm font-bold text-slate-500">MEPHISTO INC.</span>
        </div>
        
        <div className="flex gap-6 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <a href="#" className="hover:text-red-500 transition-colors">{t.footerPrivacy}</a>
          <a href="#" className="hover:text-red-500 transition-colors">{t.footerTerms}</a>
        </div>
        
        <div className="text-xs text-slate-700">
          © 2025 {t.footerRights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
