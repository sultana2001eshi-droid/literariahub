import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="font-ui text-sm text-muted-foreground">
          {t('App made by', 'অ্যাপটি তৈরি করেছেন')}{' '}
          <a
            href="https://mdnasrullah.pro.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-medium underline underline-offset-4 decoration-gold/30 hover:decoration-gold transition-colors"
          >
            Md Nasrullah
          </a>
        </p>
        <p className="font-ui text-xs text-muted-foreground/60 mt-1">
          LITERARIA — {t('Explore the Legacy of English Literature', 'ইংরেজি সাহিত্যের উত্তরাধিকার অন্বেষণ করুন')}
        </p>
      </div>
    </footer>
  );
}
