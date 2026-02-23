import { motion } from "framer-motion";
import { Lightbulb, Atom, Globe, Magnet, Zap, Bug, AlertCircle, Download, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import futureMaterials from "@/assets/future-materials.png";
import futureOncology from "@/assets/future-oncology.png";
import futureGlobalHealth from "@/assets/future-globalhealth.png";

const pillars = [
  {
    icon: <Lightbulb className="w-7 h-7 text-accent" />,
    title: "Research Philosophy",
    content:
      "I approach nanotechnology from first principles—designing materials with built-in clinical relevance. Every project begins with an unmet diagnostic or therapeutic need, then works backward to the optimal nanoscale solution. Rigor at the bench, relevance at the bedside.",
  },
  {
    icon: <Atom className="w-7 h-7 text-accent" />,
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
    icon: <Globe className="w-7 h-7 text-accent" />,
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
    image: futureMaterials,
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
    image: futureOncology,
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
    image: futureGlobalHealth,
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

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`${className}`}>{children}</div>
);

const ResearchVisionDialog = ({ open, onOpenChange }: ResearchVisionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 gap-0 overflow-hidden border-accent/20 bg-background flex flex-col">
        <DialogTitle className="sr-only">Research Vision</DialogTitle>
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 md:px-12 py-10 md:py-14 space-y-16">
            {/* Thesis Statement */}
            <Section>
              <div className="gold-underline" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-3 leading-snug">
                Research Vision
              </h2>
              <p className="text-foreground text-lg md:text-xl font-display font-bold leading-relaxed mt-5">
                I develop magnetic nanotechnologies that enable real-time, non-invasive imaging and diagnostics to transform cancer and infectious disease care.
              </p>
              <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed mt-3">
                My research integrates materials chemistry, biomedical imaging, and translational medicine to build reusable platforms that move from the bench to the bedside.
              </p>
            </Section>

            {/* Three Pillars */}
            <Section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                        {pillar.icon}
                      </div>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    {pillar.content ? (
                      <p className="text-muted-foreground text-sm leading-relaxed font-body">
                        {pillar.content}
                      </p>
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
            </Section>

            {/* Why This Matters Now */}
            <Section>
              <div className="rounded-lg border border-accent/20 bg-accent/5 p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <AlertCircle className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-display text-base font-bold text-foreground">
                    Why This Matters Now
                  </h3>
                </div>
                <p className="text-foreground font-body text-sm font-semibold leading-relaxed mb-2">
                  The gap between treatment innovation and diagnostic capability is widening—and patients are paying the price.
                </p>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  Cancer immunotherapy has transformed oncology, yet clinicians lack real-time tools to distinguish responders from non-responders—delaying interventions and causing unnecessary toxicity. Meanwhile, antimicrobial resistance outpaces diagnostic infrastructure worldwide, with WHO-priority pathogens spreading fastest where labs are weakest. Magnetic nanotechnology is uniquely positioned to close both gaps: no ionizing radiation, scalable to portable formats, and engineerable for molecular specificity at the point of care.
                </p>
              </div>
            </Section>

            {/* Future Directions */}
            <Section>
              <div className="mb-8">
                <div className="gold-underline" />
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-3">
                  Future Directions
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mt-2">
                  Building on these platforms, my future research pursues three parallel, mutually reinforcing directions—each combining fundamental innovation with a clear translational pathway.
                </p>
              </div>

              {/* Parallel cue */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-body font-medium text-accent">Three parallel thrusts — interconnected by shared platforms</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent rotate-180" />
                </div>
              </div>

              <div className="space-y-6">
                {futureDirections.map((dir) => (
                  <div
                    key={dir.title}
                    className="rounded-lg border border-border bg-card p-5 md:p-7 hover:border-accent/30 transition-colors"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-md bg-accent/10">
                        {dir.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-body font-semibold text-accent uppercase tracking-widest">
                          {dir.heading}
                        </span>
                        <h4 className="font-display text-base font-bold text-foreground leading-tight">
                          {dir.title}
                        </h4>
                      </div>
                    </div>

                    {/* Vision */}
                    <p className="text-foreground/80 text-sm font-body italic leading-relaxed mb-4">
                      {dir.vision}
                    </p>

                    {/* Figure */}
                    <div className="w-full rounded-md overflow-hidden mb-5 bg-foreground/5">
                      <img
                        src={dir.image}
                        alt={dir.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Bullets */}
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
                ))}
              </div>
            </Section>

            {/* Concluding Statement */}
            <Section className="text-center pb-4">
              <div className="gold-underline mx-auto mb-4" />
              <p className="text-foreground text-sm md:text-base font-display font-semibold leading-relaxed max-w-2xl mx-auto">
                My long-term goal is to replace invasive, delayed diagnostic workflows with real-time, magnetic nanotechnology-driven platforms—accessible wherever patients need them. This work will establish an independent research program at the intersection of nanomaterials, imaging science, and global health.
              </p>
            </Section>

            {/* PDF Download */}
            <div className="flex justify-center pb-4">
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
