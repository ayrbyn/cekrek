import "./index.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import StatsTicker from "./sections/StatsTicker";
import About from "./sections/About";
import Services from "./sections/Services";
import Templates from "./sections/Templates";
import Awards from "./sections/Awards";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      {/* 
        Native smooth scroll is best handled by CSS scroll-padding.
        Add style for html tag to ensure all anchors respect the navbar offset globally.
      */}
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
      `}</style>
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <StatsTicker />
      <About />
      <Services />
      <Templates />
      <Awards />
      <Pricing />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
