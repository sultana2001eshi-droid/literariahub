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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Caedmon.jpg/220px-Caedmon.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg/220px-Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Portrait_of_Geoffrey_Chaucer_%28%29_by_anonymous_%28%29.jpg/220px-Portrait_of_Geoffrey_Chaucer_%28%29_by_anonymous_%28%29.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Marlowe-Portrait-1585.jpg/220px-Marlowe-Portrait-1585.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/John_Milton_by_William_Faithorne_1670.jpg/220px-John_Milton_by_William_Faithorne_1670.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alexander_Pope_by_Michael_Dahl.jpg/220px-Alexander_Pope_by_Michael_Dahl.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jonathan_Swift_by_Charles_Jervas_detail.jpg/220px-Jonathan_Swift_by_Charles_Jervas_detail.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Benjamin_Robert_Haydon_-_William_Wordsworth.jpg/220px-Benjamin_Robert_Haydon_-_William_Wordsworth.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/John_Keats_by_William_Hilton.jpg/220px-John_Keats_by_William_Hilton.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Percy_Bysshe_Shelley_by_Alfred_Clint.jpg/220px-Percy_Bysshe_Shelley_by_Alfred_Clint.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/220px-Dickens_Gurney_head.jpg',
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
  },

  // Additional Writers
  {
  id: 'cynewulf',
  name: { en: 'Cynewulf', bn: 'সিনিউলফ' },
  birth: 'c. 750',
  death: 'c. 820',
  period: 'old-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CodexExoniensis.jpg/220px-CodexExoniensis.jpg',
  intro: { en: 'One of the few named poets of Old English literature, known for his unique runic signatures.', bn: 'পুরানো ইংরেজি সাহিত্যের কয়েকজন নামধারী কবিদের মধ্যে একজন, যিনি তার বিশেষ রুনিক স্বাক্ষরের জন্য পরিচিত।' },
  description: { en: 'Cynewulf is credited with four major poems in the Exeter and Vercelli books: Christ II, Elene, The Fates of the Apostles, and Juliana. His work demonstrates a sophisticated blend of Germanic heroic tradition and Christian theology. The presence of his runic signatures marks a transition from oral tradition to a more self-conscious literate culture.', bn: 'সিনিউলফকে এক্সেটার এবং ভার্সেলি বইয়ের চারটি প্রধান কবিতার কৃতিত্ব দেওয়া হয়। তাঁর কাজ জার্মানিক বীরত্বপূর্ণ ঐতিহ্য এবং খ্রিস্টান ধর্মতত্ত্বের একটি পরিশীলিত মিশ্রণ প্রদর্শন করে। তাঁর রুনিক স্বাক্ষরের উপস্থিতি মৌখিক ঐতিহ্য থেকে সচেতন সাক্ষর সংস্কৃতিতে রূপান্তরের ইঙ্গিত দেয়।' },
  majorWorks: { en: ['The Fates of the Apostles', 'Elene', 'Juliana', 'Christ II'], bn: ['দ্য ফেটস অফ দ্য অ্যাপোস্টলস', 'এলেন', 'জুলিয়ানা', 'ক্রাইস্ট ২'] },
  style: { en: 'Alliterative verse with complex runic acrostics and lyrical devotional intensity.', bn: 'জটিল রুনিক অ্যাক্রোস্টিক এবং গীতিধর্মী ভক্তিপূর্ণ তীব্রতা সহ অনুপ্রাসযুক্ত শ্লোক।' },
  contribution: { en: 'Established the identity of the individual poet in an era dominated by anonymous oral tradition.', bn: 'বেনামী মৌখিক ঐতিহ্যের আধিপত্যের যুগে ব্যক্তিগত কবির পরিচয় প্রতিষ্ঠা করেছিলেন।' },
  quotes: { en: ['Now I must seek with my soul another land.'], bn: ['এখন আমাকে আমার আত্মা নিয়ে অন্য এক ভূমি অন্বেষণ করতে হবে।'] }
},
{
  id: 'venerable-bede',
  name: { en: 'The Venerable Bede', bn: 'দ্য ভেনারেবল বিড' },
  birth: '672',
  death: '735',
  period: 'old-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Venerable_Bede_by_J._Doyle_Penrose_1902.jpg/220px-The_Venerable_Bede_by_J._Doyle_Penrose_1902.jpg',
  intro: { en: 'An English monk and scholar, often described as the father of English history.', bn: 'একজন ইংরেজ সন্ন্যাসী এবং পণ্ডিত, যাকে প্রায়শই ইংরেজ ইতিহাসের জনক বলা হয়।' },
  description: { en: 'Bede was a polymath based at the Monkwearmouth-Jarrow Abbey, whose most significant work provides the primary source for early Anglo-Saxon history. His writings encompass theology, science, and linguistics. He is also responsible for popularizing the AD (Anno Domini) dating system used in modern calendars.', bn: 'বিড ছিলেন মঙ্কওয়্যারমাউথ-জারো অ্যাবের একজন বহুবিদ পণ্ডিত, যার কাজ প্রাথমিক অ্যাংলো-স্যাক্সন ইতিহাসের প্রধান উৎস। তাঁর লেখায় ধর্মতত্ত্ব, বিজ্ঞান এবং ভাষাতত্ত্ব অন্তর্ভুক্ত রয়েছে। আধুনিক ক্যালেন্ডারে ব্যবহৃত AD বা খ্রিস্টাব্দ গণনা পদ্ধতি জনপ্রিয় করার নেপথ্যে তিনি ছিলেন।' },
  majorWorks: { en: ['Ecclesiastical History of the English People', 'The Reckoning of Time'], bn: ['একলেসিয়াসটিক্যাল হিস্টোরি অফ দ্য ইংলিশ পিপল', 'দ্য রেকনিং অফ টাইম'] },
  style: { en: 'Clear, authoritative Latin prose with meticulous chronological detail.', bn: 'সূক্ষ্ম কালানুক্রমিক বিবরণ সহ স্বচ্ছ ও প্রামাণিক ল্যাটিন গদ্য।' },
  contribution: { en: 'Provided the first unified narrative of the development of the English nation and church.', bn: 'ইংরেজ জাতি ও চার্চের বিকাশের প্রথম ঐক্যবদ্ধ আখ্যান প্রদান করেন।' },
  quotes: { en: ['It is better to build bridges than walls.'], bn: ['দেওয়াল তৈরির চেয়ে সেতু তৈরি করা ভালো।'] }
},
{
  id: 'king-alfred',
  name: { en: 'King Alfred the Great', bn: 'কিং অ্যালফ্রেড দ্য গ্রেট' },
  birth: '849',
  death: '899',
  period: 'old-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/King_Alfred_the_Great_by_H._P._Bone.jpg/220px-King_Alfred_the_Great_by_H._P._Bone.jpg',
  intro: { en: 'King of Wessex who promoted education and translated major Latin works into Old English.', bn: 'ওয়েসেক্সের রাজা যিনি শিক্ষার প্রসার ঘটিয়েছিলেন এবং ল্যাটিন কাজগুলো পুরানো ইংরেজিতে অনুবাদ করেছিলেন।' },
  description: { en: 'Alfred’s literary contribution was foundational in establishing English as a language of scholarship. He initiated the Anglo-Saxon Chronicle and personally translated works by Boethius and Gregory the Great. His program of vernacular literacy aimed to revive the intellectual life of England after the Viking devastations.', bn: 'পাণ্ডিত্যের ভাষা হিসেবে ইংরেজিকে প্রতিষ্ঠিত করার ক্ষেত্রে অ্যালফ্রেডের সাহিত্যিক অবদান ছিল মৌলিক। তিনি ‘অ্যাংলো-স্যাক্সন ক্রনিকল’ শুরু করেন এবং বোয়েথিয়াস ও গ্রেগরি দ্য গ্রেটের কাজগুলো ব্যক্তিগতভাবে অনুবাদ করেন। তাঁর দেশীয় সাক্ষরতার কর্মসূচি ভাইকিং ধ্বংসলীলার পর ইংল্যান্ডের বুদ্ধিবৃত্তিক জীবন পুনরুজ্জীবিত করার লক্ষ্য ছিল।' },
  majorWorks: { en: ['The Anglo-Saxon Chronicle', 'Translation of Boethius'], bn: ['দ্য অ্যাংলো-স্যাক্সন ক্রনিকল', 'ট্রান্সলেশন অফ বোয়েথিয়াস'] },
  style: { en: 'Educational, didactic, and accessible prose intended for the restoration of wisdom.', bn: 'প্রজ্ঞা পুনরুদ্ধারের উদ্দেশ্যে প্রণীত শিক্ষামূলক এবং সহজ গদ্য।' },
  contribution: { en: 'Saved English literacy and fostered the growth of the English vernacular.', bn: 'ইংরেজি সাক্ষরতাকে রক্ষা করেছিলেন এবং ইংরেজি দেশজ ভাষার বিকাশকে লালন করেছিলেন।' },
  quotes: { en: ['I desired to live worthily as long as I lived.'], bn: ['আমি যতদিন বেঁচে ছিলাম, মর্যাদার সাথে বাঁচতে চেয়েছিলাম।'] }
},
{
  id: 'william-langland',
  name: { en: 'William Langland', bn: 'উইলিয়াম ল্যাংল্যান্ড' },
  birth: 'c. 1332',
  death: 'c. 1386',
  period: 'middle-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Piers_Plowman_MS_Laud_622.jpg/220px-Piers_Plowman_MS_Laud_622.jpg',
  intro: { en: 'The presumed author of Piers Plowman, a masterpiece of Middle English alliterative verse.', bn: 'পিয়ার্স প্লাউম্যান-এর অনুমিত লেখক, যা মধ্য ইংরেজি অনুপ্রাসযুক্ত শ্লোকের একটি শ্রেষ্ঠ শিল্পকর্ম।' },
  description: { en: 'Language’s Piers Plowman is a complex allegorical dream vision that critiques contemporary social and religious corruption. Through the character of Will, the poem explores the spiritual journey toward truth and social justice. It remains one of the most significant works of the 14th-century "alliterative revival."', bn: 'ল্যাংল্যান্ডের পিয়ার্স প্লাউম্যান একটি জটিল রূপক স্বপ্ন-দর্শন যা সমসাময়িক সামাজিক ও ধর্মীয় দুর্নীতির সমালোচনা করে। উইলের চরিত্রের মাধ্যমে কবিতাটি সত্য ও সামাজিক ন্যায়বিচারের দিকে আধ্যাত্মিক যাত্রা অন্বেষণ করে।' },
  majorWorks: { en: ['Piers Plowman'], bn: ['পিয়ার্স প্লাউম্যান'] },
  style: { en: 'Socially conscious, highly allegorical, and strictly alliterative.', bn: 'সামাজিক সচেতনতা সম্পন্ন, উচ্চমাত্রায় রূপক এবং কঠোরভাবে অনুপ্রাসযুক্ত।' },
  contribution: { en: 'Pioneered the use of the dream vision to address radical social and theological questions.', bn: 'আমূল সামাজিক এবং ধর্মতাত্ত্বিক প্রশ্নগুলি সমাধানের জন্য স্বপ্ন-দর্শনের ব্যবহার শুরু করেন।' },
  quotes: { en: ['Love is the medicine of heaven.'], bn: ['ভালোবাসা হলো স্বর্গের মহৌষধ।'] }
},
{
  id: 'julian-of-norwich',
  name: { en: 'Julian of Norwich', bn: 'জুলিয়ান অফ নরউইচ' },
  birth: '1343',
  death: '1416',
  period: 'middle-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lady_Julian_of_Norwich_Window.jpg/220px-Lady_Julian_of_Norwich_Window.jpg',
  intro: { en: 'An English anchorite and the first woman known to have written a book in the English language.', bn: 'একজন ইংরেজ সন্ন্যাসিনী এবং ইংরেজি ভাষায় বই লেখা প্রথম পরিচিত মহিলা।' },
  description: { en: 'Julian lived in a cell attached to the church of St Julian, Norwich. Her work, Revelations of Divine Love, records a series of mystical visions she experienced during a severe illness. Her theology is notable for its emphasis on God’s maternal love and the ultimate goodness of creation.', bn: 'জুলিয়ান নরউইচের সেন্ট জুলিয়ান গির্জার সাথে সংযুক্ত একটি কক্ষে বাস করতেন। তাঁর কাজ ‘রেভেলেশন অফ ডিভাইন লাভ’ একটি গুরুতর অসুস্থতার সময় তিনি যে রহস্যময় দৃষ্টিভঙ্গি অনুভব করেছিলেন তা লিপিবদ্ধ করে। তাঁর ধর্মতত্ত্ব ঈশ্বরের মাতৃত্বসুলভ প্রেম এবং সৃষ্টির পরম মঙ্গলের উপর জোর দেওয়ার জন্য উল্লেখযোগ্য।' },
  majorWorks: { en: ['Revelations of Divine Love'], bn: ['রেভেলেশন অফ ডিভাইন লাভ'] },
  style: { en: 'Introspective, lyrical prose focusing on mystical experience and theological optimism.', bn: 'রহস্যময় অভিজ্ঞতা এবং ধর্মতাত্ত্বিক আশাবাদের উপর দৃষ্টি নিবদ্ধ করে আত্মদর্শনমূলক ও গীতিময় গদ্য।' },
  contribution: { en: 'Introduced feminine metaphors for the divine and provided a significant female voice in Middle English literature.', bn: 'ঐশ্বরিক সত্তার জন্য নারীবাচক রূপক প্রবর্তন করেন এবং মধ্য ইংরেজি সাহিত্যে একজন উল্লেখযোগ্য নারী কণ্ঠস্বর প্রদান করেন।' },
  quotes: { en: ['All shall be well, and all shall be well, and all manner of thing shall be well.'], bn: ['সবই ভালো হবে, এবং সবকিছুই ভালো হবে, এবং সর্বপ্রকার বিষয়ই ভালো হবে।'] }
},
{
  id: 'sir-thomas-malory',
  name: { en: 'Sir Thomas Malory', bn: 'স্যার থমাস ম্যালোরি' },
  birth: 'c. 1415',
  death: '1471',
  period: 'middle-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Le_Morte_d_Arthur.jpg/220px-Le_Morte_d_Arthur.jpg',
  intro: { en: 'Compiler of Le Morte d\'Arthur, the definitive collection of Arthurian legends.', bn: 'লি মর্তে ডি আর্থার-এর সংকলক, যা আর্থুরিয়ান কিংবদন্তির একটি নির্দিষ্ট সংগ্রহ।' },
  description: { en: 'Malory unified disparate French and English Arthurian romances into a cohesive prose narrative while imprisoned. His work captures the rise and fall of King Arthur, the knights of the Round Table, and the quest for the Holy Grail. It solidified the Arthurian mythos for future generations of English-speaking readers.', bn: 'ম্যালোরি কারাগারে থাকাকালীন অসম্বন্ধ ফরাসি এবং ইংরেজি আর্থুরিয়ান রোমান্সগুলিকে একটি সুসংগত গদ্য আখ্যানে একত্রিত করেছিলেন। তাঁর কাজ রাজা আর্থার, রাউন্ড টেবিলের বীরগণ এবং হলি গ্রেইলের অনুসন্ধানের উত্থান-পতনকে তুলে ধরে।' },
  majorWorks: { en: ["Le Morte d'Arthur"], bn: ['লি মর্তে ডি আর্থার'] },
  style: { en: 'A blend of chivalric romance and tragic realism in straightforward Middle English prose.', bn: 'সরল মধ্য ইংরেজি গদ্যে বীরত্বপূর্ণ রোমান্স এবং করুণ বাস্তববাদের মিশ্রণ।' },
  contribution: { en: 'Created the foundational text for the legend of King Arthur in English literature.', bn: 'ইংরেজি সাহিত্যে রাজা আর্থারের কিংবদন্তির জন্য মৌলিক পাঠ্য তৈরি করেছিলেন।' },
  quotes: { en: ['Whoso pulleth out this sword from this stone...'], bn: ['যে কেউ এই পাথর থেকে এই তরবারিটি বের করবে...'] }
},
{
  id: 'john-gower',
  name: { en: 'John Gower', bn: 'জন গাওয়ার' },
  birth: '1330',
  death: '1408',
  period: 'middle-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/John_Gower_painting.jpg/220px-John_Gower_painting.jpg',
  intro: { en: 'A contemporary and personal friend of Geoffrey Chaucer, known for writing in three languages.', bn: 'জেফ্রি চসারের সমসাময়িক এবং ঘনিষ্ঠ বন্ধু, যিনি তিনটি ভাষায় লেখার জন্য পরিচিত।' },
  description: { en: 'Gower composed major works in French, Latin, and English, with Confessio Amantis being his chief English contribution. He was concerned with moral philosophy and the role of the king. His poetry often explores the tension between duty and desire within the framework of romantic love.', bn: 'গাওয়ার ফরাসি, ল্যাটিন এবং ইংরেজি তিনটি ভাষাতেই প্রধান কাজগুলো রচনা করেছিলেন, যার মধ্যে ‘কনফেশিও আমান্টিস’ তাঁর প্রধান ইংরেজি অবদান। তিনি নৈতিক দর্শন এবং রাজার ভূমিকা নিয়ে চিন্তিত ছিলেন।' },
  majorWorks: { en: ['Confessio Amantis', 'Vox Clamantis'], bn: ['কনফেশিও আমান্টিস', 'ভক্স ক্ল্যামান্টিস'] },
  style: { en: 'Moralistic, formal, and polished narrative poetry.', bn: 'নীতিবাদী, আনুষ্ঠানিক এবং পরিশীলিত আখ্যানমূলক কবিতা।' },
  contribution: { en: 'Helped establish Middle English as a literary language alongside Chaucer.', bn: 'চসারের পাশাপাশি সাহিত্যিক ভাষা হিসেবে মধ্য ইংরেজি প্রতিষ্ঠা করতে সাহায্য করেছিলেন।' },
  quotes: { en: ['Love is a spirit, all of honey and gall.'], bn: ['ভালোবাসা এক আত্মা, যা মধু এবং তিক্তার সংমিশ্রণ।'] }
},
{
  id: 'pearl-poet',
  name: { en: 'The Pearl Poet', bn: 'দ্য পার্ল পোয়েট' },
  birth: '14th Century',
  death: 'N/A',
  period: 'middle-english',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Green_Knight_and_Gawain.jpg/220px-Green_Knight_and_Gawain.jpg',
  intro: { en: 'The anonymous author of Sir Gawain and the Green Knight and Pearl.', bn: 'স্যার গাওয়েন অ্যান্ড দ্য গ্রিন নাইট এবং পার্ল-এর বেনামী লেখক।' },
  description: { en: 'Identified by the unique Cheshire-dialect of his four surviving poems, this poet is a master of alliteration and sophisticated structure. His works bridge the gap between courtly romance and spiritual allegory. He is considered one of the greatest technical poets of the Middle Ages.', bn: 'তাঁর টিকে যাওয়া চারটি কবিতার বিশেষ চেশায়ার-উপভাষার দ্বারা পরিচিত এই কবি অনুপ্রাস এবং পরিশীলিত কাঠামোর একজন ওস্তাদ। তাঁর কাজগুলো রাজকীয় রোমান্স এবং আধ্যাত্মিক রূপকের মধ্যে সেতুবন্ধন তৈরি করে।' },
  majorWorks: { en: ['Sir Gawain and the Green Knight', 'Pearl', 'Patience'], bn: ['স্যার গাওয়েন অ্যান্ড দ্য গ্রিন নাইট', 'পার্ল', 'পেশেন্স'] },
  style: { en: 'Ornate alliterative verse with complex symbolism and rhythmic precision.', bn: 'জটিল প্রতীকী এবং ছন্দবদ্ধ নির্ভুলতা সহ অলংকৃত অনুপ্রাসযুক্ত শ্লোক।' },
  contribution: { en: 'Authored the finest chivalric romance and elegiac dream vision of the Middle English period.', bn: 'মধ্য ইংরেজি আমলের শ্রেষ্ঠ বীরত্বপূর্ণ রোমান্স এবং শোকসন্তপ্ত স্বপ্ন-দর্শন রচনা করেছেন।' },
  quotes: { en: ['I am the weakest, well I know, and of wit feeblest.'], bn: ['আমি সবচেয়ে দুর্বল, আমি জানি, এবং বুদ্ধিতেও ক্ষীণতম।'] }
},
{
  id: 'edmund-spenser',
  name: { en: 'Edmund Spenser', bn: 'এডমন্ড স্পেন্সার' },
  birth: '1552',
  death: '1599',
  period: 'renaissance',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Edmund_Spenser_oil_painting.jpg/220px-Edmund_Spenser_oil_painting.jpg',
  intro: { en: 'The "poet’s poet," famous for his epic allegory The Faerie Queene.', bn: 'কবিদের কবি হিসেবে পরিচিত, তাঁর মহাকাব্যিক রূপক দ্য ফেয়ারি কুইনের জন্য বিখ্যাত।' },
  description: { en: 'Spenser combined the Italian epic tradition with English patriotism and Protestant ethics. He invented the "Spenserian stanza" and influenced generations of writers from Milton to the Romantics. His work is characterized by lush imagery and linguistic archaism.', bn: 'স্পেন্সার ইতালীয় মহাকাব্যিক ঐতিহ্যের সাথে ইংরেজ দেশপ্রেম এবং প্রোটেস্ট্যান্ট নীতিশাস্ত্রের সমন্বয় ঘটিয়েছিলেন। তিনি "স্পেন্সারিয়ান স্ট্যাঞ্জা" উদ্ভাবন করেন এবং মিল্টন থেকে রোমান্টিক কবিদের প্রভাবিত করেন।' },
  majorWorks: { en: ['The Faerie Queene', 'The Shepheardes Calender'], bn: ['দ্য ফেয়ারি কুইন', 'দ্য শেফার্ডস ক্যালেন্ডার'] },
  style: { en: 'Elaborate archaisms, dense allegory, and melodic, innovative stanzaic forms.', bn: 'বিস্তৃত প্রাচীন ভাষা, ঘন রূপক এবং সুরেলা, উদ্ভাবনী স্তবক শৈলী।' },
  contribution: { en: 'Defined the high Elizabethan style and established the English epic form.', bn: 'উচ্চ এলিজাবেথীয় শৈলীকে সংজ্ঞায়িত করেছিলেন এবং ইংরেজি মহাকাব্যের রূপ প্রতিষ্ঠা করেছিলেন।' },
  quotes: { en: ['The noblest mind the best contentment has.'], bn: ['মহৎ মনই সেরা সন্তুষ্টির অধিকারী।'] }
},
{
  id: 'ben-jonson',
  name: { en: 'Ben Jonson', bn: 'বেন জনসন' },
  birth: '1572',
  death: '1637',
  period: 'renaissance',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ben_Jonson_by_Abraham_Blyenberch.jpg/220px-Ben_Jonson_by_Abraham_Blyenberch.jpg',
  intro: { en: 'A dominant dramatist and poet of the Jacobean era, known for his "comedy of humours."', bn: 'জ্যাকোবিয়ান যুগের একজন প্রভাবশালী নাট্যকার ও কবি, যিনি তার "কমেডি অফ হিউমার্স" এর জন্য পরিচিত।' },
  description: { en: 'Jonson was a classical perfectionist whose plays satirized the follies of London society. He enjoyed royal patronage and was a central figure in the literary circles of the Mermaid Tavern. His poetry is marked by clarity, balance, and a focus on social virtue.', bn: 'জনসন ছিলেন একজন ক্ল্যাসিক্যাল নিখুঁতবাদী যার নাটকগুলো লন্ডনের সমাজের মূর্খতাকে ব্যঙ্গ করত। তিনি রাজকীয় পৃষ্ঠপোষকতা উপভোগ করতেন এবং মারমেইড ট্যাভার্নের সাহিত্যিকCircles-এ ছিলেন কেন্দ্রীয় ব্যক্তিত্ব।' },
  majorWorks: { en: ['Volpone', 'The Alchemist', 'Every Man in His Humour'], bn: ['ভলপোন', 'দ্য অ্যালকেমিস্ট', 'এভরি ম্যান ইন হিজ হিউমার'] },
  style: { en: 'Satirical, neoclassical, and structured with intellectual rigor.', bn: 'ব্যঙ্গাত্মক, নব্য-ধ্রুপদী এবং বুদ্ধিবৃত্তিক কঠোরতার সাথে কাঠামোবদ্ধ।' },
  contribution: { en: 'Popularized the comedy of humours and established standards for English literary criticism.', bn: 'কমেডি অফ হিউমার্স জনপ্রিয় করেছিলেন এবং ইংরেজি সাহিত্য সমালোচনার মানদণ্ড প্রতিষ্ঠা করেছিলেন।' },
  quotes: { en: ['He was not of an age, but for all time.'], bn: ['তিনি কোনও একটি যুগের নন, বরং সর্বকালের।'] }
},
{
  id: 'john-donne',
  name: { en: 'John Donne', bn: 'জন ডান' },
  birth: '1572',
  death: '1631',
  period: 'renaissance',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/John_Donne_by_Isaac_Oliver.jpg/220px-John_Donne_by_Isaac_Oliver.jpg',
  intro: { en: 'The leading figure of the Metaphysical poets, known for his complex metaphors and religious intensity.', bn: 'মেটাফিজিক্যাল কবিদের প্রধান ব্যক্তিত্ব, তাঁর জটিল রূপক এবং ধর্মীয় তীব্রতার জন্য পরিচিত।' },
  description: { en: 'Donne’s poetry is characterized by "conceits"—startling and unconventional comparisons between widely different objects. His work spans erotic love poetry in his early years to profound, agonized meditations on mortality and God as the Dean of St. Paul’s. He challenged the smooth flow of Elizabethan verse with colloquial energy.', bn: 'ডানের কবিতার বৈশিষ্ট্য হলো "কনসিট"—খুবই ভিন্নধর্মী বস্তুর মধ্যে চমকপ্রদ এবং অপ্রচলিত তুলনা। তাঁর কাজ যৌবনের প্রেমমূলক কবিতা থেকে শুরু করে সেন্ট পলসের ডিন হিসেবে মৃত্যু ও ঈশ্বর নিয়ে গভীর মননশীল ধ্যান পর্যন্ত বিস্তৃত।' },
  majorWorks: { en: ['The Flea', 'Holy Sonnets', 'A Valediction: Forbidding Mourning'], bn: ['দ্য ফ্লী', 'হলি সনেট', 'আ ভ্যালেডিকশন: ফরবিডিং মর্নিং'] },
  style: { en: 'Paradoxical, intellectual, and rhythmically abrupt with inventive metaphors.', bn: 'হেঁয়ালিভরা, বুদ্ধিবৃত্তিক এবং উদ্ভাবনী রূপক সহ ছন্দময়ভাবে আকস্মিক।' },
  contribution: { en: 'Founded the Metaphysical school of poetry, blending intellect with emotion.', bn: 'আবেগের সাথে বুদ্ধিবৃত্তির মিশ্রণ ঘটিয়ে মেটাফিজিক্যাল স্কুল অফ পোয়েট্রি প্রতিষ্ঠা করেন।' },
  quotes: { en: ['No man is an island, entire of itself.'], bn: ['কোনো মানুষই বিচ্ছিন্ন দ্বীপ নয়।'] }
},
{
  id: 'philip-sidney',
  name: { en: 'Sir Philip Sidney', bn: 'স্যার ফিলিপ সিডনি' },
  birth: '1554',
  death: '1586',
  period: 'renaissance',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sir_Philip_Sidney_from_NPG.jpg/220px-Sir_Philip_Sidney_from_NPG.jpg',
  intro: { en: 'The ideal Elizabethan courtier, poet, and soldier who wrote the first great English sonnet sequence.', bn: 'আদর্শ এলিজাবেথীয় দরবারী, কবি এবং সৈনিক যিনি প্রথম মহান ইংরেজি সনেট সিরিজ লিখেছিলেন।' },
  description: { en: 'Sidney’s Astrophil and Stella established the sonnet sequence in England. His Defense of Poesy remains one of the most important theoretical justifications for literature. A tragic death in battle cemented his reputation as the quintessential Renaissance man.', bn: 'সিডনির "অ্যাস্ট্রোফিল অ্যান্ড স্টেলা" ইংল্যান্ডে সনেট সিরিজ প্রতিষ্ঠা করেছিল। তাঁর "ডিফেন্স অফ পোয়েসি" সাহিত্যের অন্যতম গুরুত্বপূর্ণ তাত্ত্বিক সমর্থন হিসেবে অবিকৃত রয়েছে।' },
  majorWorks: { en: ['Astrophil and Stella', 'The Defence of Poesy'], bn: ['অ্যাস্ট্রোফিল অ্যান্ড স্টেলা', 'দ্য ডিফেন্স অফ পোয়েসি'] },
  style: { en: 'Elegant, courtly, and philosophically rigorous with Petrarchan influence.', bn: 'পেত্রার্কান প্রভাবে মার্জিত, দরবারী এবং দার্শনিক কঠোরতা সম্পন্ন।' },
  contribution: { en: 'Pioneered the English sonnet sequence and formal literary criticism.', bn: 'ইংরেজি সনেট ধারা এবং আনুষ্ঠানিক সাহিত্য সমালোচনার পথপ্রদর্শক ছিলেন।' },
  quotes: { en: ['Fool, said my Muse to me, look in thy heart, and write.'], bn: ['মূর্খ, আমার কাব্যলক্ষ্মী আমাকে বলল, তোমার হৃদয়ে তাকাও এবং লেখো।'] }
},
{
  id: 'francis-bacon',
  name: { en: 'Francis Bacon', bn: 'ফ্রান্সিস বেকন' },
  birth: '1561',
  death: '1626',
  period: 'renaissance',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Francis_Bacon%2C_Viscount_St_Alban_by_John_Vanderbank.jpg/220px-Francis_Bacon%2C_Viscount_St_Alban_by_John_Vanderbank.jpg',
  intro: { en: 'Philosopher, statesman, and the father of empiricism who transformed the English essay.', bn: 'দার্শনিক, রাষ্ট্রনায়ক এবং অভিজ্ঞতাবাদের জনক যিনি ইংরেজি প্রবন্ধের রূপান্তর ঘটিয়েছিলেন।' },
  description: { en: 'Bacon is best known for his advocacy of the scientific method and his pithy, aphoristic essays. His work emphasized observation and induction over abstract reasoning. His literary style is marked by brevity, wisdom, and practical utility.', bn: 'বেকন বৈজ্ঞানিক পদ্ধতির সমর্থন এবং তাঁর সংক্ষিপ্ত, নীতিবাক্যপূর্ণ প্রবন্ধের জন্য পরিচিত। তাঁর কাজ বিমূর্ত যুক্তির চেয়ে পর্যবেক্ষণ এবং অভিজ্ঞতার উপর জোর দেয়। তাঁর সাহিত্যশৈলী সূক্ষ্মতা, প্রজ্ঞা এবং ব্যবহারিক উপযোগিতা দ্বারা চিহ্নিত।' },
  majorWorks: { en: ['Essays', 'Novum Organum', 'The New Atlantis'], bn: ['এসেস', 'নোভাম অর্গানাম', 'দ্য নিউ আটলান্টিস'] },
  style: { en: 'Aphoristic, terse, and objective prose filled with practical wisdom.', bn: 'ব্যবহারিক প্রজ্ঞায় ভরপুর নীতিবাক্যপূর্ণ, সংক্ষিপ্ত এবং বস্তুনিষ্ঠ গদ্য।' },
  contribution: { en: 'Established the essay as a literary genre in English and promoted scientific thought.', bn: 'ইংরেজিতে প্রবন্ধকে একটি সাহিত্যিক ধারা হিসেবে প্রতিষ্ঠা করেন এবং বৈজ্ঞানিক চিন্তাভাবনাকে উৎসাহিত করেন।' },
  quotes: { en: ['Reading maketh a full man; conference a ready man; and writing an exact man.'], bn: ['পঠন মানুষকে পূর্ণ করে, আলোচনা প্রস্তুত করে এবং লেখনী মানুষকে নির্ভুল করে।'] }
},
{
  id: 'samuel-johnson',
  name: { en: 'Samuel Johnson', bn: 'স্যামুয়েল জনসন' },
  birth: '1709',
  death: '1784',
  period: 'neoclassical',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Joshua_Reynolds_040.jpg/220px-Joshua_Reynolds_040.jpg',
  intro: { en: 'Often called Dr. Johnson, he was the dominant literary figure of the 18th century, a great lexicographer and critic.', bn: 'প্রায়শই ডক্টর জনসন নামে পরিচিত, তিনি ১৮ শতকের প্রভাবশালী সাহিত্যিক ব্যক্তিত্ব, উচ্চমানের অভিধান প্রণেতা এবং সমালোচক ছিলেন।' },
  description: { en: 'Johnson single-handedly compiled A Dictionary of the English Language, which remained the standard for over a century. He was a master of the essay and literary biography, known for his moral depth and robust prose. His "Lives of the Poets" helped define the English literary canon.', bn: 'জনসন এককভাবে ‘এ ডিকশনারি অফ দ্য ইংলিশ ল্যাঙ্গুয়েজ’ সংকলন করেছিলেন, যা এক শতাব্দীরও বেশি সময় ধরে মানদণ্ড হিসেবে রয়ে গিয়েছিল। তিনি প্রবন্ধ এবং সাহিত্যিক জীবনীর একজন ওস্তাদ ছিলেন।' },
  majorWorks: { en: ['A Dictionary of the English Language', 'The Lives of the Most Eminent English Poets'], bn: ['এ ডিকশনারি অফ দ্য ইংলিশ ল্যাঙ্গুয়েজ', 'দ্য লাইভস অফ দ্য মোস্ট এমিনেন্ট ইংলিশ পোয়েটস'] },
  style: { en: 'Balanced, latinate, and authoritative prose with profound moral clarity.', bn: 'গভীর নৈতিক স্বচ্ছতা সহ ভারসাম্যপূর্ণ, ল্যাটিন ঘেঁষা এবং প্রামাণিক গদ্য।' },
  contribution: { en: 'Created the first comprehensive dictionary of English and revolutionized literary criticism.', bn: 'ইংরেজির প্রথম পূর্ণাঙ্গ অভিধান তৈরি করেন এবং সাহিত্য সমালোচনায় বিপ্লব ঘটান।' },
  quotes: { en: ['When a man is tired of London, he is tired of life.'], bn: ['যখন একজন মানুষ লন্ডন নিয়ে ক্লান্ত হয়ে পড়ে, তখন সে জীবন নিয়ে ক্লান্ত হয়ে পড়ে।'] }
},
{
  id: 'daniel-defoe',
  name: { en: 'Daniel Defoe', bn: 'ড্যানিয়েল ডিফো' },
  birth: '1660',
  death: '1731',
  period: 'neoclassical',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Daniel_Defoe_kneller_style_portrait.jpg/220px-Daniel_Defoe_kneller_style_portrait.jpg',
  intro: { en: 'A pioneer of the English novel, best known for the adventure tale Robinson Crusoe.', bn: 'ইংরেজি উপন্যাসের অন্যতম পথিকৃৎ, যিনি তার রোমাঞ্চকর কাহিনী রবিনসন ক্রুসোর জন্য সবচেয়ে বেশি পরিচিত।' },
  description: { en: 'Defoe was a prolific journalist and pamphleteer before turning to fiction. His novels are noted for their detailed realism and focus on individual survival and morality. Robinson Crusoe is often considered one of the first English novels.', bn: 'কথাসাহিত্যে আসার আগে ডিফো একজন সফল সাংবাদিক এবং পুস্তিকা লেখক ছিলেন। তাঁর উপন্যাসগুলো বিস্তারিত বাস্তবতা এবং ব্যক্তিগত টিকে থাকা ও নৈতিকতার জন্য পরিচিত।' },
  majorWorks: { en: ['Robinson Crusoe', 'Moll Flanders'], bn: ['রবিনসন ক্রুসো', 'মল ফ্ল্যান্ডার্স'] },
  style: { en: 'Plain, factual, and journalistic style that emphasizes verisimilitude.', bn: 'সরল, তথ্যপূর্ণ এবং সাংবাদিকতাসুলভ শৈলী যা সত্যের সাদৃশ্যের ওপর জোর দেয়।' },
  contribution: { en: 'Played a crucial role in the development of the modern novel.', bn: 'আধুনিক উপন্যাসের বিকাশে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করেছেন।' },
  quotes: { en: ['It is never too late to be wise.'], bn: ['জ্ঞানী হওয়ার জন্য খুব বেশি দেরি হয়ে যায় না কখনো।'] }
},
{
  id: 'john-dryden',
  name: { en: 'John Dryden', bn: 'জন ড্রাইডেন' },
  birth: '1631',
  death: '1700',
  period: 'neoclassical',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/John_Dryden_by_James_Maubert.jpg/220px-John_Dryden_by_James_Maubert.jpg',
  intro: { en: 'The first Poet Laureate of England and the dominant literary influence of the Restoration.', bn: 'ইংল্যান্ডের প্রথম রাজকবি (পোয়েট লরিয়েট) এবং রেস্টোরেশন যুগের প্রভাবশালী সাহিত্যিক।' },
  description: { en: 'Dryden excelled in satire, drama, and translation. He established the heroic couplet as the standard for English poetry and was a pioneer of the "Augustan" style. His criticism laid the foundation for modern English literary analysis.', bn: 'ড্রাইডেন ব্যঙ্গাত্মক রচনা, নাটক এবং অনুবাদে পারদর্শী ছিলেন। তিনি ইংরেজি কবিতার মানদণ্ড হিসেবে ‘হিরোইক কাপলেট’ প্রতিষ্ঠা করেন এবং ‘অগাস্টান’ শৈলীর পথিকৃৎ ছিলেন।' },
  majorWorks: { en: ['Absalom and Achitophel', 'Mac Flecknoe'], bn: ['অ্যাভসালাম অ্যান্ড আকিটোফেল', 'ম্যাক ফ্লেকনো'] },
  style: { en: 'Witty, satirical, and technically precise in heroic couplets.', bn: 'রসিকতাপূর্ণ, ব্যঙ্গাত্মক এবং হিরোইক কাপলেটে কারিগরিভাবে নির্ভুল।' },
  contribution: { en: 'Defined the literary standards of the Restoration and perfected satirical verse.', bn: 'রেস্টোরেশন যুগের সাহিত্যমান নির্ধারণ করেন এবং ব্যঙ্গাত্মক কবিতাকে নিখুঁত করেন।' },
  quotes: { en: ['Beware the fury of a patient man.'], bn: ['একজন ধৈর্যশীল মানুষের ক্রোধ থেকে সাবধান থেকো।'] }
},
{
  id: 'henry-fielding',
  name: { en: 'Henry Fielding', bn: 'হেনরি ফিল্ডিং' },
  birth: '1707',
  death: '1754',
  period: 'neoclassical',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Henry_Fielding_by_William_Hogarth.jpg/220px-Henry_Fielding_by_William_Hogarth.jpg',
  intro: { en: 'A master satirist and novelist, famous for Tom Jones.', bn: 'একজন দক্ষ ব্যঙ্গাত্মক লেখক এবং ঔপন্যাসিক, টম জোনস-এর জন্য বিখ্যাত।' },
  description: { en: 'Fielding was a dramatist before government censorship turned him to prose fiction. He described his novels as "comic-epic poems in prose," focusing on social manners and the diversity of human nature. His robust, energetic narratives provide a panorama of 18th-century English life.', bn: 'ফিল্ডিং সরকারি সেন্সরশিপের কারণে গদ্য সাহিত্যে আসার আগে একজন নাট্যকার ছিলেন। তিনি তাঁর উপন্যাসগুলোকে "গদ্যে হাস্যরসাত্মক-মহাকাব্য" হিসেবে বর্ণনা করেছিলেন।' },
  majorWorks: { en: ['Tom Jones', 'Joseph Andrews'], bn: ['টম জোনস', 'জোসেফ অ্যান্ড্রুজ'] },
  style: { en: 'Humorous, expansive, and ironic prose with intrusive narrators.', bn: 'অনুপ্রবেশকারী কথক সহ হাস্যরসাত্মক, বিস্তৃত এবং বিদ্রূপাত্মক গদ্য।' },
  contribution: { en: 'Codified the structures and conventions of the English novel.', bn: 'ইংরেজি উপন্যাসের কাঠামো এবং নিয়মাবলী সংহিতাবদ্ধ করেছিলেন।' },
  quotes: { en: ['I am as free as nature first made man.'], bn: ['আমি ততটাই স্বাধীন যতটা প্রকৃতি প্রথম মানুষকে তৈরি করেছিল।'] }
},
{
  id: 'aphra-behn',
  name: { en: 'Aphra Behn', bn: 'আফরা বেন' },
  birth: '1640',
  death: '1689',
  period: 'neoclassical',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Aphra_Behn_by_Peter_Lely.jpg/220px-Aphra_Behn_by_Peter_Lely.jpg',
  intro: { en: 'The first professional female writer in English, a playwright and novelist during the Restoration.', bn: 'ইংরেজি সাহিত্যের প্রথম পেশাদার নারী লেখক, রেস্টোরেশন যুগের একজন নাট্যকার এবং ঔপন্যাসিক।' },
  description: { en: 'Behn broke traditional gender barriers by earning a living as a writer and even serving as a spy for King Charles II. Her work deals with themes of sexuality, slavery, and colonial politics. Oroonoko is an early influence on the development of the novel.', bn: 'বেন লেখক হিসেবে জীবিকা নির্বাহ করে এমনকি রাজা দ্বিতীয় চার্লসের স্পাই হিসেবে কাজ করে প্রচলিত লিঙ্গ বৈষম্য ভেঙেছিলেন। তাঁর কাজ যৌনতা, দাসপ্রথা এবং ঔপনিবেশিক রাজনীতির ওপর আলোকপাত করে।' },
  majorWorks: { en: ['Oroonoko', 'The Rover'], bn: ['ওরুনোকো', 'দ্য রোভার'] },
  style: { en: 'Daring, witty, and socially provocative narratives and plays.', bn: 'দুঃসাহসী, রসিকতাপূর্ণ এবং সামাজিকভাবে উস্কানিমূলক আখ্যান ও নাটক।' },
  contribution: { en: 'Paved the way for women writers and addressed the ethics of colonization.', bn: 'নারী লেখকদের পথ প্রশস্ত করেছিলেন এবং ঔপনিবেশিকতার নৈতিকতা তুলে ধরেছিলেন।' },
  quotes: { en: ['Money speaks in a language all nations understand.'], bn: ['টাকা এমন এক ভাষায় কথা বলে যা সব জাতি বোঝে।'] }
},
{
  id: 'joseph-addison',
  name: { en: 'Joseph Addison', bn: 'জোসেফ অ্যাডিসন' },
  birth: '1672',
  death: '1719',
  period: 'neoclassical',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Joseph_Addison_by_Sir_Godfrey_Kneller_Bt.jpg/220px-Joseph_Addison_by_Sir_Godfrey_Kneller_Bt.jpg',
  intro: { en: 'Co-founder of The Spectator, known for perfecting the Middle Style of English prose.', bn: 'দ্য স্পেক্টেটর-এর সহ-প্রতিষ্ঠাতা, ইংরেজি গদ্যের মিডল স্টাইলকে নিখুঁত করার জন্য পরিচিত।' },
  description: { en: 'Addison achieved literary fame through his elegant and morally instructive essays in periodicals. He aimed to "enliven morality with wit, and to temper wit with morality." His work significantly shaped 18th-century politeness and social behavior.', bn: 'অ্যাডিসন সাময়িকীতে তাঁর মার্জিত এবং নৈতিক শিক্ষামূলক প্রবন্ধের মাধ্যমে সাহিত্যিক খ্যাতি অর্জন করেছিলেন। তিনি ১৮ শতকের ভদ্রতা ও সামাজিক আচরণকে উল্লেখযোগ্যভাবে প্রভাবিত করেছিলেন।' },
  majorWorks: { en: ['The Spectator', 'Cato, a Tragedy'], bn: ['দ্য স্পেক্টেটর', 'ক্যাটো, আ ট্র্যাজেডি'] },
  style: { en: 'Refined, conversational, and lucid prose aimed at social improvement.', bn: 'সামাজিক উন্নতির লক্ষ্যে মার্জিত, আলাপচারিতামূলক এবং স্বচ্ছ গদ্য।' },
  contribution: { en: 'Pioneered the periodical essay and influenced the growth of the English middle class.', bn: 'সাময়িকী প্রবন্ধের পথপ্রদর্শক ছিলেন এবং ইংরেজ মধ্যবিত্তের বিকাশে প্রভাব ফেলেছিলেন।' },
  quotes: { en: ['Reading is to the mind what exercise is to the body.'], bn: ['ব্যায়াম যেমন শরীরের জন্য, পড়া তেমনি মনের জন্য।'] }
},
{
  id: 'lord-byron',
  name: { en: 'Lord Byron', bn: 'লর্ড বাইরন' },
  birth: '1788',
  death: '1824',
  period: 'romantic',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Lord_Byron_by_Thomas_Phillips.jpg/220px-Lord_Byron_by_Thomas_Phillips.jpg',
  intro: { en: 'Fluoyant and controversial Romantic poet known for the creation of the "Byronic Hero."', bn: 'অত্যন্ত প্রভাবশালী এবং বিতর্কিত রোমান্টিক কবি, যিনি "বাইরনিক হিরো" তৈরির জন্য পরিচিত।' },
  description: { en: 'Byron was a celebrity of his age, famous for both his poetic genius and scandalous personal life. His masterpiece, Don Juan, is a satirical epic that critiques European society. The Byronic Hero—a brooding, rebellious outcast—deeply influenced European literature and art.', bn: 'বাইরন ছিলেন তাঁর যুগের একজন জনপ্রিয় মহাতারকা, তাঁর কাব্যিক প্রতিভা এবং বিতর্কিত ব্যক্তিগত জীবন দুটির জন্যই বিখ্যাত। তাঁর শ্রেষ্ঠ কাজ ‘ডন জুয়ান’ একটি ব্যঙ্গাত্মক মহাকাব্য যা ইউরোপীয় সমাজের সমালোচনা করে।' },
  majorWorks: { en: ['Don Juan', 'Childe Harold’s Pilgrimage'], bn: ['ডন জুয়ান', 'চাইল্ড হ্যারল্ডস পিলগ্রিমেজ'] },
  style: { en: 'Witty, satirical, and flamboyant verse with emotional intensity.', bn: 'আবেগপ্রবণ তীব্রতা সহ রসিকতাপূর্ণ, ব্যঙ্গাত্মক এবং জাঁকজমকপূর্ণ শ্লোক।' },
  contribution: { en: 'Introduced the archetype of the Byronic hero and elevated the status of satire in Romanticism.', bn: 'বাইরনিক হিরোর আদর্শ প্রবর্তন করেন এবং রোমান্টিকবাদে ব্যঙ্গের উচ্চ মর্যাদা প্রতিষ্ঠা করেন।' },
  quotes: { en: ['I awoke one morning and found myself famous.'], bn: ['আমি একদিন সকালে জেগে উঠে দেখি যে আমি বিখ্যাত হয়ে গেছি।'] }
},
{
  id: 'william-blake',
  name: { en: 'William Blake', bn: 'উইলিয়াম ব্ল্যাক' },
  birth: '1757',
  death: '1827',
  period: 'romantic',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/William_Blake_by_Thomas_Phillips.jpg/220px-William_Blake_by_Thomas_Phillips.jpg',
  intro: { en: 'Visionary poet, artist, and printmaker who integrated myth and social critique.', bn: 'স্বপ্নদ্রষ্টা কবি, শিল্পী এবং মুদ্রণকারী যিনি পৌরাণিক কাহিনী এবং সামাজিক সমালোচনাকে একীভূত করেছিলেন।' },
  description: { en: 'Blake remained largely unrecognized during his lifetime but is now considered a seminal figure of the Romantic age. He developed a private mythology and etched his poems alongside his illustrations. His work explores the "contrary states of the human soul"—innocence and experience.', bn: 'ব্ল্যাক তাঁর জীবদ্দশায় খুব একটা পরিচিত ছিলেন না কিন্তু এখন তাঁকে রোমান্টিক যুগের একজন মৌলিক ব্যক্তিত্ব মনে করা হয়। তিনি একটি নিজস্ব পৌরাণিক কাহিনী তৈরি করেছিলেন এবং তাঁর ছবির পাশাপাশি কবিতাগুলো খোদাই করতেন।' },
  majorWorks: { en: ['Songs of Innocence and of Experience', 'The Marriage of Heaven and Hell'], bn: ['সংস অফ ইনোসেন্স অ্যান্ড অফ এক্সপেরিয়েন্স', 'দ্য ম্যারেজ অফ হেভেন অ্যান্ড হেল'] },
  style: { en: 'Symbolic, prophetic, and rhythmically simple but philosophically complex.', bn: 'প্রতীকী, ভবিষ্যদ্বাণীমূলক এবং ছন্দময়ভাবে সহজ হলেও দার্শনিকভাবে জটিল।' },
  contribution: { en: 'Synthesized visual art and poetry while advocating for creative and spiritual liberation.', bn: 'সৃজনশীল এবং আধ্যাত্মিক মুক্তির পক্ষে কথা বলার পাশাপাশি দৃশ্যকলা ও কবিতার সংশ্লেষণ ঘটিয়েছিলেন।' },
  quotes: { en: ['To see a World in a Grain of Sand.'], bn: ['বালুকণার একটি দানায় গোটা বিশ্বকে দেখতে পাওয়া।'] }
},
{
  id: 'samuel-taylor-coleridge',
  name: { en: 'Samuel Taylor Coleridge', bn: 'স্যামুয়েল টেইলর কোলরিজ' },
  birth: '1772',
  death: '1834',
  period: 'romantic',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Samuel_Taylor_Coleridge_by_Washington_Allston_1814.jpg/220px-Samuel_Taylor_Coleridge_by_Washington_Allston_1814.jpg',
  intro: { en: 'Poet and philosopher who co-founded the Romantic Movement and explored the supernatural.', bn: 'কবি এবং দার্শনিক যিনি রোমান্টিক আন্দোলনের সহ-প্রতিষ্ঠাতা ছিলেন এবং অতিপ্রাকৃত বিষয় নিয়ে কাজ করেছিলেন।' },
  description: { en: 'Coleridge is famous for his "conversation poems" and his major lyrical ballads that utilize gothic and supernatural elements. His Biographia Literaria is a seminal work of literary theory. He famously coined the phrase "willing suspension of disbelief."', bn: 'কোলরিজ তাঁর "কনভারসেশন পোয়েম" এবং গথিক ও অতিপ্রাকৃত উপাদান সমৃদ্ধ প্রধান গীতিধর্মী কবিতার জন্য বিখ্যাত। তাঁর ‘বায়োগ্রাফিয়া লিটারারিয়া’ সাহিত্যতত্ত্বের একটি গুরুত্বপূর্ণ কাজ।' },
  majorWorks: { en: ['The Rime of the Ancient Mariner', 'Kubla Khan'], bn: ['দ্য রাইম অফ দ্য অ্যানসিয়েন্ট মেরিনার', 'কুবলা খান'] },
  style: { en: 'Dreamlike imagery with sophisticated philosophical and psychological depth.', bn: 'পরিশীলিত দার্শনিক ও মনস্তাত্ত্বিক গভীরতা সহ স্বপ্নীল চিত্রকল্প।' },
  contribution: { en: 'Defined the role of the imagination in poetry and introduced German philosophy to England.', bn: 'কবিতায় কল্পনার ভূমিকা সংজ্ঞায়িত করেন এবং জার্মান দর্শনকে ইংল্যান্ডে পরিচিত করান।' },
  quotes: { en: ['Water, water, everywhere, nor any drop to drink.'], bn: ['জল, জল, সর্বত্র জল, কিন্তু পান করার মতো এক ফোঁটাও নেই।'] }
},
{
  id: 'robert-burns',
  name: { en: 'Robert Burns', bn: 'রবার্ট বার্নস' },
  birth: '1759',
  death: '1796',
  period: 'romantic',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Robert_Burns_by_Alexander_Nasmyth.jpg/220px-Robert_Burns_by_Alexander_Nasmyth.jpg',
  intro: { en: 'The national poet of Scotland, celebrated for his use of Scots dialect and folk tradition.', bn: 'স্কটল্যান্ডের জাতীয় কবি, স্কটস উপভাষা এবং লোকজ ঐতিহ্যের ব্যবহারের জন্য উদযাপিত।' },
  description: { en: 'Burns was a pioneer of the Romantic movement whose lyrics celebrated the common man, nature, and Republican ideals. He collected and modified traditional Scottish folk songs. His poem "Auld Lang Syne" is sung worldwide to welcome the new year.', bn: 'বার্নস ছিলেন রোমান্টিক আন্দোলনের একজন অগ্রদূত যার গান সাধারণ মানুষ, প্রকৃতি এবং প্রজাতান্ত্রিক আদর্শসমূহ উদযাপন করত। তিনি ঐতিহ্যবাহী স্কটিশ লোকসংগীত সংগ্রহ ও সংশোধন করেছিলেন।' },
  majorWorks: { en: ['Auld Lang Syne', 'Tam o\' Shanter', 'A Red, Red Rose'], bn: ['ওল্ড ল্যাং সাইন', 'ট্যাম ও শ্যান্টার', 'আ রেড, রেড রোজ'] },
  style: { en: 'Sincere, earthy, and musical, blending standard English with Scots dialect.', bn: 'স্কটস উপভাষার সাথে মানসম্মত ইংরেজির মিশ্রণে আন্তরিক, সাবলীল এবং সংগীতময় শৈলী।' },
  contribution: { en: 'Preserved Scottish culture and inspired later Romantic focus on the common vernacular.', bn: 'স্কটিশ সংস্কৃতি সংরক্ষণ করেন এবং সাধারণ দেশজ ভাষার ওপর পরবর্তী রোমান্টিকদের মনোযোগ অনুপ্রাণিত করেন।' },
  quotes: { en: ['My love is like a red, red rose.'], bn: ['আমার প্রেম এক লাল রঙের গোলাপের মতো।'] }
},
{
  id: 'jane-austen',
  name: { en: 'Jane Austen', bn: 'জেন অস্টেন' },
  birth: '1775',
  death: '1817',
  period: 'romantic',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_modern_retouching.jpg/220px-CassandraAusten-JaneAusten%28c.1810%29_modern_retouching.jpg',
  intro: { en: 'Famous for her novels of manners, Austen is a master of irony and social observation.', bn: 'আচরণ ও রীতির উপন্যাসের জন্য বিখ্যাত, অস্টেন বিদ্রূপ এবং সামাজিক পর্যবেক্ষণে একজন শিল্পী।' },
  description: { en: 'Austen’s novels explore the dependence of women on marriage for social standing and economic security. Despite their seemingly narrow focus on the English gentry, her works possess universal psychological insight. Her use of free indirect discourse was a major advancement for the novel.', bn: 'অস্টেনের উপন্যাসগুলো সামাজিক মর্যাদা এবং অর্থনৈতিক নিরাপত্তার জন্য মহিলাদের বিবাহের ওপর নির্ভরশীলতাকে অন্বেষণ করে। তাঁর লেখা ‘ফ্রি ইনডাইরেক্ট ডিসকোর্স’ বা মুক্ত পরোক্ষ ভাষার ব্যবহার উপন্যাসের একটি বড় অগ্রগতি ছিল।' },
  majorWorks: { en: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma'], bn: ['প্রাইড অ্যান্ড প্রেজুডিস', 'সেন্স অ্যান্ড সেন্সিবিলিটি', 'এমা'] },
  style: { en: 'Ironic, witty, and meticulously structured realist prose.', bn: 'ব্যঙ্গাত্মক, রসিকতাপূর্ণ এবং সূক্ষ্মভাবে সুশৃঙ্খল বাস্তববাদী গদ্য।' },
  contribution: { en: 'Revolutionized the novel of manners and developed early psychological realism.', bn: 'সামাজিক রীতিনীতির উপন্যাসে বিপ্লব ঘটান এবং প্রাথমিক মনস্তাত্ত্বিক বাস্তববাদ বিকশিত করেন।' },
  quotes: { en: ['It is a truth universally acknowledged...'], bn: ['এটি বিশ্বব্যাপী স্বীকৃত একটি সত্য যে...'] }
},
{
  id: 'mary-shelley',
  name: { en: 'Mary Shelley', bn: 'মেরি শেলি' },
  birth: '1797',
  death: '1851',
  period: 'romantic',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mary_Shelley_by_Richard_Rothwell.jpg/220px-Mary_Shelley_by_Richard_Rothwell.jpg',
  intro: { en: 'Author of Frankenstein and a pioneer of science fiction.', bn: 'ফ্রাঙ্কেনস্টাইন-এর লেখিকা এবং বিজ্ঞান কল্পকাহিনীর একজন পথিকৃৎ।' },
  description: { en: 'Daughter of Mary Wollstonecraft and William Godwin, Shelley integrated Romantic ideals with Gothic horror. Her novel Frankenstein explores the ethical limits of science and the nature of monstrosity. She was also a significant biographer and travel writer.', bn: 'মেরি উলস্টোনক্রাফট এবং উইলিয়াম গডউইনের কন্যা শেলি রোমান্টিক আদর্শের সাথে গথিক ভয়ের সমন্বয় ঘটিয়েছিলেন। তাঁর উপন্যাস ফ্রাঙ্কেনস্টাইন বিজ্ঞানের নৈতিক সীমা এবং বিকৃতির প্রকৃতি অন্বেষণ করে।' },
  majorWorks: { en: ['Frankenstein', 'The Last Man'], bn: ['ফ্রাঙ্কেনস্টাইন', 'দ্য লাস্ট ম্যান'] },
  style: { en: 'Emotional, philosophical, and gothic with a focus on psychological trauma.', bn: 'মনস্তাত্ত্বিক আঘাতের উপর দৃষ্টি নিবদ্ধ করে আবেগপ্রবণ, দার্শনিক এবং গথিক শৈলী।' },
  contribution: { en: 'Created the first modern work of science fiction and defined the Gothic novel for the 19th century.', bn: 'বিজ্ঞান কল্পকাহিনীর প্রথম আধুনিক কাজ তৈরি করেন এবং ১৯ শতকের জন্য গথিক উপন্যাসকে সংজ্ঞায়িত করেন।' },
  quotes: { en: ['Beware; for I am fearless, and therefore powerful.'], bn: ['সাবধান; কারণ আমি নির্ভীক, আর তাই আমি শক্তিশালী।'] }
},
{
  id: 'robert-browning',
  name: { en: 'Robert Browning', bn: 'রবার্ট ব্রাউনিং' },
  birth: '1812',
  death: '1889',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Robert_Browning_by_Field_Talfourd_1859.jpg/220px-Robert_Browning_by_Field_Talfourd_1859.jpg',
  intro: { en: 'Master of the dramatic monologue and a central figure of Victorian poetry.', bn: 'নাটকীয় একোক্তির (ড্রামাটিক মনোলোগ) ওস্তাদ এবং ভিক্টোরিয়ান কবিতার কেন্দ্রীয় ব্যক্তিত্ব।' },
  description: { en: 'Browning is celebrated for his dark psychological portraits of twisted characters. His use of colloquial language and rhythmically challenging verse set him apart from his contemporaries. His poetry often explores historical settings through the voices of complex individuals.', bn: 'ব্রাউনিং বিতর্কিত চরিত্রের অন্ধকার মনস্তাত্ত্বিক বর্ণনার জন্য উদযাপিত। কথ্য ভাষার ব্যবহার এবং ছন্দগতভাবে চ্যালেঞ্জিং শ্লোক তাকে তাঁর সমসাময়িকদের থেকে আলাদা করে তুলেছে।' },
  majorWorks: { en: ['My Last Duchess', 'Porphyria\'s Lover', 'The Ring and the Book'], bn: ['মাই লাস্ট ডাচেস', 'প porphyria\'স লাভার', 'দ্য রিং অ্যান্ড দ্য বুক'] },
  style: { en: 'Psychologically complex, gritty, and technically innovative dramatic monologues.', bn: 'মনস্তাত্ত্বিকভাবে জটিল এবং কারিগরিভাবে উদ্ভাবনী নাটকীয় একোক্তি।' },
  contribution: { en: 'Perfected the dramatic monologue as a tool for psychological characterization.', bn: 'মনস্তাত্ত্বিক চরিত্রায়নের হাতিয়ার হিসেবে ড্রামাটিক মনোলোগকে নিখুঁত করেছেন।' },
  quotes: { en: ['Less is more.'], bn: ['অল্পই বেশি।'] }
},
{
  id: 'thomas-hardy',
  name: { en: 'Thomas Hardy', bn: 'থমাস হার্ডি' },
  birth: '1840',
  death: '1928',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thomas_Hardy_by_Walter_William_Ouless_1922.jpg/220px-Thomas_Hardy_by_Walter_William_Ouless_1922.jpg',
  intro: { en: 'Victorian novelist and Modernist poet whose works are known for their fatalism and regional focus.', bn: 'ভিক্টোরীয় ঔপন্যাসিক এবং আধুনিকতাবাদী কবি যার কাজগুলো নিয়তিবাদ এবং আঞ্চলিকতার জন্য পরিচিত।' },
  description: { en: 'Hardy set most of his works in the semi-fictional region of Wessex. His novels critique social constraints and portray the struggle of individuals against indifferent cosmic forces. In later life, he abandoned fiction to focus on poetry, influencing much 20th-century verse.', bn: 'হার্ডি তাঁর বেশিরভাগ কাজের প্রেক্ষাপট ওয়েসেক্সের আধা-কাল্পনিক অঞ্চলে স্থাপন করেছিলেন। তাঁর উপন্যাসগুলো সামাজিক সীমাবদ্ধতা এবং উদাসীন মহাজাগতিক শক্তির বিরুদ্ধে ব্যক্তির সংগ্রামের চিত্র তুলে ধরে।' },
  majorWorks: { en: ['Tess of the d\'Urbervilles', 'Jude the Obscure', 'Far from the Madding Crowd'], bn: ['টেস অফ দ্য ডারবারভিলস', 'জ্যুড দ্য অবসকিউর', 'ফার ফ্রম দ্য ম্যাডিং ক্রাউড'] },
  style: { en: 'Pessimistic, realistic, and deeply descriptive with a sense of tragic irony.', bn: 'হতাশাবাদী, বাস্তববাদী এবং করুণ বিদ্রূপের বোধ সহ গভীর বর্ণনামূলক গদ্য।' },
  contribution: { en: 'Bridged the gap between Victorian realism and the pessimistic Modernism of the 20th century.', bn: 'ভিক্টোরীয় বাস্তববাদ এবং ২০ শতকের হতাশাবাদী আধুনিকতাবাদের মধ্যে ব্যবধান ঘুচিয়েছিলেন।' },
  quotes: { en: ['Happiness was but the occasional episode in a general drama of pain.'], bn: ['সুখ ছিল বেদনার এক সাধারণ নাটকের মাঝে মাঝে ঘটে যাওয়া একটি পর্ব মাত্র।'] }
},
{
  id: 'charlotte-bronte',
  name: { en: 'Charlotte Brontë', bn: 'শার্লট ব্রন্তি' },
  birth: '1816',
  death: '1855',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Charlotte_Bronte_by_George_Richmond.jpg/220px-Charlotte_Bronte_by_George_Richmond.jpg',
  intro: { en: 'Author of Jane Eyre, known for her powerful proto-feminist narratives.', bn: 'জেন আইয়ার-এর লেখিকা, তাঁর শক্তিশালী আদি-নারীবাদী বর্ণনার জন্য পরিচিত।' },
  description: { en: 'Brontë brought a new level of psychological intensity and female perspective to the Victorian novel. Her work often addresses themes of social class, religious hypocrisy, and the struggle for female independence. Writing under the pseudonym Currer Bell, she became a literary sensation.', bn: 'ব্রন্তি ভিক্টোরীয় উপন্যাসে মনস্তাত্ত্বিক তীব্রতা এবং নারী দৃষ্টিভঙ্গির এক নতুন মাত্রা নিয়ে এসেছিলেন। তাঁর কাজ প্রায়শই সামাজিক শ্রেণী, ধর্মীয় ভণ্ডামি এবং নারীর স্বাধীনতার সংগ্রামের বিষয়বস্তু তুলে ধরে।' },
  majorWorks: { en: ['Jane Eyre', 'Villette', 'Shirley'], bn: ['জেন আইয়ার', 'ভিলেট', 'শার্লি'] },
  style: { en: 'Passionate, intimate, and gothic-influenced realist prose.', bn: 'আবেগপ্রবণ, আন্তরিক এবং গথিক-প্রভাবিত বাস্তববাদী গদ্য।' },
  contribution: { en: 'Revolutionized the representation of private feminine consciousness in fiction.', bn: 'কথাসাহিত্যে ব্যক্তিগত নারী চেতনার উপস্থাপনায় বিপ্লব ঘটিয়েছেন।' },
  quotes: { en: ['I am no bird; and no net ensnares me.'], bn: ['আমি কোনো পাখি নই; এবং কোনো ফাঁদ আমাকে আটকাতে পারে না।'] }
},
{
  id: 'emily-bronte',
  name: { en: 'Emily Brontë', bn: 'এমিলি ব্রন্তি' },
  birth: '1818',
  death: '1848',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emily_Bronte_by_Patrick_Branwell_Bronte.jpg/220px-Emily_Bronte_by_Patrick_Branwell_Bronte.jpg',
  intro: { en: 'Author of Wuthering Heights, a masterpiece of passionate, gothic-tinged realism.', bn: 'উদারিং হাইটস-এর লেখিকা, যা আবেগপ্রবণ ও গথিক-ঘেঁষা বাস্তববাদের একটি শ্রেষ্ঠ শিল্পকর্ম।' },
  description: { en: 'Emily Brontë lived a reclusive life and published under the name Ellis Bell. Her only novel, Wuthering Heights, is celebrated for its poetic intensity and radical depiction of love and revenge. She is also regarded as a significant Victorian poet of mystic tendencies.', bn: 'এমিলি ব্রন্তি এক নির্জন জীবনযাপন করতেন এবং এলিস বেল নামে লেখা প্রকাশ করতেন। তাঁর একমাত্র উপন্যাস উদারিং হাইটস তার কাব্যিক তীব্রতা এবং ভালোবাসা ও প্রতিশোধের আমূল চিত্রায়নের জন্য উদযাপিত।' },
  majorWorks: { en: ['Wuthering Heights', 'Poems by Currer, Ellis, and Acton Bell'], bn: ['উদারিং হাইটস', 'পোয়েমস বাই কারার, এলিস অ্যান্ড অ্যাক্টন বেল'] },
  style: { en: 'Wild, evocative, and intensely emotional with complex structure.', bn: 'জটিল কাঠামোর সাথে বন্য, উদ্দীপক এবং অত্যন্ত আবেগপূর্ণ শৈলী।' },
  contribution: { en: 'Challenged the Victorian social morés with a depiction of amoral, transcendent love.', bn: 'অনৈতিক ও সীমা ছাড়িয়ে যাওয়া প্রেমের চিত্রায়নের মাধ্যমে ভিক্টোরীয় সামাজিক নীতিকে চ্যালেঞ্জ করেছিলেন।' },
  quotes: { en: ['Whatever our souls are made of, his and mine are the same.'], bn: ['আমাদের আত্মা যা দিয়েই তৈরি হোক না কেন, তার এবং আমার আত্মা একই।'] }
},
{
  id: 'george-eliot',
  name: { en: 'George Eliot', bn: 'জর্জ এলিয়ট' },
  birth: '1819',
  death: '1880',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/George_Eliot%2C_by_François_d%27Albert_Durade.jpg/220px-George_Eliot%2C_by_François_d%27Albert_Durade.jpg',
  intro: { en: 'The pen name of Mary Ann Evans, one of the greatest Victorian novelists and intellectuals.', bn: 'মেরি অ্যান ইভান্সের ছদ্মনাম, যিনি অন্যতম শ্রেষ্ঠ ভিক্টোরীয় ঔপন্যাসিক ও বুদ্ধিজীবী ছিলেন।' },
  description: { en: 'Eliot is known for her profound realism and moral complexity. Her masterpiece Middlemarch is often cited as the greatest English novel. Her work explored provincial life through a lens of evolutionary science and sociological observation.', bn: 'এলিয়ট তাঁর গভীর বাস্তববাদ এবং নৈতিক জটিলতার জন্য পরিচিত। তাঁর শ্রেষ্ঠ শিল্পকর্ম "মিডলমার্চ" প্রায়শই সেরা ইংরেজি উপন্যাস হিসেবে উদ্ধৃত হয়।' },
  majorWorks: { en: ['Middlemarch', 'The Mill on the Floss', 'Silas Marner'], bn: ['মিডলমার্চ', 'দ্য মিল অন দ্য ফ্লস', 'সাইলাস মার্নার'] },
  style: { en: 'Intellectually dense, sympathetic, and meticulously detailed realism.', bn: 'বুদ্ধিবৃত্তিকভাবে গভীর, সহানুভূতিশীল এবং সূক্ষ্মভাবে বিস্তারিত বাস্তববাদ।' },
  contribution: { en: 'Elevated the realism of the English novel to a level of profound psychological and social depth.', bn: 'ইংরেজি উপন্যাসের বাস্তববাদকে গভীর মনস্তাত্ত্বিক এবং সামাজিক স্তরে উন্নীত করেছেন।' },
  quotes: { en: ['It is never too late to be what you might have been.'], bn: ['তুমি যা হতে পারতে তা হওয়ার জন্য কখনই খুব বেশি দেরি হয়ে যায় না।'] }
},
{
  id: 'oscar-wilde',
  name: { en: 'Oscar Wilde', bn: 'অস্কার ওয়াইল্ড' },
  birth: '1854',
  death: '1900',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Oscar_Wilde_3.jpg/220px-Oscar_Wilde_3.jpg',
  intro: { en: 'A champion of aestheticism and the leading wit of late Victorian London.', bn: 'নান্দনিকতাবাদের প্রবক্তা এবং শেষ ভিক্টোরীয় লন্ডনের প্রধান রসিক ব্যক্তিত্ব।' },
  description: { en: 'Wilde was a prolific dramatist, poet, and critic who advocated for "art for art\'s sake." His plays are legendary for their sharp epigrams and critique of Victorian hypocrisy. His conviction for "gross indecency" led to his tragic decline and untimely death.', bn: 'ওয়াইল্ড একজন সফল নাট্যকার, কবি এবং সমালোচক ছিলেন যিনি "শিল্পের জন্য শিল্প" এর পক্ষে কথা বলতেন। তাঁর নাটকগুলো তীক্ষ্ণ বিদ্রূপ এবং ভিক্টোরীয় ভণ্ডামির সমালোচনার জন্য কিংবদন্তি হয়ে আছে।' },
  majorWorks: { en: ['The Importance of Being Earnest', 'The Picture of Dorian Gray'], bn: ['দ্য ইমপোর্ট্যান্স অফ বিয়িং আর্নেস্ট', 'দ্য পিকচার অফ ডোরিয়ান গ্রে'] },
  style: { en: 'Witty, epigrammatic, flamboyant, and decadently aesthetic.', bn: 'রসিকতাপূর্ণ, সংক্ষিপ্ত ও অর্থবহ এবং নান্দনিক শৈলী।' },
  contribution: { en: 'Pioneered the Aesthetic movement and revolutionized modern drama with sharp social wit.', bn: 'নান্দনিক আন্দোলনের পথপ্রদর্শক ছিলেন এবং তীক্ষ্ণ সামাজিক রসিকতার মাধ্যমে আধুনিক নাটকে বিপ্লব ঘটান।' },
  quotes: { en: ['To live is the rarest thing in the world. Most people exist, that is all.'], bn: ['বাস করা হলো পৃথিবীর সবচেয়ে বিরল জিনিস। অধিকাংশ মানুষ কেবল টিকে থাকে, এটুকুই।'] }
},
{
  id: 'matthew-arnold',
  name: { en: 'Matthew Arnold', bn: 'ম্যাথু আর্নল্ড' },
  birth: '1822',
  death: '1888',
  period: 'victorian',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Matthew_Arnold_01.jpg/220px-Matthew_Arnold_01.jpg',
  intro: { en: 'Poet and cultural critic who defined the modern role of the intellectual.', bn: 'কবি এবং সাংস্কৃতিক সমালোচক যিনি বুদ্ধিজীবীর আধুনিক ভূমিকা সংজ্ঞায়িত করেছিলেন।' },
  description: { en: 'Arnold was a leading figure in the Victorian "crisis of faith," best exemplified in his poem "Dover Beach." As a critic, he advocated for "sweetness and light" and the study of the best that has been thought and said. He believed literature could serve as a substitute for religion in a secular age.', bn: 'আর্নল্ড ভিক্টোরীয় "বিশ্বাসের সংকট" এর একজন প্রধান ব্যক্তিত্ব ছিলেন। সমালোচক হিসেবে তিনি "মিষ্টতা ও আলো" এর পক্ষে কথা বলেছিলেন এবং বিশ্বাস করতেন যে ধর্মনিরপেক্ষ যুগে সাহিত্য ধর্মের বিকল্প হতে পারে।' },
  majorWorks: { en: ['Dover Beach', 'Culture and Anarchy'], bn: ['ডোভার বিচ', 'কালচার অ্যান্ড অ্যানার্কি'] },
  style: { en: 'Melancholic, restrained, and philosophically didactic.', bn: 'বিষণ্ন, সংযত এবং দার্শনিকভাবাপন্ন শিক্ষামূলক শৈলী।' },
  contribution: { en: 'Established modern cultural criticism and addressed the Victorian spiritual struggle.', bn: 'আধুনিক সাংস্কৃতিক সমালোচনা প্রতিষ্ঠা করেন এবং ভিক্টোরীয় আধ্যাত্মিক সংগ্রামের স্বরূপ প্রকাশ করেন।' },
  quotes: { en: ['Culture is to know the best that has been said and thought in the world.'], bn: ['সংস্কৃতি হলো বিশ্বে বলা এবং ভাবা সেরা বিষয়গুলো জানা।'] }
},
{
  id: 'james-joyce',
  name: { en: 'James Joyce', bn: 'জেমস জয়েস' },
  birth: '1882',
  death: '1941',
  period: 'modern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/James_Joyce_by_Alex_Ehrenzweig%2C_1915.jpg/220px-James_Joyce_by_Alex_Ehrenzweig%2C_1915.jpg',
  intro: { en: 'Irish novelist and master of the stream-of-consciousness technique.', bn: 'আইরিশ ঔপন্যাসিক এবং স্ট্রিম-অফ-কনশাসনেস (চেতনাপ্রবাহ) কৌশলের একজন ওস্তাদ।' },
  description: { en: 'Joyce redefined the modern novel with Ulysses, which parallels Homer’s Odyssey within a single day in Dublin. His work is characterized by linguistic experimentation, mythic parallels, and deep psychological exploration. He is considered the most influential novelist of the 20th century.', bn: 'জয়েস ইউলিসিসের মাধ্যমে আধুনিক উপন্যাসকে নতুনভাবে সংজ্ঞায়িত করেছেন। তাঁর কাজ ভাষাগত পরীক্ষা-নিরীক্ষা, পৌরাণিক সমান্তরালতা এবং গভীর মনস্তাত্ত্বিক অন্বেষণের জন্য পরিচিত।' },
  majorWorks: { en: ['Ulysses', 'Dubliners', 'A Portrait of the Artist as a Young Man'], bn: ['ইউলিসিস', 'ডাবলিনার্স', 'আ পোর্ট্রেট অফ দ্য আর্টিস্ট এজ আ ইয়ং ম্যান'] },
  style: { en: 'Experimental, dense, polyphonic, and utilizing stream-of-consciousness.', bn: 'পরীক্ষামূলক, জটিল এবং চেতনাপ্রবাহমূলক শৈলী।' },
  contribution: { en: 'Revolutionized narrative structure and linguistic boundaries in literature.', bn: 'সাহিত্যে আখ্যান কাঠামো এবং ভাষাগত সীমানায় বিপ্লব ঘটিয়েছেন।' },
  quotes: { en: ['Welcome, O life! I go to encounter for the millionth time the reality of experience.'], bn: ['স্বাগতম হে জীবন! অভিজ্ঞতার বাস্তবতাকে লক্ষ বারের মতো মোকাবিলা করতে যাচ্ছি।'] }
},
{
  id: 'wb-yeats',
  name: { en: 'W. B. Yeats', bn: 'ডব্লিউ বি ইয়েটস' },
  birth: '1865',
  death: '1939',
  period: 'modern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/William_Butler_Yeats_by_George_Charles_Beresford.jpg/220px-William_Butler_Yeats_by_George_Charles_Beresford.jpg',
  intro: { en: 'The greatest Irish poet of the 20th century and a leading figure of the Irish Literary Revival.', bn: '২০ শতকের সর্বশ্রেষ্ঠ আইরিশ কবি এবং আইরিশ সাহিত্য পুনরুজ্জীবনের অন্যতম প্রধান ব্যক্তিত্ব।' },
  description: { en: 'Yeats’s poetry evolved from Romantic Celtic twilight to a stark, sophisticated Modernism. He was deeply involved in Irish politics and mysticism. His work often reflects on the cyclic nature of history and the tensions between art and life.', bn: 'ইয়েটসের কবিতা রোমান্টিক কেল্টিক আমেজ থেকে এক কঠোর, পরিশীলিত আধুনিকতাবাদে বিবর্তিত হয়েছিল। তিনি আইরিশ রাজনীতি এবং আধ্যাত্মবাদের সাথে গভীরভাবে জড়িত ছিলেন।' },
  majorWorks: { en: ['The Second Coming', 'Sailing to Byzantium', 'The Tower'], bn: ['দ্য সেকেন্ড কামিং', 'সেলিং টু বাইজেন্টিয়াম', 'দ্য টাওয়ার'] },
  style: { en: 'Symbolic, visionary, and rhythmically powerful with varying formal structures.', bn: 'প্রতীকী, ভবিষ্যদ্বাণীমূলক এবং ছন্দবদ্ধভাবে শক্তিশালী।' },
  contribution: { en: 'Founded the Abbey Theatre and pioneered modern symbolic poetry.', bn: 'অ্যাবে থিয়েটার প্রতিষ্ঠা করেন এবং আধুনিক প্রতীকী কবিতার পথপ্রদর্শক হন।' },
  quotes: { en: ['Things fall apart; the centre cannot hold.'], bn: ['জিনিসগুলো ভেঙে পড়ে; কেন্দ্র ধরে রাখতে পারে না।'] }
},
{
  id: 'dh-lawrence',
  name: { en: 'D. H. Lawrence', bn: 'ডি এইচ লরেন্স' },
  birth: '1885',
  death: '1930',
  period: 'modern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/David_Herbert_Lawrence_by_Passport_photo.jpg/220px-David_Herbert_Lawrence_by_Passport_photo.jpg',
  intro: { en: 'A controversial Modernist who explored human sexuality and the industrial impact on the soul.', bn: 'একজন বিতর্কিত আধুনিকতাবাদী যিনি মানুষের যৌনতা এবং আত্মার ওপর শিল্পায়নের প্রভাব অন্বেষণ করেছেন।' },
  description: { en: 'Lawrence’s work challenged the repressive social morés of early 20th-century England. He focused on the vital connection between man, woman, and the natural world, often using intense imagery. His novels faced numerous bans but are now seen as essential Modernist texts.', bn: 'লরেন্সের কাজ ২০ শতকের শুরুর দিকের ইংল্যান্ডের দমনমূলক সামাজিক রীতিকে চ্যালেঞ্জ করেছিল। তিনি পুরুষ, নারী এবং প্রাকৃতিক জগতের মধ্যে অত্যাবশ্যক সম্পর্কের ওপর আলোকপাত করেছিলেন।' },
  majorWorks: { en: ['Sons and Lovers', 'Women in Love', 'Lady Chatterley\'s Lover'], bn: ['সংস অ্যান্ড লাভার্স', 'ওমেন ইন লাভ', 'লেডি চ্যাটার্লিস লাভার'] },
  style: { en: 'Passionate, lyrical, and psychologically raw prose.', bn: 'আবেগপ্রবণ, গীতিময় এবং মনস্তাত্ত্বিকভাবে স্বচ্ছ গদ্য।' },
  contribution: { en: 'Broke censorship barriers and introduced a radical focus on the subconscious and physical life.', bn: 'সেন্সরশিপের বাধা ভেঙে অবচেতন এবং শারীরিক জীবনের ওপর আমূল মনোযোগ প্রবর্তন করেন।' },
  quotes: { en: ['The world is as it is, and I am as I am.'], bn: ['পৃথিবী যেমন আছে তেমনই, আর আমি যেমন আছি তেমনই।'] }
},
{
  id: 'joseph-conrad',
  name: { en: 'Joseph Conrad', bn: 'জোসেফ কনরাড' },
  birth: '1857',
  death: '1924',
  period: 'modern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Joseph_Conrad.JPG/220px-Joseph_Conrad.JPG',
  intro: { en: 'Polish-born novelist who became a master of English prose and an early skeptic of imperialism.', bn: 'পোলিশ বংশোদ্ভূত ঔপন্যাসিক যিনি ইংরেজি গদ্যের একজন ওস্তাদ এবং সাম্রাজ্যবাদের একজন প্রাথমিক সংশয়বাদী ছিলেন।' },
  description: { en: 'Conrad’s experiences as a sailor informed his narratives of exile and moral isolation. His work explores the "heart of darkness" within human nature and the complexities of duty and betrayal. He is a precursor to Modernist narrative techniques through his use of indirect narration.', bn: 'নাবিক হিসেবে কনরাডের অভিজ্ঞতা তাঁর নির্বাসন এবং নৈতিক বিচ্ছিন্নতার কাহিনীগুলোকে সমৃদ্ধ করেছিল। তাঁর কাজ মানুষের স্বভাবের ভেতরের "অন্ধকার হৃদয়" এবং কর্তব্য ও বিশ্বাসঘাতকতার জটিলতা অন্বেষণ করে।' },
  majorWorks: { en: ['Heart of Darkness', 'Lord Jim', 'Nostromo'], bn: ['হার্ট অফ ডার্কনেস', 'লর্ড জিম', 'নস্ট্রোমো'] },
  style: { en: 'Dense, atmospheric, and psychologically intricate prose.', bn: 'জটিল, আবহে ঘেরা এবং মনস্তাত্ত্বিকভাবে জটিল গদ্য।' },
  contribution: { en: 'Introduced moral ambiguity and critical perspectives on colonialism to English fiction.', bn: 'ইংরেজি কথাসাহিত্যে নৈতিক অস্পষ্টতা এবং উপনিবেশবাদের সমালোচনামূলক দৃষ্টিভঙ্গি প্রবর্তন করেন।' },
  quotes: { en: ['We live, as we dream—alone.'], bn: ['আমরা বেঁচে থাকি স্বপ্নের মতো—একা।'] }
},
{
  id: 'wh-auden',
  name: { en: 'W. H. Auden', bn: 'ডব্লিউ এইচ অডেন' },
  birth: '1907',
  death: '1973',
  period: 'modern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wystan_Hugh_Auden.jpg/220px-Wystan_Hugh_Auden.jpg',
  intro: { en: 'A versatile and influential poet known for his intellectual and social commentary.', bn: 'একজন বহুমুখী এবং প্রভাবশালী কবি যিনি তাঁর বুদ্ধিবৃত্তিক এবং সামাজিক ভাষ্যের জন্য পরিচিত।' },
  description: { en: 'Auden’s poetry covers a vast range of styles and themes, from political activism to spiritual angst. He was the leading voice of the "Auden Group" in the 1930s before moving to America. His technical virtuosity and moral clarity make him a central figure in 20th-century literature.', bn: 'অডেনের কবিতা রাজনৈতিক সক্রিয়তা থেকে আধ্যাত্মিক উদ্বেগ পর্যন্ত বিস্তৃত শৈলী এবং বিষয়বস্তুকে কভার করে। তিনি ১৯৩০-এর দশকে "অডেন গ্রুপ"-এর প্রধান কণ্ঠস্বর ছিলেন।' },
  majorWorks: { en: ['Funeral Blues', 'September 1, 1939', 'The Age of Anxiety'], bn: ['ফিউনারেল ব্লুজ', 'সেপ্টেম্বর ১, ১৯৩৯', 'দ্য এজ অফ অ্যাংজাইটি'] },
  style: { en: 'Witty, varied, and technically brilliant with a blend of scientific and poetic language.', bn: 'বৈজ্ঞানিক এবং কাব্যিক ভাষার মিশ্রণে রসিকতাপূর্ণ, বৈচিত্র্যময় এবং প্রযুক্তিগতভাবে উজ্জ্বল শৈলী।' },
  contribution: { en: 'Modernized English poetry with social awareness and intellectual rigour.', bn: 'সামাজিক সচেতনতা এবং বুদ্ধিবৃত্তিক কঠোরতার মাধ্যমে ইংরেজি কবিতাকে আধুনিকীকরণ করেছেন।' },
  quotes: { en: ['We must love one another or die.'], bn: ['আমাদের একে অপরকে ভালোবাসতে হবে অথবা মরতে হবে।'] }
},
{
  id: 'george-orwell',
  name: { en: 'George Orwell', bn: 'জর্জ অরওয়েল' },
  birth: '1903',
  death: '1950',
  period: 'modern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg',
  intro: { en: 'Novelist, essayist, and critic famous for his warnings against totalitarianism.', bn: 'ঔপন্যাসিক, প্রাবন্ধিক এবং সমালোচক যিনি সর্বগ্রাসীবাদ বা রাষ্ট্রীয় স্বৈরাচারের বিরুদ্ধে সতর্কবাণীর জন্য বিখ্যাত।' },
  description: { en: 'Orwell’s work is characterized by lucid prose and a commitment to social justice. His satires of the Soviet system and warnings about surveillance have become part of common political vocabulary. He remains the most significant political writer of the modern era.', bn: 'অরওয়েলের কাজের বৈশিষ্ট্য হলো স্বচ্ছ গদ্য এবং সামাজিক ন্যায়বিচারের প্রতি প্রতিশ্রুতি। সোভিয়েত ব্যবস্থার ওপর তাঁর ব্যঙ্গ এবং নজরদারি সম্পর্কে তাঁর সতর্কবাণীগুলো রাজনৈতিক শব্দভাণ্ডারের অংশ হয়ে উঠেছে।' },
  majorWorks: { en: ['Nineteen Eighty-Four', 'Animal Farm', 'Homage to Catalonia'], bn: ['নাইন্টিন এইটি-ফোর', 'অ্যানিমেল ফার্ম', 'হোমেজ টু ক্যাটালোনিয়া'] },
  style: { en: 'Clear, direct, and factual prose without unnecessary ornamentation.', bn: 'অপ্রয়োজনীয় অলঙ্করণ ছাড়াই স্পষ্ট, সরাসরি এবং বাস্তবধর্মী গদ্য।' },
  contribution: { en: 'Defended political truth and language against manipulation and tyranny.', bn: 'কারসাজি এবং স্বৈরাচারের বিরুদ্ধে রাজনৈতিক সত্য ও ভাষাকে রক্ষা করেছিলেন।' },
  quotes: { en: ['Big Brother is watching you.'], bn: ['বিগ ব্রাদার তোমাকে দেখছে।'] }
},
{
  id: 'kazuo-ishiguro',
  name: { en: 'Kazuo Ishiguro', bn: 'কাজুও ইশিগুরো' },
  birth: '1954',
  death: 'Living',
  period: 'postmodern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Kazuo_Ishiguro_at_the_2017_Nobel_Prize_announcement.jpg/220px-Kazuo_Ishiguro_at_the_2017_Nobel_Prize_announcement.jpg',
  intro: { en: 'Nobel-winning novelist known for his restrained prose and themes of memory and self-deception.', bn: 'নোবেল বিজয়ী ঔপন্যাসিক যিনি তাঁর সংযত গদ্য এবং স্মৃতি ও আত্ম-প্রবঞ্চনার বিষয়বস্তুর জন্য পরিচিত।' },
  description: { en: 'Ishiguro explores the emotional landscape of people whose lives have been defined by major historical shifts. His work often utilizes unreliable narrators to explore the fragility of human recollection. He has successfully experimented with genres ranging from realist fiction to speculative science fiction.', bn: 'ইশিগুরো এমন মানুষের আবেগীয় জগত অন্বেষণ করেন যাদের জীবন ঐতিহাসিক পটপরিবর্তন দ্বারা সংজ্ঞায়িত হয়েছে। মানুষের স্মৃতির ভঙ্গুরতা অন্বেষণ করতে তিনি প্রায়শই অবিশ্বাস্য কথক ব্যবহার করেন।' },
  majorWorks: { en: ['The Remains of the Day', 'Never Let Me Go', 'Klara and the Sun'], bn: ['দ্য রিমেইনস অফ দ্য ডে', 'নেভার লেট মি গো', 'ক্লারা অ্যান্ড দ্য সান'] },
  style: { en: 'Quiet, understated, and emotionally resonant with clinical precision.', bn: 'শান্ত, পরিমিত এবং ক্লিনিকাল নির্ভুলতার সাথে আবেগময় শৈলী।' },
  contribution: { en: 'Globalized the British novel by blending Japanese and English sensibilities.', bn: 'জাপানি এবং ইংরেজি অনুভূতির মিশ্রণ ঘটিয়ে ব্রিটিশ উপন্যাসকে বিশ্বায়িত করেছেন।' },
  quotes: { en: ['Memories, even your most precious ones, fade surprisingly quickly.'], bn: ['স্মৃতিগুলো, এমনকি তোমার সবচেয়ে মূল্যবানগুলোও, আশ্চর্যজনকভাবে দ্রুত ফিকে হয়ে যায়।'] }
},
{
  id: 'margaret-atwood',
  name: { en: 'Margaret Atwood', bn: 'মার্গারেট অ্যাটউড' },
  birth: '1939',
  death: 'Living',
  period: 'postmodern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Margaret_Atwood_at_the_2019_Frankfurt_Book_Fair.jpg/220px-Margaret_Atwood_at_the_2019_Frankfurt_Book_Fair.jpg',
  intro: { en: 'Canadian literary giant famous for speculative fiction and feminist themes.', bn: 'কানাডীয় সাহিত্যিক জায়ান্ট, ফটকা কথাসাহিত্য (speculative fiction) এবং নারীবাদী বিষয়বস্তুর জন্য বিখ্যাত।' },
  description: { en: 'Atwood is a prolific poet and novelist who critiques patriarchal oppression and environmental destruction. Her masterpiece The Handmaid’s Tale has become a cultural touchstone for discussing women\'s rights. She is a pioneer of "uxtopian" or speculative fiction that mirrors modern societal fears.', bn: 'অ্যাটউড একজন সফল কবি এবং ঔপন্যাসিক যিনি পিতৃতান্ত্রিক নিপীড়ন এবং পরিবেশগত ধ্বংসের সমালোচনা করেন। তাঁর শ্রেষ্ঠ কাজ ‘দ্য হ্যান্ডমেইডস টেল’ নারী অধিকার আলোচনার জন্য একটি সাংস্কৃতিক মাইলফলক হয়ে উঠেছে।' },
  majorWorks: { en: ['The Handmaid\'s Tale', 'Oryx and Crake', 'The Blind Assassin'], bn: ['দ্য হ্যান্ডমেইডস টেল', 'অরিঙ্কস অ্যান্ড ক্রেক', 'দ্য ব্লাইন্ড অ্যাসাসিন'] },
  style: { en: 'Sharp, ironic, and intellectually rigorous with vivid speculative imagery.', bn: 'তীক্ষ্ণ, বিদ্রূপাত্মক এবং প্রাণবন্ত ফটকা চিত্রকল্প সহ বুদ্ধিবৃত্তিক শৈলী।' },
  contribution: { en: 'Elevated science fiction to "high" literature and championed feminist analysis of society.', bn: 'বিজ্ঞান কল্পকাহিনীকে "উচ্চ" সাহিত্যের স্তরে উন্নীত করেছেন এবং সমাজের নারীবাদী বিশ্লেষণের প্রচার করেছেন।' },
  quotes: { en: ['A word after a word after a word is power.'], bn: ['একটা শব্দের পর একটা শব্দের পর একটা শব্দই হলো শক্তিশক্তি।'] }
},
{
  id: 'ian-mcewan',
  name: { en: 'Ian McEwan', bn: 'ইয়ান ম্যাকইউয়ান' },
  birth: '1948',
  death: 'Living',
  period: 'postmodern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ian_McEwan_2019.jpg/220px-Ian_McEwan_2019.jpg',
  intro: { en: 'Acclaimed contemporary novelist known for his macabre early work and later focus on history and morality.', bn: 'প্রশংসিত সমসাময়িক ঔপন্যাসিক, তাঁর প্রথম দিকের বিভীষিকাময় কাজ এবং পরবর্তীকালের ইতিহাস ও নৈতিকতার ওপর মনোযোগের জন্য পরিচিত।' },
  description: { en: 'McEwan explores the impact of sudden, violent events on ordinary lives. His prose is noted for its clarity and psychological depth, often dealing with the intersections of personal responsibility and historical consequences. Atonement is a landmark work of metafictional realism.', bn: 'ম্যাকইউয়ান সাধারণ মানুষের জীবনে আকস্মিক ও হিংসাত্মক ঘটনার প্রভাব অন্বেষণ করেন। তাঁর গদ্য স্বচ্ছতা এবং মনস্তাত্ত্বিক গভীরতার জন্য পরিচিত। "অ্যাটোনমেন্ট" মেটাফিকশনাল রিয়ালিজমের একটি মাইলফলক কাজ।' },
  majorWorks: { en: ['Atonement', 'Saturday', 'Enduring Love'], bn: ['অ্যাটোনমেন্ট', 'স্যাটারডে', 'এন্ডুরিং লাভ'] },
  style: { en: 'Precise, clinical, and psychologically invasive with grand narrative scope.', bn: 'সুনির্দিষ্ট এবং মনস্তাত্ত্বিকভাবে গভীর আখ্যান শৈলী।' },
  contribution: { en: 'Mastered the psychological thriller and redefined historical fiction in the 21st century.', bn: 'মনস্তাত্ত্বিক থ্রিলারে পারদর্শিতা দেখিয়েছেন এবং ২১ শতকে ঐতিহাসিক কথাসাহিত্যকে নতুনভাবে সংজ্ঞায়িত করেছেন।' },
  quotes: { en: ['A person is, among all else, a material thing.'], bn: ['একজন মানুষ অন্য সবকিছুর মাঝে আসলে একটি বস্তুগত সত্তা।'] }
},
{
  id: 'zadie-smith',
  name: { en: 'Zadie Smith', bn: 'জ্যাডি স্মিথ' },
  birth: '1975',
  death: 'Living',
  period: 'postmodern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zadie_Smith_2012.jpg/220px-Zadie_Smith_2012.jpg',
  intro: { en: 'A leading voice in contemporary British literature, focusing on race, identity, and multiculturalism.', bn: 'সমসাময়িক ব্রিটিশ সাহিত্যের এক প্রধান কণ্ঠস্বর, যিনি জাতি, পরিচয় এবং বহুসংস্কৃতিবাদের ওপর আলোকপাত করেছেন।' },
  description: { en: 'Smith burst onto the literary scene with White Teeth, reflecting the vibrant, diverse reality of modern London. Her novels explore the complex inheritance of colonial history in a globalized world. She is celebrated for her lively dialogue and acute social observation.', bn: 'স্মিথ "হোয়াইট টিথ" এর মাধ্যমে সাহিত্য জগতে আত্মপ্রকাশ করেন, যা আধুনিক লন্ডনের প্রাণবন্ত ও বৈচিত্র্যময় বাস্তবতাকে প্রতিফলিত করে। তাঁর উপন্যাসগুলো বিশ্বায়িত বিশ্বে ঔপনিবেশিক ইতিহাসের জটিল উত্তরাধিকার অন্বেষণ করে।' },
  majorWorks: { en: ['White Teeth', 'On Beauty', 'NW'], bn: ['হোয়াইট টিথ', 'অন বিউটি', 'এনডব্লিউ'] },
  style: { en: 'Vibrant, polyphonic, and humorously social-realist.', bn: 'প্রাণবন্ত, বহু-কণ্ঠস্বর সম্পন্ন এবং হাস্যরসময় সামাজিক-বাস্তববাদী শৈলী।' },
  contribution: { en: 'Defined the "hysterical realism" of the new millennium and explored multicultural identity.', bn: 'নতুন সহস্রাব্দের বহুসংস্কৃতিবাদী পরিচয় এবং "হিস্টেরিক্যাল রিয়ালিজম"কে সংজ্ঞায়িত করেছেন।' },
  quotes: { en: ['Every moment happens twice: inside and outside, and they are two different histories.'], bn: ['প্রতিটি মুহূর্ত দুবার ঘটে: ভেতরে এবং বাইরে, এবং এগুলো দুটি আলাদা ইতিহাস।'] }
},
{
  id: 'chinua-achebe',
  name: { en: 'Chinua Achebe', bn: 'চিনুয়া আচেবে' },
  birth: '1930',
  death: '2013',
  period: 'postmodern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Chinua_Achebe_2008.jpg/220px-Chinua_Achebe_2008.jpg',
  intro: { en: 'Nigerian novelist often called the "father of African literature," famous for his critique of the colonial narrative.', bn: 'নাইজেরিয়ান ঔপন্যাসিক যাকে প্রায়শই "আফ্রিকান সাহিত্যের জনক" বলা হয়, ঔপনিবেশিক আখ্যানের সমালোচনার জন্য বিখ্যাত।' },
  description: { en: 'Achebe wrote in English to reclaim the history of Africa from Western distortions. His masterpiece Things Fall Apart portrays the clash between traditional Igbo culture and European colonialism. He was a central figure in the post-colonial movement to let African voices be heard.', bn: 'আচেবে পশ্চিমাদের বিকৃতি থেকে আফ্রিকার ইতিহাস পুনরুদ্ধার করার জন্য ইংরেজিতে লিখেছিলেন। তাঁর শ্রেষ্ঠ শিল্পকর্ম "থিংস ফল অ্যাপার্ট" ঐতিহ্যবাহী ইগবো সংস্কৃতি এবং ইউরোপীয় ঔপনিবেশিকতার মধ্যে সংঘর্ষ চিত্রায়িত করে।' },
  majorWorks: { en: ['Things Fall Apart', 'No Longer at Ease', 'Arrow of God'], bn: ['থিংস ফল অ্যাপার্ট', 'নো লঙ্গার অ্যাট ইজ', 'অ্যারো অফ গড'] },
  style: { en: 'Measured, mythic, and incorporating African orality and proverbs.', bn: 'পরিমিত, পৌরাণিক এবং আফ্রিকান মৌখিক ঐতিহ্য ও প্রবাদের সংমিশ্রণে গড়া শৈলী।' },
  contribution: { en: 'Established the post-colonial novel and changed the Western perception of African history.', bn: 'উত্তর-ঔপনিবেশিক উপন্যাস প্রতিষ্ঠা করেন এবং আফ্রিকান ইতিহাস সম্পর্কে পশ্চিমা ধারণা বদলে দেন।' },
  quotes: { en: ['The sun will shine on those who stand before it shines on those who kneel under them.'], bn: ['সূর্য তাদের ওপর আগে চকমক করবে যারা দাঁড়িয়ে আছে, তাদের ওপর পরে যারা তাদের নিচে হাঁটু গেড়ে বসে আছে।'] }
},
{
  id: 'sylvia-plath',
  name: { en: 'Sylvia Plath', bn: 'সিলভিয়া প্লাথ' },
  birth: '1932',
  death: '1963',
  period: 'postmodern',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sylvia_Plath_by_Passport_photo.jpg/220px-Sylvia_Plath_by_Passport_photo.jpg',
  intro: { en: 'A pioneer of Confessional poetry, known for her intense and visceral imagery.', bn: 'কনফেশনাল পোয়েট্রি বা স্বীকারোক্তিমূলক কবিতার একজন পথিকৃৎ, তাঁর তীব্র ও গভীর চিত্রকল্পের জন্য পরিচিত।' },
  description: { en: 'Plath’s poetry and her semi-autobiographical novel The Bell Jar delve into trauma, mental illness, and the entrapment of feminine identity. Her late work in Ariel is considered some of the most powerful and disturbing verse in modern English. Her legacy remains a focal point for feminist and psychological criticism.', bn: 'প্লাথের কবিতা এবং তাঁর আধা-আত্মজীবনীমূলক উপন্যাস "দ্য বেল জার" ট্রমাহ, মানসিক অসুস্থতা এবং নারী পরিচয়ের অবরুদ্ধতাকে তুলে ধরে। তাঁর শেষ দিকের কাজ "এরিয়েল" আধুনিক ইংরেজির অন্যতম শক্তিশালী কবিতা হিসেবে বিবেচিত।' },
  majorWorks: { en: ['Ariel', 'The Bell Jar', 'The Colossus'], bn: ['এরিয়েল', 'দ্য বেল জার', 'দ্য কলোসাস'] },
  style: { en: 'Raw, violent, and uncompromisingly personal lyrical verse.', bn: 'স্বচ্ছ, তীব্র এবং আপসহীনভাবে ব্যক্তিগত গীতিধর্মী শ্লোক।' },
  contribution: { en: 'Transformed personal trauma into high art and defined the confessional mode.', bn: 'ব্যক্তিগত ট্রমাহকে উচ্চমানের শিল্পে রূপান্তরিত করেছেন এবং স্বীকারোক্তিমূলক শৈলীকে সংজ্ঞায়িত করেছেন।' },
  quotes: { en: ['I am, I am, I am.'], bn: ['আমি আছি, আমি আছি, আমি আছি।'] }
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
