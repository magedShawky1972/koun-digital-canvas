import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-koun-navy overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,148,85,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto section-padding-hero relative z-10">
        <div className="max-w-[560px] mr-0 ml-auto md:ml-auto md:mr-0">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-primary-foreground font-tajawal font-[800] text-[40px] md:text-[64px] leading-tight mb-4"
          >
            كون
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="text-primary-foreground/90 font-tajawal text-lg md:text-2xl mb-2"
          >
            وكالة تسويق لبطاقات الألعاب والتطبيقات الصوتية
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            className="text-koun-green-glow font-tajawal font-bold text-lg md:text-2xl mb-6"
          >
            تشغيل واضح — مبيعات أعلى
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="text-koun-slate-light font-tajawal text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            نساعد متاجر البطاقات الرقمية والتطبيقات الصوتية على تحقيق نمو حقيقي من خلال استراتيجيات تسويق متخصصة
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="bg-koun-green text-primary-foreground font-tajawal font-bold text-base px-8 py-3.5 rounded-lg hover:bg-koun-green-hover hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(17,107,62,0.4)] transition-all duration-200 flex items-center justify-center gap-2"
            >
              تواصل مع فريقنا الآن
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#who")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-primary-foreground/20 text-primary-foreground font-tajawal text-base px-8 py-3.5 rounded-lg hover:border-primary-foreground/40 transition-all duration-200"
            >
              اعرف أكثر
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-koun-slate-light text-sm mt-6"
          >
            رد سريع، خطة واضحة، تنفيذ كامل
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
