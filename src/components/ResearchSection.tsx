import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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
      "Current nanomedicines treat diagnosis and therapy as disconnected workflows, preventing real-time treatment adaptation. I develop magnetic nanoplatforms that unify dual-modality MRI/MPI imaging with magnetically guided drug delivery, enabling simultaneous monitoring of drug biodistribution and therapeutic response. This integrated theranostic approach enables clinicians to adapt treatment in real time, reducing off-target toxicity and improving precision oncology outcomes.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
    caption: "Magnetic nanoplatform combining imaging and targeted drug delivery for real-time cancer treatment monitoring.",
    funding: null,
  },
  {
    title: "Immunotherapy Monitoring",
    description:
      "Assessing immunotherapy efficacy currently requires invasive biopsies or delayed clinical endpoints, limiting timely intervention. I designed activatable MPI nanoprobes that respond specifically to granzyme B released by cytotoxic T cells during tumor killing, providing noninvasive, quantitative, and longitudinal readouts of immune activity. This capability enables repeated in vivo assessment of treatment response, providing a practical tool for early detection of resistance and therapeutic optimization.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
    caption: "Smart nanoprobe that lights up in response to immune cell activity, enabling noninvasive immunotherapy tracking.",
    funding: null,
  },
  {
    title: "Tuberculosis Diagnostics",
    description:
      "Existing TB diagnostics are too slow, complex, or resource-intensive for the settings where they are needed most. I developed a magneto-bacteriophage platform combining magnetic enrichment with bacteriophage specificity for sub-hour, highly sensitive pathogen detection from complex clinical samples. Supported by the Stanford SPARK Program and the Gates Foundation, this technology provides a field-deployable diagnostic platform for point-of-care use in resource-limited settings.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
    caption: "Rapid TB detection system achieving sub-hour pathogen identification from clinical samples.",
    funding: "Stanford SPARK · Gates Foundation",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    description:
      "Antimicrobial resistance demands rapid identification of resistant organisms to guide appropriate antibiotic selection before resistance spreads. I created a SERS biosensor using engineered gold nanoparticles that enables multiplexed, culture-independent detection of drug-resistant bacterial strains directly from clinical specimens. This platform addresses a critical gap in clinical microbiology by enabling rapid, informed antibiotic prescribing at the point of care.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
    caption: "Gold nanoparticle sensor simultaneously identifying multiple drug-resistant bacterial strains.",
    funding: null,
  },
  {
    title: "Copper-Depleting Nanoparticles",
    description:
      "Cancer cells exhibit heightened dependence on copper-mediated mitochondrial respiration—an underexplored metabolic vulnerability. I formulated lipid-based nanoparticles that selectively sequester copper within mitochondria, disrupting the electron transport chain and inducing selective cancer cell death while sparing healthy tissue. This work establishes mitochondrial copper depletion as a novel therapeutic axis, providing a platform for metabolically targeted nanomedicine.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
    caption: "Nanoparticles targeting mitochondrial copper to selectively eliminate cancer cells.",
    funding: null,
  },
  {
    title: "Magnetic Nanoclusters",
    description:
      "Conventional magnetic nanoparticles often lack the magnetic responsiveness needed for demanding biomedical applications. I engineered magnetic nanoclusters achieving an order-of-magnitude increase in magnetic susceptibility, providing dramatically improved performance for MRI/MPI imaging, drug delivery, and thermal therapy. These nanoclusters serve as a versatile enabling platform that underpins the diagnostic and therapeutic capabilities across my entire research program.",
    image: researchNanoclusters,
    imageAlt: "Magnetic Nanoclusters with Enhanced Magnetic Properties",
    caption: "High-susceptibility nanoclusters forming the materials foundation for imaging and therapy applications.",
    funding: null,
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="bg-background scroll-mt-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="gold-underline" />
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle font-body">
            Nanotechnology · Biomedical Imaging · Cancer Theranostics · Diagnostics
          </p>
        </motion.div>

        {/* Research Overview */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-foreground font-body text-lg leading-relaxed max-w-3xl mb-20 border-l-2 border-accent pl-5"
        >
          My research program develops magnetic nanotechnologies that bridge imaging, diagnostics, and therapy—with the goal of enabling clinicians to detect disease earlier, monitor treatment in real time, and deliver precision interventions at the point of care.
        </motion.p>

        <div className="space-y-28">
          {researchHighlights.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`rounded-2xl px-6 py-10 md:px-10 md:py-12 grid md:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  index % 2 === 0 ? "bg-background" : "bg-secondary/40"
                }`}
              >
                {/* Image */}
                <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
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
                  <p className="text-muted-foreground text-xs font-body mt-3 italic leading-relaxed px-1">
                    {item.caption}
                  </p>
                </div>

                {/* Text */}
                <div className={`${isReversed ? "md:order-1" : "md:order-2"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-0.5 bg-accent" />
                    {item.funding && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                        <Sparkles className="w-3 h-3" />
                        {item.funding}
                      </span>
                    )}
                  </div>
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
