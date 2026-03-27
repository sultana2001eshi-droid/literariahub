import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Period, getWritersByPeriod } from '@/data/writers';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PeriodCard({ period, index }: { period: Period; index: number }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const writerCount = getWritersByPeriod(period.id).length;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={() => navigate(`/period/${period.id}`)}
      className="group w-full text-left rounded-xl bg-card border shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
    >
      <div className={`h-2 bg-gradient-to-r ${period.color}`} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-gold transition-colors">
            {period.name[language]}
          </h3>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors group-hover:translate-x-1 duration-200" />
        </div>
        <p className="font-ui text-xs text-gold font-medium mb-2">{period.years}</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {period.description[language]}
        </p>
        <p className="font-ui text-xs text-muted-foreground/60 mt-3">
          {writerCount} {language === 'en' ? 'writers' : 'জন লেখক'}
        </p>
      </div>
    </motion.button>
  );
}
