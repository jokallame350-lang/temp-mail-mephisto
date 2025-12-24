import React from 'react';
import { translations, Language } from '../translations';
import { Shield, Zap, Lock, Globe } from 'lucide-react';

interface SEOContentProps {
    // HATA ÇÖZÜMÜ: lang prop'u eklendi
    lang: Language;
}

export const SEOContent: React.FC<SEOContentProps> = ({ lang }) => {
    const t = translations[lang];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 text-slate-400 border-t border-white/5 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Shield className="w-6 h-6 text-red-600" />
                        {t.artMainTitle} <span className="text-red-500">{t.artMainTitleHighlight}</span>
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">{t.artIntro1}</p>
                    <p className="text-sm leading-relaxed text-slate-400">{t.artIntro2}</p>
                </div>
                
                <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-red-500/20 transition-all">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-orange-500" />
                            {t.featLatencyTitle}
                        </h3>
                        <p className="text-xs text-slate-500">{t.featLatencyDesc}</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-red-500/20 transition-all">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-green-500" />
                            {t.featVolatileTitle}
                        </h3>
                        <p className="text-xs text-slate-500">{t.featVolatileDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
