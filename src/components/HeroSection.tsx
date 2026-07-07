import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechTicker from "./TechTicker";
import ParticleNetwork from "./motion/ParticleNetwork";
import Magnetic from "./motion/Magnetic";
import { EASE_OUT } from "./motion/Reveal";
import edwinProfile from "@/assets/edwin-profile.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Node network — a nod to Central Link */}
      <ParticleNetwork className="absolute inset-0 h-full w-full" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
      <motion.div style={{ y: backdropY }} className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="aurora-delayed absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container relative z-10 px-6 pt-24 md:pt-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              style={{ y: portraitY }}
              className="relative flex-shrink-0"
            >
              <div className="portrait-frame relative w-64 h-64 md:w-80 md:h-80 rounded-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl glow-blue">
                  <img
                    src={edwinProfile}
                    alt="Edwin Bernal"
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
                className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center"
              >
                <span className="font-display text-2xl font-bold">
                  <span className="text-gradient-gold">E</span>
                  <span className="text-white">B</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div style={{ y: contentY, opacity: fade }} className="text-center lg:text-left flex-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="inline-flex items-center gap-2 badge-blue mb-6 mt-4 md:mt-0"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                First-Generation Student & Entrepreneur
              </motion.div>

              {/* Main Headline */}
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight overflow-hidden">
                <motion.span
                  initial={reduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
                  className="inline-block text-foreground"
                >
                  Edwin Bernal
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
                className="text-2xl md:text-3xl font-light mb-6"
              >
                <span className="text-gradient-gold">Company Owner</span>
              </motion.p>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
                className="text-xl md:text-2xl text-muted-foreground mb-6 font-light"
              >
                A&M Alumni | Project Manager, Prosperity Fire Protection, LLC
                <br />
                <span className="text-primary">Founder, Central Link Media, LLC</span>
                <span className="text-muted-foreground mx-2">|</span>
                <span className="text-secondary">53K+ Followers on Instagram</span>
              </motion.p>

              {/* Bio Blurb */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
                className="glass-card p-6 mb-10 max-w-3xl mx-auto"
              >
                <p className="text-muted-foreground leading-relaxed">
                  I am a driven leader, strategist, and entrepreneur currently pursuing a double major in{" "}
                  <span className="text-primary font-medium">Finance</span> and{" "}
                  <span className="text-primary font-medium">Political Science</span> with minors in{" "}
                  <span className="text-secondary font-medium">Legal Studies</span> and{" "}
                  <span className="text-secondary font-medium">Elementary Education</span>. A graduate of the{" "}
                  <span className="text-secondary font-medium">Judge Barefoot Sanders Law Magnet</span>{" "}
                  (ranked #85 nationwide), my academic foundation in business, law, and governance strengthens
                  my work as a founder and future <span className="text-primary font-medium">corporate attorney</span>.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Magnetic>
                  <Button
                    size="lg"
                    className="group w-full sm:w-auto bg-gradient-to-r from-primary to-electric-glow hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-blue"
                    onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Ventures
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary font-semibold px-8 py-6 text-lg rounded-xl"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </Magnetic>
              </motion.div>

              {/* Tech Stack Ticker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pb-20"
              >
                <TechTicker />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ opacity: fade }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
