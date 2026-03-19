import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhoAreWe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who" className="section-padding bg-koun-white">
      <div className="container mx-auto max-w-3xl text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-koun-navy font-tajawal font-bold text-3xl md:text-[44px] mb-8"
        >
          من نحن؟
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="text-koun-slate font-tajawal text-base md:text-lg leading-[1.8]"
        >
          كون هي وكالة تسويق رقمي متخصصة حصرياً في قطاع بطاقات الألعاب الإلكترونية والتطبيقات الصوتية في المملكة العربية السعودية ومنطقة الخليج. نحن لسنا وكالة عامة — نحن نفهم سلوك الشراء، أنماط الطلب الموسمية، وخصائص كل منصة في هذا القطاع بالتحديد. من الاستراتيجية إلى الإعلانات إلى المحتوى — كل شيء في وكالة واحدة.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoAreWe;
