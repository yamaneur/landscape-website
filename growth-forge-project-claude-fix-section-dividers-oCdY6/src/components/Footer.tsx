import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sections = [
  { label: "من نحن", href: "#about" },
  { label: "المنهجية", href: "#methodology" },
  { label: "خدماتنا", href: "#services" },
  { label: "المؤسسون", href: "#founders" },
  { label: "شركاؤنا", href: "#partners" },
  { label: "تواصل معنا", href: "#contact" },
];

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer ref={ref} className="relative border-t border-border/30 py-14 md:py-16">
      <div className="container">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gradient font-black text-2xl mb-2 tracking-tight">
            لاندسكيب إكس
          </p>
          <p className="text-muted-foreground/40 text-xs font-medium">
            © {new Date().getFullYear()} Landscape X. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
