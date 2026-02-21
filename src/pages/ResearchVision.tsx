import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb, Atom, Globe, Magnet, Zap, Bug } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Research Philosophy",
    content:
      "My research is driven by the conviction that transformative clinical impact begins with fundamental materials innovation. I design magnetic nanomaterials from first principles and advance them through rigorous preclinical validation toward clinical translation. By maintaining deep expertise across materials chemistry, biomedical imaging, and translational medicine, I bridge the gap between laboratory discovery and patient benefit.",
  },
  {
    icon: <Atom className="w-8 h-8 text-accent" />,
    title: "Core Methods & Platforms",
    content:
      "My laboratory develops high-susceptibility magnetic nanoclusters, activatable imaging probes, and lipid-based nanotherapeutics as versatile enabling platforms. These materials are designed for multimodal imaging (MRI, MPI, SERS), magnetically guided drug delivery, and metabolically targeted therapy. A unifying principle across all platforms is the integration of diagnostic and therapeutic functions on a single nanoarchitecture, enabling closed-loop theranostic workflows.",
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Translational Focus",
    content:
      "I prioritize research with a clear path to clinical deployment. My tuberculosis diagnostic platform, supported by the Stanford SPARK Program and the Gates Foundation, exemplifies this commitment—advancing from bench-scale proof-of-concept to a field-deployable system designed for resource-limited settings. I seek to apply the same translational rigor to oncology, developing imaging-guided treatment strategies that provide actionable, real-time feedback to clinicians managing cancer and infectious disease.",
  },
];

const futureDirections = [
  {
    icon: <Magnet className="w-7 h-7 text-accent" />,
    heading: "Materials Innovation",
    title: "Ultra-Low-Field Magnetic Nanomaterials",
    vision:
      "Pioneer a new class of magnetically engineered nanoparticles with extraordinary field sensitivity, enabling cellular-level manipulation and biosensing under ambient, clinically safe field strengths.",
    approach:
      "Rationally tune magnetic anisotropy and surface chemistry at the atomic scale to maximize susceptibility at ultra-low fields, eliminating the infrastructure demands of high-field instrumentation.",
    impact:
      "Dramatically expand access to advanced nanomedicine by enabling precision diagnostics and minimally invasive therapeutic actuation without expensive superconducting magnets.",
  },
  {
    icon: <Zap className="w-7 h-7 text-accent" />,
    heading: "Precision Oncology",
    title: "Activatable MPI/MRI Nanoprobes",
    vision:
      "Develop stimulus-responsive nanoprobes whose magnetic relaxation properties switch in direct response to immunological biomarkers—cytokines, reactive oxygen species, and tumor microenvironment pH.",
    approach:
      "Leverage the zero-background sensitivity of magnetic particle imaging alongside anatomical MRI co-registration for quantitative, non-invasive readout of immunotherapy efficacy.",
    impact:
      "Enable adaptive treatment strategies and reduce reliance on invasive biopsies by providing the first real-time imaging window into cancer immunotherapy response.",
  },
  {
    icon: <Bug className="w-7 h-7 text-accent" />,
    heading: "Global Health",
    title: "Magneto-Bacteriophage Diagnostics",
    vision:
      "Create magnetically coupled phage-nanoparticle conjugates that selectively capture and concentrate viable pathogens from complex clinical matrices within minutes.",
    approach:
      "Combine the exquisite host specificity of engineered bacteriophages with portable magnetic readout instrumentation for rapid, field-deployable detection.",
    impact:
      "Target antimicrobial-resistant organisms in resource-limited settings where conventional culture and PCR infrastructure are unavailable—directly addressing a critical WHO-identified global health gap.",
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

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-20">
        {/* Mission Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center leading-snug tracking-tight max-w-4xl mx-auto"
        >
          Magnetic nanotechnology for imaging, diagnostics, and therapy—from fundamental materials science to{" "}
          <span className="text-accent">clinical translation.</span>
        </motion.p>

        {/* Three-Column Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future Directions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <div className="gold-underline mx-auto" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Future Directions
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Three pillars defining the scientific frontiers my laboratory will pursue—each combining foundational innovation with a concrete path to clinical and public health impact.
            </p>
          </div>

          <div className="space-y-6">
            {futureDirections.map((dir, index) => (
              <motion.div
                key={dir.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex items-center gap-4 md:min-w-[220px] shrink-0">
                    <div className="p-2.5 rounded-lg bg-accent/10">
                      {dir.icon}
                    </div>
                    <div>
                      <span className="text-xs font-body font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        {dir.heading}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-2 leading-snug">
                        {dir.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">The Vision</span>
                      <p className="text-muted-foreground text-sm leading-relaxed font-body mt-1">{dir.vision}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">The Approach</span>
                      <p className="text-muted-foreground text-sm leading-relaxed font-body mt-1">{dir.approach}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">The Impact</span>
                      <p className="text-muted-foreground text-sm leading-relaxed font-body mt-1">{dir.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ResearchVision;
