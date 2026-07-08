import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem, EASE_OUT } from "./motion/Reveal";
import CountUp from "./motion/CountUp";
import SectionHeader from "./SectionHeader";

const certifications = [
  "Investment Risk Management",
  "Business Management",
  "Business Finance",
  "Marketing",
  "Microsoft Excel",
  "Microsoft Word",
  "Google Suite",
  "Java",
  "HTML",
  "CSS",
  "C++",
  "WordPress",
  "GoDaddy Web Development",
  "Wix Web Development",
  "CPR/AED/First Aid",
  "Bartender/Waiter Alcohol Permit",
  "Food Handling",
];

const LanguageBar = ({ language, level }: { language: string; level: string }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-display font-light text-2xl text-ink">{language}</span>
        <span className="eyebrow text-muted-foreground">{level}</span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <motion.div
          initial={reduceMotion ? undefined : { width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: EASE_OUT }}
          className="absolute inset-y-0 left-0 bg-cobalt"
          style={{ height: "3px", top: "-1px" }}
        />
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-14 md:py-20 relative bg-muted/40">
      <div className="container px-6">
        <SectionHeader
          number="04"
          eyebrow="Academic Journey"
          title="Education & Certifications"
          accentWord="Certifications"
        />

        {/* Schools */}
        <RevealGroup className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-border" stagger={0.1}>
          <RevealItem className="border-b border-r border-border">
            <div className="p-8 h-full flex flex-col">
              <span className="eyebrow text-cobalt mb-6 block">Aug 2024 — May 2025</span>
              <h3 className="font-display font-light text-3xl text-ink tracking-tight mb-6">
                East Texas A&amp;M University
              </h3>
              <div className="mt-auto space-y-4">
                <div className="rule pt-4">
                  <p className="eyebrow text-muted-foreground mb-1">Double Major</p>
                  <p className="text-ink">Finance &amp; Political Science (BBA)</p>
                </div>
                <div className="rule pt-4">
                  <p className="eyebrow text-muted-foreground mb-1">Minor</p>
                  <p className="text-ink">Legal Studies &amp; Elementary Education</p>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="border-b border-r border-border">
            <div className="p-8 h-full flex flex-col">
              <span className="eyebrow text-cobalt mb-6 block">Aug 2025 — May 2028 (Online)</span>
              <h3 className="font-display font-light text-3xl text-ink tracking-tight mb-6">
                University of North Texas
              </h3>
              <div className="mt-auto space-y-4">
                <div className="rule pt-4">
                  <p className="eyebrow text-muted-foreground mb-1">Major</p>
                  <p className="text-ink">Finance &amp; Political Science</p>
                </div>
                <div className="rule pt-4">
                  <p className="eyebrow text-muted-foreground mb-1">Minor</p>
                  <p className="text-ink">Legal Studies &amp; Elementary Education</p>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="border-b border-r border-border">
            <div className="p-8 h-full flex flex-col">
              <span className="eyebrow text-cobalt mb-6 block">Dallas, TX • 2021 — 2024</span>
              <h3 className="font-display font-light text-3xl text-ink tracking-tight mb-6">
                Judge Barefoot Sanders Law Magnet
              </h3>
              <div className="mt-auto rule pt-4 flex items-end gap-4">
                <CountUp
                  value={84}
                  prefix="#"
                  className="font-display font-light text-6xl md:text-7xl text-cobalt leading-none"
                />
                <div className="pb-1">
                  <p className="text-ink font-medium">Nationwide Ranking</p>
                  <p className="text-muted-foreground text-sm">Selective Law Magnet Program</p>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Certifications + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <Reveal delay={0.05}>
            <div className="rule pt-6 mb-8 flex items-baseline justify-between">
              <span className="eyebrow text-muted-foreground">Certifications</span>
              <span className="font-display text-sm text-muted-foreground">(04.1)</span>
            </div>
            <RevealGroup className="flex flex-wrap gap-3" stagger={0.06}>
              {certifications.map((cert, index) => (
                <RevealItem key={index}>
                  <span className="btn-editorial px-5 py-2.5 text-sm cursor-default">
                    {cert}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rule pt-6 mb-8 flex items-baseline justify-between">
              <span className="eyebrow text-muted-foreground">Languages</span>
              <span className="font-display text-sm text-muted-foreground">(04.2)</span>
            </div>
            <div className="space-y-8">
              <LanguageBar language="English" level="Native / Bilingual" />
              <LanguageBar language="Spanish" level="Native / Bilingual" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
