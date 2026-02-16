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
      "Current cancer nanomedicines face a critical limitation: diagnostics and therapeutics operate as disconnected workflows, preventing clinicians from adapting treatment based on real-time feedback. I develop engineered magnetic nanomaterials that unify diagnosis and therapy on a single nanoplatform, integrating dual-modality MRI/MPI imaging with magnetically guided drug delivery. This combination enables real-time monitoring of drug biodistribution, accumulation at the tumor site, and therapeutic response—capabilities that conventional nanomedicine approaches lack. By closing the loop between imaging and intervention, this theranostic strategy improves treatment precision, reduces off-target toxicity, and provides actionable feedback to guide clinical decision-making.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "A major barrier in cancer immunotherapy is the inability to assess whether treatment is working without resorting to invasive biopsies or waiting for delayed clinical endpoints. I designed smart magnetic particle imaging (MPI) probes that activate specifically in response to granzyme B, a key effector enzyme released by cytotoxic T cells during tumor killing. Unlike traditional endpoint assays or tissue biopsies, these activatable nanoprobes provide noninvasive, quantitative, and longitudinal readouts of immune cell function directly in living subjects. This capability enables repeated, real-time assessment of immunotherapy efficacy over the course of treatment—offering clinicians a practical tool to evaluate response, detect resistance early, and guide therapeutic optimization without additional procedures.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Tuberculosis remains a leading cause of infectious disease mortality worldwide, yet existing diagnostics are either too slow, too complex, or too resource-intensive for the settings where they are needed most. I developed a magneto-bacteriophage detection platform that combines magnetic enrichment with bacteriophage specificity to achieve rapid, highly sensitive pathogen identification from complex clinical samples in a sub-hour workflow. The system requires minimal instrumentation, making it field-deployable and well suited for point-of-care use in resource-limited environments. Supported by the Stanford SPARK Translational Research Program and the Gates Foundation, this work has been advanced toward clinical and translational readiness with a clear path to global health impact.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Antimicrobial resistance is a rapidly escalating public health crisis, and clinical outcomes depend on identifying resistant organisms quickly enough to guide appropriate antibiotic selection. I created a surface-enhanced Raman scattering (SERS) biosensor using engineered gold nanoparticles that enables multiplexed detection of drug-resistant bacterial strains directly from clinical specimens. By simultaneously differentiating resistant from susceptible organisms at the point of care, this platform supports rapid, informed antibiotic prescribing—reducing the window for inappropriate therapy and helping to slow the spread of resistance. The approach is scalable and adaptable, offering a practical diagnostic strategy for hospital microbiology labs, outbreak response, and public health surveillance.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Copper is an essential cofactor for mitochondrial respiration, and emerging evidence reveals that cancer cells exhibit heightened dependence on copper-mediated bioenergetics—an underexplored metabolic vulnerability. I formulated novel lipid-based nanoparticles that selectively sequester copper within mitochondria, disrupting the electron transport chain and inducing selective cancer cell death by targeting the link between metal homeostasis and tumor cell bioenergetics. This mechanism-driven nanotherapy goes beyond conventional drug delivery by exploiting an organelle-specific metabolic dependency unique to malignant cells, sparing healthy tissue. The work establishes mitochondrial copper depletion as a conceptually novel therapeutic axis and demonstrates the potential of metabolically targeted nanomedicine for clinical translation.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Conventional magnetic nanoparticles often lack the magnetic responsiveness needed for demanding biomedical applications, constraining performance across imaging, separation, and therapy. I engineered magnetic nanoclusters that achieve an order-of-magnitude increase in magnetic susceptibility compared to standard nanoparticle formulations, providing a critical materials foundation that underpins multiple projects in my research program. The enhanced magnetic properties translate directly into improved performance for MRI/MPI imaging, magnetically guided drug delivery, bioseparation, and thermal therapy—connecting this work to the broader goals of clinically translatable nanotechnology. Rather than a standalone materials study, these nanoclusters represent a versatile enabling platform that drives programmatic coherence across my diagnostic and therapeutic research.",
    image: researchNanoclusters,
    imageAlt: "Magnetic Nanoclusters with Enhanced Magnetic Properties",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="gold-underline" />
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle font-body">
            Nanotechnology · Biomedical Imaging · Cancer Theranostics · Diagnostics
          </p>
        </motion.div>

        <div className="space-y-24">
          {researchHighlights.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-xl overflow-hidden border border-border shadow-md bg-card"
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Text */}
                <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="w-10 h-0.5 bg-accent mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
