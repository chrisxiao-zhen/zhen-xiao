import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4-new.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";
import gallery11 from "@/assets/gallery-11.png";
import gallery12 from "@/assets/gallery-12.png";
import gallery13 from "@/assets/gallery-13.png";
import gallery14 from "@/assets/gallery-14.png";
import gallery15 from "@/assets/gallery-15.png";
import gallery16 from "@/assets/gallery-16.png";
import gallery17 from "@/assets/gallery-17.png";
import gallery18 from "@/assets/gallery-18.png";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.png";
import gallery21 from "@/assets/gallery-21.png";
import galleryVideo1 from "@/assets/gallery-video-1.mp4";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  type?: "image" | "video";
};

const galleryImages: GalleryItem[] = [
  { src: gallery1, alt: "Magnetic nanoparticle sample with magnet", caption: "Magnetic nanoparticle suspension responding to an external magnetic field, demonstrating high magnetic susceptibility." },
  { src: gallery2, alt: "Ferrofluid under magnetic field", caption: "Ferrofluid spiking pattern under applied magnetic field, illustrating the collective behavior of magnetic nanoclusters." },
  { src: gallery3, alt: "TEM image of nanoparticle clusters", caption: "Transmission electron microscopy (TEM) image of magnetic nanocrystal clusters showing a heart shape." },
  { src: gallery4, alt: "TEM image of nanoparticle chains on bacterium", caption: "TEM image of magnetic nanoparticle chains assembled on a Mycobacterium tuberculosis cell surface." },
  { src: gallery5, alt: "TEM images of various nanoparticle morphologies", caption: "Library of gold nanoparticle morphologies synthesized through systematic tuning of reaction parameters." },
  { src: gallery6, alt: "TEM image of cell ultrastructure", caption: "High-resolution TEM image of cancer cell ultrastructure showing nanoparticle uptake and intracellular localization." },
  { src: gallery7, alt: "TEM image of mitochondria", caption: "TEM image of mitochondrial morphology changes induced by copper-depleting nanoparticles in triple-negative breast cancer cells." },
  { src: gallery8, alt: "Nanoparticle colloidal solutions at Brown University", caption: "Colloidal suspensions of iron oxide nanoparticles with varying sizes and surface coatings, prepared at Brown University." },
  { src: gallery9, alt: "TEM image of core-shell nanoparticles", caption: "Core-shell nanoparticle architecture visualized by TEM, engineered for enhanced MRI contrast performance." },
  { src: gallery10, alt: "TEM image of iron oxide nanoparticles", caption: "Monodisperse iron oxide nanocrystals with uniform size distribution." },
  { src: gallery11, alt: "Photonic crystal clusters under magnetic field", caption: "Clusters as magnetically controllable photonic crystals. Images of the cluster solution showing different colors at different external magnetic field strengths." },
  { src: gallery12, alt: "Magnetic separation of U2OS cancer cells", caption: "Efficient magnetic separation of U2OS cancer cells following intracellular uptake of magnetic nanoclusters, achieved using simple fridge magnets." },
  { src: gallery13, alt: "Iron Oxide Man nanocluster assembly", caption: "A human-like assembly of iron oxide nanoclusters observed by TEM, arising from collective magnetic interactions (\"Iron Oxide Man\")." },
  { src: gallery14, alt: "STEM image at 40M magnification showing atomic-scale ordering", caption: "High-resolution scanning transmission electron microscopy (STEM) image acquired at 40 M× magnification, revealing atomic-scale ordering within the nanomaterial." },
  { src: gallery15, alt: "SEM image of one-dimensional assembly of magnetic nanoclusters", caption: "The scanning electron microscopy (SEM) image of the one-dimensional assembly of the magnetic nanoclusters." },
  { src: gallery16, alt: "Magnetic nanoclusters with dyes under UV light", caption: "Magnetic nanoclusters with dyes conjugated to the surface (left)." },
  { src: gallery17, alt: "Silver nanorod under TEM", caption: "Silver nanorod under TEM." },
  { src: gallery18, alt: "Quantum dots and gold nanoparticles in aqueous solutions", caption: "Quantum dots (left two) and gold nanoparticles (right two) in aqueous solutions." },
  { src: gallery19, alt: "Confocal microscope image of breast cancer cells", caption: "Confocal microscope image of the breast cancer cells." },
  { src: gallery20, alt: "Mycobacteriophage plaques on agar plates", caption: "Mycobacteriophage forming plaques on the agar plates." },
  { src: gallery21, alt: "MRI of a mouse brain", caption: "The magnetic resonance imaging (MRI) of a mouse brain." },
  { src: galleryVideo1, alt: "Chain assembly of magnetic nanoclusters as nano stirbars", caption: "Chain assembly of the magnetic nanoclusters as efficient nano stirbars.", type: "video" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  return (
    <section id="gallery" className="bg-background scroll-mt-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-underline" />
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Microscopy, instrumentation, and laboratory imaging
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative overflow-hidden rounded-lg border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                {img.type === "video" ? (
                  <>
                    <video
                      src={img.src}
                      className="w-full h-auto"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/20 transition-colors">
                      <div className="bg-accent/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-accent/30 transition-colors">
                        <Play className="w-6 h-6 text-foreground fill-foreground" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setSelectedIndex(null)}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-50"
                aria-label="Close lightbox"
              >
                <X className="w-7 h-7" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 md:left-8 text-muted-foreground hover:text-foreground transition-colors z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <div
                className="flex flex-col items-center max-w-5xl max-h-[90vh] px-4"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage.type === "video" ? (
                  <motion.video
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage.src}
                    className="max-h-[75vh] w-auto rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <motion.img
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[75vh] w-auto rounded-lg shadow-2xl object-contain"
                  />
                )}
                <p className="text-muted-foreground text-sm text-center mt-4 max-w-2xl leading-relaxed">
                  {selectedImage.caption}
                </p>
                <p className="text-muted-foreground/50 text-xs mt-2">
                  {(selectedIndex ?? 0) + 1} / {galleryImages.length}
                </p>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 md:right-8 text-muted-foreground hover:text-foreground transition-colors z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
