import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import WriterCard from '@/components/WriterCard';
import { getPeriodById, getWritersByPeriod } from '@/data/writers';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PeriodPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const period = getPeriodById(id || '');
  const writers = getWritersByPeriod(id || '');

  if (!period) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground font-ui">{t('Period not found.', 'যুগ পাওয়া যায়নি।')}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className={`h-2 rounded-full bg-gradient-to-r ${period.color} max-w-32 mb-4`} />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {period.name[language]}
          </h1>
          <p className="font-ui text-sm text-gold font-medium mt-1">{period.years}</p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl">
            {period.description[language]}
          </p>
        </motion.div>

        <div className="ornament-line mb-8" />

        <h2 className="font-heading text-xl font-bold text-foreground mb-6">
          {t('Writers', 'লেখকগণ')}
        </h2>

        {writers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {writers.map((writer, i) => (
              <WriterCard key={writer.id} writer={writer} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground font-ui text-sm">{t('No writers found for this period.', 'এই যুগের জন্য কোনো লেখক পাওয়া যায়নি।')}</p>
        )}
      </div>
    </Layout>
  );
}
