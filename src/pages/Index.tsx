import Layout from '@/components/Layout';
import PeriodCard from '@/components/PeriodCard';
import { periods, writers } from '@/data/writers';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Feather, ArrowRight, User } from 'lucide-react';

const heroWriters = ['shakespeare', 'john-milton', 'jane-austen', 'charles-dickens', 'virginia-woolf'];

export default function Index() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const featuredWriters = heroWriters
    .map(id => writers.find(w => w.id === id))
    .filter(Boolean);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-accent/5" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Floating decorations */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] opacity-[0.06] text-accent"
        >
          <BookOpen className="w-20 h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 right-[8%] opacity-[0.06] text-accent"
        >
          <Feather className="w-24 h-24" />
        </motion.div>
        <motion.div
          animate={{ y: [-5, 8, -5], x: [-3, 3, -3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[40%] right-[5%] opacity-[0.04] text-accent"
        >
          <BookOpen className="w-14 h-14" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
                <Feather className="w-3.5 h-3.5 text-accent" />
                <span className="font-ui text-xs font-medium text-accent">
                  {t('Premium Literary Archive', 'প্রিমিয়াম সাহিত্য সংগ্রহ')}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground tracking-tight leading-[1.1]">
                {t('Explore the', 'অন্বেষণ করুন')}{' '}
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                  {t('Legacy', 'উত্তরাধিকার')}
                </span>{' '}
                {t('of English Literature', 'ইংরেজি সাহিত্যের')}
              </h1>

              <div className="ornament-line my-7 max-w-24" />

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                {t(
                  'From the mead halls of Beowulf to the fragmented voices of postmodernity — discover centuries of literary genius, beautifully curated for scholars and learners.',
                  'বেউলফের মিড হল থেকে উত্তর-আধুনিকতার খণ্ডিত কণ্ঠস্বর পর্যন্ত — শতাব্দীর সাহিত্য প্রতিভা আবিষ্কার করুন, পণ্ডিত ও শিক্ষার্থীদের জন্য সুন্দরভাবে সংকলিত।'
                )}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('periods-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-ui text-sm font-medium hover:opacity-90 transition-all shadow-soft hover:shadow-card"
                >
                  {t('Browse Periods', 'যুগ অন্বেষণ করুন')}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/period/renaissance')}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-ui text-sm font-medium hover:bg-secondary/80 transition-all border border-border/50"
                >
                  {t('Explore Writers', 'লেখক অন্বেষণ করুন')}
                </button>
              </div>
            </motion.div>

            {/* Right side - Writer gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] hidden md:block"
            >
              {featuredWriters.map((writer, i) => {
                if (!writer) return null;
                const positions = [
                  { top: '2%', left: '8%', rotate: -6, z: 5 },
                  { top: '0%', left: '48%', rotate: 4, z: 4 },
                  { top: '32%', left: '2%', rotate: 5, z: 3 },
                  { top: '35%', left: '52%', rotate: -3, z: 2 },
                  { top: '58%', left: '22%', rotate: 2, z: 1 },
                ];
                const pos = positions[i];
                return (
                  <motion.div
                    key={writer.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    whileHover={{ scale: 1.08, zIndex: 20, rotate: 0, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25)' }}
                    onClick={() => navigate(`/writer/${writer.id}`)}
                    className="absolute w-40 lg:w-48 cursor-pointer"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      zIndex: pos.z,
                      transform: `rotate(${pos.rotate}deg)`,
                    }}
                  >
                    <div className="bg-card rounded-xl border shadow-card overflow-hidden transition-shadow duration-300">
                      <div className="aspect-[3/4] bg-secondary flex items-center justify-center">
                        {writer.image ? (
                          <img
                            src={writer.image}
                            alt={writer.name.en}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <User className="w-8 h-8 text-muted-foreground/30" />
                        )}
                      </div>
                      <div className="p-3">
                        <p className="font-heading text-xs font-bold text-foreground truncate">
                          {writer.name[language]}
                        </p>
                        <p className="font-ui text-[10px] text-muted-foreground mt-0.5">
                          {writer.birth}–{writer.death}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">{periods.length}</p>
              <p className="font-ui text-xs text-muted-foreground mt-1">{t('Literary Periods', 'সাহিত্যিক যুগ')}</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">{writers.length}+</p>
              <p className="font-ui text-xs text-muted-foreground mt-1">{t('Writers', 'লেখক')}</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">1500+</p>
              <p className="font-ui text-xs text-muted-foreground mt-1">{t('Years of Literature', 'বছরের সাহিত্য')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Periods */}
      <section id="periods-section" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Literary Periods', 'সাহিত্যিক যুগ')}
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            {t('Journey through the great eras of English literature', 'ইংরেজি সাহিত্যের মহান যুগের মধ্য দিয়ে ভ্রমণ করুন')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {periods.map((period, i) => (
            <PeriodCard key={period.id} period={period} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
