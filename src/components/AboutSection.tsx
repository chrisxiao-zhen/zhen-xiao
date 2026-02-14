import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">About</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl font-body mt-6">
            I am a dedicated researcher with more than eight years of experience synthesizing and
            characterizing nanomaterials, and over five years applying them in environmental and
            biomedical contexts. My passion lies in advancing in vivo imaging of tumors and
            pathogens using nanotechnology. A positive and proactive problem-solver, I excel in
            collaborative environments and consistently strive for innovation in my work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
