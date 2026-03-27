export interface Writer {
  id: string;
  name: { en: string; bn: string };
  birth: string;
  death: string;
  period: string;
  image?: string;
  intro: { en: string; bn: string };
  description: { en: string; bn: string };
  majorWorks: { en: string[]; bn: string[] };
  style: { en: string; bn: string };
  contribution: { en: string; bn: string };
  quotes?: { en: string[]; bn: string[] };
}

export interface Period {
  id: string;
  name: { en: string; bn: string };
  years: string;
  description: { en: string; bn: string };
  color: string;
}

export const periods: Period[] = [
  {
    id: 'old-english',
    name: { en: 'Old English', bn: 'প্রাচীন ইংরেজি' },
    years: '450–1100',
    description: {
      en: 'The earliest period of English literature, characterized by alliterative verse, heroic themes, and the blending of Germanic warrior culture with Christian beliefs.',
      bn: 'ইংরেজি সাহিত্যের প্রাচীনতম যুগ, যা অনুপ্রাসমূলক পদ্য, বীরত্বপূর্ণ থিম এবং জার্মানিক যোদ্ধা সংস্কৃতির সাথে খ্রিস্টান বিশ্বাসের মিশ্রণ দ্বারা চিহ্নিত।'
    },
    color: 'from-amber-900/20 to-amber-800/10'
  },
  {
    id: 'middle-english',
    name: { en: 'Middle English', bn: 'মধ্যযুগীয় ইংরেজি' },
    years: '1100–1500',
    description: {
      en: 'A transformative period following the Norman Conquest, featuring the rise of vernacular literature, romance traditions, and allegorical works.',
      bn: 'নর্মান বিজয়ের পর একটি রূপান্তরমূলক সময়কাল, যেখানে জনভাষার সাহিত্য, রোমান্স ঐতিহ্য এবং রূপকমূলক রচনার উত্থান ঘটে।'
    },
    color: 'from-stone-700/20 to-stone-600/10'
  },
  {
    id: 'renaissance',
    name: { en: 'Renaissance', bn: 'রেনেসাঁ' },
    years: '1500–1660',
    description: {
      en: 'The golden age of English literature marked by the flowering of drama, poetry, and prose, influenced by classical learning and humanism.',
      bn: 'ইংরেজি সাহিত্যের স্বর্ণযুগ যা নাটক, কবিতা এবং গদ্যের বিকাশ দ্বারা চিহ্নিত, ধ্রুপদী শিক্ষা ও মানবতাবাদ দ্বারা প্রভাবিত।'
    },
    color: 'from-emerald-900/20 to-emerald-800/10'
  },
  {
    id: 'neoclassical',
    name: { en: 'Neoclassical', bn: 'নিওক্লাসিক্যাল' },
    years: '1660–1785',
    description: {
      en: 'An age of reason and satire, emphasizing order, decorum, and classical ideals in literature, with the rise of the novel and periodical essay.',
      bn: 'যুক্তি ও ব্যঙ্গের যুগ, সাহিত্যে শৃঙ্খলা, শালীনতা এবং ধ্রুপদী আদর্শের উপর জোর দেওয়া হয়, উপন্যাস এবং সাময়িক প্রবন্ধের উত্থান ঘটে।'
    },
    color: 'from-blue-900/20 to-blue-800/10'
  },
  {
    id: 'romantic',
    name: { en: 'Romantic', bn: 'রোমান্টিক' },
    years: '1785–1830',
    description: {
      en: 'A revolutionary period celebrating emotion, nature, individualism, and imagination as reactions against industrialization and rationalism.',
      bn: 'একটি বিপ্লবী সময়কাল যা শিল্পায়ন ও যুক্তিবাদের বিরুদ্ধে প্রতিক্রিয়া হিসেবে আবেগ, প্রকৃতি, ব্যক্তিবাদ এবং কল্পনাকে উদযাপন করে।'
    },
    color: 'from-rose-900/20 to-rose-800/10'
  },
  {
    id: 'victorian',
    name: { en: 'Victorian', bn: 'ভিক্টোরিয়ান' },
    years: '1830–1901',
    description: {
      en: 'A complex era reflecting rapid social change, industrialization, and moral questioning through novels, poetry, and dramatic monologues.',
      bn: 'একটি জটিল যুগ যা উপন্যাস, কবিতা এবং নাটকীয় মনোলোগের মাধ্যমে দ্রুত সামাজিক পরিবর্তন, শিল্পায়ন এবং নৈতিক প্রশ্নকে প্রতিফলিত করে।'
    },
    color: 'from-violet-900/20 to-violet-800/10'
  },
  {
    id: 'modern',
    name: { en: 'Modern', bn: 'আধুনিক' },
    years: '1901–1960',
    description: {
      en: 'A period of radical experimentation in form and content, reflecting the fragmentation and disillusionment of the modern world.',
      bn: 'রূপ ও বিষয়বস্তুতে আমূল পরীক্ষা-নিরীক্ষার একটি সময়কাল, যা আধুনিক বিশ্বের বিভক্তি ও মোহভঙ্গকে প্রতিফলিত করে।'
    },
    color: 'from-slate-700/20 to-slate-600/10'
  },
  {
    id: 'postmodern',
    name: { en: 'Postmodern', bn: 'উত্তর-আধুনিক' },
    years: '1960–Present',
    description: {
      en: 'A diverse and pluralistic era challenging grand narratives, embracing metafiction, intertextuality, and multicultural perspectives.',
      bn: 'একটি বৈচিত্র্যময় ও বহুত্ববাদী যুগ যা মহা-আখ্যানকে চ্যালেঞ্জ করে, মেটাফিকশন, আন্তঃপাঠ্যতা এবং বহুসাংস্কৃতিক দৃষ্টিভঙ্গিকে আলিঙ্গন করে।'
    },
    color: 'from-teal-800/20 to-teal-700/10'
  }
];

export const writers: Writer[] = [
  // Old English
  {
    id: 'caedmon',
    name: { en: 'Cædmon', bn: 'কেডমন' },
    birth: 'c. 657',
    death: 'c. 684',
    period: 'old-english',
    intro: {
      en: 'The earliest known English poet, a cowherd who composed hymns inspired by divine vision.',
      bn: 'প্রাচীনতম পরিচিত ইংরেজ কবি, একজন গোপালক যিনি ঐশ্বরিক দর্শন দ্বারা অনুপ্রাণিত হয়ে স্তোত্র রচনা করেছিলেন।'
    },
    description: {
      en: 'Cædmon is celebrated as the first English poet whose name is known. According to Bede\'s Ecclesiastical History, Cædmon was an illiterate cowherd at the monastery of Whitby who miraculously received the gift of song in a dream. His "Hymn" is the oldest surviving piece of English poetry, composed in the Northumbrian dialect of Old English. Cædmon\'s work represents the earliest fusion of Christian content with Germanic poetic form, establishing a tradition that would define Old English literature.',
      bn: 'কেডমনকে প্রথম ইংরেজ কবি হিসেবে সম্মানিত করা হয় যার নাম জানা যায়। বেডের ধর্মীয় ইতিহাস অনুসারে, কেডমন ছিলেন হুইটবি মঠের একজন নিরক্ষর গোপালক যিনি অলৌকিকভাবে স্বপ্নে গানের উপহার পেয়েছিলেন। তাঁর "স্তোত্র" হল ইংরেজি কবিতার প্রাচীনতম টিকে থাকা অংশ।'
    },
    majorWorks: {
      en: ['Cædmon\'s Hymn'],
      bn: ['কেডমনের স্তোত্র']
    },
    style: {
      en: 'Alliterative verse combining Germanic poetic traditions with Christian subject matter. Simple yet powerful in its devotional expression.',
      bn: 'অনুপ্রাসমূলক পদ্য যা জার্মানিক কাব্য ঐতিহ্যকে খ্রিস্টান বিষয়বস্তুর সাথে মিলিত করে।'
    },
    contribution: {
      en: 'Established the tradition of vernacular Christian poetry in English, demonstrating that the English language could serve as a vehicle for religious expression.',
      bn: 'ইংরেজিতে জনভাষায় খ্রিস্টান কবিতার ঐতিহ্য প্রতিষ্ঠা করেছিলেন।'
    },
    quotes: {
      en: ['Now we must praise the Guardian of heaven\'s kingdom, the Creator\'s might and His mind\'s thought.'],
      bn: ['এখন আমাদের স্বর্গের রাজ্যের অভিভাবক, সৃষ্টিকর্তার শক্তি এবং তাঁর মনের চিন্তার প্রশংসা করতে হবে।']
    }
  },
  {
    id: 'beowulf-poet',
    name: { en: 'The Beowulf Poet', bn: 'বেউলফ কবি' },
    birth: 'c. 700',
    death: 'c. 1000',
    period: 'old-english',
    intro: {
      en: 'The anonymous author of Beowulf, the greatest surviving Old English epic poem.',
      bn: 'বেউলফের বেনামী লেখক, প্রাচীন ইংরেজি মহাকাব্যের সর্বশ্রেষ্ঠ টিকে থাকা রচনা।'
    },
    description: {
      en: 'The Beowulf poet composed the most important surviving work of Old English literature — an epic of 3,182 alliterative lines. The poem tells the story of the Scandinavian hero Beowulf who battles the monster Grendel, Grendel\'s mother, and a dragon. It masterfully weaves Germanic heroic traditions with Christian moral themes, reflecting the cultural tensions of Anglo-Saxon England. The poem survives in a single manuscript (Cotton Vitellius A.xv) dating to around 1000 CE.',
      bn: 'বেউলফ কবি প্রাচীন ইংরেজি সাহিত্যের সবচেয়ে গুরুত্বপূর্ণ টিকে থাকা রচনা রচনা করেছিলেন — ৩,১৮২ অনুপ্রাসমূলক পংক্তির একটি মহাকাব্য।'
    },
    majorWorks: {
      en: ['Beowulf'],
      bn: ['বেউলফ']
    },
    style: {
      en: 'Alliterative verse with elaborate kennings, heroic diction, and sophisticated narrative structure blending epic adventure with philosophical meditation.',
      bn: 'বিস্তৃত কেনিং, বীরত্বপূর্ণ শব্দচয়ন এবং পরিশীলিত আখ্যান কাঠামো সহ অনুপ্রাসমূলক পদ্য।'
    },
    contribution: {
      en: 'Created the foundational masterwork of English literature, establishing narrative conventions and thematic concerns that would echo through centuries of literary tradition.',
      bn: 'ইংরেজি সাহিত্যের ভিত্তিমূলক মাস্টারওয়ার্ক তৈরি করেছিলেন।'
    },
    quotes: {
      en: ['So times were pleasant for the people there until finally one, a fiend out of hell, began to work his evil in the world.'],
      bn: ['সেখানে মানুষের জন্য সময় আনন্দদায়ক ছিল যতক্ষণ না অবশেষে একজন, নরকের শয়তান, পৃথিবীতে তার মন্দ কাজ শুরু করল।']
    }
  },

  // Middle English
  {
    id: 'chaucer',
    name: { en: 'Geoffrey Chaucer', bn: 'জেফ্রি চসার' },
    birth: 'c. 1343',
    death: '1400',
    period: 'middle-english',
    intro: {
      en: 'The Father of English Literature, whose Canterbury Tales transformed English poetry and established the vernacular as a literary language.',
      bn: 'ইংরেজি সাহিত্যের জনক, যার ক্যান্টারবেরি টেলস ইংরেজি কবিতাকে রূপান্তরিত করেছিল।'
    },
    description: {
      en: 'Geoffrey Chaucer stands as the most important writer of the Middle English period and is widely regarded as the Father of English Literature. Born into a prosperous London family, he served in various diplomatic and civil service roles. His masterpiece, The Canterbury Tales, presents a vivid cross-section of 14th-century English society through a group of pilgrims traveling to Canterbury Cathedral. Chaucer\'s genius lies in his ability to combine humor, pathos, and social observation with literary sophistication, drawing on French, Italian, and Latin sources while creating something distinctly English.',
      bn: 'জেফ্রি চসার মধ্যযুগীয় ইংরেজি সময়ের সবচেয়ে গুরুত্বপূর্ণ লেখক এবং ব্যাপকভাবে ইংরেজি সাহিত্যের জনক হিসেবে বিবেচিত।'
    },
    majorWorks: {
      en: ['The Canterbury Tales', 'Troilus and Criseyde', 'The Book of the Duchess', 'The Parliament of Fowls', 'The House of Fame'],
      bn: ['ক্যান্টারবেরি টেলস', 'ট্রয়লাস এবং ক্রিসেইডি', 'দ্য বুক অফ দ্য ডাচেস', 'দ্য পার্লামেন্ট অফ ফাউলস', 'দ্য হাউস অফ ফেম']
    },
    style: {
      en: 'Master storyteller blending realism with comedy and satire. Pioneered the use of iambic pentameter and heroic couplets in English verse.',
      bn: 'মাস্টার গল্পকার যিনি বাস্তববাদকে কমেডি ও ব্যঙ্গের সাথে মিশ্রিত করেছেন।'
    },
    contribution: {
      en: 'Elevated English to a legitimate literary language, established the London dialect as the standard, and pioneered verse forms that would dominate English poetry for centuries.',
      bn: 'ইংরেজিকে একটি বৈধ সাহিত্যিক ভাষায় উন্নীত করেছিলেন।'
    },
    quotes: {
      en: ['Whan that Aprille with his shoures soote, the droghte of March hath perced to the roote.', 'Time and tide wait for no man.'],
      bn: ['যখন এপ্রিল তার মিষ্টি বৃষ্টি দিয়ে মার্চের খরা শিকড় পর্যন্ত ভেদ করেছে।', 'সময় এবং জোয়ার কারো জন্য অপেক্ষা করে না।']
    }
  },

  // Renaissance
  {
    id: 'shakespeare',
    name: { en: 'William Shakespeare', bn: 'উইলিয়াম শেকসপিয়র' },
    birth: '1564',
    death: '1616',
    period: 'renaissance',
    intro: {
      en: 'The Bard of Avon — the greatest writer in the English language and the world\'s greatest dramatist.',
      bn: 'এভনের কবি — ইংরেজি ভাষার সর্বশ্রেষ্ঠ লেখক এবং বিশ্বের সর্বশ্রেষ্ঠ নাট্যকার।'
    },
    description: {
      en: 'William Shakespeare is universally acknowledged as the greatest writer in the English language. Born in Stratford-upon-Avon, he became the most influential playwright and poet in Western literary history. His 37 plays span comedy, tragedy, history, and romance, exploring the depths of human nature with unmatched psychological insight. His 154 sonnets remain among the most celebrated poems ever written. Shakespeare invented over 1,700 words and countless phrases still in everyday use, fundamentally shaping the English language itself.',
      bn: 'উইলিয়াম শেকসপিয়র সর্বজনীনভাবে ইংরেজি ভাষার সর্বশ্রেষ্ঠ লেখক হিসেবে স্বীকৃত।'
    },
    majorWorks: {
      en: ['Hamlet', 'Macbeth', 'Othello', 'King Lear', 'Romeo and Juliet', 'A Midsummer Night\'s Dream', 'The Tempest', 'Sonnets'],
      bn: ['হ্যামলেট', 'ম্যাকবেথ', 'ওথেলো', 'কিং লিয়ার', 'রোমিও ও জুলিয়েট', 'আ মিডসামার নাইটস ড্রিম', 'দ্য টেম্পেস্ট', 'সনেটস']
    },
    style: {
      en: 'Unmatched mastery of blank verse, rich imagery, psychological depth, wordplay, and dramatic irony. Seamlessly moves between verse and prose.',
      bn: 'ব্ল্যাংক ভার্সে অতুলনীয় দক্ষতা, সমৃদ্ধ চিত্রকল্প, মনস্তাত্ত্বিক গভীরতা।'
    },
    contribution: {
      en: 'Shaped the English language, defined Western dramatic tradition, and created archetypal characters and plots that remain central to world literature and culture.',
      bn: 'ইংরেজি ভাষাকে আকৃতি দিয়েছেন, পশ্চিমা নাট্য ঐতিহ্যকে সংজ্ঞায়িত করেছেন।'
    },
    quotes: {
      en: ['To be, or not to be, that is the question.', 'All the world\'s a stage, and all the men and women merely players.', 'The course of true love never did run smooth.'],
      bn: ['হওয়া বা না হওয়া, এটাই প্রশ্ন।', 'সারা পৃথিবী একটি মঞ্চ, এবং সব পুরুষ ও নারী নিছক অভিনেতা।']
    }
  },
  {
    id: 'marlowe',
    name: { en: 'Christopher Marlowe', bn: 'ক্রিস্টোফার মার্লো' },
    birth: '1564',
    death: '1593',
    period: 'renaissance',
    intro: {
      en: 'A brilliant dramatist who pioneered blank verse in English drama and paved the way for Shakespeare.',
      bn: 'একজন উজ্জ্বল নাট্যকার যিনি ইংরেজি নাটকে ব্ল্যাংক ভার্সের পথিকৃৎ এবং শেকসপিয়রের পথ প্রশস্ত করেছিলেন।'
    },
    description: {
      en: 'Christopher Marlowe was Shakespeare\'s most important predecessor and contemporary, transforming English drama with his "mighty line" of blank verse. His plays feature ambitious protagonists who defy conventional morality. Doctor Faustus remains one of the most powerful treatments of the legend of a man who sells his soul to the devil.',
      bn: 'ক্রিস্টোফার মার্লো ছিলেন শেকসপিয়রের সবচেয়ে গুরুত্বপূর্ণ পূর্বসূরি ও সমসাময়িক।'
    },
    majorWorks: {
      en: ['Doctor Faustus', 'Tamburlaine the Great', 'The Jew of Malta', 'Edward II'],
      bn: ['ডক্টর ফাউস্টাস', 'ট্যাম্বারলেইন দ্য গ্রেট', 'দ্য জু অফ মাল্টা', 'এডওয়ার্ড দ্বিতীয়']
    },
    style: {
      en: 'Pioneered the use of dramatic blank verse ("mighty line"), featuring grand rhetoric, ambitious themes, and psychologically complex protagonists.',
      bn: 'নাটকীয় ব্ল্যাংক ভার্সের ("মাইটি লাইন") ব্যবহারে পথিকৃৎ।'
    },
    contribution: {
      en: 'Revolutionized English drama by establishing blank verse as the standard dramatic medium and creating the model of the tragic overreacher.',
      bn: 'ব্ল্যাংক ভার্সকে আদর্শ নাটকীয় মাধ্যম হিসেবে প্রতিষ্ঠা করে ইংরেজি নাটককে বিপ্লব ঘটিয়েছিলেন।'
    },
    quotes: {
      en: ['Was this the face that launched a thousand ships, and burnt the topless towers of Ilium?', 'Hell is just a frame of mind.'],
      bn: ['এটাই কি সেই মুখ যা হাজার জাহাজ পাঠিয়েছিল?']
    }
  },
  {
    id: 'john-milton',
    name: { en: 'John Milton', bn: 'জন মিল্টন' },
    birth: '1608',
    death: '1674',
    period: 'renaissance',
    intro: {
      en: 'The author of Paradise Lost, the greatest epic poem in the English language.',
      bn: 'প্যারাডাইস লস্টের লেখক, ইংরেজি ভাষার সর্বশ্রেষ্ঠ মহাকাব্য।'
    },
    description: {
      en: 'John Milton is regarded as one of the most learned and ambitious poets in English literary history. His magnum opus, Paradise Lost, is a twelve-book epic poem written in majestic blank verse that retells the biblical story of the Fall of Man. Composed while Milton was blind, the poem is remarkable for its grand style, theological depth, and the complex characterization of Satan.',
      bn: 'জন মিল্টনকে ইংরেজি সাহিত্যের ইতিহাসের সবচেয়ে পণ্ডিত ও উচ্চাকাঙ্ক্ষী কবিদের একজন হিসেবে বিবেচনা করা হয়।'
    },
    majorWorks: {
      en: ['Paradise Lost', 'Paradise Regained', 'Samson Agonistes', 'Lycidas', 'Areopagitica'],
      bn: ['প্যারাডাইস লস্ট', 'প্যারাডাইস রিগেইনড', 'স্যামসন অ্যাগনিস্টিস', 'লিসিডাস', 'এরিওপ্যাজিটিকা']
    },
    style: {
      en: 'Grand, Latinate blank verse with complex syntax, elaborate similes, and theological depth. His style is often described as "sublime."',
      bn: 'জটিল বাক্য গঠন, বিস্তৃত উপমা এবং ধর্মতাত্ত্বিক গভীরতা সহ মহিমান্বিত ব্ল্যাংক ভার্স।'
    },
    contribution: {
      en: 'Created the greatest English epic, expanded the possibilities of blank verse, and produced one of literature\'s most complex and debated characters in Satan.',
      bn: 'সর্বশ্রেষ্ঠ ইংরেজি মহাকাব্য রচনা করেছিলেন এবং ব্ল্যাংক ভার্সের সম্ভাবনা প্রসারিত করেছিলেন।'
    },
    quotes: {
      en: ['The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.', 'Better to reign in Hell, than serve in Heaven.'],
      bn: ['মন তার নিজস্ব জায়গা, এবং নিজেই নরককে স্বর্গ, স্বর্গকে নরক বানাতে পারে।']
    }
  },

  // Neoclassical
  {
    id: 'alexander-pope',
    name: { en: 'Alexander Pope', bn: 'আলেকজান্ডার পোপ' },
    birth: '1688',
    death: '1744',
    period: 'neoclassical',
    intro: {
      en: 'The master of the heroic couplet and the greatest satirical poet of the 18th century.',
      bn: 'বীরত্বমূলক কাপলের মাস্টার এবং ১৮ শতকের সর্বশ্রেষ্ঠ ব্যঙ্গ কবি।'
    },
    description: {
      en: 'Alexander Pope dominated English poetry in the first half of the 18th century with his brilliant wit, polished verse, and devastating satire. Despite physical disability from childhood tuberculosis of the spine, he became the first English poet to earn a living solely from his writing. His translation of Homer\'s Iliad and Odyssey was both a commercial and artistic triumph.',
      bn: 'আলেকজান্ডার পোপ ১৮ শতকের প্রথমার্ধে তার উজ্জ্বল বুদ্ধি, পরিমার্জিত পদ্য এবং ধ্বংসাত্মক ব্যঙ্গ দিয়ে ইংরেজি কবিতায় আধিপত্য বিস্তার করেছিলেন।'
    },
    majorWorks: {
      en: ['The Rape of the Lock', 'An Essay on Criticism', 'An Essay on Man', 'The Dunciad'],
      bn: ['দ্য রেপ অফ দ্য লক', 'অ্যান এসে অন ক্রিটিসিজম', 'অ্যান এসে অন ম্যান', 'দ্য ডানসিয়াড']
    },
    style: {
      en: 'Supreme command of the heroic couplet, brilliant epigrammatic wit, and masterful use of mock-heroic and satirical modes.',
      bn: 'বীরত্বমূলক কাপলের উপর সর্বোচ্চ কমান্ড, উজ্জ্বল এপিগ্রাম্যাটিক বুদ্ধি।'
    },
    contribution: {
      en: 'Perfected the heroic couplet as a vehicle for wit and satire, established critical principles that governed English literature for decades.',
      bn: 'বুদ্ধি ও ব্যঙ্গের বাহন হিসেবে বীরত্বমূলক কাপলকে পরিপূর্ণ করেছিলেন।'
    },
    quotes: {
      en: ['To err is human, to forgive divine.', 'A little learning is a dangerous thing.', 'Fools rush in where angels fear to tread.'],
      bn: ['ভুল করা মানবিক, ক্ষমা করা ঐশ্বরিক।', 'সামান্য শিক্ষা একটি বিপজ্জনক জিনিস।']
    }
  },
  {
    id: 'jonathan-swift',
    name: { en: 'Jonathan Swift', bn: 'জোনাথন সুইফট' },
    birth: '1667',
    death: '1745',
    period: 'neoclassical',
    intro: {
      en: 'The greatest prose satirist in English literature, author of Gulliver\'s Travels.',
      bn: 'ইংরেজি সাহিত্যের সর্বশ্রেষ্ঠ গদ্য ব্যঙ্গকার, গালিভার্স ট্রাভেলসের লেখক।'
    },
    description: {
      en: 'Jonathan Swift was an Anglo-Irish satirist, essayist, and political pamphleteer whose works remain among the most powerful satirical writings in Western literature. Gulliver\'s Travels, while often adapted as a children\'s story, is a savage indictment of human nature, politics, and society.',
      bn: 'জোনাথন সুইফট ছিলেন একজন অ্যাংলো-আইরিশ ব্যঙ্গকার, প্রাবন্ধিক এবং রাজনৈতিক পুস্তিকা লেখক।'
    },
    majorWorks: {
      en: ['Gulliver\'s Travels', 'A Modest Proposal', 'A Tale of a Tub', 'The Battle of the Books'],
      bn: ['গালিভার্স ট্রাভেলস', 'আ মডেস্ট প্রোপোজাল', 'আ টেল অফ আ টাব', 'দ্য ব্যাটল অফ দ্য বুকস']
    },
    style: {
      en: 'Masterful satirical prose combining irony, parody, and savage wit. Known for his clear, direct style that masks devastating criticism.',
      bn: 'বিদ্রূপ, প্যারোডি এবং তীব্র বুদ্ধি মিলিত মাস্টারফুল ব্যঙ্গাত্মক গদ্য।'
    },
    contribution: {
      en: 'Elevated prose satire to an art form, influencing generations of writers and establishing models of political and social criticism.',
      bn: 'গদ্য ব্যঙ্গকে একটি শিল্প রূপে উন্নীত করেছিলেন।'
    },
    quotes: {
      en: ['Satire is a sort of glass, wherein beholders do generally discover everybody\'s face but their own.'],
      bn: ['ব্যঙ্গ এক ধরনের আয়না, যেখানে দর্শকরা সাধারণত নিজেদের ছাড়া সবার মুখ আবিষ্কার করে।']
    }
  },

  // Romantic
  {
    id: 'william-wordsworth',
    name: { en: 'William Wordsworth', bn: 'উইলিয়াম ওয়ার্ডসওয়ার্থ' },
    birth: '1770',
    death: '1850',
    period: 'romantic',
    intro: {
      en: 'The father of English Romanticism who revolutionized poetry with his celebration of nature and common life.',
      bn: 'ইংরেজি রোমান্টিসিজমের জনক যিনি প্রকৃতি ও সাধারণ জীবনের উদযাপনে কবিতায় বিপ্লব ঘটিয়েছিলেন।'
    },
    description: {
      en: 'William Wordsworth, alongside Samuel Taylor Coleridge, launched the English Romantic movement with the publication of Lyrical Ballads (1798). His Preface to the second edition (1800) served as a manifesto for Romantic poetry, arguing that poetry should use "the real language of men" and draw inspiration from nature and rural life. His autobiographical masterpiece, The Prelude, traces the growth of the poet\'s mind.',
      bn: 'উইলিয়াম ওয়ার্ডসওয়ার্থ স্যামুয়েল টেলর কোলরিজের পাশাপাশি লিরিক্যাল ব্যালাডস প্রকাশের মাধ্যমে ইংরেজি রোমান্টিক আন্দোলন শুরু করেছিলেন।'
    },
    majorWorks: {
      en: ['Lyrical Ballads', 'The Prelude', 'Tintern Abbey', 'I Wandered Lonely as a Cloud', 'Ode: Intimations of Immortality'],
      bn: ['লিরিক্যাল ব্যালাডস', 'দ্য প্রিলিউড', 'টিন্টার্ন অ্যাবে', 'আই ওয়ান্ডার্ড লোনলি অ্যাজ আ ক্লাউড', 'ওড: ইনটিমেশনস অফ ইমরট্যালিটি']
    },
    style: {
      en: 'Simple, natural diction celebrating emotion, memory, and the restorative power of nature. Championed "emotion recollected in tranquility."',
      bn: 'সহজ, স্বাভাবিক শব্দচয়ন যা আবেগ, স্মৃতি এবং প্রকৃতির পুনরুদ্ধার শক্তি উদযাপন করে।'
    },
    contribution: {
      en: 'Co-founded the Romantic movement, democratized poetry by using everyday language, and established nature as a central poetic subject.',
      bn: 'রোমান্টিক আন্দোলনের সহ-প্রতিষ্ঠাতা, দৈনন্দিন ভাষা ব্যবহার করে কবিতাকে গণতন্ত্রীকরণ করেছিলেন।'
    },
    quotes: {
      en: ['I wandered lonely as a cloud that floats on high o\'er vales and hills.', 'Poetry is the spontaneous overflow of powerful feelings.', 'The child is father of the man.'],
      bn: ['আমি একটি মেঘের মতো একাকী ঘুরে বেড়ালাম যা উপত্যকা ও পাহাড়ের উপর দিয়ে ভেসে যায়।']
    }
  },
  {
    id: 'john-keats',
    name: { en: 'John Keats', bn: 'জন কিটস' },
    birth: '1795',
    death: '1821',
    period: 'romantic',
    intro: {
      en: 'A supreme lyric poet whose sensuous odes represent the pinnacle of English Romantic poetry.',
      bn: 'একজন সর্বোচ্চ গীতিকবি যার সংবেদনশীল ওডগুলি ইংরেজি রোমান্টিক কবিতার শীর্ষকে প্রতিনিধিত্ব করে।'
    },
    description: {
      en: 'Despite dying at just 25, John Keats produced some of the most beautiful and enduring poetry in the English language. His great odes — composed in a single remarkable burst of creativity in 1819 — explore beauty, mortality, art, and the tension between the ideal and the real with unmatched sensuous richness.',
      bn: 'মাত্র ২৫ বছর বয়সে মারা যাওয়া সত্ত্বেও, জন কিটস ইংরেজি ভাষার সবচেয়ে সুন্দর ও চিরস্থায়ী কিছু কবিতা রচনা করেছিলেন।'
    },
    majorWorks: {
      en: ['Ode to a Nightingale', 'Ode on a Grecian Urn', 'To Autumn', 'La Belle Dame sans Merci', 'Hyperion', 'Endymion'],
      bn: ['ওড টু আ নাইটিঙ্গেল', 'ওড অন আ গ্রেসিয়ান আর্ন', 'টু অটাম', 'লা বেল ডেম স্যান্স মার্সি', 'হাইপেরিয়ন', 'এন্ডিমিয়ন']
    },
    style: {
      en: 'Richly sensuous imagery, musical verse, and profound meditation on beauty, time, and mortality.',
      bn: 'সমৃদ্ধ সংবেদনশীল চিত্রকল্প, সুরেলা পদ্য, এবং সৌন্দর্য, সময় ও মৃত্যুর উপর গভীর ধ্যান।'
    },
    contribution: {
      en: 'Created some of the most perfect lyric poems in English, developed the concept of "Negative Capability," and demonstrated that beauty in art can transcend mortal limitations.',
      bn: 'ইংরেজিতে সবচেয়ে নিখুঁত কিছু গীতিকবিতা তৈরি করেছিলেন।'
    },
    quotes: {
      en: ['A thing of beauty is a joy forever.', '"Beauty is truth, truth beauty," — that is all ye know on earth, and all ye need to know.'],
      bn: ['সৌন্দর্যের জিনিস চিরকালের আনন্দ।']
    }
  },
  {
    id: 'percy-shelley',
    name: { en: 'Percy Bysshe Shelley', bn: 'পার্সি বিশ শেলি' },
    birth: '1792',
    death: '1822',
    period: 'romantic',
    intro: {
      en: 'A radical visionary poet celebrated for his lyrical genius and passionate idealism.',
      bn: 'একজন মৌলিক দূরদর্শী কবি যিনি তার গীতিময় প্রতিভা এবং আবেগপূর্ণ আদর্শবাদের জন্য পরিচিত।'
    },
    description: {
      en: 'Percy Bysshe Shelley was one of the major English Romantic poets, known for his radical political and social views, his lyric poetry, and his visionary idealism. His work combines passionate advocacy for liberty with stunning poetic craftsmanship.',
      bn: 'পার্সি বিশ শেলি ছিলেন অন্যতম প্রধান ইংরেজি রোমান্টিক কবি।'
    },
    majorWorks: {
      en: ['Ozymandias', 'Ode to the West Wind', 'To a Skylark', 'Prometheus Unbound', 'Adonais', 'A Defence of Poetry'],
      bn: ['ওজিম্যান্ডিয়াস', 'ওড টু দ্য ওয়েস্ট উইন্ড', 'টু আ স্কাইলার্ক', 'প্রমিথিউস আনবাউন্ড', 'অ্যাডোনাইস', 'আ ডিফেন্স অফ পোয়েট্রি']
    },
    style: {
      en: 'Visionary lyricism, rapid movement, vivid natural imagery, and passionate idealism fused with intellectual complexity.',
      bn: 'দূরদর্শী গীতিময়তা, দ্রুত গতি, প্রাণবন্ত প্রাকৃতিক চিত্রকল্প।'
    },
    contribution: {
      en: 'Championed the role of the poet as visionary and reformer, produced some of the finest lyric poetry in English.',
      bn: 'দূরদর্শী ও সংস্কারক হিসেবে কবির ভূমিকাকে সমর্থন করেছিলেন।'
    },
    quotes: {
      en: ['If Winter comes, can Spring be far behind?', 'Poets are the unacknowledged legislators of the world.'],
      bn: ['শীত যদি আসে, বসন্ত কি বহু দূরে?']
    }
  },

  // Victorian
  {
    id: 'charles-dickens',
    name: { en: 'Charles Dickens', bn: 'চার্লস ডিকেন্স' },
    birth: '1812',
    death: '1870',
    period: 'victorian',
    intro: {
      en: 'The greatest Victorian novelist, a master storyteller who gave voice to the poor and oppressed.',
      bn: 'সর্বশ্রেষ্ঠ ভিক্টোরিয়ান ঔপন্যাসিক, একজন মাস্টার গল্পকার যিনি দরিদ্র ও নিপীড়িতদের কণ্ঠ দিয়েছিলেন।'
    },
    description: {
      en: 'Charles Dickens was the most popular and influential novelist of the Victorian era. His works combined social criticism with humor, pathos, and unforgettable characters. His novels exposed the harsh conditions of industrial England, championing the cause of the poor and vulnerable. Dickens\'s serialized novels captivated audiences worldwide, and he remains one of the most widely read English authors.',
      bn: 'চার্লস ডিকেন্স ছিলেন ভিক্টোরিয়ান যুগের সবচেয়ে জনপ্রিয় ও প্রভাবশালী ঔপন্যাসিক।'
    },
    majorWorks: {
      en: ['Great Expectations', 'Oliver Twist', 'A Tale of Two Cities', 'David Copperfield', 'Bleak House', 'A Christmas Carol'],
      bn: ['গ্রেট এক্সপেক্টেশনস', 'অলিভার টুইস্ট', 'আ টেল অফ টু সিটিজ', 'ডেভিড কপারফিল্ড', 'ব্লিক হাউস', 'আ ক্রিসমাস ক্যারল']
    },
    style: {
      en: 'Vivid characterization, social realism, dramatic plotting, humor, and sentimentality. Master of serialized storytelling.',
      bn: 'প্রাণবন্ত চরিত্রায়ন, সামাজিক বাস্তববাদ, নাটকীয় প্লটিং, হাস্যরস এবং আবেগ।'
    },
    contribution: {
      en: 'Transformed the English novel into a vehicle for social reform, created enduring characters, and established serialization as a powerful literary format.',
      bn: 'ইংরেজি উপন্যাসকে সামাজিক সংস্কারের বাহনে রূপান্তরিত করেছিলেন।'
    },
    quotes: {
      en: ['It was the best of times, it was the worst of times.', 'No one is useless in this world who lightens the burdens of another.'],
      bn: ['এটি ছিল সবচেয়ে ভালো সময়, এটি ছিল সবচেয়ে খারাপ সময়।']
    }
  },
  {
    id: 'alfred-tennyson',
    name: { en: 'Alfred, Lord Tennyson', bn: 'আলফ্রেড, লর্ড টেনিসন' },
    birth: '1809',
    death: '1892',
    period: 'victorian',
    intro: {
      en: 'The Poet Laureate who became the voice of the Victorian age through his musical verse.',
      bn: 'পয়েট লরিয়েট যিনি তার সুরেলা পদ্যের মাধ্যমে ভিক্টোরিয়ান যুগের কণ্ঠস্বর হয়ে উঠেছিলেন।'
    },
    description: {
      en: 'Alfred, Lord Tennyson served as Poet Laureate for 42 years and embodied the spirit of the Victorian age. His poetry combines musical beauty with deep engagement with the intellectual and social issues of his time, including doubt, faith, progress, and loss.',
      bn: 'আলফ্রেড, লর্ড টেনিসন ৪২ বছর ধরে পয়েট লরিয়েট হিসেবে দায়িত্ব পালন করেছিলেন।'
    },
    majorWorks: {
      en: ['In Memoriam A.H.H.', 'The Charge of the Light Brigade', 'Ulysses', 'The Lady of Shalott', 'Idylls of the King'],
      bn: ['ইন মেমোরিয়াম', 'দ্য চার্জ অফ দ্য লাইট ব্রিগেড', 'ইউলিসিস', 'দ্য লেডি অফ শ্যালট', 'আইডিলস অফ দ্য কিং']
    },
    style: {
      en: 'Exquisite musicality, vivid imagery, and emotional depth. Master of various verse forms from lyric to epic narrative.',
      bn: 'অনুপম সুরেলাতা, প্রাণবন্ত চিত্রকল্প এবং আবেগীয় গভীরতা।'
    },
    contribution: {
      en: 'Gave poetic expression to Victorian faith, doubt, and aspiration. His musical verse set the standard for English poetry in the 19th century.',
      bn: 'ভিক্টোরিয়ান বিশ্বাস, সন্দেহ এবং আকাঙ্ক্ষাকে কাব্যিক অভিব্যক্তি দিয়েছিলেন।'
    },
    quotes: {
      en: ['\'Tis better to have loved and lost than never to have loved at all.', 'To strive, to seek, to find, and not to yield.'],
      bn: ['কখনও ভালোবাসা না পাওয়ার চেয়ে ভালোবেসে হারানো ভালো।']
    }
  },

  // Modern
  {
    id: 'ts-eliot',
    name: { en: 'T.S. Eliot', bn: 'টি.এস. এলিয়ট' },
    birth: '1888',
    death: '1965',
    period: 'modern',
    intro: {
      en: 'The most influential modernist poet, whose The Waste Land redefined 20th-century poetry.',
      bn: 'সবচেয়ে প্রভাবশালী আধুনিকতাবাদী কবি, যার দ্য ওয়েস্ট ল্যান্ড বিংশ শতাব্দীর কবিতাকে পুনর্সংজ্ঞায়িত করেছিল।'
    },
    description: {
      en: 'T.S. Eliot was born in America but became a British citizen, and his work fundamentally reshaped modern English poetry. The Waste Land (1922) captured the spiritual barrenness and cultural fragmentation of post-World War I civilization. His later work, including Four Quartets, explores time, memory, and spiritual redemption. He won the Nobel Prize in Literature in 1948.',
      bn: 'টি.এস. এলিয়ট আমেরিকায় জন্মগ্রহণ করেছিলেন কিন্তু ব্রিটিশ নাগরিক হয়েছিলেন।'
    },
    majorWorks: {
      en: ['The Waste Land', 'The Love Song of J. Alfred Prufrock', 'Four Quartets', 'The Hollow Men', 'Murder in the Cathedral'],
      bn: ['দ্য ওয়েস্ট ল্যান্ড', 'দ্য লাভ সং অফ জে. আলফ্রেড প্রুফ্রক', 'ফোর কোয়ার্টেটস', 'দ্য হলো মেন', 'মার্ডার ইন দ্য ক্যাথিড্রাল']
    },
    style: {
      en: 'Fragmented structure, allusive technique, mythical method, ironic tone, and precise imagery that revolutionized modern poetry.',
      bn: 'খণ্ডিত কাঠামো, ইঙ্গিতময় কৌশল, পৌরাণিক পদ্ধতি, বিদ্রূপাত্মক সুর।'
    },
    contribution: {
      en: 'Revolutionized English poetry with modernist techniques, established new critical standards, and created the most influential poem of the 20th century.',
      bn: 'আধুনিকতাবাদী কৌশল দিয়ে ইংরেজি কবিতায় বিপ্লব ঘটিয়েছিলেন।'
    },
    quotes: {
      en: ['April is the cruellest month.', 'This is the way the world ends, not with a bang but a whimper.', 'Do I dare disturb the universe?'],
      bn: ['এপ্রিল সবচেয়ে নিষ্ঠুর মাস।']
    }
  },
  {
    id: 'virginia-woolf',
    name: { en: 'Virginia Woolf', bn: 'ভার্জিনিয়া উলফ' },
    birth: '1882',
    death: '1941',
    period: 'modern',
    intro: {
      en: 'A pioneering modernist novelist and feminist thinker who revolutionized the art of fiction.',
      bn: 'একজন পথিকৃৎ আধুনিকতাবাদী ঔপন্যাসিক ও নারীবাদী চিন্তাবিদ যিনি কথাসাহিত্যের শিল্পে বিপ্লব ঘটিয়েছিলেন।'
    },
    description: {
      en: 'Virginia Woolf was a central figure in the Bloomsbury Group and one of the most innovative novelists of the 20th century. Her stream-of-consciousness technique explored the inner lives of her characters with extraordinary subtlety. Her essay A Room of One\'s Own remains a foundational text of feminist literary criticism.',
      bn: 'ভার্জিনিয়া উলফ ব্লুমসবেরি গ্রুপের একজন কেন্দ্রীয় ব্যক্তিত্ব ছিলেন।'
    },
    majorWorks: {
      en: ['Mrs Dalloway', 'To the Lighthouse', 'Orlando', 'The Waves', 'A Room of One\'s Own'],
      bn: ['মিসেস ড্যালোওয়ে', 'টু দ্য লাইটহাউস', 'অরল্যান্ডো', 'দ্য ওয়েভস', 'আ রুম অফ ওয়ানস ওউন']
    },
    style: {
      en: 'Stream-of-consciousness narrative, lyrical prose, psychological depth, and innovative handling of time and memory.',
      bn: 'চেতনাপ্রবাহ আখ্যান, গীতিময় গদ্য, মনস্তাত্ত্বিক গভীরতা।'
    },
    contribution: {
      en: 'Pioneered stream-of-consciousness technique, advanced feminist literary criticism, and expanded the possibilities of the novel form.',
      bn: 'চেতনাপ্রবাহ কৌশলের পথিকৃৎ ছিলেন।'
    },
    quotes: {
      en: ['One cannot think well, love well, sleep well, if one has not dined well.', 'A woman must have money and a room of her own if she is to write fiction.'],
      bn: ['কেউ ভালো চিন্তা করতে, ভালোবাসতে, ঘুমাতে পারে না, যদি সে ভালো খাওয়া না হয়।']
    }
  },

  // Postmodern
  {
    id: 'salman-rushdie',
    name: { en: 'Salman Rushdie', bn: 'সালমান রুশদি' },
    birth: '1947',
    death: '—',
    period: 'postmodern',
    intro: {
      en: 'A master of magical realism whose Midnight\'s Children redefined postcolonial fiction.',
      bn: 'জাদু বাস্তববাদের মাস্টার যার মিডনাইটস চিলড্রেন উত্তর-ঔপনিবেশিক কথাসাহিত্যকে পুনর্সংজ্ঞায়িত করেছিল।'
    },
    description: {
      en: 'Salman Rushdie is one of the most celebrated and controversial writers of the late 20th and early 21st centuries. Born in Bombay, his novel Midnight\'s Children won the Booker Prize and was later awarded the "Booker of Bookers." His work blends magical realism with historical and political themes, exploring identity, migration, and the postcolonial experience.',
      bn: 'সালমান রুশদি বিংশ শতাব্দীর শেষ ও একবিংশ শতাব্দীর শুরুর সবচেয়ে বিখ্যাত ও বিতর্কিত লেখকদের একজন।'
    },
    majorWorks: {
      en: ['Midnight\'s Children', 'The Satanic Verses', 'Shame', 'The Moor\'s Last Sigh', 'Shalimar the Clown'],
      bn: ['মিডনাইটস চিলড্রেন', 'দ্য স্যাটানিক ভার্সেস', 'শেইম', 'দ্য মুরস লাস্ট সাই', 'শালিমার দ্য ক্লাউন']
    },
    style: {
      en: 'Magical realism, exuberant language, narrative pyrotechnics, and multilayered storytelling that blends myth with history.',
      bn: 'জাদু বাস্তববাদ, উচ্ছ্বসিত ভাষা, আখ্যান পাইরোটেকনিক্স।'
    },
    contribution: {
      en: 'Pioneered a distinctive form of postcolonial magical realism, enriched the English novel with South Asian perspectives and linguistic inventiveness.',
      bn: 'উত্তর-ঔপনিবেশিক জাদু বাস্তববাদের একটি স্বতন্ত্র রূপের পথিকৃৎ।'
    },
    quotes: {
      en: ['Who what am I?', 'A poet\'s work is to name the unnameable, to point at frauds, to take sides, start arguments.'],
      bn: ['আমি কে কী?']
    }
  },
  {
    id: 'toni-morrison',
    name: { en: 'Toni Morrison', bn: 'টনি মরিসন' },
    birth: '1931',
    death: '2019',
    period: 'postmodern',
    intro: {
      en: 'Nobel laureate who illuminated the African American experience with poetic, haunting prose.',
      bn: 'নোবেল বিজয়ী যিনি কাব্যিক, ভৌতিক গদ্যে আফ্রিকান আমেরিকান অভিজ্ঞতাকে আলোকিত করেছিলেন।'
    },
    description: {
      en: 'Toni Morrison was the first African American woman to win the Nobel Prize in Literature (1993). Her novels explore the Black American experience across centuries, dealing with slavery, racism, identity, and community with extraordinary poetic power and moral complexity.',
      bn: 'টনি মরিসন ছিলেন সাহিত্যে নোবেল পুরস্কার (১৯৯৩) জয়ী প্রথম আফ্রিকান আমেরিকান নারী।'
    },
    majorWorks: {
      en: ['Beloved', 'Song of Solomon', 'The Bluest Eye', 'Sula', 'Jazz', 'A Mercy'],
      bn: ['বিলাভড', 'সং অফ সলোমন', 'দ্য ব্লুয়েস্ট আই', 'সুলা', 'জ্যাজ', 'আ মার্সি']
    },
    style: {
      en: 'Lyrical, mythic prose; non-linear narratives; deep psychological portraiture; and an unflinching exploration of race and identity.',
      bn: 'গীতিময়, পৌরাণিক গদ্য; অ-রৈখিক আখ্যান; গভীর মনস্তাত্ত্বিক প্রতিকৃতি।'
    },
    contribution: {
      en: 'Elevated African American literature to the highest level of international recognition, expanding the canon of English literature with essential perspectives.',
      bn: 'আফ্রিকান আমেরিকান সাহিত্যকে আন্তর্জাতিক স্বীকৃতির সর্বোচ্চ স্তরে উন্নীত করেছিলেন।'
    },
    quotes: {
      en: ['If you surrendered to the air, you could ride it.', 'Freeing yourself was one thing, claiming ownership of that freed self was another.'],
      bn: ['তুমি যদি বাতাসের কাছে আত্মসমর্পণ করতে, তুমি এটিতে চড়তে পারতে।']
    }
  }
];

export function getWritersByPeriod(periodId: string): Writer[] {
  return writers.filter(w => w.period === periodId);
}

export function getWriterById(id: string): Writer | undefined {
  return writers.find(w => w.id === id);
}

export function getPeriodById(id: string): Period | undefined {
  return periods.find(p => p.id === id);
}

export function searchWriters(query: string, language: 'en' | 'bn'): Writer[] {
  const q = query.toLowerCase();
  return writers.filter(w =>
    w.name[language].toLowerCase().includes(q) ||
    w.intro[language].toLowerCase().includes(q) ||
    w.period.toLowerCase().includes(q)
  );
}
