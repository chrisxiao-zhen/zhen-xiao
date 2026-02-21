import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary scroll-mt-16">
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
          className="mt-10 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a postdoctoral scholar at Stanford University with over eight years of experience in the synthesis and characterization of nanomaterials, and more than five years applying these materials in biomedical and translational settings. My work focuses on magnetic nanomaterials for molecular imaging, translational diagnostics, and cancer theranostics.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My long-term goal is to establish an independent research group that pioneers clinically translatable magnetic nanotechnologies for oncology and infectious disease. I will combine rational nanomaterial design, advanced molecular imaging, and point-of-care diagnostics to create platforms that enable real-time treatment monitoring and precision interventions — moving the field from 'one-size-fits-all' to truly adaptive theranostics.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden border border-border shadow-lg max-w-sm">
              <img
                src={heroBg}
                alt="Dr. Zhen Xiao"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
