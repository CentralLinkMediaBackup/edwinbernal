import { ArrowUp, ArrowUpRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { Reveal, RevealGroup, RevealItem, SplitWords } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";
import CircularText from "./motion/CircularText";
import { scrollToTarget } from "@/lib/scroll";

const contactRows = [
  { label: "Personal Email", value: "EdwinBernal2026@gmail.com", href: "mailto:EdwinBernal2026@gmail.com" },
  { label: "Business Email", value: "e.bernal@centrallinkmedia.com", href: "mailto:e.bernal@centrallinkmedia.com" },
  { label: "Phone", value: "(945)-954-7416", href: "tel:+19459547416" },
  { label: "Primarily Located At", value: "Dallas, TX 75212", href: null },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edwinbernalz" },
  { label: "Instagram", href: "https://www.instagram.com/edwinbernal.tx/" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-ink text-paper pt-16 md:pt-20 overflow-hidden">
      <div className="container px-6 relative z-10">
        {/* Header */}
        <Reveal className="mb-16 md:mb-20">
          <div className="rule border-paper-dim pt-6 flex items-baseline justify-between mb-8">
            <span className="eyebrow text-paper/60">Get in Touch</span>
            <span className="font-display text-sm text-paper/60">(06)</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-display font-light tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
              <SplitWords
                text="Let's Connect"
                wordClassName={(word) => (word === "Connect" ? "font-display-italic text-cobalt-soft" : undefined)}
              />
            </h2>
            <CircularText
              text="CONTACT ME — CONTACT ME — CONTACT ME — "
              className="text-paper/70 hidden lg:block flex-shrink-0"
              size={150}
            />
          </div>
          <p className="mt-6 text-paper/70 text-lg max-w-xl">
            Ready to discuss opportunities or collaborations? Get in touch.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-20">
          {/* Contact Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>

          {/* Contact details */}
          <div>
            <RevealGroup stagger={0.08}>
              {contactRows.map((row) => (
                <RevealItem key={row.label}>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="rule border-paper-dim group flex items-center justify-between gap-4 py-6"
                    >
                      <div>
                        <p className="eyebrow text-paper/50 mb-1">{row.label}</p>
                        <p className="font-display font-light text-xl md:text-2xl tracking-tight group-hover:text-cobalt-soft transition-colors duration-300 break-all">
                          {row.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-6 w-6 text-paper/40 flex-shrink-0 group-hover:text-cobalt-soft group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                  ) : (
                    <div className="rule border-paper-dim py-6">
                      <p className="eyebrow text-paper/50 mb-1">{row.label}</p>
                      <p className="font-display font-light text-xl md:text-2xl tracking-tight">
                        {row.value}
                      </p>
                    </div>
                  )}
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Socials */}
            <Reveal className="mt-10 flex gap-4" delay={0.2}>
              {socials.map((social) => (
                <Magnetic key={social.label} strength={0.3}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-paper px-6 py-3 text-sm"
                  >
                    {social.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Magnetic>
              ))}
            </Reveal>
          </div>
        </div>
      </div>

      {/* Giant watermark name */}
      <div className="relative select-none pointer-events-none" aria-hidden="true">
        <p className="text-stroke-paper font-display font-light text-center whitespace-nowrap leading-none text-[14vw] opacity-30 translate-y-[12%]">
          Edwin Bernal
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-paper-dim">
        <div className="container px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/eb-logo-full.svg"
              alt="Edwin Bernal logo"
              className="h-8 w-8 rounded-full border border-paper-dim"
            />
            <p className="text-paper/60 text-sm">
              © 2026 Edwin Bernal. All rights reserved.
            </p>
          </div>

          <button
            onClick={() => scrollToTarget(0)}
            className="link-slide text-paper/60 hover:text-paper text-sm flex items-center gap-2 transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
