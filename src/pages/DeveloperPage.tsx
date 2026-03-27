import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import developerImg from '@/assets/developer.jpg';

export default function DeveloperPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent/30 shadow-elevated mx-auto mb-5">
            <img src={developerImg} alt="Md Nasrullah" className="w-full h-full object-cover" />
          </div>

          <h1 className="font-heading text-3xl font-bold text-foreground">Md Nasrullah</h1>
          <p className="font-ui text-sm text-gold font-medium mt-1">
            {t('Department of English', 'ইংরেজি বিভাগ')}
          </p>
          <p className="font-ui text-sm text-muted-foreground mt-0.5">
            {t('BM College, Barishal', 'বিএম কলেজ, বরিশাল')}
          </p>

          <div className="ornament-line my-6 max-w-32 mx-auto" />

          <div className="text-left space-y-4 font-body text-sm text-foreground/80 leading-relaxed">
            <p>
              {t(
                'Md Nasrullah is a passionate student of English Literature at BM College, Barishal. Driven by a deep love for literature and technology, he envisioned LITERARIA as a bridge between classical literary knowledge and modern digital accessibility.',
                'মোঃ নাসরুল্লাহ বরিশাল বিএম কলেজে ইংরেজি সাহিত্যের একজন আবেগী শিক্ষার্থী। সাহিত্য ও প্রযুক্তির প্রতি গভীর ভালোবাসা দ্বারা চালিত, তিনি LITERARIA কে ধ্রুপদী সাহিত্য জ্ঞান এবং আধুনিক ডিজিটাল অ্যাক্সেসিবিলিটির মধ্যে সেতু হিসেবে কল্পনা করেছিলেন।'
              )}
            </p>
            <p>
              {t(
                'His mission is to make the rich heritage of English literature accessible, engaging, and inspiring for students and learners everywhere — regardless of language or background.',
                'তার লক্ষ্য হল ইংরেজি সাহিত্যের সমৃদ্ধ ঐতিহ্যকে ভাষা বা পটভূমি নির্বিশেষে সর্বত্র শিক্ষার্থী এবং শিক্ষার্থীদের জন্য সুলভ, আকর্ষণীয় এবং অনুপ্রেরণামূলক করা।'
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
