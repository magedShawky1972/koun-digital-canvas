import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Megaphone,
  Share2,
  CalendarDays,
  ShoppingCart,
  Headphones,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "استراتيجية تسويق للبطاقات الإلكترونية",
    desc: "خطة تسويق مصممة خصيصاً لمتجرك تستهدف الشريحة الصحيحة بالرسالة الصحيحة في الوقت المناسب",
  },
  {
    icon: Megaphone,
    title: "إدارة الحملات الإعلانية",
    desc: "حملات احترافية على TikTok, Meta, Snap, Google بميزانية مدروسة وعائد واضح",
  },
  {
    icon: Share2,
    title: "إدارة التواصل الاجتماعي والمحتوى",
    desc: "محتوى يتحدث لغة جمهورك ويحفز التفاعل والمبيعات على كل منصة",
  },
  {
    icon: CalendarDays,
    title: "إطلاق العروض الموسمية",
    desc: "استغلال المواسم والأحداث لتعظيم المبيعات بحملات مخصصة ومؤثرة",
  },
  {
    icon: ShoppingCart,
    title: "تحسين صفحة المنتج ورحلة الشراء",
    desc: "تجربة شراء سلسة تزيد معدل التحويل وتقلل التخلي عن السلة",
  },
  {
    icon: Headphones,
    title: "خدمة ما بعد البيع",
    desc: "دعم مستمر لعملائك يبني الولاء ويزيد عمليات الشراء المتكررة",
  },
  {
    icon: BarChart3,
    title: "التقارير والتحليل",
    desc: "تقارير أسبوعية شاملة تعرف من خلالها إذا الاستراتيجية شغالة أو تحتاج تعديل",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-koun-tint">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-koun-navy font-tajawal font-bold text-3xl md:text-[44px] mb-4">
            خدماتنا
          </h2>
          <p className="text-koun-slate font-tajawal text-base md:text-lg">
            كل ما يحتاجه متجرك في مكان واحد
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
              className="bg-card border border-koun-border rounded-koun p-6 hover:-translate-y-1 hover:border-koun-green hover:shadow-[0_8px_24px_rgba(17,107,62,0.12)] transition-all duration-250 group"
            >
              <div className="w-12 h-12 rounded-full bg-koun-tint flex items-center justify-center mb-4">
                <s.icon size={24} className="text-koun-green" />
              </div>
              <h3 className="text-koun-navy font-tajawal font-bold text-[17px] mb-2">
                {s.title}
              </h3>
              <p className="text-koun-slate text-sm leading-[1.75]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
