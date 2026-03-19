import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "قرارات أسرع" },
  { value: 3, suffix: "x", label: "نمو مستمر" },
  { value: 40, suffix: "%", label: "محتوى يحفز الشراء" },
  { value: 60, suffix: "%", label: "تقليل الهدر" },
  { value: 2, suffix: "x", label: "رفع التحويل" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span className="font-sora font-bold text-4xl md:text-[48px] text-koun-green-glow">
      {count}{suffix}
    </span>
  );
};

const Results = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-koun-navy">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary-foreground font-tajawal font-bold text-3xl md:text-[44px] text-center mb-14"
        >
          ماذا أضافت كون
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="text-koun-slate-light font-tajawal text-sm mt-2">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-primary-foreground/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
