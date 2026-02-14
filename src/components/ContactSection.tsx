import { motion } from "framer-motion";
import { Mail, ExternalLink, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline mx-auto" />
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground font-display mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-foreground/60 font-body max-w-xl mx-auto mb-10">
            I am currently seeking academic positions. If you are interested in my research or would like to discuss collaboration opportunities, please feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:xiaozhen@stanford.edu"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              xiaozhen@stanford.edu
            </a>
            <a
              href="https://profiles.stanford.edu/zhen-xiao?tab=bio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground font-body text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Stanford Profile
            </a>
          </div>

          <p className="text-primary-foreground/40 font-body text-xs mt-8 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            California, USA · +1 (401)-699-4590
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
