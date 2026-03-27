import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getWriterById, getPeriodById } from '@/data/writers';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, BookOpen, Feather, Award, Quote, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WriterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const writer = getWriterById(id || '');
  const period = writer ? getPeriodById(writer.period) : undefined;

  if (!writer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground font-ui">{t('Writer not found.', 'লেখক পাওয়া যায়নি।')}</p>
        </div>
      </Layout>
    );
  }

  const Section = ({ icon: Icon, title, children }: { icon: typeof BookOpen; title: string; children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border p-6 shadow-soft"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-gold" />
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      </div>
      <div className="ornament-line mb-4" />
      {children}
    </motion.div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        {/* Header - Split layout */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image */}
            <div className="w-32 h-40 md:w-40 md:h-52 rounded-xl bg-secondary border-2 border-accent/20 flex items-center justify-center overflow-hidden shadow-card flex-shrink-0 mx-auto md:mx-0">
              {writer.image ? (
                <img src={writer.image} alt={writer.name.en} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <User className="w-12 h-12 text-muted-foreground/30" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {writer.name[language]}
              </h1>
              <p className="font-ui text-sm text-gold font-medium mt-1">{writer.birth}–{writer.death}</p>
              {period && (
                <button
                  onClick={() => navigate(`/period/${period.id}`)}
                  className="inline-block mt-3 text-xs font-ui text-accent-foreground bg-accent/15 px-4 py-1.5 rounded-full hover:bg-accent/25 transition-colors border border-accent/20"
                >
                  {period.name[language]} ({period.years})
                </button>
              )}
              <div className="ornament-line mt-5 max-w-32 mx-auto md:mx-0" />

              {/* Introduction */}
              <p className="font-body text-base text-muted-foreground leading-relaxed mt-4 italic">
                "{writer.intro[language]}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="space-y-5">
          <Section icon={Feather} title={t('Detailed Description', 'বিস্তারিত বিবরণ')}>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              {writer.description[language]}
            </p>
          </Section>

          <Section icon={BookOpen} title={t('Major Works', 'প্রধান রচনা')}>
            <div className="flex flex-wrap gap-2">
              {writer.majorWorks[language].map((work, i) => (
                <span key={i} className="text-xs font-ui bg-secondary px-4 py-2 rounded-full text-secondary-foreground border border-border/50">
                  {work}
                </span>
              ))}
            </div>
          </Section>

          <Section icon={Feather} title={t('Writing Style & Themes', 'লেখনশৈলী ও থিম')}>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              {writer.style[language]}
            </p>
          </Section>

          <Section icon={Award} title={t('Contribution to Literature', 'সাহিত্যে অবদান')}>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              {writer.contribution[language]}
            </p>
          </Section>

          {writer.quotes && writer.quotes[language].length > 0 && (
            <Section icon={Quote} title={t('Notable Quotes', 'উল্লেখযোগ্য উক্তি')}>
              <div className="space-y-4">
                {writer.quotes[language].map((quote, i) => (
                  <blockquote key={i} className="bg-secondary/50 rounded-lg p-4 border-l-4 border-accent/40">
                    <p className="font-body text-sm text-foreground/70 italic leading-relaxed">
                      "{quote}"
                    </p>
                  </blockquote>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </Layout>
  );
}
