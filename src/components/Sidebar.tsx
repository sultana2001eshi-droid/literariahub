import { X, Sun, Moon, Globe, BookOpen, User, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { periods } from '@/data/writers';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function AppSidebar({ open, onClose }: SidebarProps) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-sidebar z-50 shadow-elevated flex flex-col"
          >
            <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
              <div className="flex items-center gap-2">
                <span className="text-sidebar-primary text-lg">📜</span>
                <span className="font-heading text-lg font-bold text-sidebar-foreground tracking-wide">LITERARIA</span>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors">
                <X className="w-5 h-5 text-sidebar-foreground" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {/* Language toggle */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-sidebar-accent/50">
                <div className="flex items-center gap-2 text-sidebar-foreground">
                  <Globe className="w-4 h-4" />
                  <span className="font-ui text-sm">{t('Language', 'ভাষা')}</span>
                </div>
                <div className="flex gap-1 bg-sidebar-accent rounded-lg p-0.5">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-1 rounded-md text-xs font-ui font-medium transition-colors ${language === 'en' ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'text-sidebar-foreground'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('bn')}
                    className={`px-2.5 py-1 rounded-md text-xs font-ui font-medium transition-colors ${language === 'bn' ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'text-sidebar-foreground'}`}
                  >
                    বাং
                  </button>
                </div>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
              >
                <div className="flex items-center gap-2">
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <span className="font-ui text-sm">{t(theme === 'light' ? 'Dark Mode' : 'Light Mode', theme === 'light' ? 'ডার্ক মোড' : 'লাইট মোড')}</span>
                </div>
              </button>

              <div className="ornament-line my-3" />

              {/* Categories */}
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-ui text-sm font-medium">{t('Literary Periods', 'সাহিত্যিক যুগ')}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {periods.map(period => (
                      <button
                        key={period.id}
                        onClick={() => handleNav(`/period/${period.id}`)}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
                      >
                        <span className="font-ui text-sm">{period.name[language]}</span>
                        <span className="text-xs text-sidebar-foreground/50 ml-2">{period.years}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="ornament-line my-3" />

              <button onClick={() => handleNav('/about')} className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground">
                <BookOpen className="w-4 h-4" />
                <span className="font-ui text-sm">{t('About App', 'অ্যাপ সম্পর্কে')}</span>
              </button>

              <button onClick={() => handleNav('/developer')} className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground">
                <User className="w-4 h-4" />
                <span className="font-ui text-sm">{t('About Developer', 'ডেভেলপার সম্পর্কে')}</span>
              </button>

              <button onClick={() => handleNav('/terms')} className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground">
                <FileText className="w-4 h-4" />
                <span className="font-ui text-sm">{t('Terms & Conditions', 'শর্তাবলী')}</span>
              </button>
            </nav>

            <div className="p-4 border-t border-sidebar-border">
              <p className="text-xs text-sidebar-foreground/50 font-ui text-center">
                {t('Explore the Legacy of English Literature', 'ইংরেজি সাহিত্যের উত্তরাধিকার অন্বেষণ করুন')}
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
