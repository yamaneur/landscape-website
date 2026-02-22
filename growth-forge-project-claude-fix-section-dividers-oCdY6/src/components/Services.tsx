import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Building2, ArrowLeft } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "إطلاق منتجات داخلية",
    desc: "بناء وإطلاق منتجات مبتكرة داخل المؤسسات لتحقيق أقصى قيمة من الموارد المتاحة.",
    features: ["تحليل المُمكّنات", "هاكاثونات الابتكار", "بناء النماذج الأولية"],
  },
  {
    icon: Building2,
    title: "بناء استديو المنتجات للشركات",
    desc: "نقدم خدمة بناء استديو المنتجات داخل الشركات العائلية والجهات الحكومية.",
    features: ["الإطلاق والاختبار", "التشغيل والتطوير", "بناء الفريق"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-primary glow-orb animate-pulse-soft" />

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            ماذا نقدم في <span className="text-gradient">لاندسكيب إكس</span>؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-premium p-8 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary glow-orb opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

              <div className="relative flex-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>

                <div className="space-y-2">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <a href="#contact" className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  اعرف المزيد
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
