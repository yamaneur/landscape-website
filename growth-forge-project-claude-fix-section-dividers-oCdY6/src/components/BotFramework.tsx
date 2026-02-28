import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Hammer, Settings, ArrowRightLeft } from "lucide-react";

const phases = [
  {
    key: "transfer",
    letter: "T",
    title: "Transfer",
    titleAr: "النقل",
    icon: ArrowRightLeft,
    color: "from-accent to-primary",
    glowColor: "hsl(200 80% 55%)",
    description: "ننقل الملكية والإدارة بالكامل إلى المستثمر أو الشريك مع ضمان استمرارية النجاح.",
    points: [
      "نقل الملكية الفكرية والتقنية",
      "تدريب الفريق الجديد",
      "ضمان استمرارية التشغيل",
      "دعم ما بعد النقل",
    ],
  },
  {
    key: "operate",
    letter: "O",
    title: "Operate",
    titleAr: "التشغيل",
    icon: Settings,
    color: "from-secondary to-accent",
    glowColor: "hsl(275 65% 50%)",
    description: "ندير العمليات اليومية ونحقق النمو المستدام مع أتمتة العمليات التشغيلية.",
    points: [
      "إدارة العمليات والفريق",
      "أتمتة تصل إلى 80% من التشغيل",
      "تحسين مستمر للأداء والربحية",
      "توسيع قاعدة العملاء والشراكات",
    ],
  },
  {
    key: "build",
    letter: "B",
    title: "Build",
    titleAr: "البناء",
    icon: Hammer,
    color: "from-primary to-secondary",
    glowColor: "hsl(250 80% 60%)",
    description: "نبني المنتج من الصفر — من الفكرة إلى النموذج الأولي إلى الإطلاق الكامل.",
    points: [
      "تصميم المنتج وتجربة المستخدم",
      "التطوير التقني والبنية التحتية",
      "اختبار السوق والتحقق من الطلب",
      "بناء الفريق الأساسي",
    ],
  },
];

const BotFramework = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="bot-framework" className="pt-14 pb-14 md:pt-20 md:pb-20 relative overflow-hidden" ref={ref}>
      {/* Background orb */}
      <motion.div
        className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: phases[activePhase].glowColor, filter: "blur(120px)", opacity: 0.08 }}
        animate={{ background: phases[activePhase].glowColor }}
        transition={{ duration: 1.5 }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            نبني، نشغّل، وننقل:
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            إطار عمل متكامل لتحويل الأفكار إلى شركات مستدامة
          </p>
        </motion.div>

        {/* BOT Letters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3 md:gap-6 mb-16"
          dir="ltr"
        >
          {phases.map((phase, i) => {
            const isActive = activePhase === i;
            const Icon = phase.icon;
            return (
              <motion.button
                key={phase.key}
                onClick={() => setActivePhase(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative group cursor-pointer transition-all duration-700 ${
                  isActive ? "z-10" : "opacity-40 hover:opacity-70"
                }`}
              >
                {/* Glow ring */}
                {isActive && (
                  <motion.div
                    layoutId="bot-glow"
                    className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${phase.color} opacity-20 blur-xl`}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                <div
                  className={`relative flex flex-col items-center gap-2 px-6 py-5 md:px-10 md:py-7 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "border-primary/40 bg-card shadow-2xl shadow-primary/10"
                      : "border-border/30 bg-card/50"
                  }`}
                >
                  <span
                    className={`text-4xl md:text-6xl font-black tracking-tighter transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-br ${phase.color}`}
                  >
                    {phase.letter}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Icon className={`w-3.5 h-3.5 transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`text-xs font-bold transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {phase.title}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>




        {/* Phase Detail Card */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-premium p-8 md:p-12 relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${phases[activePhase].color}`} />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${phases[activePhase].color} flex items-center justify-center`}>
                  {(() => {
                    const Icon = phases[activePhase].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-foreground">
                    {phases[activePhase].titleAr}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">{phases[activePhase].title}</p>
                </div>
              </div>

              <p className="text-foreground/80 text-sm md:text-base font-medium leading-relaxed mb-8">
                {phases[activePhase].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phases[activePhase].points.map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/20"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${phases[activePhase].color} flex-shrink-0`} />
                    <span className="text-sm font-semibold text-foreground/80">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {phases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === activePhase ? "bg-primary w-7" : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotFramework;
