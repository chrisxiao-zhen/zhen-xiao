import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Download, FlaskConical } from "lucide-react";
import ResearchVisionDialog from "./ResearchVisionDialog";

const NanoParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 200, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 200, ${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  const [visionOpen, setVisionOpen] = useState(false);
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      <NanoParticles />

      <div className="relative z-10 section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="gold-underline" />
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tight leading-[1.1]">
            Zhen Xiao
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            PhD · Postdoctoral Scholar, Stanford University
          </p>
          <p className="text-accent text-sm md:text-base font-semibold tracking-wide mb-8">
            Pioneering Closed-Loop Magnetic Theranostics
          </p>

          <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              California, USA
            </span>
            <span className="text-border">|</span>
            <a href="mailto:xiaozhen@stanford.edu" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent" />
              xiaozhen@stanford.edu
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/document/d/1UrDM7kZR_LkMkVEU3GzYNniY0-twTvJy/edit?usp=sharing&ouid=117431193444659149744&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-base tracking-wide hover:brightness-110 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              <Download className="w-5 h-5" />
              Access CV
            </a>
            <button
              onClick={() => setVisionOpen(true)}
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-lg border border-accent/40 text-foreground font-bold text-base tracking-wide hover:border-accent hover:text-accent transition-all hover:bg-accent/5"
            >
              <FlaskConical className="w-5 h-5" />
              Research Vision →
            </button>
          </div>

          <ResearchVisionDialog open={visionOpen} onOpenChange={setVisionOpen} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
