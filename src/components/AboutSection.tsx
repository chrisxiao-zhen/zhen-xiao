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
            I am a researcher with over eight years of experience in the synthesis and characterization of nanomaterials, and more than five years applying these materials in environmental and biomedical systems. My work focuses on developing nanotechnology-enabled platforms for in vivo imaging of tumors and pathogens. I thrive in collaborative research environments and approach complex problems with a proactive, solution-driven mindset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
