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
      "Current cancer diagnostics and therapeutics typically operate as separate workflows, limiting the ability to adapt treatment in real time. To address this, I develop engineered magnetic nanomaterials that unify diagnosis and therapy on a single nanoplatform. By integrating dual-modality imaging—magnetic resonance imaging (MRI) and magnetic particle imaging (MPI)—with magnetically guided drug delivery, these systems enable precise tumor localization, real-time treatment monitoring, and targeted intervention. This theranostic approach improves treatment efficacy and reduces off-target toxicity compared to conventional, untargeted strategies.",
    detailedDescription:
      "I develop engineered magnetic nanomaterials that integrate diagnosis and therapy into a single platform for cancer theranostics. By combining magnetic resonance imaging (MRI) and magnetic particle imaging (MPI) with magnetically guided drug delivery, this work enables precise tumor localization, real-time treatment monitoring, and targeted therapeutic intervention. These multifunctional systems aim to improve treatment efficacy while minimizing off-target toxicity through externally controlled magnetic targeting.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "A major barrier in cancer immunotherapy is the lack of noninvasive tools to assess therapeutic response in real time. I designed smart magnetic particle imaging (MPI) probes that activate in response to granzyme B, a key effector enzyme of cytotoxic T cells. These activatable nanoprobes provide quantitative, in vivo readouts of immune cell function at the molecular level. This capability enables clinicians to evaluate immunotherapy efficacy directly and guide therapeutic optimization without invasive biopsies.",
    detailedDescription:
      "To address the need for real-time assessment of cancer immunotherapy, I designed smart magnetic particle imaging (MPI) probes that report granzyme B activity in vivo. These activatable nanoprobes provide quantitative, noninvasive metrics of cytotoxic T-cell function, enabling direct monitoring of immunotherapy response at the molecular level. This approach offers a powerful tool for evaluating treatment efficacy and guiding therapeutic optimization.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Tuberculosis remains a leading cause of infectious disease mortality, yet rapid point-of-care diagnostics for Mycobacterium tuberculosis are still limited in resource-constrained settings. I developed a magneto-bacteriophage detection platform that combines magnetic enrichment with bacteriophage specificity to achieve rapid, highly sensitive pathogen identification from complex clinical samples. This system requires minimal instrumentation, making it well suited for field deployment. Supported by the Stanford SPARK Translational Research Program and the Gates Foundation, this work underscores its translational and global health impact.",
    detailedDescription:
      "I developed a magneto-bacteriophage detection platform for rapid and highly sensitive identification of Mycobacterium tuberculosis, addressing a critical need in point-of-care diagnostics. By integrating magnetic enrichment with bacteriophage specificity, this system enables fast detection from complex samples with minimal instrumentation. This work is supported by the Stanford SPARK Translational Research Program and the Gates Foundation, underscoring its translational and global health impact.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Antimicrobial resistance is a rapidly growing global health threat, yet current diagnostic methods are often too slow or insufficiently specific to guide timely treatment. I created a surface-enhanced Raman scattering (SERS) biosensor based on engineered gold nanoparticles for multiplexed detection of drug-resistant bacterial strains. This platform delivers rapid identification with high sensitivity and molecular specificity, enabling clinicians to distinguish resistant from susceptible organisms at the point of care. The approach provides a scalable and adaptable diagnostic strategy for clinical microbiology and infectious disease surveillance.",
    detailedDescription:
      "To combat the growing challenge of antimicrobial resistance, I created a surface-enhanced Raman scattering (SERS) biosensor based on engineered gold nanoparticles for multiplexed bacterial detection. This platform enables rapid identification of drug-resistant strains with high sensitivity and molecular specificity. The approach provides a scalable and adaptable diagnostic strategy for clinical microbiology and infectious disease surveillance.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Dysregulated copper metabolism is increasingly recognized as a vulnerability in cancer cells, yet few therapeutic strategies exploit this pathway with organelle-level precision. I formulated novel lipid-based nanoparticles that selectively sequester copper within mitochondria, disrupting mitochondrial function and inducing selective cancer cell death. This targeted approach spares healthy tissue by exploiting a metabolic dependency unique to tumor cells. The work highlights a new class of metabolic and organelle-specific nanotherapeutics with potential for clinical translation.",
    detailedDescription:
      "I formulated novel lipid-based nanoparticles that selectively sequester copper within mitochondria, exploiting metal dysregulation as a therapeutic vulnerability in cancer cells. By disrupting mitochondrial function through targeted copper depletion, these nanotherapeutics induce selective cancer cell death. This work highlights a new strategy for metabolic and organelle-specific cancer therapy.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Conventional magnetic nanoparticles often suffer from limited magnetic responsiveness, constraining their utility in separation, targeting, and hyperthermia applications. I engineered magnetic nanoclusters that achieve an order-of-magnitude increase in magnetic susceptibility compared to standard nanoparticle formulations. These enhanced properties translate into significantly improved performance across magnetic separation, targeted delivery, and thermal therapy modalities. The resulting platform offers a versatile foundation for next-generation bioseparation, diagnostics, and magnetically driven therapeutic technologies.",
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
