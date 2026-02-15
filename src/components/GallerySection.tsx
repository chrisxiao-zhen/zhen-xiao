import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";

const galleryImages = [
  { src: gallery1, alt: "Magnetic nanoparticle sample with magnet" },
  { src: gallery2, alt: "Ferrofluid under magnetic field" },
  { src: gallery3, alt: "TEM image of nanoparticle clusters" },
  { src: gallery4, alt: "TEM image of nanoparticle-labeled bacterium" },
  { src: gallery5, alt: "TEM images of various nanoparticle morphologies" },
  { src: gallery6, alt: "TEM image of cell ultrastructure" },
  { src: gallery7, alt: "TEM image of mitochondria" },
  { src: gallery8, alt: "Nanoparticle colloidal solutions at Brown University" },
  { src: gallery9, alt: "TEM image of core-shell nanoparticles" },
  { src: gallery10, alt: "TEM image of iron oxide nanoparticles" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-pointer overflow-hidden rounded-lg border border-border hover:border-accent/30 transition-all hover:shadow-lg"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-2">
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
