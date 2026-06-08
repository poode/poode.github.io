import type { Lang } from '../i18n/ui';

export type Localized = Record<Lang, string>;

export interface Social {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'x' | 'mail';
}

export interface SkillGroup {
  title: Localized;
  items: string[];
}

export const profile = {
  name: {
    en: 'Abdulazeem M. Mouneer',
    ar: 'عبدالعظيم محمد منير',
  } satisfies Localized,

  title: {
    en: 'Software Engineer · Independent Builder',
    ar: 'مهندس برمجيات · صانع مستقل',
  } satisfies Localized,

  // Short hero line.
  tagline: {
    en: 'I design scalable software platforms and turn ideas into complete, shippable systems — with a focus on ERP/POS products and AI-powered, offline-first applications.',
    ar: 'أصمّم منصّات برمجية قابلة للتوسّع وأحوّل الأفكار إلى أنظمة كاملة جاهزة للإطلاق — مع تركيز على منتجات ERP/POS وتطبيقات الذكاء الاصطناعي التي تعمل دون اتصال.',
  } satisfies Localized,

  // Longer about paragraphs.
  about: {
    en: [
      'I am a software engineer and independent builder who thinks in systems and platforms rather than one-off features. I work comfortably across software architecture, backend, and full-stack product design, and I enjoy taking a business requirement all the way to a working, maintainable system.',
      'Lately I have been building a modular ERP/POS ecosystem — a generic, reusable core with industry-specific functionality delivered as independently licensed plugins, designed for offline-first operation with sync when a connection is available. In parallel I build AI-powered applications: local LLM deployment, offline assistants, RAG and semantic search, and knowledge-graph systems.',
      'I value long-term maintainability, extensibility, and repeatable foundations that can generate multiple products — a software factory rather than a pile of apps.',
    ],
    ar: [
      'أنا مهندس برمجيات وصانع مستقل أفكّر بمنطق الأنظمة والمنصّات بدلًا من الميزات المنفصلة. أعمل بسلاسة عبر بنية البرمجيات والواجهات الخلفية وتصميم المنتجات الكامل، وأستمتع بأخذ متطلبات العمل إلى نظام عملي قابل للصيانة.',
      'أعمل مؤخرًا على بناء منظومة ERP/POS معيارية — نواة عامة قابلة لإعادة الاستخدام مع وظائف خاصة بكل قطاع تُقدَّم كإضافات مرخّصة بشكل مستقل، ومصمّمة للعمل دون اتصال مع المزامنة عند توفر الإنترنت. وبالتوازي أبني تطبيقات مدعومة بالذكاء الاصطناعي: تشغيل نماذج لغوية محليًا، ومساعدين يعملون دون اتصال، وأنظمة RAG والبحث الدلالي والرسوم المعرفية.',
      'أُعطي قيمة كبيرة للصيانة طويلة الأمد وقابلية التوسّع والأسس القابلة لإعادة الاستخدام التي تنتج منتجات متعددة — مصنع برمجيات وليس مجرد مجموعة تطبيقات.',
    ],
  } satisfies Record<Lang, string[]>,

  location: {
    en: 'Cairo, Egypt',
    ar: 'القاهرة، مصر',
  } satisfies Localized,

  email: 'engabdulazeem@gmail.com',

  avatar: 'https://avatars.githubusercontent.com/u/275428',

  socials: [
    { label: 'GitHub', href: 'https://github.com/poode', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelazeemmohammed', icon: 'linkedin' },
    { label: 'X', href: 'https://x.com/poode_10', icon: 'x' },
    { label: 'Email', href: 'mailto:engabdulazeem@gmail.com', icon: 'mail' },
  ] satisfies Social[],

  skills: [
    {
      title: { en: 'Architecture & Product', ar: 'البنية والمنتج' },
      items: ['System design', 'Modular monoliths', 'Plugin ecosystems', 'Multi-tenant', 'Offline-first', 'MVP & prototyping'],
    },
    {
      title: { en: 'Backend', ar: 'الواجهة الخلفية' },
      items: ['NestJS', 'FastAPI', 'Express', 'Node.js', 'Python', 'TypeScript', 'GraphQL', 'REST'],
    },
    {
      title: { en: 'Frontend', ar: 'الواجهة الأمامية' },
      items: ['Next.js', 'React', 'Astro', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'PWA', 'i18n (AR/EN)'],
    },
    {
      title: { en: 'Data', ar: 'البيانات' },
      items: ['PostgreSQL', 'Prisma', 'MySQL', 'MongoDB', 'Redis', 'Qdrant', 'OpenSearch', 'Meilisearch'],
    },
    {
      title: { en: 'AI / RAG', ar: 'الذكاء الاصطناعي / RAG' },
      items: ['LlamaIndex', 'Ollama', 'LiteRT-LM', 'BGE-M3 embeddings', 'Hybrid search', 'Knowledge graphs'],
    },
    {
      title: { en: 'DevOps', ar: 'العمليات' },
      items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'Prometheus', 'Grafana'],
    },
  ] satisfies SkillGroup[],
};
