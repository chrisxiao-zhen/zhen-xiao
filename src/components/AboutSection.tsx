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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <p className="text-muted-foreground text-lg leading-relaxed font-body mb-6">
            I am a postdoctoral scholar at Stanford University with over eight years of experience in the synthesis and characterization of nanomaterials, and more than five years applying these materials in biomedical and translational settings. My work focuses on magnetic nanomaterials for molecular imaging, translational diagnostics, and cancer theranostics.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            My long-term vision is to establish an independent research program that pioneers clinically translatable imaging and nanomedicine technologies—accelerating the path from materials discovery to patient impact in oncology and infectious disease.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
