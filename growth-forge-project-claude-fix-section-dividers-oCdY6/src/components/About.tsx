import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const stats = [
  { number: 45, prefix: "+", suffix: "", label: "عام من الخبرات المتراكمة", desc: "في بناء الشركات والابتكار والاستثمار" },
  { number: 9, prefix: "+", suffix: "", label: "سنوات في تأسيس الشركات", desc: "خبرة عملية في ريادة الأعمال" },
  { number: 80, prefix: "", suffix: "%", label: "أتمتة التشغيل المستهدفة", desc: "لتقليل التكلفة وتحسين الربحية" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            عن <span className="text-gradient">لاندسكيب إكس</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            نمزج بين المنهجيات المتعددة بهدف استكشاف وصناعة وحماية القيمة لعملاء ومستثمري لاندسكيب إكس
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 1, ease: "easeOut" }}
              className="card-premium p-8 md:p-10 text-center group shimmer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary glow-orb opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-gradient-warm mb-3">
                  {stat.prefix}<AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
