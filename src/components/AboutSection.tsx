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

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              I am a postdoctoral scholar at Stanford University with over eight years of experience in the synthesis and characterization of nanomaterials, and more than five years applying these materials in biomedical and translational settings. My research develops nanotechnology-enabled platforms for molecular imaging of tumors and pathogens, with an emphasis on bridging the gap between bench-scale innovation and clinical deployment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Looking ahead, my long-term vision is to establish an independent research program that pioneers clinically translatable imaging and nanomedicine technologies for the early detection, monitoring, and treatment of cancer and infectious diseases—ultimately accelerating the path from materials discovery to patient impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
