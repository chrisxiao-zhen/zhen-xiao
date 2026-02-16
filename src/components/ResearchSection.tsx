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
      "Current cancer nanomedicines face a critical limitation: diagnostics and therapeutics operate as disconnected workflows, preventing clinicians from adapting treatment based on real-time feedback. I develop engineered magnetic nanomaterials that unify diagnosis and therapy on a single nanoplatform, integrating dual-modality MRI/MPI imaging with magnetically guided drug delivery. This combination enables real-time monitoring of drug biodistribution, accumulation at the tumor site, and therapeutic response—capabilities that conventional nanomedicine approaches lack. By closing the loop between imaging and intervention, this theranostic strategy improves treatment precision, reduces off-target toxicity, and provides actionable feedback to guide clinical decision-making.",
    detailedDescription:
      "I develop engineered magnetic nanomaterials that integrate diagnosis and therapy into a single platform for cancer theranostics. By combining magnetic resonance imaging (MRI) and magnetic particle imaging (MPI) with magnetically guided drug delivery, this work enables precise tumor localization, real-time treatment monitoring, and targeted therapeutic intervention. Dual-modality imaging with magnetic targeting closes the loop between drug delivery and therapeutic response, addressing a key limitation of conventional nanomedicine. These multifunctional systems aim to improve treatment efficacy while minimizing off-target toxicity through externally controlled magnetic targeting.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "A major barrier in cancer immunotherapy is the inability to assess whether treatment is working without resorting to invasive biopsies or waiting for delayed clinical endpoints. I designed smart magnetic particle imaging (MPI) probes that activate specifically in response to granzyme B, a key effector enzyme released by cytotoxic T cells during tumor killing. Unlike traditional endpoint assays or tissue biopsies, these activatable nanoprobes provide noninvasive, quantitative, and longitudinal readouts of immune cell function directly in living subjects. This capability enables repeated, real-time assessment of immunotherapy efficacy over the course of treatment—offering clinicians a practical tool to evaluate response, detect resistance early, and guide therapeutic optimization without additional procedures.",
    detailedDescription:
      "To address the need for real-time assessment of cancer immunotherapy, I designed smart magnetic particle imaging (MPI) probes that report granzyme B activity in vivo. Unlike conventional biopsies or endpoint assays, these activatable nanoprobes provide noninvasive, quantitative, and longitudinal metrics of cytotoxic T-cell function, enabling direct monitoring of immunotherapy response at the molecular level. This approach offers a powerful tool for evaluating treatment efficacy and guiding therapeutic optimization without invasive procedures.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Tuberculosis remains a leading cause of infectious disease mortality worldwide, yet existing diagnostics are either too slow, too complex, or too resource-intensive for the settings where they are needed most. I developed a magneto-bacteriophage detection platform that combines magnetic enrichment with bacteriophage specificity to achieve rapid, highly sensitive pathogen identification from complex clinical samples in a sub-hour workflow. The system requires minimal instrumentation, making it field-deployable and well suited for point-of-care use in resource-limited environments. Supported by the Stanford SPARK Translational Research Program and the Gates Foundation, this work has been advanced toward clinical and translational readiness with a clear path to global health impact.",
    detailedDescription:
      "I developed a magneto-bacteriophage detection platform for rapid and highly sensitive identification of Mycobacterium tuberculosis, addressing a critical need in point-of-care diagnostics. By integrating magnetic enrichment with bacteriophage specificity, this system enables fast, field-deployable detection from complex samples with minimal instrumentation and a sub-hour workflow. Supported by the Stanford SPARK Translational Research Program and the Gates Foundation, this work is positioned for clinical translation and global health impact.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Antimicrobial resistance is a rapidly escalating public health crisis, and clinical outcomes depend on identifying resistant organisms quickly enough to guide appropriate antibiotic selection. I created a surface-enhanced Raman scattering (SERS) biosensor using engineered gold nanoparticles that enables multiplexed detection of drug-resistant bacterial strains directly from clinical specimens. By simultaneously differentiating resistant from susceptible organisms at the point of care, this platform supports rapid, informed antibiotic prescribing—reducing the window for inappropriate therapy and helping to slow the spread of resistance. The approach is scalable and adaptable, offering a practical diagnostic strategy for hospital microbiology labs, outbreak response, and public health surveillance.",
    detailedDescription:
      "To combat the growing challenge of antimicrobial resistance, I created a surface-enhanced Raman scattering (SERS) biosensor based on engineered gold nanoparticles for multiplexed bacterial detection. This platform enables rapid differentiation of drug-resistant from susceptible strains with high sensitivity and molecular specificity, supporting timely antibiotic selection at the point of care. The approach provides a scalable and adaptable diagnostic strategy for clinical microbiology, outbreak response, and infectious disease surveillance.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Copper is an essential cofactor for mitochondrial respiration, and emerging evidence reveals that cancer cells exhibit heightened dependence on copper-mediated bioenergetics—an underexplored metabolic vulnerability. I formulated novel lipid-based nanoparticles that selectively sequester copper within mitochondria, disrupting the electron transport chain and inducing selective cancer cell death by targeting the link between metal homeostasis and tumor cell bioenergetics. This mechanism-driven nanotherapy goes beyond conventional drug delivery by exploiting an organelle-specific metabolic dependency unique to malignant cells, sparing healthy tissue. The work establishes mitochondrial copper depletion as a conceptually novel therapeutic axis and demonstrates the potential of metabolically targeted nanomedicine for clinical translation.",
    detailedDescription:
      "I formulated novel lipid-based nanoparticles that selectively sequester copper within mitochondria, exploiting the link between metal homeostasis and cancer cell bioenergetics as a therapeutic vulnerability. By disrupting mitochondrial function through targeted copper depletion, these nanotherapeutics induce selective cancer cell death via a mechanism-driven approach distinct from conventional drug delivery. This work establishes mitochondrial copper depletion as a conceptually novel axis for metabolic and organelle-specific cancer therapy.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Conventional magnetic nanoparticles often lack the magnetic responsiveness needed for demanding biomedical applications, constraining performance across imaging, separation, and therapy. I engineered magnetic nanoclusters that achieve an order-of-magnitude increase in magnetic susceptibility compared to standard nanoparticle formulations, providing a critical materials foundation that underpins multiple projects in my research program. The enhanced magnetic properties translate directly into improved performance for MRI/MPI imaging, magnetically guided drug delivery, bioseparation, and thermal therapy—connecting this work to the broader goals of clinically translatable nanotechnology. Rather than a standalone materials study, these nanoclusters represent a versatile enabling platform that drives programmatic coherence across my diagnostic and therapeutic research.",
    detailedDescription:
      "I engineered magnetic nanoclusters with an order-of-magnitude increase in magnetic susceptibility compared to conventional nanoparticles, providing a materials foundation for multiple research directions. These enhanced magnetic properties significantly improve performance in MRI/MPI imaging, magnetically guided drug delivery, bioseparation, and thermal therapy applications. Rather than a standalone materials study, this platform underpins programmatic coherence across my diagnostic and therapeutic research in clinically translatable nanotechnology.",
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
