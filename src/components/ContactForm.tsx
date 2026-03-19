import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lock, Loader2 } from "lucide-react";

const storeSizes = ["ناشئ", "متوسط", "شركة"];
const goals = ["إطلاق", "تنظيم تشغيل", "رفع التحويل", "مخزون", "تقارير"];

const ContactForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-koun-navy">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-primary-foreground font-tajawal font-bold text-3xl md:text-[44px] mb-3">
            تواصل معنا
          </h2>
          <p className="text-koun-slate-light font-tajawal text-base">
            لنفهم احتياج متجرك ونرجع لك بخطة واضحة
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-[640px] mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-koun-tint flex items-center justify-center mx-auto mb-4">
                <Lock size={28} className="text-koun-green" />
              </div>
              <h3 className="text-koun-navy font-tajawal font-bold text-xl mb-2">
                تم إرسال طلبك بنجاح!
              </h3>
              <p className="text-koun-slate text-sm">سنتواصل معك خلال 24 ساعة</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="الاسم"
                  className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] placeholder:text-koun-slate-light focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200"
                />
                <input
                  required
                  type="tel"
                  placeholder="رقم الجوال"
                  className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] placeholder:text-koun-slate-light focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200"
                />
              </div>

              <input
                required
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] placeholder:text-koun-slate-light focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200"
              />

              <input
                required
                type="text"
                placeholder="اسم النشاط"
                className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] placeholder:text-koun-slate-light focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200"
              />

              <input
                type="url"
                placeholder="رابط المتجر"
                className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] placeholder:text-koun-slate-light focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  required
                  defaultValue=""
                  className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200 appearance-none"
                >
                  <option value="" disabled>حجم المتجر</option>
                  {storeSizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <select
                  required
                  defaultValue=""
                  className="w-full h-[52px] px-4 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200 appearance-none"
                >
                  <option value="" disabled>هدفك الحالي</option>
                  {goals.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="رسالتك"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-koun-border bg-card text-koun-navy font-tajawal text-[15px] placeholder:text-koun-slate-light focus:border-koun-green focus:shadow-[0_0_0_3px_rgba(17,107,62,0.15)] outline-none transition-all duration-200 resize-none min-h-[120px]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[52px] bg-koun-green text-primary-foreground font-tajawal font-bold text-base rounded-lg hover:bg-koun-green-hover transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : "أرسل الطلب"}
              </button>

              <p className="text-center text-koun-slate text-xs flex items-center justify-center gap-1.5">
                <Lock size={12} />
                نعمل على حفظ بياناتك، ونستخدمها فقط للرد على طلبك.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
