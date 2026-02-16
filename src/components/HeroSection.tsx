import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, MapPin, ExternalLink, Download, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

      <div className="relative z-10 section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                <img
                  src={heroBg}
                  alt="Dr. Zhen Xiao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-accent/20 -z-10" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="gold-underline" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-3 tracking-tight font-display">
              Zhen Xiao
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 font-body mb-6">
              PhD · Postdoctoral Scholar
            </p>
            <p className="text-primary-foreground/60 font-body text-base leading-relaxed max-w-lg mb-4">
              Stanford University School of Medicine
            </p>
            <p className="text-primary-foreground/50 font-body text-sm leading-relaxed max-w-lg mb-8">
              I develop nanotechnology-enabled platforms for molecular imaging of tumors and pathogens, with an emphasis on bridging bench-scale innovation and clinical deployment. My long-term vision is to pioneer clinically translatable imaging and nanomedicine technologies for the early detection, monitoring, and treatment of cancer and infectious diseases.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-primary-foreground/50 font-body text-sm mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                California, USA
              </span>
              <span className="text-primary-foreground/20">|</span>
              <a href="mailto:xiaozhen@stanford.edu" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5 text-accent" />
                xiaozhen@stanford.edu
              </a>
              <span className="text-primary-foreground/20">|</span>
              <a
                href="https://profiles.stanford.edu/zhen-xiao?tab=bio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
                Stanford Profile
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Zhen_Xiao_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-primary-foreground/25 text-primary-foreground/80 font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Publications
              </a>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-wrap justify-center gap-8 text-primary-foreground/40 font-body text-sm uppercase tracking-widest"
        >
          {["Research", "Publications", "Education", "Awards", "Gallery", "Contact"].map((item) => (
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
