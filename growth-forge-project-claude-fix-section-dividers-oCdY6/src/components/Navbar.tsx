import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logo-header.png";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#methodology", label: "المنهجية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#founders", label: "المؤسسون" },
  { href: "#partners", label: "شركاؤنا" },
  { href: "#contact", label: "تواصل معنا" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 right-0 left-0 z-50 glass-strong"
      >
        <div className="container flex items-center justify-between h-16 md:h-20 px-4">
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a href="#" className="flex-shrink-0 md:mr-0">
            <img src={logoHeader} alt="لاندسكيب إكس" className="h-8 md:h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm mx-auto">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-all duration-300 relative group font-bold"
              >
                {l.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Spacer for mobile to center the logo */}
          <div className="w-10 md:hidden" />
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 glass-strong md:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12 text-lg">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
