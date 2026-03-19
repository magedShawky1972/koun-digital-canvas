import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const reasons = [
  "الوكالة الوحيدة المتخصصة في تسويق بطاقات الألعاب والتطبيقات الصوتية",
  "نقيس الأداء أسبوعياً — تعرف دائماً إذا الاستراتيجية شغالة",
  "من الخطة إلى التنفيذ إلى التحليل — كل شيء في مكان واحد",
  "نفهم سلوك الشراء والمواسم الخاصة بهذا القطاع",
  "فريق متخصص يتحدث لغة عملائك ويعرف منصاتهم",
];

const WhyKoun = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-koun-white">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-koun-navy font-tajawal font-bold text-3xl md:text-[44px] text-center mb-12"
        >
          لماذا كون؟
        </motion.h2>

        <div className="space-y-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={22} className="text-koun-green mt-1 shrink-0" />
              <p className="text-koun-navy font-tajawal text-base md:text-lg leading-[1.75]">
                {r}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKoun;
