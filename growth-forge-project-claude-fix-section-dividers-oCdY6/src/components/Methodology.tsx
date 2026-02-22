import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Search, Zap, Users } from "lucide-react";

const strategies = [
  { icon: Target, title: "مجالات مُغفَلة", desc: "نستهدف قطاعات صغيرة أو متخصصة لكن مربحة، غالبًا تغفل عنها الشركات الكبيرة." },
  { icon: TrendingUp, title: "نموذج ربحي", desc: "نهدف لتحقيق عوائد مالية من العميل الأول، والمحافظة على ربحية المنتج في مراحل النمو." },
  { icon: Search, title: "التوزيع والوصول", desc: "نركز على مجالات نمتلك فيها وصول لصنّاع القرار لديهم القدرة على تحريك السوق." },
  { icon: Zap, title: "أتمتة التشغيل", desc: "نستهدف أتمتة 80% من الإجراءات والمهام التشغيلية لتقليل التكلفة وتحسين الربحية." },
  { icon: Users, title: "استكشاف سريع", desc: "فريق متمرّس في الاستكشاف والابتكار للمحافظة على العملاء وكذلك التوسع لفئات أكبر." },
];

const Methodology = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="methodology" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            استراتيجيتنا في <span className="text-gradient">تطوير المنتجات</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {strategies.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="card-premium p-7 group relative overflow-hidden w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.33%-0.875rem)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h3 className="font-bold">{s.title}</h3>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
