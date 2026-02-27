import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Atom, Globe, Magnet, Zap, Bug, AlertCircle, Download, ArrowRight, X, Clock, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import futureMaterialsFig from "@/assets/future-materials-fig.png";
import futureOncologyFig from "@/assets/future-oncology-fig.png";
import futureGlobalHealthFig from "@/assets/future-globalhealth-fig.png";
const RESEARCH_IDENTITY = "Closed-Loop Magnetic Theranostics";

const sectionIds = ["vision", "platforms", "why-now", "future-directions", "closing"] as const;
type SectionId = (typeof sectionIds)[number];

const sectionLabels: Record<SectionId, string> = {
  vision: "Vision",
  platforms: "Platforms",
  "why-now": "Why Now",
  "future-directions": "Future Directions",
  closing: "Closing",
};

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6 text-accent" />,
    title: "Research Philosophy",
    content:
      "I approach nanotechnology from first principles—designing materials with built-in clinical relevance. Every project begins with an unmet diagnostic or therapeutic need, then works backward to the optimal nanoscale solution. Rigor at the bench, relevance at the bedside.",
  },
  {
    icon: <Atom className="w-6 h-6 text-accent" />,
    title: "Core Methods & Platforms",
    items: [
      {
        heading: "Magnetic Nanomaterials",
        text: "Reusable nanoparticle architectures engineered for multimodal imaging (MRI, MPI, SERS) and magnetically guided delivery.",
      },
      {
        heading: "Activatable Imaging Probes",
        text: "Stimulus-responsive platforms that switch signal in response to disease biomarkers, enabling closed-loop theranostics.",
      },
      {
        heading: "Translational Diagnostics",
        text: "Portable, field-deployable detection systems designed for rapid pathogen identification at the point of care.",
      },
    ],
  },
  {
    icon: <Globe className="w-6 h-6 text-accent" />,
    title: "Translational Focus",
    content:
      "Every platform targets a concrete clinical outcome: enabling oncologists to adapt immunotherapy in real time, equipping frontline health workers with rapid pathogen detection, and reducing reliance on invasive biopsies. My TB diagnostic—advanced through Stanford SPARK and the Gates Foundation—exemplifies this bench-to-field pipeline.",
  },
];

const futureDirections = [
  {
    icon: <Magnet className="w-6 h-6 text-accent" />,
    heading: "Materials Innovation",
    title: "Ultra-Low-Field Magnetic Nanomaterials",
    image: futureMaterialsFig,
    background:
      "Magnetic nanotechnology is uniquely positioned to bridge diagnostic gaps: no ionizing radiation, scalable to portable formats, and engineerable for molecular specificity at the point of care.",
    vision:
      "Nanoparticles with extraordinary field sensitivity for cellular-level manipulation under safe, ambient field strengths.",
    innovation:
      "Atomic-scale tuning of magnetic anisotropy to maximize susceptibility without superconducting magnets.",
    approach:
      "Systematic surface chemistry and crystal-phase engineering validated across MRI, MPI, and magnetometry readouts.",
    impact:
      "Clinicians gain precision diagnostics and minimally invasive therapy in any setting—including resource-limited environments.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    heading: "Precision Oncology",
    title: "Activatable MPI/MRI Nanoprobes",
    image: futureOncologyFig,
    background:
      "Cancer immunotherapy has transformed oncology, yet clinicians lack real-time tools to distinguish responders from non-responders—delaying interventions and causing unnecessary toxicity.",
    vision:
      "Nanoprobes whose magnetic signal switches in direct response to immune biomarkers—cytokines, ROS, tumor pH.",
    innovation:
      "Zero-background MPI sensitivity paired with anatomical MRI co-registration for quantitative immunotherapy readout.",
    approach:
      "Biomarker-triggered assembly/disassembly architectures validated in syngeneic tumor models with longitudinal imaging.",
    impact:
      "Oncologists see immunotherapy response in real time—enabling adaptive dosing and eliminating unnecessary biopsies.",
  },
  {
    icon: <Bug className="w-6 h-6 text-accent" />,
    heading: "Global Health",
    title: "Magneto-Bacteriophage Diagnostics",
    image: futureGlobalHealthFig,
    background:
      "Antimicrobial resistance outpaces diagnostic infrastructure worldwide, with WHO-priority pathogens spreading fastest where labs are weakest.",
    vision:
      "Phage-nanoparticle conjugates that capture and concentrate viable pathogens from clinical samples within minutes.",
    innovation:
      "Engineered bacteriophage specificity coupled with portable magnetic readout for culture-free detection.",
    approach:
      "Multiplexed phage libraries targeting WHO-priority resistant organisms, validated in field-simulated conditions.",
    impact:
      "Health workers detect antimicrobial-resistant infections on-site—where conventional culture and PCR are unavailable.",
  },
];

interface ResearchVisionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// 60-Second Overview Component
const QuickOverview = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="space-y-10"
  >
    {/* Summary */}
    <div>
      <p className="text-foreground text-base md:text-lg font-body leading-relaxed">
        My lab will pioneer <span className="text-accent font-semibold">{RESEARCH_IDENTITY}</span>—engineering magnetic nanomaterials
        that sense disease biomarkers and adapt diagnostic or therapeutic output in real time. By uniting materials chemistry,
        activatable imaging, and field-deployable diagnostics, we aim to replace invasive, delayed workflows with
        instant, non-invasive magnetic readouts accessible from research hospitals to remote clinics.
      </p>
    </div>

    {/* Three Platform Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {pillars.map((p) => (
        <div key={p.title} className="flex flex-col items-center text-center p-5 rounded-lg border border-border bg-card/50">
          <div className="p-3 rounded-xl bg-accent/10 mb-3">{p.icon}</div>
          <span className="text-foreground font-semibold text-sm font-body">{p.title}</span>
          <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed font-body">
            {p.content
              ? p.content.split(".")[0] + "."
              : p.items
                ? p.items.map((i) => i.heading).join(" · ")
                : ""}
          </p>
        </div>
      ))}
    </div>

    {/* Future Directions - Titles only */}
    <div>
      <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Future Directions</h4>
      <div className="space-y-3">
        {futureDirections.map((dir) => (
          <div key={dir.title} className="flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-card/30">
            <div className="p-2 rounded-md bg-accent/10 shrink-0">{dir.icon}</div>
            <div>
              <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">{dir.heading}</span>
              <p className="text-foreground text-sm font-semibold font-body">{dir.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Full Deep Dive Component
const DeepDive = ({ activeSection, sectionRefs }: { activeSection: SectionId; sectionRefs: React.MutableRefObject<Record<SectionId, HTMLDivElement | null>> }) => {
  const [expandedDir, setExpandedDir] = useState<string>(futureDirections[0].title);

  return (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="space-y-20"
  >
    {/* Vision Section */}
    <div ref={(el) => { sectionRefs.current.vision = el; }} data-section="vision">
      <div className="rounded-lg border border-accent/25 bg-accent/5 px-5 py-4 mb-6">
        <p className="text-accent font-bold text-sm md:text-base tracking-wide leading-snug">
          Closed-loop magnetic theranostics for real-time clinical decision-making
        </p>
      </div>
      <p className="text-foreground text-lg md:text-xl font-display font-bold leading-relaxed">
        I develop magnetic nanotechnologies that enable real-time, non-invasive imaging and diagnostics to transform cancer and infectious disease care.
      </p>
      <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed mt-3">
        My research integrates materials chemistry, biomedical imaging, and translational medicine to build reusable platforms that move from the bench to the bedside.
      </p>
    </div>

    {/* Platforms Section */}
    <div ref={(el) => { sectionRefs.current.platforms = el; }} data-section="platforms">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-0.5 bg-accent" />
        <h3 className="text-[11px] font-bold text-accent uppercase tracking-[0.2em]">Core Platforms</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-accent/10 shrink-0">{pillar.icon}</div>
              <h3 className="font-display text-base font-bold text-foreground">{pillar.title}</h3>
            </div>
            {pillar.content ? (
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{pillar.content}</p>
            ) : (
              <div className="space-y-3">
                {pillar.items?.map((item) => (
                  <div key={item.heading} className="border-l-2 border-accent/30 pl-3">
                    <span className="text-sm font-bold text-foreground">{item.heading}</span>
                    <p className="text-muted-foreground text-xs leading-relaxed font-body mt-0.5">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Why Now Section */}
    <div ref={(el) => { sectionRefs.current["why-now"] = el; }} data-section="why-now">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-0.5 bg-accent" />
        <h3 className="text-[11px] font-bold text-accent uppercase tracking-[0.2em]">Why This Matters Now</h3>
      </div>
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-6 md:p-8">
        <div className="flex items-center gap-2.5 mb-3">
          <AlertCircle className="w-5 h-5 text-accent shrink-0" />
          <h3 className="font-display text-base font-bold text-foreground">The Diagnostic Gap</h3>
        </div>
        <p className="text-foreground font-body text-sm font-semibold leading-relaxed">
          The gap between treatment innovation and diagnostic capability is widening—and patients are paying the price.
        </p>
      </div>
    </div>

    {/* Future Directions Section */}
    <div ref={(el) => { sectionRefs.current["future-directions"] = el; }} data-section="future-directions">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-0.5 bg-accent" />
        <h3 className="text-[11px] font-bold text-accent uppercase tracking-[0.2em]">Future Directions</h3>
      </div>
      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
        Building on these platforms, my future research pursues three parallel, mutually reinforcing directions—each combining fundamental innovation with a clear translational pathway.
      </p>

      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
          <ArrowRight className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-body font-medium text-accent">Three parallel thrusts — interconnected by shared platforms</span>
          <ArrowRight className="w-3.5 h-3.5 text-accent rotate-180" />
        </div>
      </div>

      <div className="space-y-4">
        {futureDirections.map((dir) => {
          const isExpanded = expandedDir === dir.title;
          return (
            <div
              key={dir.title}
              className={`rounded-lg border bg-card transition-colors duration-300 ${isExpanded ? 'border-accent/40' : 'border-border hover:border-accent/20'}`}
            >
              {/* Clickable Header */}
              <button
                onClick={() => setExpandedDir(isExpanded ? '' : dir.title)}
                className="w-full flex items-center gap-3 p-5 md:p-7 text-left cursor-pointer"
              >
                <div className={`p-2 rounded-md transition-colors duration-300 ${isExpanded ? 'bg-accent/20' : 'bg-accent/10'}`}>{dir.icon}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-body font-semibold text-accent uppercase tracking-widest">{dir.heading}</span>
                  <h4 className="font-display text-base font-bold text-foreground leading-tight">{dir.title}</h4>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </button>

              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.25, delay: 0.1 } }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-7 pb-5 md:pb-7 pt-0 space-y-4">
                      <p className="text-muted-foreground text-sm font-body leading-relaxed">{dir.background}</p>
                      <p className="text-foreground/80 text-sm font-body italic leading-relaxed">{dir.vision}</p>
                      {(dir as any).image && (
                        <div className="w-full rounded-md overflow-hidden bg-foreground/5">
                          <img src={(dir as any).image} alt={dir.title} className="w-full h-auto object-contain" loading="lazy" />
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Innovation</span>
                          <p className="text-muted-foreground text-xs leading-relaxed font-body mt-1">{dir.innovation}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Approach</span>
                          <p className="text-muted-foreground text-xs leading-relaxed font-body mt-1">{dir.approach}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Impact</span>
                          <p className="text-muted-foreground text-xs leading-relaxed font-body mt-1">{dir.impact}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>

    {/* Closing Statement */}
    <div ref={(el) => { sectionRefs.current.closing = el; }} data-section="closing" className="text-center pb-4">
      <div className="w-16 h-0.5 bg-accent mx-auto mb-4" />
      <p className="text-foreground text-sm md:text-base font-display font-semibold leading-relaxed max-w-2xl mx-auto">
        My long-term goal is to replace invasive, delayed diagnostic workflows with real-time, magnetic nanotechnology-driven platforms—accessible wherever patients need them. This work will establish an independent research program at the intersection of nanomaterials, imaging science, and global health.
      </p>
    </div>
  </motion.div>
  );
};

const ResearchVisionDialog = ({ open, onOpenChange }: ResearchVisionDialogProps) => {
  const [mode, setMode] = useState<"overview" | "deep-dive">("deep-dive");
  const [activeSection, setActiveSection] = useState<SectionId>("vision");
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<SectionId, HTMLDivElement | null>>({
    vision: null,
    platforms: null,
    "why-now": null,
    "future-directions": null,
    closing: null,
  });

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Progress
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

    // Active section detection
    const containerRect = container.getBoundingClientRect();
    const triggerPoint = containerRect.top + containerRect.height * 0.3;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = sectionRefs.current[sectionIds[i]];
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
    }
    setActiveSection("vision");
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || mode !== "deep-dive") return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll, mode, open]);

  // Reset state when dialog opens
  useEffect(() => {
    if (open) {
      setMode("deep-dive");
      setActiveSection("vision");
      setScrollProgress(0);
    }
  }, [open]);

  const scrollToSection = (id: SectionId) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 gap-0 overflow-hidden border-accent/20 bg-background flex flex-col [&>button:last-child]:hidden">
        <DialogTitle className="sr-only">Research Vision</DialogTitle>

        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
          {/* Progress bar */}
          {mode === "deep-dive" && (
            <div className="h-0.5 bg-border/30">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          )}

          <div className="px-6 md:px-12 py-4 flex flex-col gap-3">
            {/* Title row */}
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-8 h-0.5 bg-accent" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{RESEARCH_IDENTITY}</span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  Research Vision
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm font-body mt-0.5">
                  What my lab will build over the next 5–10 years.
                </p>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="p-2 rounded-full bg-card/80 border border-border hover:border-accent hover:text-accent text-muted-foreground transition-colors shrink-0 mt-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode toggle + section nav row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Mode toggle */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-card/80 border border-border/60 w-fit">
                <button
                  onClick={() => setMode("overview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    mode === "overview"
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  60-Second Overview
                </button>
                <button
                  onClick={() => setMode("deep-dive")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    mode === "deep-dive"
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Deep Dive
                </button>
              </div>

              {/* Section nav (deep-dive only) */}
              {mode === "deep-dive" && (
                <nav className="flex items-center gap-1 overflow-x-auto">
                  {sectionIds.map((id) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${
                        activeSection === id
                          ? "bg-accent/15 text-accent border border-accent/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-card/60"
                      }`}
                    >
                      {sectionLabels[id]}
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
          <div className="px-6 md:px-12 py-10 md:py-14">
            <AnimatePresence mode="wait">
              {mode === "overview" ? (
                <QuickOverview key="overview" />
              ) : (
                <DeepDive key="deep-dive" activeSection={activeSection} sectionRefs={sectionRefs} />
              )}
            </AnimatePresence>

            {/* PDF Download - always visible */}
            <div className="flex justify-center pt-10 pb-4">
              <a
                href="/research-vision.pdf"
                download="Research_Vision_Zhen_Xiao.pdf"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent/30 text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-all hover:bg-accent/5"
              >
                <Download className="w-4 h-4" />
                Download Research Vision (PDF)
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResearchVisionDialog;
