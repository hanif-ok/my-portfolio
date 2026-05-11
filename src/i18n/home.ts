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
  certifications: {
    badge: string;
    entries: Array<{
      name: string;
      fullName: string;
      issuer: string;
      year: number;
      logo: string;
      description: string;
      credentialId?: string;
      link?: string;
    }>;
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
    badge: string,
    title: string,
    labels: {
      email: "email",
      github: "github",
      linkedin: "linkedin",
      // mastodon: "mast.",
      // rss: "rss",
    },
  };
  about: {
    badge: string;
    title: string;
    description: string;
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
}

export const SKILL_GROUPS: Array<{ title: string; items: string[] }> = [
  {
    title: "languages",
    items: [
      "JavaScript / TypeScript",
      "Python",
      "Go",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    title: "frontend",
    items: [
      "React",
      "Vite",
    ],
  },
  {
    title: "backend / scripting",
    items: [
      "Node / Express",
      "Flask",
      "Postgres",
      "scraping (Playwright)",
    ],
  },
  {
    title: "devops & tools",
    items: [
      "Git & GitHub Actions",
      "Docker",
      "Nginx",
      "Linux (Debian, Arch)",
      "Figma",
    ],
  },

];

const ENGLISH_COPY: HomeDictionary = {
  browserTitle: "Hanif Omar Kertapati",
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
        company: "PT Surya Citra Media, Tbk",
        description: [
          "Implemented a dashboard monitoring system for various database softwares using grafana and prometheus as a basis",
          "Automated monthly data entry tasks using selenium and AHK, reducing entry time by 20%",
        "Wrote documentations for systems, reducing redundancy in repeatable installations"],
        featured: false,
      },
    ],
  },
  projects: {
    badge: "PROJECTS - featured work",
    seeAll: "see all ->",
  },
  certifications: {
    badge: "/CERTS - verified credentials",
    entries: [
      {
        name: "Sample Cert A",
        fullName: "Sample Certification A — Long Form",
        issuer: "Issuer Name",
        year: 2024,
        logo: "",
        description:
          "Placeholder description for the first sample certification. Replace with real summary.",
      },
      {
        name: "Sample Cert B",
        fullName: "Sample Certification B — Long Form",
        issuer: "Issuer Name",
        year: 2023,
        logo: "",
        description:
          "Placeholder description for the second sample certification. Replace with real summary.",
      },
    ],
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
      github: "github",
      linkedin: "linkedin",
      // mastodon: "mast.",
      // rss: "rss",
    },
  },
  about: {
    badge: "ABOUT",
    title: "About Me",
    description: "I am a software developer and automation engineer with a passion for creating efficient tools and solving complex problems. I enjoy bridging the gap between IT support and software engineering to build reliable systems.",
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
};

const INDONESIAN_COPY: HomeDictionary = {
  browserTitle: "Hanif Omar Kertapati",
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
    introLine2: ["Software Developer", "Automation Engineer", "IT Support"],
    contactCta: "hubungi saya>",
  },
  now: {
    badge: "SEKARANG - APR '26",
    title: "sedang-",
    bullets: [
      "Mencari Pengalaman Baru",
      "Belajar sini dan sana",
      "???",
    ],
  },
  work: {
    badge: "PEKERJAAN - riwayat karir",
    expandAll: "+ buka semua",
    entries: [
      {
        periodStart: "Oct 2025",
        periodEnd: "Apr 2026",
        role: "IT Support | Software Engineer Intern",
        company: "PT Asuransi Kredit Indonesia",
        description: [
"Mengotomatisasi pengiriman 100+ memo internal berulang menggunakan n8n dan Puppeteer, menghemat 15% waktu administratif mingguan",
"Membangun CRM Manajemen Prospek menggunakan Flutter dan Supabase, menyederhanakan alur penjualan dari penangkapan prospek hingga konversi",
"Mengembangkan dasbor KPI real-time di Next.js untuk memantau target asuransi tahunan, memungkinkan manajemen memantau kinerja departemen secara sekilas",
"Ikut mengembangkan CRM retensi klien VIP bersama Departemen Networking menggunakan Next.js, memusatkan data klien bernilai tinggi dan alur kerja tindak lanjut",
"Bertanggung jawab atas dokumentasi rapat lintas tim, merangkum diskusi menjadi ringkasan yang dapat ditindaklanjuti dan memastikan tindak lanjut atas hasil keputusan utama"        ],
        featured: true,
      },
      {
        periodStart: "2022",
        periodEnd: "24",
        role: "Storage Engineer Intern",
        company: "PT Surya Citra Media, Tbk",
        description: [
"Menggunakan dasbor pemantauan basis data terpusat menggunakan Grafana dan Prometheus untuk visibilitas real-time di berbagai platform",
"Mengotomatisasi proses entri data bulanan menggunakan Selenium dan AHK, memangkas waktu entri manual sebesar 20% dan mengurangi kesalahan manusia",
"Membuat dokumentasi teknis terstandarisasi untuk instalasi berulang, memangkas waktu penyiapan dari 2 jam menjadi 30 menit per pemasangan"],
        featured: false,
      },
    ],
  },
  projects: {
    badge: "PROYEK - karya pilihan",
    seeAll: "lihat semua ->",
  },
  certifications: {
    badge: "/CERTS - kredensial terverifikasi",
    entries: [
      {
        name: "Sample Cert A",
        fullName: "Sample Certification A — Long Form",
        issuer: "Issuer Name",
        year: 2024,
        logo: "",
        description:
          "Deskripsi placeholder untuk sertifikasi sampel pertama. Ganti dengan ringkasan asli.",
      },
      {
        name: "Sample Cert B",
        fullName: "Sample Certification B — Long Form",
        issuer: "Issuer Name",
        year: 2023,
        logo: "",
        description:
          "Deskripsi placeholder untuk sertifikasi sampel kedua. Ganti dengan ringkasan asli.",
      },
    ],
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
      linkedin: "linkedin",
      // mastodon: "mast.",
      // rss: "rss",
    },
  },
  about: {
    badge: "TENTANG",
    title: "Tentang Saya",
    description: "Saya adalah seorang pengembang perangkat lunak dan insinyur otomasi yang memiliki semangat untuk membuat alat yang efisien dan menyelesaikan masalah kompleks. Saya senang menjembatani celah antara dukungan IT dan rekayasa perangkat lunak untuk membangun sistem yang handal.",
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
};

export const HOME_COPY: Record<Locale, HomeDictionary> = {
  en: ENGLISH_COPY,
  id: INDONESIAN_COPY,
};

