import { motion } from "framer-motion";

const publications = [
  {
    authors: "Xiao, Z., Yen, C., Wang, T., Ibrahim, J., Rao, J., et al.",
    title: "Mycobacteriophage Functionalized Magnetic Nanocrystal Clusters for Highly Sensitive and Rapid Detection of Mycobacterium Tuberculosis",
    journal: "JACS Au",
    year: "2025",
    highlight: true,
  },
  {
    authors: "Lee, C.H., Xiao, Z., Lim, I., Wang, T., et al.",
    title: "Copper Chelation Induces Morphology Change in Mitochondria of Triple-Negative Breast Cancer",
    journal: "JACS Au",
    year: "2025",
  },
  {
    authors: "Dai, S. Y., Xiao, Z., Rao, J., et al.",
    title: "Light-Controlled Intracellular Synthesis of Poly(luciferin) Polymers Induces Cell Paraptosis",
    journal: "Journal of the American Chemical Society",
    year: "2025",
  },
  {
    authors: "Dai, T., Xiao, Z. (co-first), Rao, J., et al.",
    title: "Culture-independent Multiplexed Detection of Drug-resistant Bacteria Using Surface-enhanced Raman Scattering",
    journal: "ACS Sensors",
    year: "2023",
  },
  {
    authors: "Sebesta, C., et al. (incl. Xiao, Z.)",
    title: "Sub-second Multi-channel Magnetic Control of Select Neural Circuits in Behaving Flies",
    journal: "Nature Materials",
    year: "2022",
  },
  {
    authors: "Xiao, Z., Zhang, L., Colvin, V. L., Zhang, Q., Bao, G.",
    title: "Synthesis and Application of Magnetic Nanocrystal Clusters",
    journal: "Industrial & Engineering Chemistry Research",
    year: "2022",
  },
  {
    authors: "Xiao, Z., Zhang, Q., Guo, X., et al.",
    title: "Forming Libraries of Uniform Magnetic Multicore Nanoparticles with Tunable Dimensions and their Applications",
    journal: "ACS Applied Materials & Interfaces",
    year: "2020",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">Selected Publications</h2>
          <p className="section-subtitle font-body">
            22 peer-reviewed papers · 718+ citations · h-index: 14
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`border-l-2 pl-6 py-2 ${
                pub.highlight ? "border-accent" : "border-border"
              }`}
            >
              <h3 className="font-display text-base font-medium text-foreground leading-snug">
                {pub.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body mt-1">{pub.authors}</p>
              <p className="text-sm font-body mt-1">
                <span className="text-accent font-medium italic">{pub.journal}</span>
                <span className="text-muted-foreground"> · {pub.year}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
