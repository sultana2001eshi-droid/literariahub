import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const links = [
    { label: t('About', 'সম্পর্কে'), path: '/about' },
    { label: t('Terms', 'শর্তাবলী'), path: '/terms' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* App Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Logo className="w-5 h-5 text-accent" />
              <span className="font-heading text-lg font-bold tracking-wider">LITERARIA</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              {t(
                'A premium academic platform for exploring the complete legacy of English Literature.',
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
              {links.map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="font-ui text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-accent">
              {t('Developer', 'ডেভেলপার')}
            </h4>
            <p className="font-ui text-sm text-primary-foreground/70 font-medium">Md Nasrullah</p>
            <a
              href="https://mdnasrullah.pro.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-xs text-accent/70 hover:text-accent transition-colors mt-1 inline-block"
            >
              mdnasrullah.pro.bd
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-ui text-xs text-primary-foreground/40">
            © 2026 LITERARIA. {t('All rights reserved.', 'সর্বস্বত্ব সংরক্ষিত।')}
          </p>
          <p className="font-ui text-xs text-primary-foreground/40">
            {t('Developed by', 'তৈরি করেছেন')} Md Nasrullah
          </p>
        </div>
      </div>
    </footer>
  );
}
