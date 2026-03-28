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
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors duration-200">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl border shadow-soft p-8 text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent/20 shadow-elevated mx-auto mb-5">
            <img src={developerImg} alt="Md Nasrullah" className="w-full h-full object-cover" />
          </div>

          <h1 className="font-heading text-3xl font-bold text-foreground">
            <a
              href="https://mdnasrullah.pro.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              Md Nasrullah
            </a>
          </h1>
          <p className="font-ui text-sm text-accent font-medium mt-1">
            {t('Department of English', 'ইংরেজি বিভাগ')}
          </p>
          <p className="font-ui text-sm text-muted-foreground mt-0.5">
            {t('BM College, Barishal', 'বিএম কলেজ, বরিশাল')}
          </p>
          <p className="font-ui text-xs text-muted-foreground/60 mt-1">
            {t('Bangladesh', 'বাংলাদেশ')}
          </p>

          <div className="ornament-line my-6 max-w-32 mx-auto" />
        </motion.div>
      </div>
    </Layout>
  );
}
