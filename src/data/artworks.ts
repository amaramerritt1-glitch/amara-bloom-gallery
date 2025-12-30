export interface Symbol {
  label: string;
  meaning: string;
}

export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  detailUrls: string[];
  poemFragments: string[];
  symbols: Symbol[];
}

export const artworks: Artwork[] = [
  {
    id: "celestial-manuscript",
    title: "Celestial Manuscript",
    year: "2024",
    medium: "Gold leaf and tempera on vellum",
    dimensions: "24 × 18 inches",
    imageUrl: "/art/celestial-manuscript.jpg",
    detailUrls: [
      "/art/celestial-manuscript-detail-1.jpg",
      "/art/celestial-manuscript-detail-2.jpg",
    ],
    poemFragments: [
      "In margins wrought with gilded thread,\nThe heavens bend to touch the page",
      "Each letter blooms, a star unspread,\nIlluminating ancient sage",
    ],
    symbols: [
      {
        label: "Golden Spiral",
        meaning: "Represents the infinite nature of knowledge spiraling outward from a single point of enlightenment.",
      },
      {
        label: "Crescent Moon",
        meaning: "The threshold between visible and hidden wisdom, marking transitions in understanding.",
      },
      {
        label: "Vine Border",
        meaning: "Growth of consciousness intertwining with the roots of ancestral knowledge.",
      },
    ],
  },
  {
    id: "portal-of-hours",
    title: "Portal of Hours",
    year: "2023",
    medium: "Ink and gold on indigo paper",
    dimensions: "30 × 22 inches",
    imageUrl: "/art/portal-of-hours.jpg",
    detailUrls: [
      "/art/portal-of-hours-detail-1.jpg",
      "/art/portal-of-hours-detail-2.jpg",
      "/art/portal-of-hours-detail-3.jpg",
    ],
    poemFragments: [
      "Time folds upon itself like silk,\nEach hour a door, each door a choice",
      "Through azure depths where moments bilk,\nThe soul discoveres its own voice",
    ],
    symbols: [
      {
        label: "Compass Rose",
        meaning: "Navigation through temporal dimensions, representing choices made at crucial moments.",
      },
      {
        label: "Intertwined Serpents",
        meaning: "The dual nature of time—both linear progression and cyclical return.",
      },
      {
        label: "Lotus Threshold",
        meaning: "The awakening that occurs when crossing from one state of being to another.",
      },
      {
        label: "Starfield",
        meaning: "Infinite possibilities existing simultaneously in the quantum foam of decision.",
      },
    ],
  },
  {
    id: "garden-between-worlds",
    title: "Garden Between Worlds",
    year: "2024",
    medium: "Watercolor and gold on handmade paper",
    dimensions: "20 × 16 inches",
    imageUrl: "/art/garden-between-worlds.jpg",
    detailUrls: [
      "/art/garden-between-worlds-detail-1.jpg",
      "/art/garden-between-worlds-detail-2.jpg",
    ],
    poemFragments: [
      "Where moss remembers ancient stone,\nAnd light falls soft through veils unknown",
      "A garden grows from thought alone,\nWhere seeds of wonder have been sown",
    ],
    symbols: [
      {
        label: "Sacred Geometry",
        meaning: "The underlying mathematical harmony connecting all living systems across dimensions.",
      },
      {
        label: "Moss Pattern",
        meaning: "Slow, patient growth that covers and transforms even the hardest barriers.",
      },
      {
        label: "Key of Light",
        meaning: "Understanding that unlocks the passage between material and ethereal realms.",
      },
    ],
  },
  {
    id: "threshold-grimoire",
    title: "Threshold Grimoire",
    year: "2023",
    medium: "Pigment and shell gold on vellum",
    dimensions: "28 × 20 inches",
    imageUrl: "/art/threshold-grimoire.jpg",
    detailUrls: [
      "/art/threshold-grimoire-detail-1.jpg",
      "/art/threshold-grimoire-detail-2.jpg",
      "/art/threshold-grimoire-detail-3.jpg",
    ],
    poemFragments: [
      "In volumes bound by silver clasp,\nThe threshold speaks in whispered tongue",
      "What mortals seek but cannot grasp,\nWaits patient, old, forever young",
    ],
    symbols: [
      {
        label: "Book of Gates",
        meaning: "Each page represents a doorway to alternative realities accessible through focused intent.",
      },
      {
        label: "Owl's Eye",
        meaning: "The ability to see truth in darkness, wisdom that comes through shadow work.",
      },
      {
        label: "Skeletal Key",
        meaning: "The essential truth that remains when all excess is stripped away.",
      },
      {
        label: "Ribbon Seal",
        meaning: "Knowledge that must be earned, not simply taken—protection through initiation.",
      },
    ],
  },
  {
    id: "luminous-codex",
    title: "Luminous Codex",
    year: "2024",
    medium: "Gold and lapis on prepared vellum",
    dimensions: "26 × 19 inches",
    imageUrl: "/art/luminous-codex.jpg",
    detailUrls: [
      "/art/luminous-codex-detail-1.jpg",
      "/art/luminous-codex-detail-2.jpg",
    ],
    poemFragments: [
      "Light inscribes itself in blue,\nA language older than the sun",
      "What's hidden now comes into view,\nWhen seeker and the sought are one",
    ],
    symbols: [
      {
        label: "Radiating Lines",
        meaning: "The emanation of divine knowledge spreading from a central source of truth.",
      },
      {
        label: "Lapis Field",
        meaning: "The cosmic ocean from which all wisdom emerges and to which it returns.",
      },
      {
        label: "Calligraphic Seal",
        meaning: "The word made manifest, language as a bridge between thought and reality.",
      },
    ],
  },
  {
    id: "echo-chamber",
    title: "Echo Chamber",
    year: "2023",
    medium: "Ink, gold, and moss on aged paper",
    dimensions: "22 × 18 inches",
    imageUrl: "/art/echo-chamber.jpg",
    detailUrls: [
      "/art/echo-chamber-detail-1.jpg",
      "/art/echo-chamber-detail-2.jpg",
      "/art/echo-chamber-detail-3.jpg",
    ],
    poemFragments: [
      "Voices layer, fold, repeat,\nIn chambered halls where echoes meet",
      "Past speaks to future, bittersweet,\nA conversation incomplete",
    ],
    symbols: [
      {
        label: "Concentric Circles",
        meaning: "Sound waves propagating through time, each iteration carrying the original message forward.",
      },
      {
        label: "Fragmentary Text",
        meaning: "Incomplete transmission of knowledge across generations, requiring interpretation.",
      },
      {
        label: "Moss Encroachment",
        meaning: "Nature's slow reclamation of human systems, the organic overwriting the constructed.",
      },
      {
        label: "Mirror Glyphs",
        meaning: "Reflection and reversal—what is spoken eventually returns to the speaker.",
      },
    ],
  },
];
