import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, Languages, BookOpen, Scale, Shield, Briefcase } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, SplitWords, EASE_OUT } from "./motion/Reveal";
import SpotlightCard from "./motion/SpotlightCard";
import CountUp from "./motion/CountUp";

const certifications = [
  { name: "Investment Risk Management", color: "primary" },
  { name: "Bartender/Waiter Alcohol Permit", color: "secondary" },
  { name: "CPR/AED/First Aid", color: "primary" },
  { name: "Microsoft Excel", color: "secondary" },
  { name: "Food Handling", color: "primary" },
  { name: "Business Management", color: "secondary" },
];

const LanguageBar = ({ language, level }: { language: string; level: string }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-foreground font-medium">{language}</span>
        <span className="text-secondary text-sm">{level}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={reduceMotion ? undefined : { width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: EASE_OUT }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container relative z-10 px-6">
        <Reveal className="text-center mb-16">
          <span className="badge-blue mb-4 inline-block">Academic Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <SplitWords
              text="Education & Certifications"
              wordClassName={(word) => (word === "Certifications" ? "text-gradient-blue" : undefined)}
            />
          </h2>
        </Reveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* East Texas A&M University */}
          <Reveal direction="right" delay={0.1}>
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 glow-blue">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    East Texas A&M University
                  </h3>
                  <p className="text-primary text-sm">Aug 2024 - May 2025</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Double Major</p>
                    <p className="text-muted-foreground text-sm">Finance & Political Science (BBA)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Minor</p>
                    <p className="text-muted-foreground text-sm">Legal Studies & Elementary Education</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* University of North Texas */}
          <Reveal delay={0.15}>
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 glow-gold">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    University of North Texas
                  </h3>
                  <p className="text-secondary text-sm">Aug 2025 - May 2027 (Online)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Major</p>
                    <p className="text-muted-foreground text-sm">Finance & Political Science</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Minor</p>
                    <p className="text-muted-foreground text-sm">Legal Studies & Elementary Education</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* High School */}
          <Reveal direction="left" delay={0.2}>
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 glow-gold">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Judge Barefoot Sanders Law Magnet
                  </h3>
                  <p className="text-secondary text-sm">Dallas, TX • 2021 - 2024</p>
                </div>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center gap-3">
                  <CountUp value={85} prefix="#" className="text-3xl font-bold text-gradient-gold" />
                  <div>
                    <p className="text-foreground font-medium">Nationwide Ranking</p>
                    <p className="text-muted-foreground text-sm">Selective Law Magnet Program</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Certifications */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Certifications
                </h3>
              </div>

              <RevealGroup className="flex flex-wrap gap-3" stagger={0.06}>
                {certifications.map((cert, index) => (
                  <RevealItem key={index}>
                    <span className={cert.color === "primary" ? "badge-blue" : "badge-gold"}>
                      {cert.name}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </SpotlightCard>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.15}>
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Languages className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Languages
                </h3>
              </div>

              <div className="space-y-4">
                <LanguageBar language="English" level="Native / Bilingual" />
                <LanguageBar language="Spanish" level="Native / Bilingual" />
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
