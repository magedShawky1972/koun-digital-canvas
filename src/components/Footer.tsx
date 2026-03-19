import kounLogo from "@/assets/koun-logo.svg";

const footerLinks = [
  { label: "من نحن", href: "#who" },
  { label: "خدماتنا", href: "#services" },
  { label: "النتائج", href: "#results" },
  { label: "تواصل معنا", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-koun-navy-deep border-t border-koun-green/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={kounLogo} alt="كون" className="h-8 mb-4" />
            <p className="text-koun-slate-light text-sm leading-relaxed">
              وكالة تسويق متخصصة في بطاقات الألعاب والتطبيقات الصوتية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-tajawal font-bold text-base mb-4">
              روابط سريعة
            </h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-koun-slate-light text-sm hover:text-koun-green transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-primary-foreground font-tajawal font-bold text-base mb-4">
              تواصل معنا
            </h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com/Kounworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-koun-slate-light text-sm font-sora hover:text-koun-green transition-colors"
              >
                Instagram @Kounworld
              </a>
              <a
                href="https://x.com/Kounworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-koun-slate-light text-sm font-sora hover:text-koun-green transition-colors"
              >
                X @Kounworld
              </a>
              <a
                href="https://tiktok.com/@Kounworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-koun-slate-light text-sm font-sora hover:text-koun-green transition-colors"
              >
                TikTok @Kounworld
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-koun-slate-light text-xs">
            © {new Date().getFullYear()} كون. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
