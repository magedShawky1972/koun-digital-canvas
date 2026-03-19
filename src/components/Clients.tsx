import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Music, Truck, Rocket } from "lucide-react";

const segments = [
  { icon: Gamepad2, label: "متاجر بطاقات الألعاب" },
  { icon: Music, label: "متاجر التطبيقات الصوتية" },
  { icon: Truck, label: "موردون وموزعون" },
  { icon: Rocket, label: "علامات جديدة في القطاع" },
];

const Clients = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-koun-tint">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-koun-navy font-tajawal font-bold text-3xl md:text-[44px] text-center mb-12"
        >
          عملاؤنا
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-card rounded-koun border border-koun-border p-6 text-center hover:-translate-y-1 hover:border-koun-green transition-all duration-250"
            >
              <div className="w-12 h-12 rounded-full bg-koun-tint flex items-center justify-center mx-auto mb-3">
                <s.icon size={24} className="text-koun-green" />
              </div>
              <p className="text-koun-navy font-tajawal font-bold text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
