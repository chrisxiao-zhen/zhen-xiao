import { motion } from "framer-motion";
import { Award, BookOpen, Quote, Landmark } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Award, value: "8+", label: "Years Nanotech Experience" },
  { icon: BookOpen, value: "20+", label: "Publications" },
  { icon: Quote, value: "700+", label: "Citations" },
  { icon: Landmark, value: "SPARK & Gates", label: "Foundation Support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary scroll-mt-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">About</h2>
        </motion.div>

        {/* Two-column: headshot left, overview right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid md:grid-cols-[320px_1fr] gap-12 items-start"
        >
          {/* Headshot */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-accent/5 flex-shrink-0">
              <img
                src={heroBg}
                alt="Dr. Zhen Xiao"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, hsl(210 69% 17%) 100%)",
                }}
              />
            </div>
          </div>

          {/* 60-Second Executive Summary */}
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              60-Second Overview
            </p>
            <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-5">
              I build magnetic nanotechnologies that close the loop between diagnosis and therapy—enabling clinicians to image, detect, and treat disease in a single workflow.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              With 8+ years of experience spanning nanomaterial design, molecular imaging (MRI/MPI), and translational diagnostics, my research creates platforms that are <span className="text-foreground font-medium">activatable</span>, <span className="text-foreground font-medium">quantitative</span>, and <span className="text-foreground font-medium">clinically translatable</span>. From monitoring immunotherapy response in real time to detecting TB in under an hour at the point of care, every project converges on one mission:
            </p>
            <p className="text-accent font-semibold text-base md:text-lg mb-6 pl-4 border-l-2 border-accent">
              Moving medicine from "one-size-fits-all" to truly adaptive, closed-loop theranostics.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              My long-term goal is to establish an independent lab that pioneers these technologies for oncology and infectious disease—bridging the gap between nanoscale engineering and patient impact.
            </p>
          </div>
        </motion.div>

        {/* Quick Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card/60 border border-border/60"
            >
              <stat.icon className="w-5 h-5 text-accent mb-3" />
              <span className="text-2xl md:text-3xl font-black text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs md:text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
