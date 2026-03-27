import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { searchWriters } from '@/data/writers';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchWriters>>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length > 1) {
      setResults(searchWriters(value, language));
    } else {
      setResults([]);
    }
  };

  const handleSelect = (id: string) => {
    navigate(`/writer/${id}`);
    setSearchOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onMenuToggle} className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Toggle menu">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <span className="text-gold text-xl">📜</span>
            <h1 className="font-heading text-xl font-bold tracking-wide text-foreground">
              LITERARIA
            </h1>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Search">
            {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={t('Search writers, periods...', 'লেখক, যুগ খুঁজুন...')}
                className="w-full bg-secondary/50 rounded-lg px-4 py-2.5 font-ui text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {results.length > 0 && (
                <div className="mt-2 rounded-lg bg-card shadow-elevated border max-h-64 overflow-y-auto">
                  {results.map(writer => (
                    <button
                      key={writer.id}
                      onClick={() => handleSelect(writer.id)}
                      className="w-full text-left px-4 py-3 hover:bg-secondary/50 transition-colors border-b last:border-b-0"
                    >
                      <div className="font-heading font-semibold text-sm">{writer.name[language]}</div>
                      <div className="text-xs text-muted-foreground font-ui mt-0.5">{writer.birth}–{writer.death}</div>
                    </button>
                  ))}
                </div>
              )}
              {query.length > 1 && results.length === 0 && (
                <p className="mt-2 text-sm text-muted-foreground font-ui px-1">
                  {t('No results found.', 'কোনো ফলাফল পাওয়া যায়নি।')}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
