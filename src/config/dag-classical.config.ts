/**
 * Configuración centralizada para DAG Classical
 * Basada en alkaline.config.ts adaptada para música clásica
 */

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
  faviconSrc: string;
  ogImage: string;
  locale: string;
  disableIndexing: boolean;
  postsPerPage: number;
  
  // Colores de marca
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  
  // Tipografía
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
  
  // Redes sociales
  socials: SocialLink[];
}

export interface SocialLink {
  platform: 'spotify' | 'apple' | 'youtube' | 'instagram' | 'twitter' | 'email' | 'web' | 'rss';
  url: string;
  label?: string;
}

export interface NavEntry {
  label: string;
  href: string;
  type: 'link' | 'dropdown';
  items?: NavEntry[];
  external?: boolean;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  socials: SocialLink[];
}

// Configuración del sitio
export const SITE_CONFIG: SiteConfig = {
  title: "DAG Classical",
  description: "Sello discográfico especializado en música clásica, con distribución global y tecnología blockchain para proteger y certificar obras musicales. Fundado por Danilo Álvarez, combinamos tradición musical con innovación digital.",
  url: "https://dagclassical.com",
  author: "DAG Classical Team",
  keywords: [
    "música clásica",
    "sello discográfico", 
    "blockchain",
    "distribución musical",
    "certificación digital",
    "Danilo Álvarez",
    "DAG Classical",
    "Spotify",
    "Apple Music",
    "YouTube Music",
    "smart contracts",
    "NFT música"
  ],
  faviconSrc: "/favicon.svg",
  ogImage: "/og-image.svg",
  locale: "es_ES",
  disableIndexing: false,
  postsPerPage: 6,
  
  // Paleta de colores DAG Classical
  colors: {
    primary: "#2D1B69",     // Violeta profundo - identidad principal
    secondary: "#8B5CF6",   // Violeta brillante - elementos interactivos
    accent: "#F59E0B",      // Dorado - acentos y CTAs
    neutral: "#6B7280"      // Gris - texto y elementos neutros
  },
  
  // Tipografía profesional para música clásica
  fonts: {
    heading: "Playfair Display",   // Serif elegante para títulos
    body: "Inter",                // Sans legible para cuerpo de texto
    mono: "JetBrains Mono"        // Mono para código y datos técnicos
  },
  
  // Redes sociales oficiales
  socials: [
    {
      platform: "spotify",
      url: "https://open.spotify.com/artist/dagclassical",
      label: "Spotify"
    },
    {
      platform: "apple", 
      url: "https://music.apple.com/artist/dag-classical",
      label: "Apple Music"
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@dagclassical",
      label: "YouTube"
    },
    {
      platform: "instagram",
      url: "https://instagram.com/dagclassical", 
      label: "Instagram"
    },
    {
      platform: "twitter",
      url: "https://twitter.com/dagclassical",
      label: "Twitter"
    },
    {
      platform: "email",
      url: "mailto:info@dagclassical.com",
      label: "Email"
    },
    {
      platform: "web",
      url: "https://dagclassical.com",
      label: "Sitio Web"
    }
  ]
};

// Navegación principal
export const NAVIGATION: NavEntry[] = [
  {
    label: "Inicio",
    href: "/",
    type: "link"
  },
  {
    label: "Música",
    href: "/musica",
    type: "dropdown",
    items: [
      {
        label: "Artistas",
        href: "/musica/artistas",
        type: "link"
      },
      {
        label: "Discografía", 
        href: "/musica/discografia",
        type: "link"
      },
      {
        label: "Lanzamientos",
        href: "/musica/lanzamientos",
        type: "link"
      },
      {
        label: "Enciclopedia",
        href: "/musica/enciclopedia",
        type: "link"
      },
      {
        label: "Music Cards",
        href: "/blockchain/music-cards",
        type: "link"
      }
    ]
  },
  {
    label: "Nosotros",
    href: "/nosotros", 
    type: "dropdown",
    items: [
      {
        label: "DAG Classical",
        href: "/nosotros/dag-classical",
        type: "link"
      },
      {
        label: "Danilo Álvarez",
        href: "/nosotros/danilo-alvarez", 
        type: "link"
      },
      {
        label: "Equipo",
        href: "/nosotros/equipo",
        type: "link"
      },
      {
        label: "Términos",
        href: "/nosotros/terminos",
        type: "link"
      }
    ]
  },
  {
    label: "Blockchain",
    href: "/blockchain",
    type: "dropdown", 
    items: [
      {
        label: "Music Cards",
        href: "/blockchain/music-cards",
        type: "link"
      },
      {
        label: "Calculadora",
        href: "/blockchain/calculadora",
        type: "link"
      },
      {
        label: "Certificación",
        href: "/blockchain/certificacion",
        type: "link"
      },
      {
        label: "Polygon Networks",
        href: "/blockchain/polygon-networks",
        type: "link"
      }
    ]
  },
  {
    label: "Distribución",
    href: "/distribucion",
    type: "link"
  },
  {
    label: "Blog",
    href: "/blog",
    type: "link"
  },
  {
    label: "FAQ",
    href: "/faq", 
    type: "link"
  }
];

// Autores del sitio
export const AUTHORS: Author[] = [
  {
    id: 1,
    name: "Danilo Álvarez",
    email: "danilo@dagclassical.com",
    bio: "Fundador y Director General de DAG Classical. Pionero en la aplicación de tecnología blockchain en la música clásica.",
    socials: SITE_CONFIG.socials
  },
  {
    id: 2,
    name: "DAG Classical Team", 
    email: "info@dagclassical.com",
    bio: "Equipo especializado en música clásica, distribución digital y tecnología blockchain.",
    socials: SITE_CONFIG.socials
  }
];

// Configuración de blog
export const BLOG_CONFIG = {
  title: "Blog DAG Classical",
  author: AUTHORS[0].name,
  description: "Noticias, análisis y novedades del mundo de la música clásica, tecnología blockchain en la industria musical y proyectos de DAG Classical.",
  keywords: SITE_CONFIG.keywords,
  postsPerPage: SITE_CONFIG.postsPerPage,
};

// Plataformas de distribución
export const DISTRIBUTION_PLATFORMS = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/dagclassical",
    icon: "spotify",
    category: "streaming"
  },
  {
    name: "Apple Music", 
    url: "https://music.apple.com/artist/dag-classical",
    icon: "apple",
    category: "streaming"
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/channel/UC1234567890",
    icon: "youtube", 
    category: "streaming"
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/artists/dag-classical",
    icon: "amazon",
    category: "streaming"
  },
  {
    name: "Tidal",
    url: "https://tidal.com/artist/12345678",
    icon: "tidal",
    category: "streaming"
  }
];

// Tecnologías blockchain
export const BLOCKCHAIN_TECH = {
  networks: [
    {
      name: "Polygon",
      chainId: 137,
      nativeToken: "MATIC",
      explorer: "https://polygonscan.com"
    },
    {
      name: "Ethereum", 
      chainId: 1,
      nativeToken: "ETH",
      explorer: "https://etherscan.io"
    }
  ],
  standards: [
    {
      name: "ERC-721",
      description: "Standard para NFTs únicos"
    },
    {
      name: "ERC-1155", 
      description: "Standard para múltiples tokens"
    },
    {
      name: "Custom Smart Contracts",
      description: "Contratos personalizados para música"
    }
  ]
};

// Exportar colecciones de contenido
export const COLLECTION_NAMES = ["blog", "artists", "music", "nft"] as const;

// Exportar configuración completa
export default {
  SITE_CONFIG,
  NAVIGATION,
  AUTHORS,
  BLOG_CONFIG,
  DISTRIBUTION_PLATFORMS,
  BLOCKCHAIN_TECH,
  COLLECTION_NAMES
};