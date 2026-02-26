import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Atom, Search, HeartPulse, ChevronRight } from "lucide-react";
import researchTargeting from "@/assets/research-targeting.png";
import researchNanoprobe from "@/assets/research-nanoprobe.png";
import researchTb from "@/assets/research-tb.png";
import researchAbp from "@/assets/research-abp.png";
import researchCopper from "@/assets/research-copper.png";
import researchNanoclusters from "@/assets/research-nanoclusters.png";

interface Project {
  title: string;
  impact: string;
  description: string;
  image: string;
  imageAlt: string;
  funding: string | null;
}

const pipelineStages = [
  {
    id: "materials",
    label: "Materials Design",
    icon: Atom,
    subtitle: "Engineered nanomaterials with superior magnetic properties",
    projects: [
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
        title: "Multifunctional Nanomaterial Synthesis",
        impact: "Engineering diverse inorganic and organic nanoplatforms for tailored biomedical applications",
        description:
          "Beyond magnetic systems, I synthesize and characterize a versatile library of nanoscale architectures to address distinct biomedical challenges. My expertise spans inorganic platforms—including plasmonic gold and silver nanoparticles for high-sensitivity optical sensing (SERS), and gadolinium oxide nanoparticles for enhanced MRI contrast. In parallel, I formulate biocompatible organic platforms, such as lipid and protein-based nanocarriers, to facilitate the targeted delivery of therapeutic payloads. By precisely controlling the size, morphology, and surface chemistry across these diverse formulations, I create a robust foundational toolkit that powers downstream diagnostic and theranostic technologies.",
        image: "",
        imageAlt: "Multifunctional Nanomaterial Synthesis",
        funding: null,
      },
    ],
  },
  {
    id: "diagnostics",
    label: "Diagnostic Platforms",
    icon: Search,
    subtitle: "Rapid, field-deployable pathogen & resistance detection",
    projects: [
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
    ],
  },
  {
    id: "theranostics",
    label: "Clinical Theranostics",
    icon: HeartPulse,
    subtitle: "Closed-loop imaging + therapy for precision medicine",
    projects: [
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
        title: "Copper-Depleting Nanoparticles",
        impact: "Targeting mitochondrial copper as a novel cancer therapy axis",
        description:
          "Cancer cells exhibit heightened dependence on copper-mediated mitochondrial respiration—an underexplored metabolic vulnerability. I formulated lipid-based nanoparticles that selectively sequester copper within mitochondria, disrupting the electron transport chain and inducing selective cancer cell death while sparing healthy tissue. This work establishes mitochondrial copper depletion as a novel therapeutic axis, providing a platform for metabolically targeted nanomedicine.",
        image: researchCopper,
        imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
        funding: null,
      },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="bg-card/60 rounded-xl border border-border/60 overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group flex flex-col md:flex-row">
        {project.image ? (
          <div
            className="md:w-72 flex-shrink-0 overflow-hidden cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="md:w-72 flex-shrink-0 bg-muted/40 border-r border-border/40 flex items-center justify-center">
            <div className="w-full h-48 md:h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <Atom className="w-10 h-10 opacity-40" />
              <span className="text-xs opacity-60">Image coming soon</span>
            </div>
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          {project.funding && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 w-fit mb-3">
              <Sparkles className="w-3 h-3" />
              {project.funding}
            </span>
          )}
          <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
          <p className="text-accent text-sm font-medium leading-relaxed mb-3">{project.impact}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Lightbox */}
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
                src={project.image}
                alt={project.imageAlt}
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
              />
              <p className="text-muted-foreground text-sm text-center mt-4 max-w-2xl leading-relaxed">
                {project.imageAlt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ResearchSection = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);

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

        {/* Overview quote */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-lg leading-relaxed max-w-3xl mb-16 border-l-2 border-accent pl-6"
        >
          My research program develops magnetic nanotechnologies that bridge imaging, diagnostics, and therapy—with the goal of enabling clinicians to detect disease earlier, monitor treatment in real time, and deliver precision interventions at the point of care.
        </motion.p>

        {/* Pipeline Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10"
        >
          From First Principles to Clinical Translation
        </motion.h3>

        {/* Horizontal Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-8"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-border -translate-y-1/2 z-0" />

          {pipelineStages.map((stage, i) => {
            const isActive = activeStage === stage.id;
            const Icon = stage.icon;
            return (
              <div key={stage.id} className="flex-1 relative z-10 flex flex-col items-center">
                {/* Arrow between stages (desktop) */}
                {i > 0 && (
                  <div className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full">
                    <ChevronRight className="w-5 h-5 text-accent/50" />
                  </div>
                )}
                <button
                  onClick={() => setActiveStage(isActive ? null : stage.id)}
                  className={`
                    w-full px-6 py-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                    flex flex-col items-center text-center gap-3
                    ${isActive
                      ? "border-accent bg-accent/10 shadow-lg shadow-accent/10"
                      : "border-border/60 bg-card/40 hover:border-accent/40 hover:bg-card/80"
                    }
                  `}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-accent">
                      Stage {i + 1}
                    </span>
                    <h4 className="text-base font-bold text-foreground mt-1">{stage.label}</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed max-w-[200px] mx-auto">
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </motion.div>

        {/* Expanded project details */}
        <AnimatePresence mode="wait">
          {activeStage && (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-6">
                {pipelineStages
                  .find((s) => s.id === activeStage)
                  ?.projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResearchSection;
