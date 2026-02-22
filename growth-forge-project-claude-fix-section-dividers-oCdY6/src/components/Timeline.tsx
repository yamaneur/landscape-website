import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, Search, Wrench, BarChart3, Rocket, Users, ChevronDown } from "lucide-react";

const steps = [
  {
    title: "فهم السياق وتوليد الأفكار",
    days: "15",
    icon: Lightbulb,
    color: "from-violet-500 to-purple-600",
    description: "نبدأ بفهم عميق لسياق الجهة وأهدافها من خلال ورش عمل وجلسات عصف ذهني إبداعي مع فرق العمل والقيادات التنفيذية. نحلل احتياجات السوق ونستكشف الفرص الابتكارية في قطاعات واعدة.",
    outputs: ["مستند قائمة الأفكار", "الدراسات الأولية للأفكار", "تحليل SWOT والمنافسين"],
  },
  {
    title: "التحقق والاختبار",
    days: "30",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    description: "نجري مقابلات على نطاق محدود لفهم حجم السوق المستهدف والمنافسين وتجربة العملاء. نبني النموذج الأولي المفاهيمي ونختبره على نطاق صغير للتحقق من جدوى الفكرة.",
    outputs: ["نموذج أولي مفاهيمي", "تقرير التحقق من الفكرة", "مؤشرات السوق"],
  },
  {
    title: "بناء المنتج الأولي",
    days: "30",
    icon: Wrench,
    color: "from-emerald-500 to-teal-500",
    description: "نحدد الميزات الأساسية التي يجب تطويرها واختبارها بشكل أولي بعد تقرير التحقق. نضع المتطلبات التقنية وخارطة طريق المنتج مع عروض أسعار للتنفيذ التقني.",
    outputs: ["خارطة طريق المنتج", "المتطلبات التقنية", "عروض أسعار التنفيذ"],
  },
  {
    title: "الدراسة المالية",
    days: "15",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
    description: "نحدد التكاليف المتوقعة لإنشاء الشركة الناشئة ونحلل السيناريوهات الاحتمالية وتوقعات السوق. نحتسب العائد على الاستثمار (ROI) لضمان الربحية.",
    outputs: ["التوقعات المالية 3 سنوات", "قائمة بنود التشغيل", "تحليل ROI"],
  },
  {
    title: "خطة إطلاق المنتج",
    days: "15",
    icon: Rocket,
    color: "from-rose-500 to-pink-500",
    description: "نحدد الجمهور المستهدف واستراتيجية التسويق وقنوات التوزيع. نختبر الرسائل التسويقية ونضع استراتيجية النمو والمبيعات لإطلاق ناجح.",
    outputs: ["استراتيجية دخول السوق", "خطة التسويق", "استراتيجية النمو"],
  },
  {
    title: "بناء الفريق",
    days: "45",
    icon: Users,
    color: "from-indigo-500 to-violet-500",
    description: "نصيغ التوصيفات الوظيفية ونحدد الأدوار وطريقة قياس الأداء. نعيّن الفريق المؤسس والفريق التشغيلي لضمان انطلاقة قوية ومستدامة.",
    outputs: ["التوصيفات الوظيفية", "تعيين الفريق المؤسس", "نظام قياس الأداء"],
  },
];

const TimelineCard = ({ step, index, isActive, onToggle }: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 60, opacity: 0, scale: 0.95 }}
      animate={cardInView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      {/* Connector line from top */}
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={cardInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-px h-10 md:h-14 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 origin-top"
        />
      )}

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={cardInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
        className="relative mb-4"
      >
        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/10`}>
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center text-[10px] font-bold text-primary">
          {index + 1}
        </div>
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} -z-10`}
        />
      </motion.div>

      {/* Card */}
      <div
        onClick={onToggle}
        className={`card-premium w-full max-w-lg p-5 md:p-6 cursor-pointer text-center transition-all duration-500 ${
          isActive
            ? "border-primary/40 shadow-[0_0_50px_-12px_hsl(250_80%_60%/0.3)]"
            : "hover:border-primary/20 hover:shadow-[0_0_30px_-12px_hsl(250_80%_60%/0.15)]"
        }`}
      >
        <h3 className="font-bold text-sm md:text-base text-foreground mb-2">{step.title}</h3>
        <span className={`inline-block bg-gradient-to-l ${step.color} text-white text-[10px] md:text-xs font-bold px-4 py-1 rounded-full`}>
          {step.days} يوم
        </span>

        {/* Expand hint */}
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground mx-auto" />
        </motion.div>

        {/* Expandable content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border/50 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-xs font-semibold text-primary mb-3">المخرجات:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {step.outputs.map((output, j) => (
                    <motion.span
                      key={j}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: j * 0.1, duration: 0.3 }}
                      className="text-[11px] md:text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/15"
                    >
                      {output}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const totalDays = steps.reduce((sum, s) => sum + parseInt(s.days), 0);

  return (
    <section id="timeline" className="pt-32 pb-16 md:pt-44 md:pb-36 relative" ref={ref}>
      <div className="section-divider absolute top-0" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent glow-orb animate-pulse-soft" />

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            المخطط <span className="text-gradient">الزمني</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-2">
            نعمل على بناء الشركات الريادية وإطلاقها للسوق وبناء الفريق
          </p>
          <p className="text-sm text-primary font-semibold">
            إجمالي المدة: {totalDays} يوم
          </p>
        </motion.div>

        {/* Vertical centered timeline */}
        <div className="flex flex-col items-center">
          {steps.map((step, i) => (
            <TimelineCard
              key={i}
              step={step}
              index={i}
              isActive={activeStep === i}
              onToggle={() => setActiveStep(activeStep === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
