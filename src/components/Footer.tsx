import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { periods } from '@/data/writers';
import { Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* App Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="w-6 h-6 text-accent" />
              <span className="font-heading text-lg font-bold tracking-wider">LITERARIA</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              {t(
                'A premium academic platform for exploring the complete legacy of English Literature — from Old English to Postmodern.',
                'ইংরেজি সাহিত্যের সম্পূর্ণ উত্তরাধিকার অন্বেষণের জন্য একটি প্রিমিয়াম একাডেমিক প্ল্যাটফর্ম।'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-accent">
              {t('Quick Links', 'দ্রুত লিঙ্ক')}
            </h4>
            <ul className="space-y-2">
              {periods.slice(0, 4).map(period => (
                <li key={period.id}>
                  <button
                    onClick={() => navigate(`/period/${period.id}`)}
                    className="font-ui text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {period.name[language]}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="font-ui text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {t('About', 'সম্পর্কে')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms')}
                  className="font-ui text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
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
            <div className="space-y-1.5">
              <p className="font-ui text-sm text-primary-foreground/80 font-medium">Md Nasrullah</p>
              <p className="font-ui text-xs text-primary-foreground/50">
                {t('Department of English', 'ইংরেজি বিভাগ')}
              </p>
              <p className="font-ui text-xs text-primary-foreground/50">
                {t('BM College, Barishal', 'বিএম কলেজ, বরিশাল')}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <Globe className="w-3.5 h-3.5 text-primary-foreground/40" />
                <span className="font-ui text-xs text-primary-foreground/40">
                  {t('Bangladesh', 'বাংলাদেশ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center font-ui text-xs text-primary-foreground/40">
            {t('Developed by', 'তৈরি করেছেন')} Md Nasrullah · {t('Explore the Legacy of English Literature', 'ইংরেজি সাহিত্যের উত্তরাধিকার অন্বেষণ করুন')}
          </p>
        </div>
      </div>
    </footer>
  );
}
