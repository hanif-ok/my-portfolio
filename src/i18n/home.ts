export type Locale = "en" | "id";

export interface HomeDictionary {
  browserTitle: string;
  nav: {
    home: string;
    blog: string;
    sandbox: string;
    about: string;
    localeLabel: string;
  };
  hero: {
    badge: string;
    introLine1: string;
    introLine2: string[];
    contactCta: string;
  };
  now: {
    badge: string;
    title: string;
    bullets: string[];
  };
  work: {
    badge: string;
    expandAll: string;
    entries: Array<{
      periodStart: string;
      periodEnd: string;
      role: string;
      company: string;
      description: string[];
      featured: boolean;
    }>;
  };
  projects: {
    badge: string;
    seeAll: string;
  };
  sandbox: {
    badge: string;
    items: string[];
    cta: string;
  };
  skillsPreview: {
    badge: string;
    title: string;
    hint: string;
    button: string;
  };
  contact: {
    badge: string;
    title: string;
    labels: {
      email: string;
      github: string;
      // mastodon: string;
      // rss: string;
    };
  };
  fullSkills: {
    title: string;
    subtitle: string;
    slug: string;
  };
  footer: {
    end: string;
    title: string;
    subtitle: string;
  };
  projectTranslations: Record<
    string,
    {
      title: string;
      summary: string;
    }
  >;
}

export const SKILL_GROUPS: Array<{ title: string; items: string[] }> = [
  {
    title: "languages",
    items: [
      "JavaScript / TypeScript",
      "Python",
      "Go",
      "Bash / Zsh",
      "SQL",
      "HTML / CSS",
      "Lua",
      "a little Rust",
    ],
  },
  {
    title: "frontend",
    items: [
      "React",
      "Svelte",
      "CSS Grid / Flex",
      "Vite",
      "Canvas + SVG",
      "web components",
      "Tailwind",
      "design tokens",
    ],
  },
  {
    title: "backend / scripting",
    items: [
      "Node / Express",
      "Flask",
      "Postgres",
      "Redis",
      "REST & webhooks",
      "cron & workers",
      "scraping (Playwright)",
      "a little Rails",
    ],
  },
  {
    title: "IT support",
    items: [
      "Active Directory",
      "Windows Server",
      "macOS / Jamf",
      "Intune / MDM",
      "Okta / SSO",
      "networking & DNS",
      "printers (ugh)",
      "Zendesk / Jira",
    ],
  },
  {
    title: "devops & tools",
    items: [
      "Git & GitHub Actions",
      "Docker",
      "Nginx",
      "Linux (Debian, Arch)",
      "VS Code",
      "Figma",
      "Obsidian",
      "tmux",
    ],
  },
  {
    title: "soft",
    items: [
      "ticket triage",
      "writing clearly",
      "pair debugging",
      "patience",
      "teaching users",
      "knowing when to google",
    ],
  },
];

const ENGLISH_COPY: HomeDictionary = {
  browserTitle: "your.name - a filing cabinet",
  nav: {
    home: "/home",
    blog: "/blog",
    sandbox: "/sandbox",
    about: "/about",
    localeLabel: "lang",
  },
  hero: {
    badge: "HELLO",
    introLine1: "Hanif Omar Kertapati,",
    introLine2: ["Software Developer", "Automation Engineer", "IT Support"],
    contactCta: "contact me>",
  },
  now: {
    badge: "NOW - APR '26",
    title: "currently-",
    bullets: [
      "Looking for new opportunities",
      "Learning a little bit of everything",
      "Finding new projects",
    ],
  },
  work: {
    badge: "WORK",
    expandAll: "+ expand all",
    entries: [
      {
        periodStart: "Oct 2025",
        periodEnd: "Apr 2026",
        role: "IT Support | Software Engineer Intern",
        company: "PT Asuransi Kredit Indonesia",
        description: [
          "Automated internal email delivery using n8n via Puppeteer, reducing manual distribution effort and improving consistency.",
          "Engineered an end-to-end Lead Management CRM using Flutter and Supabase over several iterations, streamlining the sales pipeline and UI/UX.",
          "Developed a Next.js target tracker to monitor annual insurance KPIs in real-time.",
          "Co-developed an HVC CRM with the Networking Dept using Next.js for VIP client retention.",
          "Managed meeting documentation, providing concise summaries and tracking action items.",
        ],
        featured: true,
      },
      {
        periodStart: "2022",
        periodEnd: "24",
        role: "Storage Engineer Intern",
        company: "Widgets Inc",
        description: [],
        featured: false,
      },
      {
        periodStart: "2020",
        periodEnd: "22",
        role: "Help Desk Tech",
        company: "State University",
        description: [
          "Tier 1/2 support for 400 staff. Learned to write clearly and fast.",
        ],
        featured: false,
      },
    ],
  },
  projects: {
    badge: "PROJECTS - featured work",
    seeAll: "see all ->",
  },
  sandbox: {
    badge: "/SANDBOX - toys",
    items: ["scroll-phys", "css-clock", "midi-keys", "regex-golf"],
    cta: "poke around ->",
  },
  skillsPreview: {
    badge: "SKILLS - press -> full list",
    title: "Testimonies",
    hint: "-> press to see the full list",
    button: "enter click",
  },
  contact: {
    badge: "CONTACT",
    title: "Contact me",
    labels: {
      email: "email",
      github: "github"
      // mastodon: "mast.",
      // rss: "rss",
    },
  },
  fullSkills: {
    title: "My Skill",
    subtitle: "- everything i reach for",
    slug: "/skills",
  },
  footer: {
    end: "- end of page -",
    title: "contact me",
    subtitle: "takes you back up to the contact card",
  },
  projectTranslations: {
    "project.kanbanDesk": {
      title: "Kanban Desk",
      summary: "A tactile board for tracking personal sprints and habits.",
    },
    "project.cliNotebook": {
      title: "CLI Notebook",
      summary:
        "A markdown-first terminal notebook with snippets and quick recall.",
    },
    "project.supportOps": {
      title: "Support Ops Dashboard",
      summary: "Internal queue and SLA view for support and incident handling.",
    },
    "project.pixelToy": {
      title: "Pixel Toy Lab",
      summary:
        "Experimental browser sketches using canvas, timing, and easing.",
    },
    "project.docsStarter": {
      title: "Docs Starter",
      summary:
        "A lightweight docs template tuned for small engineering teams.",
    },
  },
};

const INDONESIAN_COPY: HomeDictionary = {
  browserTitle: "your.name - lemari arsip",
  nav: {
    home: "/home",
    blog: "/blog",
    sandbox: "/sandbox",
    about: "/about",
    localeLabel: "bahasa",
  },
  hero: {
    badge: "HALO",
    introLine1: "Hanif Omar Kertapati,",
    introLine2: ["Pengembang Perangkat Lunak", "Engineer Otomasi", "Dukungan IT"],
    contactCta: "hubungi saya>",
  },
  now: {
    badge: "SEKARANG - APR '26",
    title: "sedang-",
    bullets: [
      "IT Support II @ Acme",
      "merilis mainan JS kecil",
      "terbuka untuk peran dev",
    ],
  },
  work: {
    badge: "PEKERJAAN - riwayat karir",
    expandAll: "+ buka semua",
    entries: [
      {
        periodStart: "2024",
        periodEnd: "sekarang",
        role: "IT Support II",
        company: "Acme Corp",
        description: [
          "Mengotomasi pengiriman email internal menggunakan n8n via Puppeteer, mengurangi distribusi manual dan meningkatkan konsistensi.",
          "Membangun CRM manajemen prospek end-to-end menggunakan Flutter dan Supabase, menyederhanakan pipeline penjualan dan UI/UX.",
          "Mengembangkan target tracker Next.js untuk memantau KPI asuransi tahunan secara real-time.",
          "Co-develop CRM HVC bersama Departemen Networking menggunakan Next.js untuk retensi klien VIP.",
          "Mengelola dokumentasi rapat, menyediakan ringkasan singkat dan melacak action item.",
        ],
        featured: true,
      },
      {
        periodStart: "2022",
        periodEnd: "24",
        role: "Junior Developer",
        company: "Widgets Inc",
        description: [],
        featured: false,
      },
      {
        periodStart: "2020",
        periodEnd: "22",
        role: "Help Desk Tech",
        company: "State University",
        description: [
          "Dukungan Tier 1/2 untuk 400 staf. Belajar menulis dengan jelas dan cepat.",
        ],
        featured: false,
      },
    ],
  },
  projects: {
    badge: "PROYEK - karya pilihan",
    seeAll: "lihat semua ->",
  },
  sandbox: {
    badge: "/SANDBOX - mainan",
    items: ["scroll-phys", "css-clock", "midi-keys", "regex-golf"],
    cta: "jelajahi ->",
  },
  skillsPreview: {
    badge: "KEAHLIAN - tekan -> daftar lengkap",
    title: "Kesaksian",
    hint: "-> tekan untuk melihat daftar lengkap",
    button: "klik masuk",
  },
  contact: {
    badge: "KONTAK",
    title: "temukan saya-",
    labels: {
      email: "email",
      github: "github",
      // mastodon: "mast.",
      // rss: "rss",
    },
  },
  fullSkills: {
    title: "Keahlian Saya",
    subtitle: "- semua yang saya gunakan",
    slug: "/skills",
  },
  footer: {
    end: "- akhir halaman -",
    title: "hubungi saya",
    subtitle: "membawa Anda kembali ke kartu kontak",
  },
  projectTranslations: {
    "project.kanbanDesk": {
      title: "Kanban Desk",
      summary: "Papan taktil untuk melacak sprint dan kebiasaan pribadi.",
    },
    "project.cliNotebook": {
      title: "CLI Notebook",
      summary:
        "Buku catatan terminal berbasis markdown dengan cuplikan dan akses cepat.",
    },
    "project.supportOps": {
      title: "Support Ops Dashboard",
      summary:
        "Tampilan antrean dan SLA internal untuk penanganan dukungan dan insiden.",
    },
    "project.pixelToy": {
      title: "Pixel Toy Lab",
      summary:
        "Sketsa browser eksperimental menggunakan canvas, timing, dan easing.",
    },
    "project.docsStarter": {
      title: "Docs Starter",
      summary:
        "Template dokumentasi ringan yang disesuaikan untuk tim engineering kecil.",
    },
  },
};

export const HOME_COPY: Record<Locale, HomeDictionary> = {
  en: ENGLISH_COPY,
  id: INDONESIAN_COPY,
};

