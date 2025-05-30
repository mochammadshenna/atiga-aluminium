export interface Product {
  id: number;
  name: string;
  category: 'windows' | 'doors' | 'glass' | 'sliding' | 'custom';
  description: string;
  features: string[];
  images: string[];
  price?: string;
  specifications?: {
    material?: string;
    thickness?: string;
    color?: string[];
    warranty?: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Jendela Aluminium Premium",
    category: "windows",
    description: "Jendela aluminium berkualitas tinggi dengan desain modern dan efisiensi energi optimal. Tahan korosi dan cuaca ekstrem.",
    features: [
      "Desain modern minimalis",
      "Tahan korosi",
      "Efisiensi energi tinggi",
      "Insulasi suara yang baik",
      "Perawatan mudah"
    ],
    images: [
      "/images/produk-jendela.jpg"
    ],
    specifications: {
      material: "Aluminium 6063-T5",
      thickness: "1.4mm - 2.0mm",
      color: ["Putih", "Coklat", "Hitam", "Silver"],
      // warranty: "10 tahun"
    }
  },
  {
    id: 2,
    name: "Jendela Aluminium Modern",
    category: "windows",
    description: "Jendela aluminium dengan desain kontemporer yang cocok untuk hunian modern. Memberikan pencahayaan alami yang optimal.",
    features: [
      "Desain kontemporer",
      "Pencahayaan optimal",
      "Ventilasi yang baik",
      "Tahan cuaca ekstrem",
      "Easy maintenance"
    ],
    images: [
      "/images/produk-jendela-2.jpg"
    ],
    specifications: {
      material: "Aluminium 6063-T5",
      thickness: "1.6mm - 2.0mm",
      color: ["Putih", "Coklat", "Silver", "Bronze"],
      // warranty: "10 tahun"
    }
  },
  {
    id: 3,
    name: "Jendela Sliding Aluminium",
    category: "sliding",
    description: "Jendela sliding aluminium dengan sistem rel yang halus dan tahan lama. Hemat tempat dengan bukaan yang luas.",
    features: [
      "Sistem sliding halus",
      "Hemat ruang",
      "Bukaan luas",
      "Anti bocor air",
      "Multi-point locking"
    ],
    images: [
      "/images/produk-jendela-sliding.jpg"
    ],
    specifications: {
      material: "Aluminium Profile",
      thickness: "1.6mm",
      color: ["Silver", "Coklat", "Hitam"],
      // warranty: "8 tahun"
    }
  },
  {
    id: 4,
    name: "Jendela Sliding Premium",
    category: "sliding",
    description: "Jendela sliding aluminium premium dengan teknologi terdepan. Dilengkapi dengan sistem keamanan dan weather sealing terbaik.",
    features: [
      "Premium sliding system",
      "Advanced security",
      "Weather sealed",
      "Smooth operation",
      "Durable construction"
    ],
    images: [
      "/images/produk-jendela-sliding-2.jpg"
    ],
    specifications: {
      material: "Aluminium Premium",
      thickness: "2.0mm",
      color: ["Putih", "Coklat", "Charcoal"],
      // warranty: "12 tahun"
    }
  },
  {
    id: 5,
    name: "Jendela Sliding Executive",
    category: "sliding",
    description: "Jendela sliding executive dengan finishing premium dan performa tinggi. Ideal untuk project komersial dan residential mewah.",
    features: [
      "Executive grade quality",
      "Premium finishing",
      "High performance",
      "Commercial grade",
      "Luxury design"
    ],
    images: [
      "/images/produk-jendela-sliding-3.jpg"
    ],
    specifications: {
      material: "Aluminium Executive",
      thickness: "2.2mm",
      color: ["Silver", "Bronze", "Black"],
      // warranty: "15 tahun"
    }
  },
  {
    id: 6,
    name: "Jendela Sliding Deluxe",
    category: "sliding",
    description: "Jendela sliding deluxe dengan teknologi canggih dan material terbaik. Memberikan kenyamanan dan keamanan maksimal.",
    features: [
      "Deluxe materials",
      "Advanced technology",
      "Maximum comfort",
      "Superior security",
      "Premium aesthetics"
    ],
    images: [
      "/images/produk-jendela-sliding-4.jpeg"
    ],
    specifications: {
      material: "Aluminium Deluxe",
      thickness: "2.5mm",
      color: ["Custom Colors"],
      // warranty: "20 tahun"
    }
  },
  {
    id: 7,
    name: "Kaca Tempered Premium",
    category: "glass",
    description: "Kaca tempered berkualitas tinggi dengan ketebalan optimal. Memberikan keamanan dan ketahanan impact yang superior.",
    features: [
      "Keamanan tinggi",
      "Tahan impact",
      "Tidak mudah pecah",
      "Permukaan halus",
      "Transparansi sempurna"
    ],
    images: [
      "/images/glass-2.jpg"
    ],
    specifications: {
      material: "Kaca Tempered",
      thickness: "8mm - 12mm",
      color: ["Clear", "Bronze", "Blue"],
      // warranty: "5 tahun"
    }
  },
  {
    id: 8,
    name: "Kaca Laminated",
    category: "glass",
    description: "Kaca laminated dengan teknologi terdepan untuk keamanan maksimal. Tahan terhadap impact dan memberikan perlindungan optimal.",
    features: [
      "Laminated technology",
      "Maximum security",
      "Impact resistant",
      "UV protection",
      "Sound dampening"
    ],
    images: [
      "/images/glass-3.jpg"
    ],
    specifications: {
      material: "Laminated Glass",
      thickness: "6mm + 6mm",
      color: ["Clear", "Tinted"],
      // warranty: "7 tahun"
    }
  },
  {
    id: 9,
    name: "Produk Kaca Berkualitas",
    category: "glass",
    description: "Produk kaca berkualitas tinggi dengan berbagai pilihan ketebalan dan finishing. Cocok untuk aplikasi interior dan eksterior.",
    features: [
      "High quality glass",
      "Multiple thickness",
      "Various finishes",
      "Interior/exterior use",
      "Custom cutting"
    ],
    images: [
      "/images/produk-kaca.jpg"
    ],
    specifications: {
      material: "High Quality Glass",
      thickness: "5mm - 19mm",
      color: ["Clear", "Tinted", "Reflective"],
      // warranty: "5 tahun"
    }
  },
  {
    id: 10,
    name: "Kaca Premium Series",
    category: "glass",
    description: "Kaca premium series dengan teknologi terbaru dan kualitas terbaik. Memberikan solusi kaca terdepan untuk semua kebutuhan.",
    features: [
      "Premium series",
      "Latest technology",
      "Best quality",
      "Advanced solutions",
      "Professional grade"
    ],
    images: [
      "/images/produk-kaca-1.jpg"
    ],
    specifications: {
      material: "Premium Glass",
      thickness: "6mm - 25mm",
      color: ["Multiple Options"],
      // warranty: "10 tahun"
    }
  },
  {
    id: 11,
    name: "Produk Custom Aluminium",
    category: "custom",
    description: "Produk custom aluminium dengan desain sesuai kebutuhan spesifik. Dibuat dengan presisi tinggi dan kualitas terjamin.",
    features: [
      "Custom design",
      "High precision",
      "Quality assured",
      "Specific requirements",
      "Professional service"
    ],
    images: [
      "/images/product-1.jpeg"
    ],
    specifications: {
      material: "Custom Aluminium",
      thickness: "Sesuai kebutuhan",
      color: ["Custom RAL Colors"],
      // warranty: "5-15 tahun"
    }
  },
  {
    id: 12,
    name: "Jendela Aluminium Elegance",
    category: "windows",
    description: "Jendela aluminium premium dengan desain elegan dan performa tinggi. Memberikan kesan mewah pada hunian Anda dengan teknologi terdepan.",
    features: [
      "Desain elegan premium",
      "Performa tinggi",
      "Teknologi terdepan",
      "Insulasi optimal",
      "Finishing berkualitas"
    ],
    images: [
      "/images/produk-jendela-3.png"
    ],
    specifications: {
      material: "Aluminium Premium 6063-T5",
      thickness: "2.0mm - 2.5mm",
      color: ["Putih Elegant", "Coklat Mewah", "Hitam Premium", "Silver Elite"],
      // warranty: "15 tahun"
    }
  }
];

export const productCategories = [
  { id: 'all', name: 'Semua Produk', icon: 'Grid3X3' },
  { id: 'windows', name: 'Jendela', icon: 'Square' },
  { id: 'doors', name: 'Pintu', icon: 'Door' },
  { id: 'sliding', name: 'Sliding', icon: 'MoveHorizontal' },
  { id: 'glass', name: 'Kaca', icon: 'Sparkles' },
  { id: 'custom', name: 'Custom', icon: 'Settings' }
];