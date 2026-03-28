import { useState } from 'react';
import { Writer } from '@/data/writers';
import { BookOpen } from 'lucide-react';

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(w => w.length > 0)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

interface WriterImageProps {
  writer: Writer;
  className?: string;
  iconSize?: string;
}

export default function WriterImage({ writer, className = '', iconSize = 'w-4 h-4' }: WriterImageProps) {
  const [failed, setFailed] = useState(false);
  const initials = getInitials(writer.name.en);

  if (writer.image && !failed) {
    return (
      <img
        src={writer.image}
        alt={writer.name.en}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/20 via-secondary to-accent/10 flex flex-col items-center justify-center gap-1.5">
      <span className="font-heading text-xl font-bold text-accent/70 tracking-wide">{initials}</span>
      <BookOpen className={`${iconSize} text-accent/30`} />
    </div>
  );
}
