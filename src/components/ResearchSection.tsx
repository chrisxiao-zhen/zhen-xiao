import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
    detailedDescription:
      "I develop engineered magnetic nanomaterials that integrate diagnosis and therapy into a single platform for cancer theranostics. By combining magnetic resonance imaging (MRI) and magnetic particle imaging (MPI) with magnetically guided drug delivery, this work enables precise tumor localization, real-time treatment monitoring, and targeted therapeutic intervention. These multifunctional systems aim to improve treatment efficacy while minimizing off-target toxicity through externally controlled magnetic targeting.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "Designed smart MPI probes to monitor granzyme B activity, providing real-time metrics for cancer immunotherapy efficacy.",
    detailedDescription:
      "To address the need for real-time assessment of cancer immunotherapy, I designed smart magnetic particle imaging (MPI) probes that report granzyme B activity in vivo. These activatable nanoprobes provide quantitative, noninvasive metrics of cytotoxic T-cell function, enabling direct monitoring of immunotherapy response at the molecular level. This approach offers a powerful tool for evaluating treatment efficacy and guiding therapeutic optimization.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Developed a magneto-bacteriophage platform for rapid, highly sensitive detection of Mycobacterium tuberculosis. Supported by Stanford SPARK and Gates Foundation.",
    detailedDescription:
      "I developed a magneto-bacteriophage detection platform for rapid and highly sensitive identification of Mycobacterium tuberculosis, addressing a critical need in point-of-care diagnostics. By integrating magnetic enrichment with bacteriophage specificity, this system enables fast detection from complex samples with minimal instrumentation. This work is supported by the Stanford SPARK Translational Research Program and the Gates Foundation, underscoring its translational and global health impact.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Created a SERS biosensor using gold nanoparticles for multiplexed identification of drug-resistant bacterial strains.",
    detailedDescription:
      "To combat the growing challenge of antimicrobial resistance, I created a surface-enhanced Raman scattering (SERS) biosensor based on engineered gold nanoparticles for multiplexed bacterial detection. This platform enables rapid identification of drug-resistant strains with high sensitivity and molecular specificity. The approach provides a scalable and adaptable diagnostic strategy for clinical microbiology and infectious disease surveillance.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Formulated novel copper-depleting lipid nanoparticles as a targeted therapeutic strategy inducing cancer cell death by disrupting mitochondrial function.",
    detailedDescription:
      "I formulated novel lipid-based nanoparticles that selectively sequester copper within mitochondria, exploiting metal dysregulation as a therapeutic vulnerability in cancer cells. By disrupting mitochondrial function through targeted copper depletion, these nanotherapeutics induce selective cancer cell death. This work highlights a new strategy for metabolic and organelle-specific cancer therapy.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Engineered magnetic nanoclusters with 10-fold greater magnetic susceptibility, demonstrating high efficiency in magnetic separation and thermal applications.",
    detailedDescription:
      "I engineered magnetic nanoclusters with an order-of-magnitude increase in magnetic susceptibility compared to conventional nanoparticles. These enhanced magnetic properties significantly improve performance in magnetic separation, targeting, and thermal applications. The resulting materials provide a versatile platform for bioseparation, diagnostics, and magnetically driven therapeutic technologies.",
    image: researchNanoclusters,
    imageAlt: "Magnetic Nanoclusters with Enhanced Magnetic Properties",
  },
];

const ResearchSection = () => {
  const [selectedResearch, setSelectedResearch] = useState<typeof researchHighlights[0] | null>(null);

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
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedResearch(item)}
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

      <Dialog open={!!selectedResearch} onOpenChange={(open) => !open && setSelectedResearch(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedResearch && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{selectedResearch.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground font-body text-sm">
                  {selectedResearch.imageAlt}
                </DialogDescription>
              </DialogHeader>
              <img
                src={selectedResearch.image}
                alt={selectedResearch.imageAlt}
                className="w-full h-auto rounded-md my-4"
              />
              <p className="text-foreground leading-relaxed font-body">
                {selectedResearch.detailedDescription}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ResearchSection;
