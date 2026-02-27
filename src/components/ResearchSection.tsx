import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Atom, Search, HeartPulse, ChevronRight, ArrowRight, Filter } from "lucide-react";
import researchTargeting from "@/assets/research-targeting.png";
import researchNanoprobe from "@/assets/research-nanoprobe.png";
import researchTb from "@/assets/research-tb.png";
import researchAbp from "@/assets/research-abp.png";
import researchCopper from "@/assets/research-copper.png";
import researchNanoclusters from "@/assets/research-nanoclusters.png";
import researchNanomaterials from "@/assets/research-nanomaterials.png";

interface Project {
  title: string;
  impact: string;
  description: string;
  keyPhrase: string;
  image: string;
  imageAlt: string;
  funding: string | null;
  stage: string;
  applications: string[];
}

const stagesMeta = [
  {
    id: "materials",
    label: "Materials Design",
    icon: Atom,
    subtitle: "Foundational nanomaterials engineered for biomedical performance",
    clinicalRelevance: "High-performance materials are the prerequisite for every downstream diagnostic and therapeutic advance.",
  },
  {
    id: "diagnostics",
    label: "Diagnostic Platforms",
    icon: Search,
    subtitle: "Rapid, field-deployable detection of pathogens and resistance",
    clinicalRelevance: "Faster, more accessible diagnostics enable earlier intervention and more targeted treatment decisions.",
  },
  {
    id: "theranostics",
    label: "Clinical Theranostics",
    icon: HeartPulse,
    subtitle: "Closed-loop imaging and therapy for precision medicine",
    clinicalRelevance: "Integrating imaging with therapy allows clinicians to adapt treatment in real time, improving patient outcomes.",
  },
];

const transitions: Record<string, string> = {
  "materials→diagnostics": "These engineered materials directly enable the next stage—translating superior magnetic and optical properties into rapid, deployable diagnostic platforms.",
  "diagnostics→theranostics": "With robust detection established, the pipeline advances to its ultimate goal: integrating diagnostics and therapy into unified theranostic systems for precision patient care.",
};

const allProjects: Project[] = [
  {
    title: "Magnetic Nanoclusters",
    impact: "Order-of-magnitude susceptibility gains powering next-gen imaging and therapy",
    keyPhrase: "synergistic dipolar coupling",
    description:
      "I pioneered magnetic nanoclusters that achieve an order-of-magnitude increase in magnetic susceptibility over conventional nanoparticles. By engineering controlled self-assembly of iron oxide cores into superstructures with synergistic dipolar coupling, these clusters dramatically amplify MRI/MPI signal and therapeutic heating efficiency. This foundational platform underpins the diagnostic and therapeutic capabilities across my entire research program.",
    image: researchNanoclusters,
    imageAlt: "Magnetic Nanoclusters with Enhanced Magnetic Properties",
    funding: null,
    stage: "materials",
    applications: ["nanomaterials design"],
  },
  {
    title: "Multifunctional Nanomaterial Synthesis",
    impact: "A versatile nanoplatform toolkit for tailored biomedical applications",
    keyPhrase: "SERS-based optical sensing to targeted drug delivery",
    description:
      "I established a comprehensive nanomaterial synthesis program spanning plasmonic gold/silver nanoparticles, gadolinium oxide contrast agents, and lipid- and protein-based nanocarriers. By precisely controlling size, morphology, and surface chemistry across inorganic and organic platforms, each formulation is optimized for a specific biomedical function—from SERS-based optical sensing to targeted drug delivery. This diverse foundational toolkit directly powers the downstream diagnostic and theranostic technologies in my pipeline.",
    image: researchNanomaterials,
    imageAlt: "Multifunctional Nanomaterial Synthesis",
    funding: null,
    stage: "materials",
    applications: ["nanomaterials design"],
  },
  {
    title: "Tuberculosis Diagnostics",
    impact: "Sub-hour, field-deployable pathogen detection for resource-limited settings",
    keyPhrase: "magneto-bacteriophage assay",
    description:
      "I developed a first-in-class magneto-bacteriophage assay that detects Mycobacterium tuberculosis in under one hour from complex clinical samples. The platform combines magnetic nanoparticle enrichment with engineered bacteriophage specificity, eliminating the need for culture or centralized labs. Supported by the Stanford SPARK Program and the Gates Foundation, this technology is designed for point-of-care deployment where TB burden is highest.",
    image: researchTb,
    imageAlt: "Magnetic Nanotechnology for Point-of-Care TB Detection",
    funding: "Stanford SPARK · Gates Foundation",
    stage: "diagnostics",
    applications: ["infectious disease"],
  },
  {
    title: "Drug-Resistant Bacteria Detection",
    impact: "Multiplexed SERS biosensor for rapid antibiotic resistance profiling",
    keyPhrase: "culture-independent",
    description:
      "I created a multiplexed SERS biosensor using engineered gold nanoparticles that identifies drug-resistant bacterial strains directly from clinical specimens without culture. This culture-independent approach leverages surface-enhanced Raman scattering for simultaneous multi-target detection, delivering actionable resistance profiles within minutes. The platform addresses a critical gap in clinical microbiology, enabling rapid and informed antibiotic prescribing at the point of care.",
    image: researchAbp,
    imageAlt: "Activity-Based Chemical Probes for Bacteria Detection",
    funding: null,
    stage: "diagnostics",
    applications: ["infectious disease"],
  },
  {
    title: "Cancer Theranostics",
    impact: "Unifying imaging and therapy for real-time precision oncology",
    keyPhrase: "closing the loop between imaging and intervention",
    description:
      "I developed integrated magnetic nanoplatforms that unify dual-modality MRI/MPI imaging with magnetically guided drug delivery in a single system. This approach enables simultaneous, real-time monitoring of drug biodistribution and therapeutic response—replacing the disconnected diagnostic-then-treat paradigm. By closing the loop between imaging and intervention, this platform enables clinicians to adapt treatment dynamically, reducing off-target toxicity and advancing precision oncology.",
    image: researchTargeting,
    imageAlt: "Nanoparticle Targeting Mechanisms in Drug Delivery",
    funding: null,
    stage: "theranostics",
    applications: ["cancer", "imaging"],
  },
  {
    title: "Immunotherapy Monitoring",
    impact: "Noninvasive nanoprobes for quantitative immune response tracking",
    keyPhrase: "activatable MPI nanoprobes",
    description:
      "I designed activatable MPI nanoprobes that provide noninvasive, quantitative readouts of anti-tumor immune activity by responding to granzyme B released during T-cell-mediated tumor killing. This approach replaces invasive biopsies and delayed clinical endpoints with longitudinal, in vivo monitoring of immunotherapy efficacy. The technology enables early detection of treatment resistance and supports timely therapeutic optimization for individual patients.",
    image: researchNanoprobe,
    imageAlt: "Multimodal Nanoprobe Activation",
    funding: null,
    stage: "theranostics",
    applications: ["imaging"],
  },
  {
    title: "Copper-Depleting Nanoparticles",
    impact: "Targeting mitochondrial copper as a novel cancer therapy axis",
    keyPhrase: "mitochondrial copper depletion",
    description:
      "I formulated lipid-based nanoparticles that selectively sequester copper within cancer cell mitochondria, disrupting the electron transport chain and inducing targeted cell death. This strategy exploits a newly identified metabolic vulnerability—cancer cells' heightened dependence on copper-mediated respiration—while sparing healthy tissue. This work establishes mitochondrial copper depletion as a novel therapeutic axis and a platform for metabolically targeted nanomedicine.",
    image: researchCopper,
    imageAlt: "Mitochondrial-Specific Copper Trap Nanoparticles",
    funding: null,
    stage: "theranostics",
    applications: ["cancer"],
  },
];

const applicationAreas = [
  { id: "all", label: "All Projects" },
  { id: "nanomaterials design", label: "Nanomaterials Design" },
  { id: "cancer", label: "Cancer" },
  { id: "infectious disease", label: "Infectious Disease" },
  { id: "imaging", label: "Imaging" },
];

const stageLabels: Record<string, string> = {
  materials: "Materials Design",
  diagnostics: "Diagnostic Platforms",
  theranostics: "Clinical Theranostics",
};

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
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {project.funding && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                <Sparkles className="w-3 h-3" />
                {project.funding}
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-muted-foreground border border-border/40">
              {stageLabels[project.stage]}
            </span>
          </div>
          <h4 className="text-lg font-bold text-foreground mb-1.5">{project.title}</h4>
          <p className="text-accent text-sm font-semibold leading-snug mb-3 border-l-2 border-accent/40 pl-3">{project.impact}</p>
          <p className="text-muted-foreground text-[13px] leading-relaxed">
            {project.keyPhrase && project.description.includes(project.keyPhrase)
              ? (() => {
                  const idx = project.description.indexOf(project.keyPhrase);
                  return (
                    <>
                      {project.description.slice(0, idx)}
                      <span className="text-foreground font-semibold">{project.keyPhrase}</span>
                      {project.description.slice(idx + project.keyPhrase.length)}
                    </>
                  );
                })()
              : project.description}
          </p>
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
  const [viewMode, setViewMode] = useState<"pipeline" | "application">("pipeline");
  const [activeApp, setActiveApp] = useState("all");

  const filteredProjects =
    viewMode === "application" && activeApp !== "all"
      ? allProjects.filter((p) => p.applications.includes(activeApp))
      : viewMode === "pipeline" && activeStage
        ? allProjects.filter((p) => p.stage === activeStage)
        : null;

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

        {/* Research Program Map */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 md:gap-3 mb-10 flex-wrap"
        >
          {[
            { label: "Materials Chemistry", icon: "⬡" },
            { label: "Imaging Physics", icon: "◎" },
            { label: "Diagnostics", icon: "⬢" },
            { label: "Clinical Decisions", icon: "✦" },
          ].map((step, i, arr) => (
            <span key={step.label} className="flex items-center gap-2 md:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/15 text-xs md:text-sm font-semibold text-foreground/80">
                <span className="text-accent text-sm">{step.icon}</span>
                {step.label}
              </span>
              {i < arr.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-accent/50 flex-shrink-0" />
              )}
            </span>
          ))}
        </motion.div>

        {/* Overview quote */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-lg leading-relaxed max-w-3xl mb-12 border-l-2 border-accent pl-6"
        >
          My research program develops magnetic nanotechnologies that bridge imaging, diagnostics, and therapy—with the goal of enabling clinicians to detect disease earlier, monitor treatment in real time, and deliver precision interventions at the point of care.
        </motion.p>

        {/* ── Research Program Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h3 className="text-sm font-bold tracking-widest uppercase text-accent mb-1">
            From First Principles to Clinical Translation
          </h3>
          <p className="text-muted-foreground text-xs max-w-xl mx-auto">
            A unified pipeline from foundational materials through clinical translation—select a stage to explore the projects driving each phase.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-muted/50 border border-border/40">
            <button
              onClick={() => { setViewMode("pipeline"); setActiveApp("all"); }}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${viewMode === "pipeline" ? "bg-accent text-accent-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              By Pipeline Stage
            </button>
            <button
              onClick={() => { setViewMode("application"); setActiveStage(null); }}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${viewMode === "application" ? "bg-accent text-accent-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Filter className="w-3 h-3" />
              By Application
            </button>
          </div>
        </div>

        {/* Pipeline Stage View */}
        {viewMode === "pipeline" && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-8"
            >
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-border -translate-y-1/2 z-0" />

              {stagesMeta.map((stage, i) => {
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
                        <p className="text-muted-foreground text-xs mt-1 leading-relaxed max-w-[220px] mx-auto">
                          {stage.subtitle}
                        </p>
                        <p className="text-accent/70 text-[11px] mt-2 leading-relaxed max-w-[220px] mx-auto italic">
                          {stage.clinicalRelevance}
                        </p>
                      </div>
                    </button>

                    {/* Transition text below stage (desktop, between stages) */}
                    {i < stagesMeta.length - 1 && (
                      <div className="hidden md:block absolute -right-2 top-full mt-3 translate-x-1/2 w-[280px] z-20">
                        <p className="text-[10px] text-muted-foreground/60 text-center leading-relaxed italic">
                          {i === 0 ? transitions["materials→diagnostics"] : transitions["diagnostics→theranostics"]}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Mobile transitions */}
            <div className="md:hidden space-y-2 mb-6">
              {activeStage === null && (
                <>
                  <p className="text-[11px] text-muted-foreground/60 text-center italic px-4 leading-relaxed">
                    {transitions["materials→diagnostics"]}
                  </p>
                  <p className="text-[11px] text-muted-foreground/60 text-center italic px-4 leading-relaxed">
                    {transitions["diagnostics→theranostics"]}
                  </p>
                </>
              )}
            </div>

            {/* Desktop transition spacing */}
            <div className="hidden md:block h-12" />

            {/* Expanded project details */}
            <AnimatePresence mode="wait">
              {activeStage && filteredProjects && (
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2 space-y-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Application Area View */}
        {viewMode === "application" && (
          <>
            <div className="flex justify-center gap-2 flex-wrap mb-8">
              {applicationAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveApp(area.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    activeApp === area.id
                      ? "border-accent bg-accent text-accent-foreground shadow-sm"
                      : "border-border/40 text-muted-foreground hover:border-accent/40 hover:text-foreground"
                  }`}
                >
                  {area.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {(filteredProjects ?? allProjects).map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ResearchSection;
