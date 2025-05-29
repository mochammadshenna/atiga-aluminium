export interface GalleryItem {
  id: number;
  title: string;
  category: 'windows' | 'doors' | 'glass' | 'sliding' | 'commercial' | 'residential';
  image: string;
  description: string;
  location?: string;
  year?: string;
  client?: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    title: "Ruang Kantor",
    category: "windows",
    image: "https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jendela aluminium modern untuk rumah tinggal dengan design minimalis",
    location: "Jakarta Selatan",
    year: "2024",
    client: "Private Residence"
  },
  {
    id: 2,
    title: "Cafe Shop",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1643067836810-f5f20ac832b0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fasad kaca komersial dengan sistem curtain wall aluminium",
    location: "Jakarta Pusat",
    year: "2023",
    client: "Office Tower"
  },
  {
    id: 3,
    title: "Jendela Rumah",
    category: "sliding",
    image: "https://images.unsplash.com/photo-1725680647453-10ed069f7847?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pintu sliding aluminium untuk akses yang mudah dan hemat ruang",
    location: "Bekasi",
    year: "2024",
    client: "Modern House"
  },
  {
    id: 4,
    title: "Jendela Apartemen",
    category: "glass",
    image: "https://images.unsplash.com/photo-1566235562430-e3acd8be98fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFsdW1pbml1bSUyMGhvdXNlJTIwd2luZG93fGVufDB8fDB8fHww",
    description: "Partisi kaca tempered untuk ruang kantor modern",
    location: "Tangerang",
    year: "2023",
    client: "Corporate Office"
  },
  {
    id: 5,
    title: "Ruang Kantor",
    category: "doors",
    image: "https://images.unsplash.com/photo-1644070648183-403303c9ff78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pintu masuk premium dengan kombinasi aluminium dan kaca",
    location: "BSD City",
    year: "2024",
    client: "Luxury Villa"
  },
  {
    id: 6,
    title: "Jendela Rumah",
    category: "windows",
    image: "https://images.unsplash.com/photo-1707898311392-693cd8509426?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sistem jendela aluminium untuk fasilitas kesehatan",
    location: "Jakarta Timur",
    year: "2023",
    client: "General Hospital"
  },
  {
    id: 7,
    title: "Ruang Kantor",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1637665776507-756bff51d3e7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sistem glazing untuk mall dengan performa thermal optimal",
    location: "Kelapa Gading",
    year: "2023",
    client: "Shopping Center"
  },
  {
    id: 8,
    title: "Jendela Rumah",
    category: "sliding",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    description: "Jendela sliding untuk rumah dengan ventilasi optimal",
    location: "Depok",
    year: "2024",
    client: "Family House"
  },
  {
    id: 9,
    title: "Jendela Rumah",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
    description: "Fasad aluminium dan kaca untuk gedung perkantoran",
    location: "SCBD Jakarta",
    year: "2023",
    client: "Corporate Building"
  },
  {
    id: 10,
    title: "Jendela Rumah",
    category: "glass",
    image: "https://images.unsplash.com/photo-1736869600997-209b992a46c1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Railing kaca custom dengan frame aluminium untuk balkon",
    location: "Alam Sutera",
    year: "2024",
    client: "Apartment Complex"
  },
  {
    id: 11,
    title: "Kamar Mandi",
    category: "windows",
    image: "https://plus.unsplash.com/premium_photo-1674035037216-44af020955ad?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Proyek jendela aluminium untuk fasilitas pendidikan",
    location: "Bogor",
    year: "2023",
    client: "International School"
  },
  {
    id: 12,
    title: "Kamar Mandi",
    category: "commercial",
    image: "https://plus.unsplash.com/premium_photo-1676321046695-a23b1d9f576e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dinding kaca untuk restaurant dengan sistem folding",
    location: "PIK Jakarta",
    year: "2024",
    client: "Fine Dining Restaurant"
  }
];

export const galleryCategories = [
  { id: 'all', name: 'Semua', icon: 'Grid3X3' },
  { id: 'residential', name: 'Residensial', icon: 'Home' },
  { id: 'commercial', name: 'Komersial', icon: 'Building' },
  { id: 'windows', name: 'Jendela', icon: 'Square' },
  { id: 'doors', name: 'Pintu', icon: 'Door' },
  { id: 'sliding', name: 'Sliding', icon: 'MoveHorizontal' },
  { id: 'glass', name: 'Kaca', icon: 'Sparkles' }
];