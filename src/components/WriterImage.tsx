import { useState, useCallback } from 'react';
import { Writer } from '@/data/writers';
import { BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(w => w.length > 0 && w[0] === w[0].toUpperCase())
    .map(w => w[0])
    .slice(0, 2)
    .join('');
}

interface WriterImageProps {
  writer: Writer;
  className?: string;
  iconSize?: string;
}

export default function WriterImage({ writer, className = '', iconSize = 'w-4 h-4' }: WriterImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'failed'>('loading');
  const initials = getInitials(writer.name.en);

  const handleLoad = useCallback(() => setStatus('loaded'), []);
  const handleError = useCallback(() => setStatus('failed'), []);

  if (!writer.image) {
    return <Fallback initials={initials} iconSize={iconSize} />;
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {status === 'loading' && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-secondary via-accent/5 to-secondary animate-pulse"
          />
        )}
      </AnimatePresence>

      {status === 'failed' ? (
        <Fallback initials={initials} iconSize={iconSize} />
      ) : (
        <motion.img
          src={writer.image}
          alt={writer.name.en}
          className={`w-full h-full object-cover ${className}`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: status === 'loaded' ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}

function Fallback({ initials, iconSize }: { initials: string; iconSize: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/15 via-secondary to-accent/10 flex flex-col items-center justify-center gap-2">
      <span className="font-heading text-2xl font-bold text-accent/60 tracking-widest select-none">
        {initials}
      </span>
      <BookOpen className={`${iconSize} text-accent/25`} />
    </div>
  );
}
