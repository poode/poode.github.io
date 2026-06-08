import type { Lang } from '../i18n/ui';
import type { Localized } from './profile';

export type ProjectGroup = 'ai' | 'erp' | 'products' | 'contrib';

export type ProjectStatus = 'production' | 'prerelease' | 'mvp' | 'functional' | 'wip' | 'boilerplate';

export type ProjectRole = 'owner' | 'contributor';

export interface Project {
  slug: string;
  name: Localized;
  group: ProjectGroup;
  status: ProjectStatus;
  summary: Localized;
  tags: string[];
  /** Defaults to 'owner'; 'contributor' projects show a contributor tag. */
  role?: ProjectRole;
  /** Optional public links — leave undefined to avoid dead links. */
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  // ── AI · RAG · Local LLM ───────────────────────────────────────────────
  {
    slug: 'pharos',
    group: 'ai',
    status: 'production',
    name: { en: 'Pharos — HeritageVerse AI', ar: 'فاروس — منصّة التراث بالذكاء الاصطناعي' },
    summary: {
      en: 'Offline-first, bilingual Egyptian-heritage knowledge platform: agentic RAG over museums, artifacts, pharaohs and deities, with hybrid search and computer-vision artifact analysis — running fully locally.',
      ar: 'منصّة معرفة للتراث المصري ثنائية اللغة تعمل دون اتصال: نظام RAG وكيلي يغطّي المتاحف والقطع الأثرية والملوك والآلهة، مع بحث هجين وتحليل للقطع بالرؤية الحاسوبية — تعمل محليًا بالكامل.',
    },
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Qdrant', 'Meilisearch', 'Ollama', 'YOLOv11'],
  },
  {
    slug: 'searchrag',
    group: 'ai',
    status: 'production',
    name: { en: 'SearchRAG — Bilingual Search + RAG', ar: 'SearchRAG — بحث ثنائي اللغة مع RAG' },
    summary: {
      en: 'Private, on-device bilingual Q&A search: hybrid BM25 + vector retrieval (BGE-M3) with grounded, cited answers from a local LLM, and multi-format ingestion including Arabic OCR.',
      ar: 'بحث أسئلة وأجوبة ثنائي اللغة يعمل على الجهاز وبخصوصية تامة: استرجاع هجين (BM25 + متجهات BGE-M3) مع إجابات موثّقة بالمصادر من نموذج محلي، واستيعاب متعدد الصيغ يشمل التعرّف الضوئي على النص العربي.',
    },
    tags: ['FastAPI', 'OpenSearch', 'BGE-M3', 'LiteRT-LM', 'Next.js', 'Tesseract OCR'],
  },
  {
    slug: 'ai-game-learn',
    group: 'ai',
    status: 'production',
    name: { en: 'AI Academy Universe', ar: 'عالم أكاديمية الذكاء الاصطناعي' },
    summary: {
      en: 'Offline-first, gamified learning platform (PWA) with an AI mentor and hands-on labs, powered by an on-device LiteRT-LM model — bilingual from day one.',
      ar: 'منصّة تعلّم تفاعلية بأسلوب الألعاب تعمل دون اتصال (PWA) مع مرشد ذكاء اصطناعي ومختبرات تطبيقية، مدعومة بنموذج LiteRT-LM على الجهاز — ثنائية اللغة منذ البداية.',
    },
    tags: ['NestJS', 'React', 'PWA', 'SQLite', 'Prisma', 'LiteRT-LM'],
  },

  // ── Business & ERP systems ─────────────────────────────────────────────
  {
    slug: 'pos-my-app',
    group: 'erp',
    status: 'prerelease',
    name: { en: 'Modular Retail ERP / POS', ar: 'نظام ERP / POS معياري للتجزئة' },
    summary: {
      en: 'A retail platform built on a free generic core plus paid industry plugins (supermarket, pharmacy, …): sales, inventory, purchases, cash management and a rule-based Business Doctor — with offline Ed25519 licensing.',
      ar: 'منصّة تجزئة مبنية على نواة عامة مجانية مع إضافات مدفوعة لكل قطاع (سوبر ماركت، صيدلية، …): مبيعات ومخزون ومشتريات وإدارة نقدية و«طبيب الأعمال» القائم على القواعد — مع ترخيص Ed25519 يعمل دون اتصال.',
    },
    tags: ['NestJS', 'React', 'PostgreSQL', 'Prisma', 'Ed25519', 'i18n (AR/EN)'],
  },
  {
    slug: 'havelock-one',
    group: 'erp',
    status: 'production',
    name: { en: 'HaveLock-One — Tender Management', ar: 'HaveLock-One — إدارة المناقصات' },
    summary: {
      en: 'Enterprise tender-management platform: BOQ/drawings versioning, vendor & RFQ portals, AI document processing with circuit-breaker resilience, real-time notifications and full RBAC across 29 modules.',
      ar: 'منصّة مؤسسية لإدارة المناقصات: إصدارات لجداول الكميات والرسومات، بوابات للموردين وطلبات التسعير، معالجة مستندات بالذكاء الاصطناعي مع مرونة قاطع الدائرة، وإشعارات فورية وصلاحيات كاملة عبر 29 وحدة.',
    },
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Prisma', 'SSE', 'Prometheus', 'Docker'],
  },
  {
    slug: 'jail-system',
    group: 'erp',
    status: 'production',
    name: { en: 'Jail Operations Management', ar: 'نظام إدارة عمليات السجون' },
    summary: {
      en: 'Central jail management system: inmate and case tracking, real-time chat, automated jobs (releases, cleanup, backups) and Excel reporting, fully containerized with role-based access.',
      ar: 'نظام لإدارة السجون المركزية: تتبّع النزلاء والقضايا، ومحادثة فورية، ومهام مؤتمتة (الإفراج والتنظيف والنسخ الاحتياطي)، وتقارير Excel، محزّم بالكامل مع صلاحيات حسب الدور.',
    },
    tags: ['Express', 'MySQL', 'Sequelize', 'Socket.io', 'Handlebars', 'Docker'],
  },

  // ── Products & infrastructure ──────────────────────────────────────────
  {
    slug: 'rakoba',
    group: 'products',
    status: 'production',
    name: { en: 'Rakoba — P2P Ride-Sharing', ar: 'ركوبة — مشاركة الرحلات بين الأفراد' },
    summary: {
      en: 'A production-ready social ride-sharing PWA: create and join rides with seat management, subscriptions and rewards, real-time coordination chat, push notifications and an admin approval panel.',
      ar: 'تطبيق PWA جاهز للإنتاج لمشاركة الرحلات الاجتماعية: إنشاء الرحلات والانضمام إليها مع إدارة المقاعد، واشتراكات ومكافآت، ومحادثة تنسيق فورية، وإشعارات فورية، ولوحة موافقة للمشرفين.',
    },
    tags: ['NestJS', 'React', 'Vite', 'JWT', 'PWA', 'WebSockets', 'Docker'],
  },
  {
    slug: 'construction',
    group: 'products',
    status: 'production',
    name: { en: 'Construction — Programmatic SEO Site', ar: 'موقع شركة إنشاءات — SEO برمجي' },
    summary: {
      en: 'A modern construction-company website with programmatic SEO: dynamic service-area pages, automated OG images, validated quote forms and email integrations — production-tested across Vercel, Firebase and Netlify.',
      ar: 'موقع حديث لشركة إنشاءات مع SEO برمجي: صفحات ديناميكية للخدمات والمناطق، وصور OG مؤتمتة، ونماذج عروض أسعار موثّقة، وتكاملات بريد إلكتروني — مُختبر للإنتاج عبر Vercel و Firebase و Netlify.',
    },
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Radix UI', 'Zod', 'SEO'],
  },
  {
    slug: 'readyserver',
    group: 'products',
    status: 'boilerplate',
    name: { en: 'readyServer — Express Boilerplate', ar: 'readyServer — قالب Express جاهز' },
    summary: {
      en: 'A reusable, production-grade Express boilerplate with a clean layered architecture, switchable MongoDB/MySQL persistence, GraphQL, JWT auth and a full security/validation/logging middleware stack.',
      ar: 'قالب Express قابل لإعادة الاستخدام وبجودة إنتاجية، ببنية طبقية نظيفة، وتخزين قابل للتبديل بين MongoDB و MySQL، و GraphQL، ومصادقة JWT، وطبقة وسائط كاملة للأمان والتحقق والتسجيل.',
    },
    tags: ['Express', 'GraphQL', 'Apollo', 'Mongoose', 'Sequelize', 'JWT', 'Docker'],
  },

  // ── Contributions (worked on as a contributor) ─────────────────────────
  {
    slug: 'nodens',
    group: 'contrib',
    role: 'contributor',
    status: 'production',
    name: { en: 'Nodens — Doctor Data Platform', ar: 'Nodens — منصّة بيانات الأطباء' },
    summary: {
      en: 'A doctor-data platform pairing a desktop (Electron) client with cloud services and automated data import/scraping, backed by a PostgreSQL data model and end-to-end test coverage.',
      ar: 'منصّة لبيانات الأطباء تجمع بين عميل سطح مكتب (Electron) وخدمات سحابية واستيراد/جمع بيانات مؤتمت، مدعومة بنموذج بيانات PostgreSQL وتغطية اختبارات شاملة.',
    },
    tags: ['Node.js', 'Sequelize', 'PostgreSQL', 'Electron', 'Puppeteer', 'Docker'],
  },
  {
    slug: 'nafsya',
    group: 'contrib',
    role: 'contributor',
    status: 'production',
    name: { en: 'Nafsya — Therapy Platform', ar: 'نفسية — منصّة العلاج النفسي' },
    summary: {
      en: 'A mental-health / therapy platform spanning three portals — patient, therapist and admin — covering booking, sessions and content management on a shared Node.js backend.',
      ar: 'منصّة للصحة النفسية والعلاج تمتد عبر ثلاث بوابات — للمريض والمعالِج والإدارة — تغطّي الحجز والجلسات وإدارة المحتوى على واجهة خلفية موحّدة بـ Node.js.',
    },
    tags: ['Express', 'Sequelize', 'MySQL', 'MongoDB', 'Multi-portal'],
  },
  {
    slug: 'zumrafood',
    group: 'contrib',
    role: 'contributor',
    status: 'production',
    name: { en: 'ZumraFood — Search & QA Automation', ar: 'ZumraFood — البحث وأتمتة الاختبار' },
    summary: {
      en: 'Search and quality engineering for the ZumraFood platform: an Elasticsearch-backed product search service plus an end-to-end TestCafe regression suite with Allure reporting.',
      ar: 'هندسة البحث والجودة لمنصّة ZumraFood: خدمة بحث عن المنتجات مدعومة بـ Elasticsearch، بالإضافة إلى مجموعة اختبارات شاملة بـ TestCafe مع تقارير Allure.',
    },
    tags: ['Node.js', 'Elasticsearch', 'MongoDB', 'TestCafe', 'Allure'],
  },
  {
    slug: 'installment',
    group: 'contrib',
    role: 'contributor',
    status: 'prerelease',
    name: { en: 'Installment Manager (Desktop)', ar: 'مدير الأقساط (تطبيق مكتبي)' },
    summary: {
      en: 'A cross-platform desktop app for managing installment / payment-plan sales: customers, payment schedules, due-date tracking and reporting — built on Electron with a relational backend.',
      ar: 'تطبيق مكتبي متعدّد المنصّات لإدارة مبيعات الأقساط وخطط السداد: العملاء وجداول الدفع وتتبّع تواريخ الاستحقاق والتقارير — مبني على Electron مع واجهة خلفية علائقية.',
    },
    tags: ['Electron', 'Express', 'Sequelize', 'MySQL', 'EJS', 'Bootstrap'],
  },
  {
    slug: 'roi-monitor',
    group: 'contrib',
    role: 'contributor',
    status: 'production',
    name: { en: 'ROI Monitor — Factor Attribution', ar: 'ROI Monitor — إسناد العوامل' },
    summary: {
      en: 'A marketing ROI and factor-attribution monitoring application with a Filament admin panel, built on Laravel 12 with Redis-backed caching and queues.',
      ar: 'تطبيق لمراقبة عائد الاستثمار التسويقي وإسناد العوامل مع لوحة تحكّم Filament، مبني على Laravel 12 مع تخزين مؤقت وطوابير مدعومة بـ Redis.',
    },
    tags: ['Laravel 12', 'Filament', 'PHP 8.3', 'MySQL', 'Redis', 'Docker'],
  },
  {
    slug: 'room-visualizer',
    group: 'contrib',
    role: 'contributor',
    status: 'mvp',
    name: { en: 'Modelii Room Visualizer', ar: 'Modelii — مُصوّر الغرف' },
    summary: {
      en: 'An AI-powered interior-design visualizer: render real furniture into a room photo via image-to-image models (Gemini / gpt-image), with every rendered item clickable and linked to a buyable product.',
      ar: 'مُصوّر تصميم داخلي مدعوم بالذكاء الاصطناعي: إدراج أثاث حقيقي داخل صورة الغرفة عبر نماذج صورة-إلى-صورة (Gemini / gpt-image)، مع جعل كل قطعة معروضة قابلة للنقر ومرتبطة بمنتج قابل للشراء.',
    },
    tags: ['Next.js 14', 'React', 'TypeScript', 'Tailwind', 'Gemini', 'gpt-image'],
  },
  {
    slug: 'silvavenir',
    group: 'contrib',
    role: 'contributor',
    status: 'production',
    name: { en: 'SilvaVenir — Forestry Management', ar: 'SilvaVenir — إدارة الغابات' },
    summary: {
      en: 'A forestry-management platform for tree-inventory data: CSV/Excel ingestion, record management, data visualization and automated AI-generated reports — bilingual (EN/FR).',
      ar: 'منصّة لإدارة الغابات وبيانات جرد الأشجار: استيراد CSV/Excel، وإدارة السجلات، وتصوير البيانات، وتقارير مؤتمتة مولّدة بالذكاء الاصطناعي — ثنائية اللغة (إنجليزي/فرنسي).',
    },
    tags: ['React', 'Vite', 'Express', 'TypeScript', 'OpenAI', 'Tailwind'],
  },
];

export const groupOrder: ProjectGroup[] = ['ai', 'erp', 'products', 'contrib'];

export const groupKey: Record<ProjectGroup, string> = {
  ai: 'projects.group.ai',
  erp: 'projects.group.erp',
  products: 'projects.group.products',
  contrib: 'projects.group.contrib',
};

export const statusKey: Record<ProjectStatus, string> = {
  production: 'status.production',
  prerelease: 'status.prerelease',
  mvp: 'status.mvp',
  functional: 'status.functional',
  wip: 'status.wip',
  boilerplate: 'status.boilerplate',
};

export function projectName(p: Project, lang: Lang): string {
  return p.name[lang];
}
