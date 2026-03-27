import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            {t('About LITERARIA', 'LITERARIA সম্পর্কে')}
          </h1>
          <div className="ornament-line my-5 max-w-32" />

          <div className="space-y-4 font-body text-sm text-foreground/80 leading-relaxed">
            <p>
              {t(
                'LITERARIA is a premium, university-level knowledge platform dedicated to the comprehensive study of English Literature — spanning from the earliest Old English period to contemporary postmodern writing.',
                'LITERARIA একটি প্রিমিয়াম, বিশ্ববিদ্যালয়-স্তরের জ্ঞান প্ল্যাটফর্ম যা ইংরেজি সাহিত্যের ব্যাপক অধ্যয়নের জন্য নিবেদিত — প্রাচীনতম প্রাচীন ইংরেজি যুগ থেকে সমসাময়িক উত্তর-আধুনিক লেখা পর্যন্ত।'
              )}
            </p>
            <p>
              {t(
                'Designed for university students, literature enthusiasts, and academic researchers, this platform provides detailed profiles of major writers across all literary periods. Each entry includes biographical information, critical analysis, major works, thematic exploration, and notable quotations — all curated to support deep academic engagement.',
                'বিশ্ববিদ্যালয়ের শিক্ষার্থী, সাহিত্যপ্রেমী এবং একাডেমিক গবেষকদের জন্য ডিজাইন করা হয়েছে, এই প্ল্যাটফর্মটি সমস্ত সাহিত্যিক যুগ জুড়ে প্রধান লেখকদের বিস্তারিত প্রোফাইল প্রদান করে।'
              )}
            </p>
            <p>
              {t(
                'LITERARIA is built with a commitment to academic excellence, beautiful design, and accessibility. Available in both English and Bangla, it aims to make the rich heritage of English literature available to learners across linguistic boundaries.',
                'LITERARIA একাডেমিক শ্রেষ্ঠত্ব, সুন্দর ডিজাইন এবং অ্যাক্সেসিবিলিটির প্রতি প্রতিশ্রুতি নিয়ে তৈরি। ইংরেজি এবং বাংলা উভয় ভাষায় উপলব্ধ।'
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
