import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Writer } from '@/data/writers';
import { motion } from 'framer-motion';
import WriterImage from '@/components/WriterImage';

export default function WriterCard({ writer, index }: { writer: Writer; index: number }) {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      onClick={() => navigate(`/writer/${writer.id}`)}
      className="group w-full text-left rounded-xl bg-card border shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:border-accent/30"
    >
      <div className="p-6">
        <div className="flex items-start gap-5">
          <div className="w-18 h-22 rounded-lg bg-secondary flex-shrink-0 border overflow-hidden" style={{ width: '4.5rem', height: '5.5rem' }}>
            <WriterImage writer={writer} iconSize="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200">
              {writer.name[language]}
            </h3>
            <p className="font-ui text-xs text-accent font-semibold mt-1">{writer.birth}–{writer.death}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2.5 line-clamp-2">
              {writer.intro[language]}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
