export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

// UI chrome strings. Content (bio, projects) lives in src/data/*.
export const ui = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.toggleLang': 'العربية',
    'nav.toggleTheme': 'Toggle theme',

    'hero.availability': 'Available for select work & collaborations',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',

    'about.heading': 'About',

    'projects.heading': 'Selected projects',
    'projects.subheading':
      'Platforms and products I have designed and built — from offline-first AI systems to modular ERP/POS.',
    'projects.group.ai': 'AI · RAG · Local LLM',
    'projects.group.erp': 'Business & ERP systems',
    'projects.group.products': 'Products & infrastructure',
    'projects.group.contrib': 'Contributions',
    'projects.role.contributor': 'Contributor',
    'projects.viewCode': 'Code',
    'projects.viewLive': 'Live',
    'projects.more':
      'And many more — additional products, client projects, and collaborations I’ve contributed to that aren’t listed here.',

    'skills.heading': 'Skills & tools',

    'contact.heading': "Let's build something",
    'contact.body':
      'Open to product collaborations, architecture consulting, and ambitious software builds. The fastest way to reach me is email.',
    'contact.email': 'Email me',

    'status.production': 'Production',
    'status.prerelease': 'Pre-release',
    'status.mvp': 'MVP',
    'status.functional': 'Functional',
    'status.wip': 'In progress',
    'status.boilerplate': 'Boilerplate',

    'footer.built': 'Built with Astro · bilingual & open source',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'nav.about': 'نبذة',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.contact': 'تواصل',
    'nav.toggleLang': 'English',
    'nav.toggleTheme': 'تبديل المظهر',

    'hero.availability': 'متاح لمشاريع وتعاونات مختارة',
    'hero.cta.projects': 'استعرض المشاريع',
    'hero.cta.contact': 'تواصل معي',

    'about.heading': 'نبذة عني',

    'projects.heading': 'مشاريع مختارة',
    'projects.subheading':
      'منصّات ومنتجات صمّمتها وبنيتها — من أنظمة الذكاء الاصطناعي التي تعمل دون اتصال إلى أنظمة ERP/POS المعيارية.',
    'projects.group.ai': 'الذكاء الاصطناعي · RAG · نماذج محلية',
    'projects.group.erp': 'أنظمة الأعمال و ERP',
    'projects.group.products': 'منتجات وبنية تحتية',
    'projects.group.contrib': 'مساهمات',
    'projects.role.contributor': 'مساهِم',
    'projects.viewCode': 'الكود',
    'projects.viewLive': 'مباشر',
    'projects.more':
      'وغيرها الكثير — منتجات ومشاريع عملاء وتعاونات أخرى ساهمت فيها ولم تُذكر هنا.',

    'skills.heading': 'المهارات والأدوات',

    'contact.heading': 'لنبنِ شيئًا معًا',
    'contact.body':
      'منفتح على التعاون في المنتجات، واستشارات البنية المعمارية، وبناء البرمجيات الطموحة. أسرع وسيلة للتواصل معي هي البريد الإلكتروني.',
    'contact.email': 'راسلني',

    'status.production': 'إنتاجي',
    'status.prerelease': 'قيد الإطلاق',
    'status.mvp': 'إصدار أولي',
    'status.functional': 'فعّال',
    'status.wip': 'قيد التطوير',
    'status.boilerplate': 'قالب جاهز',

    'footer.built': 'مبني بـ Astro · ثنائي اللغة ومفتوح المصدر',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
