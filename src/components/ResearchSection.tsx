import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, X } from "lucide-react";
import researchTargeting from "@/assets/research-targeting.png";
import researchNanoprobe from "@/assets/research-nanoprobe.png";
import researchTb from "@/assets/research-tb.png";
import researchAbp from "@/assets/research-abp.png";
import researchCopper from "@/assets/research-copper.png";
import researchNanoclusters from "@/assets/research-nanoclusters.png";

const researchHighlights = [
  {
    title: "Magnetic Nanoclusters",
    impact: "Order-of-magnitude susceptibility gains powering next-gen imaging and therapy",
    description:
      "Conventional magnetic nanoparticles often lack the magnetic responsiveness needed for demanding biomedical applications. I engineered magnetic nanoclusters achieving an order-of-magnitude increase in magnetic susceptibility, providing dramatically improved performance for MRI/MPI imaging, drug delivery, and thermal therapy. These nanoclusters serve as a versatile enabling platform that underpins the diagnostic and therapeutic capabilities across my entire research program.",
    image: researchNanoclusters,
    imageAlt: "Magnetic Nanoclusters with Enhanced Magnetic Properties",
    funding: null,
  },
  {
    title: "Cancer Theranostics",
    impact: "Unifying imaging and therapy for real-time precision oncology",
    description:
      "Current nanomedicines treat diagnosis and therapy as disconnected workflows, preventing real-time treatment adaptation. I develop magnetic nanoplatforms that unify dual-modality MRI/MPI imaging with magnetically guided drug delivery, enabling simultaneous monitoring of drug biodistribution and therapeutic response. This integrated theranostic approach enables clinicians to adapt treatment in real time, reducing off-target toxicity and improving precision oncology outcomes.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
    funding: null,
  },
  {
    title: "Immunotherapy Monitoring",
    impact: "Noninvasive nanoprobes for quantitative immune response tracking",
    description:
      "Assessing immunotherapy efficacy currently requires invasive biopsies or delayed clinical endpoints, limiting timely intervention. I designed activatable MPI nanoprobes that respond specifically to granzyme B released by cytotoxic T cells during tumor killing, providing noninvasive, quantitative, and longitudinal readouts of immune activity. This capability enables repeated in vivo assessment of treatment response, providing a practical tool for early detection of resistance and therapeutic optimization.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
    funding: null,
  },
  {
    title: "Tuberculosis Diagnostics",
    impact: "Sub-hour, field-deployable pathogen detection for resource-limited settings",
    description:
      "Existing TB diagnostics are too slow, complex, or resource-intensive for the settings where they are needed most. I developed a magneto-bacteriophage platform combining magnetic enrichment with bacteriophage specificity for sub-hour, highly sensitive pathogen detection from complex clinical samples. Supported by the Stanford SPARK Program and the Gates Foundation, this technology provides a field-deployable diagnostic platform for point-of-care use in resource-limited settings.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
    funding: "Stanford SPARK · Gates Foundation",
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    impact: "Multiplexed SERS biosensor for rapid antibiotic resistance profiling",
    description:
      "Antimicrobial resistance demands rapid identification of resistant organisms to guide appropriate antibiotic selection before resistance spreads. I created a SERS biosensor using engineered gold nanoparticles that enables multiplexed, culture-independent detection of drug-resistant bacterial strains directly from clinical specimens. This platform addresses a critical gap in clinical microbiology by enabling rapid, informed antibiotic prescribing at the point of care.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
    funding: null,
  },
  {
    title: "Copper-Depleting Nanoparticles",
    impact: "Targeting mitochondrial copper as a novel cancer therapy axis",
    description:
      "Cancer cells exhibit heightened dependence on copper-mediated mitochondrial respiration—an underexplored metabolic vulnerability. I formulated lipid-based nanoparticles that selectively sequester copper within mitochondria, disrupting the electron transport chain and inducing selective cancer cell death while sparing healthy tissue. This work establishes mitochondrial copper depletion as a novel therapeutic axis, providing a platform for metabolically targeted nanomedicine.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
    funding: null,
  },
];

const ResearchCard = ({ item, index }: { item: typeof researchHighlights[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="bg-card/80 rounded-xl border border-border/60 overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
      >
        {/* Image - clickable */}
        <div className="overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {item.funding && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 w-fit mb-3">
              <Sparkles className="w-3 h-3" />
              {item.funding}
            </span>
          )}

          <h3 className="text-xl font-bold text-foreground mb-2">
            {item.title}
          </h3>

          <p className="text-accent text-sm font-medium leading-relaxed mb-4">
            {item.impact}
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground text-sm leading-relaxed mb-4 overflow-hidden"
              >
                {item.description}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-auto inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:underline transition-colors"
          >
            {expanded ? "Show less" : "Learn more"}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-50"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="flex flex-col items-center max-w-5xl max-h-[90vh] px-4" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={item.image}
                alt={item.imageAlt}
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
              />
              <p className="text-muted-foreground text-sm text-center mt-4 max-w-2xl leading-relaxed">
                {item.imageAlt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

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
          <p className="section-subtitle">
            Nanotechnology · Biomedical Imaging · Cancer Theranostics · Diagnostics
          </p>
        </motion.div>

        {/* Research Overview */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-lg leading-relaxed max-w-3xl mb-16 border-l-2 border-accent pl-6"
        >
          My research program develops magnetic nanotechnologies that bridge imaging, diagnostics, and therapy—with the goal of enabling clinicians to detect disease earlier, monitor treatment in real time, and deliver precision interventions at the point of care.
        </motion.p>

        {/* 3-column card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchHighlights.map((item, index) => (
            <ResearchCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
