import { motion } from "framer-motion";
import { ArrowLeft, FlaskConical, Microscope, Target, Rocket } from "lucide-react";
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
  {
    icon: <Rocket className="w-6 h-6 text-accent" />,
    title: "Future Directions",
    content:
      "Looking ahead, I aim to establish an independent research program at the intersection of nanotechnology, molecular imaging, and precision medicine. Key directions include: expanding activatable probe libraries for longitudinal immunotherapy monitoring; developing next-generation magnetic theranostic agents for image-guided surgery; and creating multiplexed point-of-care diagnostic platforms for antimicrobial resistance surveillance. My goal is to build a research group that delivers both foundational scientific advances and technologies with direct clinical and public health impact.",
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
