import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Research", "Publications", "Gallery", "Contact"];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: scrolled ? 0 : -60 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-primary-foreground font-semibold text-lg tracking-tight"
        >
          Zhen Xiao
        </a>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleClick(e, item.toLowerCase())}
              className="text-primary-foreground/50 hover:text-accent transition-colors font-body text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
