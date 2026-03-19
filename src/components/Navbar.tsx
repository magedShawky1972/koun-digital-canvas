import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import kounLogo from "@/assets/koun-logo.svg";

const navLinks = [
  { label: "من نحن", href: "#who" },
  { label: "خدماتنا", href: "#services" },
  { label: "مشاريعنا", href: "#results" },
  { label: "تواصل", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-koun-navy/95 backdrop-blur-[12px] border-b border-koun-green/20 h-14"
          : "bg-transparent h-[68px]"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <img src={kounLogo} alt="كون" className="h-8" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-tajawal transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:right-0 after:bg-koun-green after:origin-bottom-left after:transition-transform after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-right"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-koun-green text-primary-foreground font-tajawal font-bold text-sm px-5 py-2 rounded-lg hover:bg-koun-green-hover hover:-translate-y-px transition-all duration-200"
          >
            تواصل مع فريقنا الآن
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="القائمة"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-koun-navy flex flex-col items-center justify-center gap-8 z-40">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground text-xl font-tajawal"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-koun-green text-primary-foreground font-bold text-lg px-8 py-3 rounded-lg"
          >
            تواصل مع فريقنا الآن
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
