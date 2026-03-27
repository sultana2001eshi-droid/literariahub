import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { periods } from '@/data/writers';
import { BookOpen, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* App Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-lg">📜</span>
              <span className="font-heading text-xl font-bold tracking-wide">LITERARIA</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              {t(
                'A premium academic platform exploring the rich legacy of English Literature from Old English to Postmodernism.',
                'পুরাতন ইংরেজি থেকে উত্তর-আধুনিকতা পর্যন্ত ইংরেজি সাহিত্যের সমৃদ্ধ উত্তরাধিকার অন্বেষণকারী একটি প্রিমিয়াম একাডেমিক প্ল্যাটফর্ম।'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-accent">
              {t('Quick Links', 'দ্রুত লিংক')}
            </h4>
            <ul className="space-y-2">
              {periods.slice(0, 4).map(p => (
                <li key={p.id}>
                  <button
                    onClick={() => navigate(`/period/${p.id}`)}
                    className="font-ui text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {p.name[language]}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => navigate('/about')} className="font-ui text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {t('About', 'সম্পর্কে')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms')} className="font-ui text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {t('Terms', 'শর্তাবলী')}
                </button>
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-accent">
              {t('Developer', 'ডেভেলপার')}
            </h4>
            <p className="font-ui text-sm text-primary-foreground/80 font-medium">Md Nasrullah</p>
            <p className="font-ui text-xs text-primary-foreground/50 mt-1">
              {t('Department of English', 'ইংরেজি বিভাগ')}
            </p>
            <p className="font-ui text-xs text-primary-foreground/50">
              {t('BM College, Barishal', 'বিএম কলেজ, বরিশাল')}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Globe className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="font-ui text-xs text-primary-foreground/40">mdnasrullah.pro.bd</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-primary-foreground/10 my-8" />
        <div className="text-center">
          <p className="font-ui text-xs text-primary-foreground/40">
            {t('Developed by', 'তৈরি করেছেন')} <span className="text-accent font-medium">Md Nasrullah</span>
          </p>
          <p className="font-ui text-[10px] text-primary-foreground/25 mt-1">
            LITERARIA — {t('Explore the Legacy of English Literature', 'ইংরেজি সাহিত্যের উত্তরাধিকার অন্বেষণ করুন')}
          </p>
        </div>
      </div>
    </footer>
  );
}
