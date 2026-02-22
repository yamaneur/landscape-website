import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { User, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import founderYaman from "@/assets/founder-yaman.jpeg";
import founderBandar from "@/assets/founder-bandar.jpeg";
import founderAbdulrahim from "@/assets/founder-abdulrahim.jpeg";
import founderHarith from "@/assets/founder-harith.jpg";

const founders = [
  {
    id: "founder-0",
    name: "عبدالرحيم القاعود",
    role: "الرئيس التنفيذي",
    bio: 'ممارس لتأسيس <strong>الشركات الناشئة</strong> لأكثر من <strong>9 سنوات</strong>، قاد تأسيس شركة <strong>كريرهب</strong> وشركة <strong>أندري</strong>، وهندس العديد من الصفقات الناجحة مع <strong>القطاع الحكومي والخاص</strong>.',
    color: "from-primary/30 to-secondary/30",
    defaultImage: founderAbdulrahim,
  },
  {
    id: "founder-1",
    name: "عبدالرحمن حارث",
    role: "استديو المنتجات",
    bio: 'رائد أعمال ومؤسس لعدة شركات ناشئة سابقة. يرأس المنتجات في <strong>ثمانية</strong> وسابقًا في <strong>ويبوك</strong>. أشرف على العديد من المبادرات مع الجهات الحكومية مثل <strong>هيئة السياحة</strong> و<strong>نسك</strong> و<strong>روح السعودية</strong>.',
    color: "from-accent/30 to-primary/30",
    defaultImage: founderHarith,
  },
  {
    id: "founder-2",
    name: "بندر العصيمي",
    role: "الاستثمار والمالية",
    bio: 'خبير في مجال <strong>المنتجات التقنية</strong>، يرأس المنتجات في <strong>دراهم</strong> وسابقاً في <strong>ولاء</strong>، أشرف على العديد من المشاريع الخاصة والحكومية بخبرة تمتد لـ<strong>9 سنوات</strong>.',
    color: "from-secondary/30 to-accent/30",
    defaultImage: founderBandar,
  },
  {
    id: "founder-3",
    name: "يمان العرضي",
    role: "التسويق والنمو",
    bio: 'رائد أعمال ومؤسس لعدة شركات في <strong>قطاع الخدمات</strong>، قاد تطوير الأعمال في شركة <strong>هُناك</strong>، وشركة <strong>النجاح المهني</strong> بخبرة تجاوزت الـ<strong>10 سنوات</strong>.',
    color: "from-primary/30 to-accent/30",
    defaultImage: founderYaman,
  },
];

const FounderCard = ({ founder, position }: { founder: typeof founders[0]; position: "left" | "center" | "right" }) => {
  const isCenter = position === "center";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isCenter
          ? "w-[260px] md:w-[340px] z-10 shadow-2xl shadow-primary/10"
          : "w-[200px] md:w-[280px] hidden sm:block opacity-50 scale-[0.88]"
      }`}
    >
      <div className={`aspect-[3/4] bg-gradient-to-br ${founder.color} bg-muted/30 flex items-center justify-center relative`}>
        {founder.defaultImage ? (
          <img src={founder.defaultImage} alt={founder.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <User className={`${isCenter ? "w-24 h-24 md:w-28 md:h-28" : "w-20 h-20"} text-muted-foreground/20`} />
        )}
        <div className={`absolute bottom-0 inset-x-0 ${isCenter ? "h-2/5" : "h-1/3"} bg-gradient-to-t from-black/80 to-transparent`} />
      </div>
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-end justify-between">
        <div className="relative overflow-hidden">
          <h3 className={`font-bold text-white ${isCenter ? "text-base md:text-lg" : "text-sm text-white/80"}`}>
            {isCenter ? (
              <span className="relative inline-block">
                {founder.name}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[name-spark_2.5s_ease-in-out_infinite] -skew-x-12" />
              </span>
            ) : founder.name}
          </h3>
          <p className={`text-xs mt-0.5 ${isCenter ? "text-white/60" : "text-white/40"}`}>{founder.role}</p>
        </div>
        {isCenter && (
          <div className="w-9 h-9 rounded-xl bg-[#0A66C2]/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#0A66C2]/40 transition-colors cursor-pointer animate-[linkedin-pulse_2s_ease-in-out_infinite]">
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
          </div>
        )}
      </div>
    </div>
  );
};

const Founders = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const go = useCallback((dir: number) => {
    setActive((prev) => (prev + dir + founders.length) % founders.length);
  }, []);

   useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  const getIndex = (offset: number) => (active + offset + founders.length) % founders.length;

  return (
    <section id="founders" className="pt-14 pb-14 md:pt-20 md:pb-20 relative overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary glow-orb animate-pulse-soft" />

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            فريق التأسيس
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">+45 عام من الخبرات المتراكمة في بناء الشركات الناشئة والابتكار</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative"
        >
          {/* Cards with individual staggered animations */}
          <div className="flex items-center justify-center gap-4 md:gap-6 px-12 md:px-16 min-h-[380px] md:min-h-[440px]">
            {/* Left card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${getIndex(-1)}`}
                initial={{ opacity: 0, scale: 0.8, x: -40 }}
                animate={{ opacity: 0.5, scale: 0.88, x: 0 }}
                exit={{ opacity: 0, scale: 0.75, x: -60 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="hidden sm:block"
              >
                <FounderCard founder={founders[getIndex(-1)]} position="left" />
              </motion.div>
            </AnimatePresence>

            {/* Center card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`center-${active}`}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <FounderCard founder={founders[active]} position="center" />
              </motion.div>
            </AnimatePresence>

            {/* Right card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${getIndex(1)}`}
                initial={{ opacity: 0, scale: 0.8, x: 40 }}
                animate={{ opacity: 0.5, scale: 0.88, x: 0 }}
                exit={{ opacity: 0, scale: 0.75, x: 60 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="hidden sm:block"
              >
                <FounderCard founder={founders[getIndex(1)]} position="right" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-muted/60 transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-muted/60 transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {founders.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-7" : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center mt-8 max-w-xl mx-auto"
          >
            <p
              className="text-foreground/80 text-sm md:text-base leading-loose font-medium [&_strong]:text-primary [&_strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: founders[active].bio }}
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Founders;
