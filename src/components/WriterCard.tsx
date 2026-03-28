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
      className="group w-full text-left rounded-xl bg-card border shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-16 h-20 rounded-lg bg-secondary flex-shrink-0 border overflow-hidden">
            <WriterImage writer={writer} iconSize="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-base font-bold text-foreground group-hover:text-gold transition-colors">
              {writer.name[language]}
            </h3>
            <p className="font-ui text-xs text-gold font-medium mt-0.5">{writer.birth}–{writer.death}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-2">
              {writer.intro[language]}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
