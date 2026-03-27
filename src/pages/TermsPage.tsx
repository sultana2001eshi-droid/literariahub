import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const sections = [
    {
      title: t('Educational Use', 'শিক্ষামূলক ব্যবহার'),
      content: t(
        'LITERARIA is designed exclusively for educational and academic purposes. All content is intended to support learning, research, and the study of English Literature at the university level.',
        'LITERARIA একচেটিয়াভাবে শিক্ষামূলক এবং একাডেমিক উদ্দেশ্যে ডিজাইন করা হয়েছে।'
      ),
    },
    {
      title: t('Content Accuracy', 'বিষয়বস্তুর যথার্থতা'),
      content: t(
        'While every effort has been made to ensure accuracy, the content provided is for educational reference and may not be exhaustive. Users are encouraged to consult primary academic sources for detailed research.',
        'যথার্থতা নিশ্চিত করার জন্য সর্বাত্মক প্রচেষ্টা করা হয়েছে, তবে প্রদত্ত বিষয়বস্তু শিক্ষামূলক রেফারেন্সের জন্য।'
      ),
    },
    {
      title: t('Image Usage Policy', 'ছবি ব্যবহারের নীতি'),
      content: t(
        'Images used in this platform are sourced from public domain repositories or generated using AI tools for educational illustration. No commercial use is intended.',
        'এই প্ল্যাটফর্মে ব্যবহৃত ছবিগুলি পাবলিক ডোমেইন রিপোজিটরি থেকে সংগ্রহ করা বা শিক্ষামূলক চিত্রের জন্য AI সরঞ্জাম ব্যবহার করে তৈরি করা হয়েছে।'
      ),
    },
    {
      title: t('Privacy Respect', 'গোপনীয়তার সম্মান'),
      content: t(
        'LITERARIA does not collect, store, or share any personal data from its users. Your privacy is fully respected.',
        'LITERARIA এর ব্যবহারকারীদের কাছ থেকে কোনো ব্যক্তিগত তথ্য সংগ্রহ, সংরক্ষণ বা শেয়ার করে না।'
      ),
    },
    {
      title: t('No Plagiarism', 'কোনো চুরি নেই'),
      content: t(
        'Users are expected to use the content responsibly. Copying content directly for academic submissions without proper citation is strongly discouraged.',
        'ব্যবহারকারীদের দায়িত্বশীলভাবে বিষয়বস্তু ব্যবহার করার প্রত্যাশা করা হয়।'
      ),
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-ui mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('Back', 'ফিরুন')}
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            {t('Terms & Conditions', 'শর্তাবলী')}
          </h1>
          <div className="ornament-line my-5 max-w-32" />

          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{section.title}</h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
