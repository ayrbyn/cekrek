import {
  Camera, Star, Award, Instagram, MapPin, Clock, Phone,
  CheckCircle, Zap, Image, Printer, Smartphone, Palette,
  Home, RefreshCw, Trophy, Medal, Gem, Crown, Heart,
  Users, Aperture, Film
} from "lucide-react";

export const NAV_LINKS = ["Services", "Templates", "Awards", "Pricing", "Contact"];

export const SERVICES = [
  { icon: Aperture, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: Home, title: "Consectetur Adipiscing", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: RefreshCw, title: "Eiusmod Tempor", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { icon: Printer, title: "Magna Aliqua", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { icon: Smartphone, title: "Ullamco Laboris", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  { icon: Palette, title: "Nemo Enim", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
];

export const TEMPLATES = [
  { id: 1, name: "Lorem Template", type: "polaroid", bg: "from-blue-700 to-blue-500", accent: "#FACC15",
    imgs: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop"] },
  { id: 2, name: "Ipsum Card", type: "polaroid", bg: "from-yellow-400 to-yellow-300", accent: "#2563EB",
    imgs: ["https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop"] },
  { id: 3, name: "Dolor Style", type: "polaroid", bg: "from-slate-800 to-blue-700", accent: "#60A5FA",
    imgs: ["https://images.unsplash.com/photo-1519690889869-e705e59f72e1?w=400&h=500&fit=crop"] },
  { id: 4, name: "Sit Amet", type: "polaroid", bg: "from-yellow-300 to-orange-300", accent: "#2563EB",
    imgs: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop"] },
  { id: 5, name: "Consectetur", type: "polaroid", bg: "from-blue-600 to-indigo-700", accent: "#FDE68A",
    imgs: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=500&fit=crop"] },
  { id: 6, name: "Adipiscing", type: "polaroid", bg: "from-pink-200 to-yellow-200", accent: "#2563EB",
    imgs: ["https://images.unsplash.com/photo-1533616688419-b7a585564566?w=400&h=500&fit=crop"] },
  { id: 7, name: "Eiusmod", type: "polaroid", bg: "from-purple-800 to-blue-700", accent: "#FACC15",
    imgs: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=500&fit=crop"] },
  { id: 8, name: "Tempor", type: "polaroid", bg: "from-blue-200 to-purple-200", accent: "#2563EB",
    imgs: ["https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&h=500&fit=crop"] },
  { id: 9, name: "Incididunt", type: "polaroid", bg: "from-yellow-500 to-blue-600", accent: "#fff",
    imgs: ["https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?w=400&h=500&fit=crop"] },
];

export const AWARDS = [
  { icon: Trophy, title: "Lorem Ipsum Award", year: "2023", org: "Dolor Sit Amet" },
  { icon: Star, title: "Consectetur Elit", year: "2023", org: "Sed Do Eiusmod" },
  { icon: Medal, title: "Magna Aliqua", year: "2022", org: "Tempor Incididunt" },
  { icon: Zap, title: "Ut Labore et Dolore", year: "2022", org: "Minim Veniam" },
  { icon: Gem, title: "Nostrud Exercitation", year: "2021", org: "Quis Nostrud" },
  { icon: Crown, title: "Ullamco Laboris", year: "2021", org: "Nisi Ut Aliquip" },
];

export const PRICING = [
  {
    name: "Lorem",
    price: "1.000.000",
    duration: "X Hours",
    color: "from-blue-600 to-blue-500",
    features: ["Lorem Ipsum Dolor", "Sit Amet Consectetur", "Adipiscing Elit Sed", "Do Eiusmod Tempor", "Incididunt Ut Labore"],
    popular: false,
  },
  {
    name: "Ipsum",
    price: "2.500.000",
    duration: "Y Hours",
    color: "from-yellow-400 to-yellow-500",
    features: ["Et Dolore Magna", "Aliqua Ut Enim", "Ad Minim Veniam", "Quis Nostrud", "Exercitation Ullamco", "Laboris Nisi Ut"],
    popular: true,
  },
  {
    name: "Dolor",
    price: "4.000.000",
    duration: "Z Hours",
    color: "from-blue-600 to-indigo-600",
    features: ["Aliquip Ex Ea", "Commodo Consequat", "Duis Aute Irure", "Dolor In Reprehenderit", "Voluptate Velit Esse", "Cillum Dolore Eu", "Fugiat Nulla Pariatur"],
    popular: false,
  },
];

export const STATS = [
  { icon: Camera, value: "100+", label: "Lorem Ipsum" },
  { icon: Image, value: "200+", label: "Dolor Sit Amet" },
  { icon: Users, value: "300+", label: "Consectetur Elit" },
  { icon: Star, value: "400+", label: "Sed Do Eiusmod" },
];
