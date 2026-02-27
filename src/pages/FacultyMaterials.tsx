import { motion } from "framer-motion";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const materials = [
  {
    title: "Research Vision",
    description: "Closed-loop magnetic theranostics — full research statement and future directions.",
    href: "/research-vision.pdf",
    available: true,
  },
  {
    title: "Curriculum Vitae",
    description: "Complete academic CV including publications, funding, and presentations.",
    href: null,
    available: false,
  },
  {
    title: "Teaching Statement",
    description: "Teaching philosophy and course development interests.",
    href: null,
    available: false,
  },
];

const FacultyMaterials = () => (
  <main className="min-h-screen bg-background">
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-20">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent text-sm mb-10 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to homepage
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-foreground mb-2">
          For Faculty Search Committees
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10">
          Downloadable application materials for Zhen Xiao. Additional documents available upon request at{" "}
          <a href="mailto:xiaozhen@stanford.edu" className="text-accent hover:underline">
            xiaozhen@stanford.edu
          </a>.
        </p>

        <div className="space-y-4">
          {materials.map((mat) => (
            <div
              key={mat.title}
              className="flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card/40"
            >
              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-semibold text-foreground mb-0.5">{mat.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{mat.description}</p>
              </div>
              {mat.available && mat.href ? (
                <a
                  href={mat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-accent border border-accent/25 hover:bg-accent/10 transition-colors flex-shrink-0 mt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF
                </a>
              ) : (
                <span className="text-muted-foreground/40 text-xs italic flex-shrink-0 mt-2">
                  Available on request
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </main>
);

export default FacultyMaterials;
