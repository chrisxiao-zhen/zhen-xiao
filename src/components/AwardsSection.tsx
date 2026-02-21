import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

const awards: { title: string; year: string; detail: string; translational: boolean; link?: string }[] = [
  { title: "Stanford SPARK Translational Research Program", year: "2025", detail: "Rapid, point-of-care detection of Mycobacterium tuberculosis", translational: true },
  { title: "Gates Foundation Grand Challenges Grant", year: "2025", detail: "Co-investigator on developing novel tuberculosis diagnostics", translational: true, link: "https://gcgh.grandchallenges.org/grant/magnetic-capturing-technique-sputum-sample-processing" },
  { title: "WMIC Student Travel Award", year: "2024", detail: "World Molecular Imaging Congress", translational: false },
  { title: "Bio-X Rank 1 Poster Award", year: "2024", detail: "Stanford Bio-X Interdisciplinary Initiatives", translational: false },
  { title: "Outstanding Student Poster Award", year: "2022", detail: "ACS Division of Colloid and Surface Chemistry", translational: false },
  { title: "Philip A. Smith '26 Chemistry Fellowship", year: "2018", detail: "Brown University", translational: false },
  { title: "Shenyuan Medal", year: "2017", detail: "Beihang University — highest honor for undergraduate students", translational: false },
  { title: "Outstanding Award in Baosteel Education Fund", year: "2016", detail: "Only five among 14,000 undergraduate students", translational: false },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">Awards & Funding</h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex gap-4 p-4 rounded-lg transition-colors ${
                award.translational
                  ? "bg-accent/5 border border-accent/15 hover:bg-accent/10"
                  : "bg-card/50 hover:bg-card"
              }`}
            >
              {award.translational ? (
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              ) : (
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className={`text-sm font-semibold ${
                  award.translational ? "text-accent" : "text-foreground"
                }`}>
                  {award.link ? (
                    <a href={award.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {award.title}
                    </a>
                  ) : award.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {award.detail} · {award.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
