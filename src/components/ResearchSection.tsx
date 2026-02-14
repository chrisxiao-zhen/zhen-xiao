import { motion } from "framer-motion";
import researchTargeting from "@/assets/research-targeting.png";
import researchNanoprobe from "@/assets/research-nanoprobe.png";
import researchTb from "@/assets/research-tb.png";
import researchAbp from "@/assets/research-abp.png";
import researchCopper from "@/assets/research-copper.png";
import researchNanoclusters from "@/assets/research-nanoclusters.png";

const researchHighlights = [
  {
    title: "Cancer Theranostics",
    description:
      "Engineered magnetic nanomaterials enabling dual-modality imaging (MRI, MPI) and magnetically targeted drug delivery for cancer theranostics.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "Designed smart MPI probes to monitor granzyme B activity, providing real-time metrics for cancer immunotherapy efficacy.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Developed a magneto-bacteriophage platform for rapid, highly sensitive detection of Mycobacterium tuberculosis. Supported by Stanford SPARK and Gates Foundation.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Created a SERS biosensor using gold nanoparticles for multiplexed identification of drug-resistant bacterial strains.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Formulated novel copper-depleting lipid nanoparticles as a targeted therapeutic strategy inducing cancer cell death by disrupting mitochondrial function.",
    image: researchCopper,
    imageAlt: "Mitochondrial-specific Copper Trap Nanoparticles",
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Engineered magnetic nanoclusters with 10-fold greater magnetic susceptibility, demonstrating high efficiency in magnetic separation and thermal applications.",
    image: researchNanoclusters,
    imageAlt: "Magnetic Nanoclusters with Enhanced Magnetic Properties",
  },
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
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex flex-col"
            >
              <img src={item.image} alt={item.imageAlt} className="w-full h-auto" />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
