import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb, Atom, Globe, Magnet, Zap, Bug, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import futureMaterials from "@/assets/future-materials.png";
import futureOncology from "@/assets/future-oncology.png";
import futureGlobalHealth from "@/assets/future-globalhealth.png";

const pillars = [
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Research Philosophy",
    content:
      "Transformative clinical impact starts with fundamental materials innovation. I design magnetic nanomaterials from first principles and advance them through rigorous preclinical validation toward real-world deployment—bridging the gap between laboratory discovery and patient benefit.",
  },
  {
    icon: <Atom className="w-8 h-8 text-accent" />,
    title: "Core Methods & Platforms",
    items: [
      {
        heading: "Magnetic Nanomaterials",
        text: "High-susceptibility nanoclusters engineered for multimodal imaging (MRI, MPI, SERS) and magnetically guided delivery.",
      },
      {
        heading: "Activatable Imaging Probes",
        text: "Stimulus-responsive nanoarchitectures that combine diagnostic and therapeutic functions in closed-loop theranostic workflows.",
      },
      {
        heading: "Translational Diagnostics",
        text: "Portable, field-deployable platforms designed for rapid pathogen detection and point-of-care clinical decision-making.",
      },
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Translational Focus",
    content:
      "Every platform is designed with a clear clinical endpoint: enabling adaptive, real-time treatment decisions in oncology; accelerating point-of-care diagnostics in resource-limited settings; and reducing reliance on invasive biopsies and slow culture-based workflows. My TB diagnostic platform—supported by the Stanford SPARK Program and the Gates Foundation—demonstrates this commitment, advancing from bench-scale proof-of-concept to a field-deployable system.",
  },
];

const futureDirections = [
  {
    icon: <Magnet className="w-7 h-7 text-accent" />,
    heading: "Materials Innovation",
    title: "Ultra-Low-Field Magnetic Nanomaterials",
    image: futureMaterials,
    vision:
      "Engineer nanoparticles with extraordinary field sensitivity for cellular-level manipulation under clinically safe, ambient field strengths.",
    approach:
      "Tune magnetic anisotropy and surface chemistry at the atomic scale to maximize susceptibility—eliminating the need for expensive superconducting magnets.",
    impact:
      "Expand access to precision diagnostics and minimally invasive therapy in any clinical setting, including resource-limited environments.",
  },
  {
    icon: <Zap className="w-7 h-7 text-accent" />,
    heading: "Precision Oncology",
    title: "Activatable MPI/MRI Nanoprobes",
    image: futureOncology,
    vision:
      "Create nanoprobes whose magnetic properties switch in direct response to immunological biomarkers—cytokines, ROS, and tumor pH.",
    approach:
      "Leverage the zero-background sensitivity of MPI with anatomical MRI co-registration for quantitative, non-invasive immunotherapy readout.",
    impact:
      "Provide the first real-time imaging window into cancer immunotherapy response, enabling adaptive treatment and reducing invasive biopsies.",
  },
  {
    icon: <Bug className="w-7 h-7 text-accent" />,
    heading: "Global Health",
    title: "Magneto-Bacteriophage Diagnostics",
    image: futureGlobalHealth,
    vision:
      "Develop phage-nanoparticle conjugates that selectively capture and concentrate viable pathogens from clinical samples within minutes.",
    approach:
      "Combine the host specificity of engineered bacteriophages with portable magnetic readout for rapid, field-deployable detection.",
    impact:
      "Target antimicrobial-resistant organisms where conventional culture and PCR are unavailable—directly addressing a critical WHO-identified gap.",
  },
];

const ResearchVision = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors font-body text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="gold-underline" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight font-display mb-4">
              Research Vision
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-24">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug tracking-tight">
            Translating magnetic nanotechnology into next-generation imaging, diagnostics, and therapy—from atomic-scale design to{" "}
            <span className="text-accent">clinical impact.</span>
          </p>
          <p className="text-muted-foreground text-base md:text-lg font-body mt-4 leading-relaxed max-w-3xl mx-auto">
            My research integrates materials chemistry, biomedical imaging, and translational medicine to build platforms that move from the bench to the bedside.
          </p>
        </motion.div>

        {/* Three-Column Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-xl bg-accent/10 mb-5">
                {pillar.icon}
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                {pillar.title}
              </h2>
              {pillar.content ? (
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {pillar.content}
                </p>
              ) : (
                <div className="space-y-3 text-left w-full">
                  {pillar.items?.map((item) => (
                    <div key={item.heading}>
                      <span className="text-sm font-semibold text-foreground">{item.heading}:</span>
                      <span className="text-muted-foreground text-sm leading-relaxed font-body ml-1">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why This Matters Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-accent/20 bg-accent/5 p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-accent shrink-0" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Why This Matters Now
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            Cancer immunotherapy has transformed oncology, yet clinicians still lack real-time tools to distinguish responders from non-responders—leading to delayed interventions and unnecessary toxicity. Simultaneously, antimicrobial resistance is outpacing diagnostic infrastructure worldwide, with WHO-designated priority pathogens spreading fastest where laboratory capacity is weakest. Non-invasive, rapid, and accessible diagnostic technologies are no longer aspirational—they are urgent. Magnetic nanotechnology is uniquely positioned to meet this moment: it operates without ionizing radiation, scales to portable formats, and can be engineered for molecular specificity at the point of care.
          </p>
        </motion.div>

        {/* Future Directions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="gold-underline mx-auto" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Future Directions
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mt-4 max-w-3xl mx-auto">
              Building on these platforms, my future research focuses on three directions that combine fundamental innovation with clear translational pathways.
            </p>
          </div>

          <div className="space-y-8">
            {futureDirections.map((dir, index) => (
              <motion.div
                key={dir.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-8 md:p-10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                {/* Title row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    {dir.icon}
                  </div>
                  <div>
                    <span className="text-xs font-body font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {dir.heading}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-2 leading-snug">
                      {dir.title}
                    </h3>
                  </div>
                </div>

                {/* Vision statement */}
                <p className="text-foreground/80 text-sm md:text-base font-body italic leading-relaxed mb-6">
                  {dir.vision}
                </p>

                {/* Figure */}
                <div className="w-full rounded-lg overflow-hidden mb-8 bg-foreground/5">
                  <img
                    src={dir.image}
                    alt={dir.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Bullet points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Innovation</span>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body mt-1">{dir.vision}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Approach</span>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body mt-1">{dir.approach}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Impact</span>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body mt-1">{dir.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Concluding Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto pb-8"
        >
          <div className="gold-underline mx-auto mb-6" />
          <p className="text-foreground text-lg md:text-xl font-display font-semibold leading-relaxed">
            My long-term goal is to reshape how cancer and infectious diseases are diagnosed and monitored—replacing invasive, delayed workflows with real-time, magnetic nanotechnology-driven platforms that are accessible wherever patients need them.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ResearchVision;
