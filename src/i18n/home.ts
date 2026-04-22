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
    introLine2: string;
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
      period: string;
      role: string;
      company: string;
      description: string;
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
      mastodon: string;
      rss: string;
    };
  };
  fullSkills: {
    title: string;
    subtitle: string;
    slug: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
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
    introLine1: "I'm Hanif Omar Kertapati, a",
    introLine2: "Software Developer",
    contactCta: "contact me>",
  },
  now: {
    badge: "NOW - APR '26",
    title: "currently-",
    bullets: [
      "IT Support II @ Acme",
      "shipping small JS toys",
      "open to dev roles",
    ],
  },
  work: {
    badge: "WORK - trail of jobs",
    expandAll: "+ expand all",
    entries: [
      {
        period: "2024-now",
        role: "IT Support II",
        company: "Acme Corp",
        description: "",
        featured: true,
      },
      {
        period: "2022-24",
        role: "Junior Developer",
        company: "Widgets Inc",
        description:
          "React / Node. Shipped 14 features; owned the internal tooling stack AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAowned the internal tooling stack AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAowned the internal tooling stack AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAowned the internal tooling stack AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAowned the internal tooling stack AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAowned the internal tooling stack AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs.",
        featured: false,
      },
      {
        period: "2020-22",
        role: "Help Desk Tech",
        company: "State University",
        description:
          "Tier 1/2 support for 400 staff. Learned to write clearly and fast.",
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
    title: "find me-",
    labels: {
      email: "email",
      github: "github",
      mastodon: "mast.",
      rss: "rss",
    },
  },
  fullSkills: {
    title: "My Skill",
    subtitle: "- everything i reach for",
    slug: "/skills",
    groups: [
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
    ],
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

function toIndonesianTodo<T>(value: T, path = "home"): T {
  if (typeof value === "string") {
    return `TODO(ID): ${path}` as T;
  }

  if (Array.isArray(value)) {
    return value.map((item, index) =>
      toIndonesianTodo(item, `${path}.${index}`),
    ) as T;
  }

  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(
      value as Record<string, unknown>,
    )) {
      const nextPath = `${path}.${key}`;
      result[key] = toIndonesianTodo(nested, nextPath);
    }
    return result as T;
  }

  return value;
}

export const HOME_COPY: Record<Locale, HomeDictionary> = {
  en: ENGLISH_COPY,
  id: toIndonesianTodo<HomeDictionary>(ENGLISH_COPY),
};

