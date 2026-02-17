import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    authors: "Xiao, Z., Yen, C., Wang, T., Ibrahim, J., Fu, Q., Dai, S.Y., Hajfathalian, M., Murugesan, K., Banaei, N., Bogyo, M.",
    title: "Mycobacteriophage Functionalized Magnetic Nanocrystal Clusters for Highly Sensitive and Rapid Detection of Mycobacterium Tuberculosis",
    journal: "JACS Au",
    year: "2025",
    url: "https://pubs.acs.org/doi/abs/10.1021/jacsau.5c01050",
    description: "Demonstrates the clinical implementation of magnetic nanomaterials for rapid, point-of-care pathogen detection, a project supported by Stanford SPARK Translational Research Program.",
    highlight: true,
  },
  {
    authors: "Lee, C.H., Xiao, Z., Lim, I., Wang, T., Aghaei, P., Burke, P.J., Rao, J.",
    title: "Copper Chelation Induces Morphology Change in Mitochondria of Triple-Negative Breast Cancer",
    journal: "JACS Au",
    year: "2025",
    url: "https://pubs.acs.org/doi/abs/10.1021/jacsau.5c00035",
    description: "Utilizes advanced imaging to extract image-based biomarkers (mitochondrial morphology) to monitor treatment response in aggressive cancer models.",
  },
  {
    authors: "Sudhahar, V., Xiao, Z., Das, A., Ash, D., Yadav, S., Matier, C.D., Pezacki, A.T., Chatterjee, B., Antipova, O.A., Vogt, S.",
    title: "Endothelial Cu Uptake Transporter CTR1 Senses Disturbed Flow to Promote Atherosclerosis through Cuproptosis",
    journal: "bioRxiv",
    year: "2025",
    url: "https://www.biorxiv.org/content/10.1101/2025.01.27.634587v1",
    description: "Showcases the application of imaging and molecular sensing in cardiovascular research, emphasizing the multidisciplinary reach of my technological platforms.",
  },
  {
    authors: "Dai, S.Y., Xiao, Z., Shen, F., Lim, I., Rao, J.",
    title: "Light-Controlled Intracellular Synthesis of Poly(luciferin) Polymers Induces Cell Paraptosis",
    journal: "Journal of the American Chemical Society",
    year: "2025",
    url: "https://pubs.acs.org/doi/abs/10.1021/jacs.4c15644",
    description: "An innovative study on controlled intracellular polymer synthesis, highlighting expertise in bioconjugation and the development of activatable biological probes.",
  },
  {
    authors: "Cho, M., Villanova, J., Ines, D.M., Chen, J., Lee, S.S., Xiao, Z., Guo, X., Dunn, J.A., Stueber, D.D., Decuzzi, P.",
    title: "Sensitive T2 MRI Contrast Agents from the Rational Design of Iron Oxide Nanoparticle Surface Coatings",
    journal: "The Journal of Physical Chemistry C",
    year: "2023",
    url: "https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.2c05390",
    description: "A systematic study on the selection of surface coatings for magnetic iron oxide nanoparticles and their impact on the T2 contrast for MRI.",
  },
  {
    authors: "Dai, T., Xiao, Z. (co-first), Shan, D., Moreno, A., Li, H., Prakash, M., Banaei, N., Rao, J.",
    title: "Culture-independent Multiplexed Detection of Drug-resistant Bacteria Using Surface-enhanced Raman Scattering",
    journal: "ACS Sensors",
    year: "2023",
    url: "https://pubs.acs.org/doi/abs/10.1021/acssensors.3c01345",
    description: "Demonstrates proficiency in optical imaging methods (SERS) for simultaneous detection of multiple drug-resistant pathogens.",
  },
  {
    authors: "Zhang, L., Zhang, Q., Hinojosa, D.T., Jiang, K., Pham, Q.K., Xiao, Z., Colvin, V.L., Bao, G.",
    title: "Multifunctional Magnetic Nanoclusters Can Induce Immunogenic Cell Death and Suppress Tumor Recurrence and Metastasis",
    journal: "ACS Nano",
    year: "2022",
    url: "https://pubs.acs.org/doi/abs/10.1021/acsnano.2c06776",
    description: "Focuses on the theranostic application of imaging-capable clusters, showing how localized magnetic hyperthermia can trigger systemic anti-tumor immunity.",
  },
  {
    authors: "Sebesta, C., Torres Hinojosa, D., Wang, B., Asfouri, J., Li, Z., Duret, G., Jiang, K., Xiao, Z., Zhang, L., Zhang, Q.",
    title: "Sub-second Multi-channel Magnetic Control of Select Neural Circuits in Behaving Flies",
    journal: "Nature Materials",
    year: "2022",
    url: "https://www.nature.com/articles/s41563-022-01281-7",
    description: "This interdisciplinary study showcases the use of magnetic nanomaterials for high-precision, in vivo biological control, demonstrating the versatility of these technologies in complex living systems.",
  },
  {
    authors: "Stinnett, G., Taheri, N., Villanova, J., Bohloul, A., Guo, X., Esposito, E.P., Xiao, Z., Stueber, D., Avendano, C., Decuzzi, P.",
    title: "2D Gadolinium Oxide Nanoplates as T1 Magnetic Resonance Imaging Contrast Agents",
    journal: "Advanced Healthcare Materials",
    year: "2021",
    url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adhm.202001780",
    description: "Highlights expertise in developing T1-weighted contrast agents, expanding my profile across multiple MRI modalities to improve diagnostic accuracy in healthcare.",
  },
  {
    authors: "Xiao, Z., Zhang, Q., Guo, X., Villanova, J., Hu, Y., Külaots, I., Garcia-Rojas, D., Guo, W., Colvin, V.L.",
    title: "Forming Libraries of Uniform Magnetic Multicore Nanoparticles with Tunable Dimensions and their Applications",
    journal: "ACS Applied Materials & Interfaces",
    year: "2020",
    url: "https://pubs.acs.org/doi/abs/10.1021/acsami.0c09778",
    description: "Establishes the fundamental chemical principles for synthesizing tunable magnetic multicore structures, which are essential for optimizing image contrast in MRI.",
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
            <a
              href="https://scholar.google.com/citations?user=gJdK1kcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              View all publications on Google Scholar →
            </a>
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
              className={`border-l-2 pl-6 py-3 ${
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
              <p className="text-muted-foreground text-sm font-body mt-2 leading-relaxed">
                {pub.description}
              </p>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                View Paper
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
