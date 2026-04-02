export type CategoryKey = "all" | "downlights" | "wall" | "linear";

export type CategoryItem = {
  id: string;
  category: Exclude<CategoryKey, "all">;
  familyName: string;
  briefSpec: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  lumens: number;
  cri: number;
  beamDeg: number;
};

export type ApplicationItem = {
  id: string;
  projectName: string;
  productUsed: string;
  imageUrl: string;
  imageAlt: string;
};

export type FeaturedProduct = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  wattageW: number;
  lumens: number;
  beamDeg: number;
  cri: number;
  series: string;
};

export type CatalogueCard = {
  id: string;
  title: string;
  subtitle: string;
  revisionDate: string;
  iesFilename: string;
  iesContent: string;
  coverImageUrl: string;
  coverImageAlt: string;
};

export type TimelineItem = {
  id: string;
  year: string;
  label: string;
  detail: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

const downlightImg =
  "https://images.unsplash.com/photo-1745242655021-d0b950c8b0da?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const spotlightImg =
  "https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const streetPoleImg =
  "https://images.unsplash.com/photo-1694860525079-3897ad1566a5?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const coveCeilingImg =
  "https://images.unsplash.com/photo-1742196644282-a426042a864e?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const wallWasherImg =
  "https://images.unsplash.com/photo-1643754713080-cbfc5be44520?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const wallLampImg =
  "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const galleryWallImg =
  "https://images.unsplash.com/photo-1757086041888-0318ba38fd37?fm=jpg&q=60&w=1600&auto=format&fit=crop";
const facadeBgImg =
  "https://images.unsplash.com/photo-1765198536072-8d4c40750bd4?fm=jpg&q=60&w=2200&auto=format&fit=crop";
const facadeAtNightImg =
  "https://images.unsplash.com/photo-1772081914443-a6b6e6f29035?fm=jpg&q=60&w=2200&auto=format&fit=crop";
const facadeStreetImg =
  "https://images.unsplash.com/photo-1759274003872-ed78ba97c601?fm=jpg&q=60&w=2200&auto=format&fit=crop";

export const luxovaData = {
  hero: {
    facadeBackgroundUrl: facadeBgImg,
    facadeBackgroundAlt: "Architectural facade lighting at night",
    productDetailImageUrl: downlightImg,
    productDetailImageAlt: "Recessed downlight detail",
    callouts: [
      { id: "c1", label: "U G R", value: "≤ 19", hint: "Low glare optical control" },
      { id: "c2", label: "C R I", value: "90+", hint: "Spec-grade color fidelity" },
      { id: "c3", label: "B E A M", value: "30°", hint: "Tight distribution for facades" }
    ]
  },
  trust: {
    scrollingLogos: [
      "Architect Spec",
      "IES Compliant Optics",
      "LM-79 Verified",
      "Thermal Lab Tested",
      "DALI Control Ready",
      "ISO Documentation"
    ],
    certificationBadges: ["ISO 9001", "LM-79", "LM-80", "IES Files", "CE / IEC"]
  },
  categories: {
    items: [
      {
        id: "d-01",
        category: "downlights",
        familyName: "Luxova Down 30",
        briefSpec: "Spec optics / precision cut-off",
        thumbnailUrl: downlightImg,
        thumbnailAlt: "Recessed downlight ceiling",
        lumens: 1120,
        cri: 92,
        beamDeg: 30
      },
      {
        id: "d-02",
        category: "downlights",
        familyName: "Luxova Down 40",
        briefSpec: "High output / tight spill",
        thumbnailUrl: spotlightImg,
        thumbnailAlt: "Spotlight with visible beam",
        lumens: 1260,
        cri: 90,
        beamDeg: 24
      },
      {
        id: "d-03",
        category: "downlights",
        familyName: "Luxova Down Narrow",
        briefSpec: "Museum contrast control",
        thumbnailUrl: galleryWallImg,
        thumbnailAlt: "Gallery wall lighting",
        lumens: 980,
        cri: 95,
        beamDeg: 18
      },
      {
        id: "d-04",
        category: "downlights",
        familyName: "Luxova Down Flood",
        briefSpec: "Even spread / shallow mounting",
        thumbnailUrl: facadeStreetImg,
        thumbnailAlt: "Exterior facade lighting in street scene",
        lumens: 1380,
        cri: 91,
        beamDeg: 40
      },
      {
        id: "w-01",
        category: "wall",
        familyName: "Luxova Wall Washer",
        briefSpec: "Uniform vertical illumination",
        thumbnailUrl: wallWasherImg,
        thumbnailAlt: "Wall lighting on textured brick",
        lumens: 860,
        cri: 90,
        beamDeg: 60
      },
      {
        id: "w-02",
        category: "wall",
        familyName: "Luxova Wall Accent",
        briefSpec: "Anti-glare baffle optics",
        thumbnailUrl: wallLampImg,
        thumbnailAlt: "Wall-mounted light texture",
        lumens: 740,
        cri: 93,
        beamDeg: 30
      },
      {
        id: "w-03",
        category: "wall",
        familyName: "Luxova Wall Gallery",
        briefSpec: "High CRI / stable output",
        thumbnailUrl: galleryWallImg,
        thumbnailAlt: "Gallery wall with artwork illumination",
        lumens: 920,
        cri: 97,
        beamDeg: 45
      },
      {
        id: "w-04",
        category: "wall",
        familyName: "Luxova Wall Facade",
        briefSpec: "Facade wash / thermal headroom",
        thumbnailUrl: facadeAtNightImg,
        thumbnailAlt: "Facade illuminated at night",
        lumens: 1040,
        cri: 90,
        beamDeg: 55
      },
      {
        id: "l-01",
        category: "linear",
        familyName: "Luxova Linea 1200",
        briefSpec: "Cove-ready / continuous look",
        thumbnailUrl: coveCeilingImg,
        thumbnailAlt: "Ceiling with linear light accents",
        lumens: 1260,
        cri: 90,
        beamDeg: 110
      },
      {
        id: "l-02",
        category: "linear",
        familyName: "Luxova Linea 800",
        briefSpec: "Low-flicker / optical diffusion",
        thumbnailUrl: coveCeilingImg,
        thumbnailAlt: "Ceiling linear lighting texture",
        lumens: 980,
        cri: 92,
        beamDeg: 95
      },
      {
        id: "l-03",
        category: "linear",
        familyName: "Luxova Linea 1600",
        briefSpec: "Long run / uniform beam spread",
        thumbnailUrl: facadeAtNightImg,
        thumbnailAlt: "Architectural facade lighting at night",
        lumens: 1680,
        cri: 90,
        beamDeg: 120
      },
      {
        id: "l-04",
        category: "linear",
        familyName: "Luxova Linea Sidewash",
        briefSpec: "Controlled edge / no hot spots",
        thumbnailUrl: streetPoleImg,
        thumbnailAlt: "Urban street light pole at night",
        lumens: 1120,
        cri: 91,
        beamDeg: 85
      }
    ] as CategoryItem[]
  },
  applications: {
    items: [
      {
        id: "a-01",
        projectName: "Museum West Wing",
        productUsed: "Down 30 / CRI 95 / 18° optic",
        imageUrl: galleryWallImg,
        imageAlt: "Museum wall lighting"
      },
      {
        id: "a-02",
        projectName: "Corporate Lobby",
        productUsed: "Wall Washer / UGR ≤ 19",
        imageUrl: wallLampImg,
        imageAlt: "Wall-mounted lighting"
      },
      {
        id: "a-03",
        projectName: "Atrium Perimeter",
        productUsed: "Linea 1200 / Continuous cove",
        imageUrl: coveCeilingImg,
        imageAlt: "Linear ceiling cove detail"
      },
      {
        id: "a-04",
        projectName: "Street Retail Facade",
        productUsed: "Wall Facade / 55° wash",
        imageUrl: facadeStreetImg,
        imageAlt: "Urban facade lighting"
      },
      {
        id: "a-05",
        projectName: "Urban Wayfinding",
        productUsed: "Down Flood / tight spill",
        imageUrl: streetPoleImg,
        imageAlt: "Street light pole urban"
      },
      {
        id: "a-06",
        projectName: "Gallery Stair Landing",
        productUsed: "Wall Accent / anti-glare baffle",
        imageUrl: wallWasherImg,
        imageAlt: "Wall washer-like lighting texture"
      },
      {
        id: "a-07",
        projectName: "Hotel Feature Wall",
        productUsed: "Wall Gallery / CRI 97+",
        imageUrl: galleryWallImg,
        imageAlt: "Gallery illumination"
      },
      {
        id: "a-08",
        projectName: "Courtyard Facade",
        productUsed: "Down 40 / 24° distribution",
        imageUrl: facadeAtNightImg,
        imageAlt: "Facade illuminated at night"
      },
      {
        id: "a-09",
        projectName: "Gallery Track Lighting Zone",
        productUsed: "Down Narrow / museum contrast",
        imageUrl: spotlightImg,
        imageAlt: "Spotlight beam"
      },
      {
        id: "a-10",
        projectName: "Retail Ceiling Cove",
        productUsed: "Linea 800 / low flicker optics",
        imageUrl: coveCeilingImg,
        imageAlt: "Cove linear ceiling"
      },
      {
        id: "a-11",
        projectName: "Facade Uplight Pass",
        productUsed: "Wall Washer / 60° uniformity",
        imageUrl: facadeStreetImg,
        imageAlt: "Facade at night"
      },
      {
        id: "a-12",
        projectName: "Public Passage",
        productUsed: "Down Flood / even spread",
        imageUrl: facadeBgImg,
        imageAlt: "Architectural lighting background"
      }
    ] as ApplicationItem[]
  },
  featured: {
    products: [
      {
        id: "fp-01",
        series: "Down 30",
        name: "Luxova SpecDown 30 — Narrow Cut-Off",
        imageUrl: downlightImg,
        imageAlt: "Downlight product image",
        wattageW: 18,
        lumens: 1120,
        beamDeg: 30,
        cri: 92
      },
      {
        id: "fp-02",
        series: "Down 24",
        name: "Luxova SpecDown 24 — Precision Beam",
        imageUrl: spotlightImg,
        imageAlt: "Spotlight product image",
        wattageW: 16,
        lumens: 1040,
        beamDeg: 24,
        cri: 90
      },
      {
        id: "fp-03",
        series: "Down Narrow",
        name: "Luxova Museum Down — High Contrast",
        imageUrl: galleryWallImg,
        imageAlt: "Museum lighting product image",
        wattageW: 14,
        lumens: 980,
        beamDeg: 18,
        cri: 95
      },
      {
        id: "fp-04",
        series: "Down Flood",
        name: "Luxova Flood 40 — Even Distribution",
        imageUrl: facadeStreetImg,
        imageAlt: "Even facade flood lighting",
        wattageW: 20,
        lumens: 1380,
        beamDeg: 40,
        cri: 91
      },
      {
        id: "fp-05",
        series: "Wall Washer",
        name: "Luxova WallWash — Uniform Vertical",
        imageUrl: wallWasherImg,
        imageAlt: "Wall washer facade lighting product image",
        wattageW: 16,
        lumens: 860,
        beamDeg: 60,
        cri: 90
      },
      {
        id: "fp-06",
        series: "Wall Accent",
        name: "Luxova WallAccent — Anti-Glare Baffle",
        imageUrl: wallLampImg,
        imageAlt: "Anti-glare wall accent product image",
        wattageW: 14,
        lumens: 740,
        beamDeg: 30,
        cri: 93
      },
      {
        id: "fp-07",
        series: "Linea 1200",
        name: "Luxova Linea 1200 — Cove Continuity",
        imageUrl: coveCeilingImg,
        imageAlt: "Linear ceiling cove light product image",
        wattageW: 32,
        lumens: 1260,
        beamDeg: 110,
        cri: 90
      },
      {
        id: "fp-08",
        series: "Linea Sidewash",
        name: "Luxova Linea Sidewash — No Hotspots",
        imageUrl: streetPoleImg,
        imageAlt: "Sidewash architectural lighting product image",
        wattageW: 26,
        lumens: 1120,
        beamDeg: 85,
        cri: 91
      }
    ] as FeaturedProduct[]
  },
  catalogue: {
    cards: [
      {
        id: "cat-01",
        title: "Luxova SpecDown Portfolio",
        subtitle: "30° / 24° / 18° optics • CRI 90+",
        revisionDate: "2026-02-14",
        iesFilename: "Luxova_SpecDown.ies",
        iesContent:
          "IESNA:LM-63-2002\n[Mock IES]\nTILT=NONE\n1 1 1 0 0 0 0 0 0\n1 1 1\n0 0 0\n0 1\n",
        coverImageUrl: downlightImg,
        coverImageAlt: "Downlight spec sheet cover"
      },
      {
        id: "cat-02",
        title: "Luxova WallWash Series",
        subtitle: "Uniformity models • UGR control • DALI-ready",
        revisionDate: "2026-01-28",
        iesFilename: "Luxova_WallWash.ies",
        iesContent:
          "IESNA:LM-63-2002\n[Mock IES]\nTILT=NONE\n1 1 1 0 0 0 0 0 0\n1 1 1\n0 0 0\n0 1\n",
        coverImageUrl: wallWasherImg,
        coverImageAlt: "Wall washer spec sheet cover"
      },
      {
        id: "cat-03",
        title: "Luxova Linea Cove System",
        subtitle: "Long-run diffusion • Low flicker • 2K binning",
        revisionDate: "2025-12-09",
        iesFilename: "Luxova_Linea_Cove.ies",
        iesContent:
          "IESNA:LM-63-2002\n[Mock IES]\nTILT=NONE\n1 1 1 0 0 0 0 0 0\n1 1 1\n0 0 0\n0 1\n",
        coverImageUrl: coveCeilingImg,
        coverImageAlt: "Linear cove system spec sheet cover"
      }
    ] as CatalogueCard[]
  },
  timeline: {
    items: [
      {
        id: "t-iso",
        year: "ISO 9001",
        label: "Quality management adoption",
        detail: "Documented manufacturing flow + traceable QC checks."
      },
      {
        id: "t-patent",
        year: "Patent",
        label: "Optical control geometry",
        detail: "Beam shaping for reduced spill and spec-grade uniformity."
      },
      {
        id: "t-lab",
        year: "LM-79 / LM-80",
        label: "Lab verification cycle",
        detail: "Measured photometrics and Lx retention across heat profiles."
      },
      {
        id: "t-rd",
        year: "R&D Milestone",
        label: "Thermal + driver optimization",
        detail: "Thermal headroom model aligned with real-world IP temperature."
      },
      {
        id: "t-platform",
        year: "System",
        label: "IES file automation",
        detail: "Repeatable optical output mapping per optic/driver variant."
      }
    ] as TimelineItem[]
  },
  testimonials: {
    items: [
      {
        id: "q-01",
        quote:
          "The cut-off is disciplined. When the model matches the IES, the lighting schedule becomes a non-event.",
        author: "Elena R.",
        role: "Lighting Designer"
      },
      {
        id: "q-02",
        quote:
          "Spec-grade CRI with stable thermal behavior. Their UGR documentation made coordination with MEP straightforward.",
        author: "Marcus T.",
        role: "MEP Engineer"
      },
      {
        id: "q-03",
        quote:
          "Uniformity is real, not marketing. The beam spread and verge control behave exactly as listed.",
        author: "Sofia K.",
        role: "Architectural Consultant"
      }
    ] as Testimonial[]
  },
  contact: {
    officeCoordinates: "40.7410, -73.9897",
    officeAddress: "Luxova Studio • Professional Lighting Unit",
    chatSeed: [
      { id: "m1", from: "user", text: "Hi, can you share CRI + beam options for SpecDown 30?" },
      { id: "m2", from: "agent", text: "Yes. We can provide 30° (CRI 90/92/95) and UGR ≤ 19 variants with matching IES." }
    ]
  }
};

