import { motion } from "framer-motion";
import { ArrowLeft, FlaskConical, Microscope, Target, Magnet, Zap, Bug } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: <FlaskConical className="w-6 h-6 text-accent" />,
    title: "Research Philosophy",
    content:
      "My research is driven by the conviction that transformative clinical impact begins with fundamental materials innovation. I design magnetic nanomaterials from first principles and advance them through rigorous preclinical validation toward clinical translation. By maintaining deep expertise across materials chemistry, biomedical imaging, and translational medicine, I bridge the gap between laboratory discovery and patient benefit.",
  },
  {
    icon: <Microscope className="w-6 h-6 text-accent" />,
    title: "Core Methods & Platforms",
    content:
      "My laboratory develops high-susceptibility magnetic nanoclusters, activatable imaging probes, and lipid-based nanotherapeutics as versatile enabling platforms. These materials are designed for multimodal imaging (MRI, MPI, SERS), magnetically guided drug delivery, and metabolically targeted therapy. A unifying principle across all platforms is the integration of diagnostic and therapeutic functions on a single nanoarchitecture, enabling closed-loop theranostic workflows.",
  },
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    title: "Translational Focus",
    content:
      "I prioritize research with a clear path to clinical deployment. My tuberculosis diagnostic platform, supported by the Stanford SPARK Program and the Gates Foundation, exemplifies this commitment—advancing from bench-scale proof-of-concept to a field-deployable system designed for resource-limited settings. I seek to apply the same translational rigor to oncology, developing imaging-guided treatment strategies that provide actionable, real-time feedback to clinicians managing cancer and infectious disease.",
  },
];

const futureDirections = [
  {
    icon: <Magnet className="w-7 h-7 text-accent" />,
    title: "Ultra-Low-Field Magnetic Nanomaterials",
    subtitle: "Next-generation magnetic nanomaterials engineered to respond to ultra-low magnetic fields for precise manipulation and sensing",
    content:
      "I aim to pioneer a new class of magnetically engineered nanoparticles with extraordinary field sensitivity, enabling cellular-level manipulation and biosensing under ambient, clinically safe field strengths. By rationally tuning magnetic anisotropy and surface chemistry at the atomic scale, these platforms will unlock precision diagnostics and minimally invasive therapeutic actuation without the infrastructure demands of high-field instrumentation—dramatically expanding access to advanced nanomedicine.",
    tag: "Materials Innovation",
  },
  {
    icon: <Zap className="w-7 h-7 text-accent" />,
    title: "Activatable MPI/MRI Nanoprobes",
    subtitle: "State-of-the-art activatable MPI/MRI nanoprobes for real-time monitoring of cancer immunotherapy response",
    content:
      "I will develop a suite of stimulus-responsive nanoprobes whose magnetic relaxation properties switch in direct response to immunological biomarkers—cytokines, reactive oxygen species, and tumor microenvironment pH. Leveraging the zero-background sensitivity of magnetic particle imaging alongside anatomical MRI co-registration, these probes will provide the first non-invasive, quantitative readout of immunotherapy efficacy in real time, enabling adaptive treatment strategies and reducing reliance on invasive biopsies.",
    tag: "Precision Oncology",
  },
  {
    icon: <Bug className="w-7 h-7 text-accent" />,
    title: "Magneto-Bacteriophage Diagnostics",
    subtitle: "Magneto-bacteriophage diagnostic platforms for rapid, field-deployable detection of infectious diseases",
    content:
      "Drawing on the exquisite host specificity of engineered bacteriophages, I will create magnetically coupled phage-nanoparticle conjugates capable of selectively capturing and concentrating viable pathogens from complex clinical matrices within minutes. Combined with portable magnetic readout instrumentation, this platform targets antimicrobial-resistant organisms in resource-limited settings where conventional culture and PCR infrastructure are unavailable—directly addressing a critical global health gap identified by the WHO.",
    tag: "Global Health",
  },
];

const ResearchVision = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
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
            <p className="text-primary-foreground/60 font-body text-lg leading-relaxed max-w-2xl">
              Magnetic nanotechnology for imaging, diagnostics, and therapy—from fundamental materials science to clinical translation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed font-body pl-9">
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Future Directions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Future Directions
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-10 pl-9">
            Looking ahead, I aim to establish an independent research program at the intersection of magnetic nanotechnology, molecular imaging, and precision diagnostics. The three pillars below define the scientific frontiers my laboratory will pursue—each combining foundational innovation with a concrete path to clinical and public health impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureDirections.map((dir, index) => (
              <motion.div
                key={dir.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    {dir.icon}
                  </div>
                  <span className="text-xs font-body font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {dir.tag}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                  {dir.title}
                </h3>
                <p className="text-xs font-body text-accent/80 italic mb-3 leading-relaxed">
                  {dir.subtitle}
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                  {dir.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <p className="text-muted-foreground font-body text-sm">
            Interested in learning more? Feel free to{" "}
            <Link to="/#contact" className="text-accent hover:underline">
              get in touch
            </Link>{" "}
            or{" "}
            <a
              href="/Zhen_Xiao_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              download my CV
            </a>
            .
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ResearchVision;
