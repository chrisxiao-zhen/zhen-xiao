import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=gJdK1kcAAAAJ&hl=en",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-3740-3546",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.834-1.209-3.722-3.853-3.722h-2.466z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zhen-xiao-594094157/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data as a fallback
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:xiaozhen@stanford.edu?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section id="contact" className="bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-underline" />
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground font-display mb-4">
              Get in Touch
            </h2>
            <p className="text-primary-foreground/60 font-body max-w-xl mb-12">
              I am currently seeking academic positions. If you are interested in my research or would like to discuss collaboration opportunities, please feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-primary-foreground/70 font-body text-sm mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-primary-foreground/70 font-body text-sm mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-primary-foreground/70 font-body text-sm mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button
                type="submit"
                disabled={submitted}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitted ? "Opening Email..." : "Send Message"}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <a
                  href="mailto:xiaozhen@stanford.edu"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors font-body"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  xiaozhen@stanford.edu
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/70 font-body">
                  <Phone className="w-5 h-5 text-accent" />
                  +1 (401) 699-4590
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/70 font-body">
                  <MapPin className="w-5 h-5 text-accent" />
                  California, USA
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-primary-foreground/50 font-body text-sm uppercase tracking-wider mb-4">
                  Profiles
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} Zhen Xiao. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-primary-foreground/30 hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
