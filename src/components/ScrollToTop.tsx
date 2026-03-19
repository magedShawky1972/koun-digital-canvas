import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="العودة للأعلى"
      className="fixed bottom-5 right-6 z-[9999] w-12 h-12 rounded-full bg-koun-navy border border-koun-green/30 flex items-center justify-center text-primary-foreground hover:bg-koun-green transition-all duration-200"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
