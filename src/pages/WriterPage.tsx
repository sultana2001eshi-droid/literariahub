import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getWriterById, getPeriodById } from '@/data/writers';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, User, BookOpen, Feather, Award, Quote } from 'lucide-react';
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
      className="bg-card rounded-xl border p-5 shadow-soft"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-gold" />
        <h3 className="font-heading text-base font-bold text-foreground">{title}</h3>
      </div>
      {children}
    </motion.div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-secondary border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {writer.name[language]}
          </h1>
          <p className="font-ui text-sm text-gold font-medium mt-1">{writer.birth}–{writer.death}</p>
          {period && (
            <button
              onClick={() => navigate(`/period/${period.id}`)}
              className="inline-block mt-2 text-xs font-ui text-muted-foreground bg-secondary px-3 py-1 rounded-full hover:bg-accent/20 transition-colors"
            >
              {period.name[language]} ({period.years})
            </button>
          )}
          <div className="ornament-line mt-6 max-w-32 mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <Section icon={BookOpen} title={t('Introduction', 'পরিচিতি')}>
            <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
              {writer.intro[language]}
            </p>
          </Section>

          <Section icon={Feather} title={t('Detailed Description', 'বিস্তারিত বিবরণ')}>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              {writer.description[language]}
            </p>
          </Section>

          <Section icon={BookOpen} title={t('Major Works', 'প্রধান রচনা')}>
            <div className="flex flex-wrap gap-2">
              {writer.majorWorks[language].map((work, i) => (
                <span key={i} className="text-xs font-ui bg-secondary px-3 py-1.5 rounded-full text-secondary-foreground">
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
              <div className="space-y-3">
                {writer.quotes[language].map((quote, i) => (
                  <blockquote key={i} className="border-l-2 border-gold/40 pl-4">
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
