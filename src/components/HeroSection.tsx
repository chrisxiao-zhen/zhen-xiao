import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay/80" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            Zhen Xiao
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-2 font-body">
            PhD
          </p>
          <div className="gold-underline mx-auto mt-6 mb-8" />
          <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl mx-auto leading-relaxed mb-10">
            Postdoctoral Scholar · Stanford University School of Medicine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/60 font-body text-sm"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            California, USA
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-accent" />
            <a href="mailto:xiaozhen@stanford.edu" className="hover:text-accent transition-colors">
              xiaozhen@stanford.edu
            </a>
          </span>
          <a
            href="https://profiles.stanford.edu/zhen-xiao?tab=bio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-accent" />
            Stanford Profile
          </a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-primary-foreground/50 font-body text-sm uppercase tracking-widest"
        >
          {["Research", "Publications", "Education", "Awards", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
};

export default HeroSection;
