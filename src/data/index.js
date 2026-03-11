import {
  Camera, Star, Award, Instagram, MapPin, Clock, Phone,
  CheckCircle, Zap, Image, Printer, Smartphone, Palette,
  Home, RefreshCw, Trophy, Medal, Gem, Crown, Heart,
  Users, Aperture, Film
} from "lucide-react";

export const NAV_LINKS = ["Services", "Templates", "Awards", "Pricing", "Contact"];

export const SERVICES = [
  { icon: Aperture, title: "Open Booth", desc: "Photobooth terbuka klasik cocok untuk acara berbagai ukuran. Seru, cepat, dan fleksibel!" },
  { icon: Home, title: "Enclosed Booth", desc: "Pengalaman booth pribadi dengan tirai untuk momen yang lebih intim dan candid." },
  { icon: RefreshCw, title: "360° Booth", desc: "Booth video 360 gerak lambat yang memukau setiap tamu." },
  { icon: Printer, title: "Instant Print", desc: "Cetak instan kualitas tinggi dalam hitungan detik dengan tata letak kustom." },
  { icon: Smartphone, title: "Digital Share", desc: "Pengiriman digital instan via kode QR, email, atau WhatsApp." },
  { icon: Palette, title: "Custom Branding", desc: "Overlay, backdrop, dan properti berlogo penuh yang disesuaikan dengan acaramu." },
];

export const TEMPLATES = [
  { id: 1, name: "Classic Strip", type: "strip", bg: "from-blue-900 to-blue-700", accent: "#FACC15" },
  { id: 2, name: "Golden Moments", type: "polaroid", bg: "from-yellow-400 to-yellow-300", accent: "#1E3A8A" },
  { id: 3, name: "Midnight Blue", type: "strip", bg: "from-slate-900 to-blue-900", accent: "#60A5FA" },
  { id: 4, name: "Sunshine Pop", type: "polaroid", bg: "from-yellow-300 to-orange-300", accent: "#1D4ED8" },
  { id: 5, name: "Royal Elegance", type: "strip", bg: "from-blue-800 to-indigo-900", accent: "#FDE68A" },
  { id: 6, name: "Retro Bloom", type: "polaroid", bg: "from-pink-200 to-yellow-200", accent: "#1E3A8A" },
  { id: 7, name: "Neon Nights", type: "strip", bg: "from-purple-900 to-blue-900", accent: "#FACC15" },
  { id: 8, name: "Pastel Dream", type: "polaroid", bg: "from-blue-200 to-purple-200", accent: "#1D4ED8" },
  { id: 9, name: "Bold & Bright", type: "strip", bg: "from-yellow-500 to-blue-600", accent: "#fff" },
];

export const AWARDS = [
  { icon: Trophy, title: "Best Photobooth Vendor", year: "2023", org: "Medan Event Awards" },
  { icon: Star, title: "5-Star Excellence", year: "2023", org: "Google Business Reviews" },
  { icon: Medal, title: "Top Wedding Vendor", year: "2022", org: "Sumatera Wedding Expo" },
  { icon: Zap, title: "Most Creative Booth", year: "2022", org: "Indonesia Event Fair" },
  { icon: Gem, title: "Premium Partner", year: "2021–Now", org: "EventPro Indonesia" },
  { icon: Crown, title: "Customer Choice Award", year: "2021", org: "WeddingKu Indonesia" },
];

export const PRICING = [
  {
    name: "Starter",
    price: "1.500.000",
    duration: "3 Jam",
    color: "from-blue-500 to-blue-700",
    features: ["Set Up Open Booth", "Cetak Tanpa Batas", "1 Desain Template", "Galeri Digital", "1 Operator"],
    popular: false,
  },
  {
    name: "Popular",
    price: "2.800.000",
    duration: "5 Jam",
    color: "from-yellow-400 to-yellow-500",
    features: ["Open atau Enclosed Booth", "Cetak Tanpa Batas", "3 Desain Template", "Digital + Bagikan QR", "2 Operator", "Backdrop Kustom"],
    popular: true,
  },
  {
    name: "Premium",
    price: "4.500.000",
    duration: "8 Jam",
    color: "from-blue-700 to-indigo-800",
    features: ["360° + Open Booth", "Cetak Tanpa Batas", "Template Tanpa Batas", "Digital + Bagikan via WhatsApp", "3 Operator", "Backdrop Kustom + Properti", "Video Highlight di Hari yang Sama"],
    popular: false,
  },
];

export const STATS = [
  { icon: Camera, value: "500+", label: "Event Sukses" },
  { icon: Image, value: "50K+", label: "Foto Tercetak" },
  { icon: Users, value: "200+", label: "Klien Puas" },
  { icon: Star, value: "4.9", label: "Rating Rata-rata" },
];
