import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
    </div>

    {/* Animated orbs */}
    <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary glow-orb animate-float" />
    <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-secondary glow-orb animate-float-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent glow-orb animate-pulse-soft" />

    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "linear-gradient(hsl(250 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(250 80% 60%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container relative z-10 text-center pt-20">
<motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-4xl md:text-6xl font-extrabold text-foreground leading-relaxed mb-4">
          استديو شركات ناشئة{" "}
          <motion.span
            animate={{ textShadow: ["0 0 0px hsl(250 80% 60%)", "0 0 20px hsl(250 80% 60%)", "0 0 0px hsl(250 80% 60%)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gradient font-black"
          >
            وطني ابتكاري
          </motion.span>
        </p>
        <p className="text-base md:text-lg font-bold text-muted-foreground leading-loose max-w-xl mx-auto">
          يبني شركات ريادية عبر خبرات متراكمة مربحة في{" "}
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-foreground font-extrabold"
          >
            قطاعات غير مُستغلة
          </motion.span>
          ، تتجاوز{" "}
          <motion.span
            animate={{ 
              textShadow: ["0 0 0px hsl(275 65% 55%)", "0 0 16px hsl(275 65% 55%)", "0 0 0px hsl(275 65% 55%)"],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-foreground font-black"
          >
            45 عامًا
          </motion.span>
          {" "}في{" "}
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="text-foreground font-extrabold"
          >
            الابتكار وبناء المنتجات والاستثمار
          </motion.span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#services"
          className="bg-gradient-brand text-primary-foreground px-8 py-3.5 rounded-2xl font-medium text-base hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
        >
          اكتشف خدماتنا
        </a>
        <a
          href="#contact"
          className="glass text-foreground px-8 py-3.5 rounded-2xl font-medium text-base hover:bg-muted/60 hover:-translate-y-0.5 transition-all duration-300"
        >
          تواصل معنا
        </a>
      </motion.div>

    </div>
  </section>
);

export default Hero;
