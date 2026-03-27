import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Writer } from '@/data/writers';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function WriterCard({ writer, index }: { writer: Writer; index: number }) {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      onClick={() => navigate(`/writer/${writer.id}`)}
      className="group w-full text-left rounded-xl bg-card border shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border">
            <User className="w-6 h-6 text-muted-foreground" />
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
