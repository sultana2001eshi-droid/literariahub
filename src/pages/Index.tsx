import Layout from '@/components/Layout';
import PeriodCard from '@/components/PeriodCard';
import { periods } from '@/data/writers';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Index() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <span className="text-5xl">📜</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              LITERARIA
            </h1>
            <div className="ornament-line my-5 max-w-32 mx-auto" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t(
                'Explore the Legacy of English Literature — from the mead halls of Beowulf to the fragmented voices of postmodernity.',
                'ইংরেজি সাহিত্যের উত্তরাধিকার অন্বেষণ করুন — বেউলফের মিড হল থেকে উত্তর-আধুনিকতার খণ্ডিত কণ্ঠস্বর পর্যন্ত।'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Periods */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
          {t('Literary Periods', 'সাহিত্যিক যুগ')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {periods.map((period, i) => (
            <PeriodCard key={period.id} period={period} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
