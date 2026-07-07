import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { Reveal, RevealGroup, RevealItem, SplitWords } from "./motion/Reveal";
import SpotlightCard from "./motion/SpotlightCard";
import Magnetic from "./motion/Magnetic";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-20 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <SplitWords
                text="Let's Connect"
                wordClassName={(word) => (word === "Connect" ? "text-gradient-blue" : undefined)}
              />
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to discuss opportunities or collaborations? Get in touch.
            </p>
          </Reveal>

          {/* Contact Form */}
          <div className="mb-12">
            <ContactForm />
          </div>

          {/* Contact Grid */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" stagger={0.08}>
            <RevealItem>
              <a href="mailto:EdwinBernal2026@gmail.com" className="block h-full">
                <SpotlightCard className="p-6 text-center group h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Personal Email</p>
                  <p className="text-foreground font-medium text-xs">EdwinBernal2026@gmail.com</p>
                </SpotlightCard>
              </a>
            </RevealItem>

            <RevealItem>
              <a href="mailto:e.bernal@centrallinkmedia.com" className="block h-full">
                <SpotlightCard className="p-6 text-center group h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Business Email</p>
                  <p className="text-foreground font-medium text-xs">e.bernal@centrallinkmedia.com</p>
                </SpotlightCard>
              </a>
            </RevealItem>

            <RevealItem>
              <a href="tel:+19459547416" className="block h-full">
                <SpotlightCard className="p-6 text-center group h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-foreground font-medium">(945)-954-7416</p>
                </SpotlightCard>
              </a>
            </RevealItem>

            <RevealItem>
              <SpotlightCard className="p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium text-sm">Dallas, TX 75212</p>
              </SpotlightCard>
            </RevealItem>
          </RevealGroup>

          {/* Social Links */}
          <Reveal className="flex justify-center gap-4 mb-12" delay={0.2}>
            <Magnetic strength={0.4}>
              <a
                href="https://www.linkedin.com/in/edwinbernalz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href="https://www.instagram.com/edwinbernal.tx/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-secondary/10 transition-colors group"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </Magnetic>
          </Reveal>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img
                src="/eb-logo-full.svg"
                alt="Edwin Bernal logo"
                className="h-8 w-8 rounded-lg"
              />
              <p className="text-muted-foreground text-sm">
                © 2025 Edwin Bernal. All rights reserved.
              </p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              Back to top
              <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
