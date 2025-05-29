export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  process?: string[];
  benefits?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Pemasangan Jendela Aluminium",
    description: "Layanan pemasangan jendela aluminium professional dengan garansi kualitas dan ketepatan waktu.",
    icon: "Square",
    features: [
      "Konsultasi desain gratis",
      "Survey dan pengukuran akurat",
      "Instalasi oleh teknisi berpengalaman",
      "Garansi pemasangan 2 tahun",
      "After-sales service terjamin"
    ],
    process: [
      "Konsultasi dan survey lokasi",
      "Pembuatan design dan kalkulasi biaya", 
      "Produksi sesuai spesifikasi",
      "Instalasi dan quality control",
      "Handover dan garansi"
    ],
    benefits: [
      "Efisiensi energi rumah meningkat",
      "Perlindungan dari cuaca ekstrem",
      "Desain modern dan elegant",
      "Perawatan minimal"
    ]
  },
  {
    id: 2,
    title: "Pemasangan Pintu Aluminium",
    description: "Instalasi pintu aluminium dengan berbagai model dan sistem, dari swing door hingga folding door.",
    icon: "Door",
    features: [
      "Berbagai pilihan model pintu",
      "Hardware premium imported",
      "Sistem keamanan terintegrasi",
      "Custom design available",
      "Garansi 5 tahun"
    ],
    process: [
      "Konsultasi kebutuhan dan budget",
      "Design approval dan material selection",
      "Manufacturing dengan quality control",
      "Professional installation",
      "Testing dan training penggunaan"
    ],
    benefits: [
      "Keamanan rumah terjamin",
      "Akses mudah dan smooth operation",
      "Tahan lama dan low maintenance",
      "Nilai estetika tinggi"
    ]
  },
  {
    id: 3,
    title: "Pemasangan Sliding Window",
    description: "Spesialis pemasangan jendela sliding aluminium untuk efisiensi ruang dan kemudahan operasional.",
    icon: "MoveHorizontal",
    features: [
      "Sistem sliding premium",
      "Anti air dan angin",
      "Multi-point locking system",
      "Berbagai ukuran available",
      "Instalasi rapid dan rapi"
    ],
    process: [
      "Site inspection dan measurement",
      "Technical drawing dan approval",
      "Precision manufacturing",
      "Installation dan adjustment",
      "Final inspection dan warranty"
    ],
    benefits: [
      "Hemat ruang interior",
      "Ventilasi optimal",
      "Easy maintenance",
      "Modern appearance"
    ]
  },
  {
    id: 4,
    title: "Pemasangan Kaca Tempered",
    description: "Layanan pemasangan kaca tempered untuk berbagai aplikasi dengan standar keamanan tinggi.",
    icon: "Sparkles",
    features: [
      "Kaca tempered berkualitas tinggi",
      "Berbagai ketebalan tersedia",
      "Custom cutting dan shaping",
      "Instalasi aman dan presisi",
      "Sertifikat SNI dan internasional"
    ],
    process: [
      "Konsultasi aplikasi dan kebutuhan",
      "Measurement dan templating",
      "Glass processing dan tempering",
      "Careful installation",
      "Quality assurance testing"
    ],
    benefits: [
      "Keamanan maksimal",
      "Transparansi sempurna",
      "Tahan impact dan thermal",
      "Compliance dengan building code"
    ]
  },
  {
    id: 5,
    title: "Konsultasi Desain Custom",
    description: "Layanan konsultasi dan desain custom untuk proyek aluminium dan kaca sesuai kebutuhan spesifik.",
    icon: "Settings",
    features: [
      "Tim desainer berpengalaman",
      "3D visualization dan rendering",
      "Technical drawing detail",
      "Material recommendation",
      "Budget planning assistance"
    ],
    process: [
      "Initial consultation meeting",
      "Site analysis dan requirement gathering",
      "Concept design dan presentation",
      "Detail design dan specification",
      "Implementation planning"
    ],
    benefits: [
      "Solusi optimal untuk kebutuhan",
      "Design unik dan personal",
      "Efisiensi biaya dan waktu",
      "Professional guidance"
    ]
  },
  {
    id: 6,
    title: "Maintenance & Repair",
    description: "Layanan perawatan dan perbaikan untuk produk aluminium dan kaca agar tetap optimal.",
    icon: "Wrench",
    features: [
      "Preventive maintenance program",
      "Emergency repair service",
      "Spare parts genuine",
      "Trained technician team",
      "Service record tracking"
    ],
    process: [
      "Inspection dan assessment",
      "Problem diagnosis",
      "Repair planning dan quotation",
      "Parts procurement dan repair",
      "Testing dan quality check"
    ],
    benefits: [
      "Extend product lifespan",
      "Maintain optimal performance",
      "Prevent major damage",
      "Cost-effective maintenance"
    ]
  }
];

export const serviceCategories = [
  { id: 'installation', name: 'Pemasangan', icon: 'Hammer' },
  { id: 'design', name: 'Desain', icon: 'Palette' },
  { id: 'maintenance', name: 'Perawatan', icon: 'Wrench' },
  { id: 'consultation', name: 'Konsultasi', icon: 'MessageSquare' }
];