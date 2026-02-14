import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Postdoctoral Scholar",
    institution: "Stanford University, School of Medicine",
    period: "2022 – Present",
    detail: "Molecular Imaging Program at Stanford · Advisor: Prof. Jianghong Rao",
  },
  {
    degree: "Ph.D. in Chemistry",
    institution: "Brown University",
    period: "2017 – 2022",
    detail: "Thesis: Magnetic nanocrystal clusters — understanding, shaping, and exploiting their giant susceptibility · Advisor: Prof. Vicki L. Colvin",
  },
  {
    degree: "B.S. in Chemistry",
    institution: "Beihang University (BUAA), Beijing, China",
    period: "2013 – 2017",
    detail: "Advisor: Prof. Ying Zhu · Shenyuan Medal (highest undergraduate honor)",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="mt-12 space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-foreground/80 font-body font-medium">{edu.institution}</p>
                <p className="text-accent text-sm font-body font-medium mt-1">{edu.period}</p>
                <p className="text-muted-foreground text-sm font-body mt-2 leading-relaxed max-w-2xl">
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
