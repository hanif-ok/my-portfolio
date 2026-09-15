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
    cta: string;
    empty: string;
    // Per-item title and summary come from the sandbox content collection, not
    // from here - see the data-lang-pane rules in global.css. Only chrome lives
    // in this dictionary, because LocaleRuntime overwrites the textContent of
    // anything carrying a data-i18n-key.
    actions: { about: string; live: string; source: string };
    listing: { title: string; subtitle: string };
    detail: { badge: string; back: string; yearLabel: string; stackLabel: string };
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

// The "now" badge is stamped at build time rather than hand-written, so it can
// never sit there claiming to be current while pointing at a month that has
// already passed. The deploy workflow also rebuilds on a monthly schedule, so
// the stamp stays honest even during a stretch with no pushes.
const MONTHS: Record<Locale, string[]> = {
  en: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  id: ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGU", "SEP", "OKT", "NOV", "DES"],
};

const BUILT_AT = new Date();

const buildStamp = (locale: Locale) =>
  `${MONTHS[locale][BUILT_AT.getMonth()]} '${String(BUILT_AT.getFullYear()).slice(2)}`;

// Every entry here is backed by something else on the page — a work bullet or a
// featured project — so each one survives being asked about in an interview.
export const SKILL_GROUPS: Array<{ title: string; items: string[] }> = [
  {
    title: "frontend",
    items: [
      "Next.js / React",
      "Flutter",
      "TypeScript / JavaScript",
      "HTML / CSS",
    ],
  },
  {
    title: "backend & data",
    items: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Go",
    ],
  },
  {
    title: "automation",
    items: [
      "n8n",
      "Puppeteer",
      "Selenium",
      "Python",
    ],
  },
  {
    title: "ops & tooling",
    items: [
      "Git & GitHub Actions",
      "Docker",
      "Grafana / Prometheus",
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
    introLine2: ["Fullstack Engineer"],
    contactCta: "contact me>",
  },
  now: {
    badge: `NOW - ${buildStamp("en")}`,
    title: "currently-",
    bullets: [
      "Looking for new opportunities",
      "Learning a little bit of everything",
      "Finding new projects",
    ],
  },
  work: {
    badge: "WORK - career history",
    expandAll: "+ expand all",
    entries: [
      {
        periodStart: "Oct 2025",
        periodEnd: "Apr 2026",
        role: "IT Support | Software Engineer Intern",
        company: "PT Asuransi Kredit Indonesia",
        description: [
          "Automated delivery of 100+ recurring internal memos with n8n and Puppeteer, cutting weekly administrative time by 15%.",
          "Built a Lead Management CRM in Flutter and Supabase across several iterations, streamlining the sales pipeline from lead capture through conversion.",
          "Developed a real-time KPI dashboard in Next.js to track annual insurance targets, giving management department-level performance at a glance.",
          "Co-developed a VIP client retention CRM with the Networking department in Next.js, centralizing high-value client data and follow-up workflows.",
          "Owned cross-team meeting documentation, turning discussions into actionable summaries and tracking follow-through on key decisions.",
        ],
        featured: true,
      },
      {
        periodStart: "2022",
        periodEnd: "2024",
        role: "Storage Engineer Intern",
        company: "PT Surya Citra Media, Tbk",
        description: [
          "Built a centralized database monitoring dashboard with Grafana and Prometheus, giving real-time visibility across multiple platforms.",
          "Automated monthly data entry with Selenium and AutoHotkey, cutting manual entry time by 20% and reducing human error.",
          "Wrote standardized technical documentation for repeat installations, cutting setup time from 2 hours to 30 minutes per deployment.",
        ],
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
    badge: "/SANDBOX",
    cta: "poke around ->",
    empty: "Nothing in the sandbox yet.",
    actions: {
      about: "about this ->",
      live: "open it live ->",
      source: "source on github ->",
    },
    listing: {
      title: "the sandbox.",
      subtitle: "side projects, built for the pleasure of building them.",
    },
    detail: {
      badge: "/SANDBOX",
      back: "<- back to the sandbox",
      yearLabel: "year",
      stackLabel: "stack",
    },
  },
  skillsPreview: {
    badge: "SKILLS - press -> full list",
    title: "Testimonials",
    hint: "-> press to see the full list",
    button: "enter click",
  },
  contact: {
    badge: "CONTACT",
    title: "find me-",
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
    title: "about me-",
    description: "I build internal tools end to end — CRMs, dashboards and the automation that feeds them. At an Indonesian credit insurer I shipped a Flutter lead-management CRM, a Next.js KPI dashboard, and an n8n pipeline that took a recurring memo process off people's hands. I like the unglamorous problems: the manual step nobody has gotten around to deleting yet.",
  },
  fullSkills: {
    title: "My Skills",
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
    introLine2: ["Fullstack Engineer"],
    contactCta: "hubungi saya>",
  },
  now: {
    badge: `SEKARANG - ${buildStamp("id")}`,
    title: "sedang-",
    bullets: [
      "Mencari peluang baru",
      "Belajar sedikit banyak hal",
      "Mencari proyek baru",
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
          "Mengotomatisasi pengiriman 100+ memo internal berulang menggunakan n8n dan Puppeteer, menghemat 15% waktu administratif mingguan.",
          "Membangun CRM Manajemen Prospek menggunakan Flutter dan Supabase melalui beberapa iterasi, menyederhanakan alur penjualan dari penangkapan prospek hingga konversi.",
          "Mengembangkan dasbor KPI real-time di Next.js untuk memantau target asuransi tahunan, memungkinkan manajemen memantau kinerja departemen secara sekilas.",
          "Ikut mengembangkan CRM retensi klien VIP bersama Departemen Networking menggunakan Next.js, memusatkan data klien bernilai tinggi dan alur kerja tindak lanjut.",
          "Bertanggung jawab atas dokumentasi rapat lintas tim, merangkum diskusi menjadi ringkasan yang dapat ditindaklanjuti dan memastikan tindak lanjut atas keputusan utama.",
        ],
        featured: true,
      },
      {
        periodStart: "2022",
        periodEnd: "2024",
        role: "Storage Engineer Intern",
        company: "PT Surya Citra Media, Tbk",
        description: [
          "Membangun dasbor pemantauan basis data terpusat menggunakan Grafana dan Prometheus untuk visibilitas real-time di berbagai platform.",
          "Mengotomatisasi proses entri data bulanan menggunakan Selenium dan AutoHotkey, memangkas waktu entri manual sebesar 20% dan mengurangi kesalahan manusia.",
          "Membuat dokumentasi teknis terstandarisasi untuk instalasi berulang, memangkas waktu penyiapan dari 2 jam menjadi 30 menit per pemasangan.",
        ],
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
    badge: "/SANDBOX",
    cta: "jelajahi ->",
    empty: "Belum ada apa-apa di sandbox.",
    actions: {
      about: "tentang ini ->",
      live: "buka ->",
      source: "kode di github ->",
    },
    listing: {
      title: "sandbox.",
      subtitle: "proyek sampingan, dibuat karena senang membuatnya.",
    },
    detail: {
      badge: "/SANDBOX",
      back: "<- kembali ke sandbox",
      yearLabel: "tahun",
      stackLabel: "teknologi",
    },
  },
  skillsPreview: {
    badge: "KEAHLIAN - tekan -> daftar lengkap",
    title: "Testimoni",
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
    title: "tentang saya-",
    description: "Saya membangun perangkat internal dari hulu ke hilir — CRM, dasbor, dan otomatisasi yang menyuplainya. Di sebuah perusahaan asuransi kredit di Indonesia, saya mengerjakan CRM manajemen prospek berbasis Flutter, dasbor KPI dengan Next.js, dan pipeline n8n yang mengambil alih proses memo berulang dari tangan orang. Saya menyukai masalah yang tidak glamor: satu langkah manual yang belum sempat dihapus siapa pun.",
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
