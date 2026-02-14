import { motion } from "framer-motion";
import researchTargeting from "@/assets/research-targeting.png";
import researchNanoprobe from "@/assets/research-nanoprobe.png";
import researchTb from "@/assets/research-tb.png";
import researchAbp from "@/assets/research-abp.png";

const researchHighlights = [
  {
    title: "Cancer Theranostics",
    description:
      "Engineered magnetic nanomaterials enabling dual-modality imaging (MRI, MPI) and magnetically targeted drug delivery for cancer theranostics.",
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "Designed smart MPI probes to monitor granzyme B activity, providing real-time metrics for cancer immunotherapy efficacy.",
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Developed a magneto-bacteriophage platform for rapid, highly sensitive detection of Mycobacterium tuberculosis. Supported by Stanford SPARK and Gates Foundation.",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Created a SERS biosensor using gold nanoparticles for multiplexed identification of drug-resistant bacterial strains.",
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Formulated novel copper-depleting lipid nanoparticles as a targeted therapeutic strategy inducing cancer cell death by disrupting mitochondrial function.",
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Engineered magnetic nanoclusters with 10-fold greater magnetic susceptibility, demonstrating high efficiency in magnetic separation and thermal applications.",
  },
];

const researchSchematics = [
  { src: researchTargeting, alt: "Nanoparticle Targeting Mechanisms in Drug Delivery", caption: "Nanoparticle Targeting Mechanisms in Drug Delivery" },
  { src: researchNanoprobe, alt: "Multimodal Nanoprobe Activation", caption: "Multimodal Nanoprobe Activation" },
  { src: researchTb, alt: "Magnetic Nanotechnology for Point-of-Care TB Detection", caption: "Magnetic Nanotechnology for Point-of-Care TB Detection" },
  { src: researchAbp, alt: "Strategies for Detecting Bacteria Using Activity-Based Chemical Probes", caption: "Activity-Based Chemical Probes for Bacteria Detection" },
];

const ResearchSection = () => {
  return (
    <section id="research" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle font-body">
            Nanotechnology · Biomedical Imaging · Cancer Theranostics · Diagnostics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Research Schematics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchSchematics.map((item, index) => (
              <motion.div
                key={item.caption}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <img src={item.src} alt={item.alt} className="w-full h-auto" />
                <p className="text-muted-foreground text-sm text-center py-3 px-4 font-body">{item.caption}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
