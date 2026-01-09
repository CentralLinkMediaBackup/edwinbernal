import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechTicker from "./TechTicker";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 badge-blue mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            First-Generation Student & Entrepreneur
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Edwin Bernal</span>
            <br />
            <span className="text-gradient-gold">Future Corporate Attorney</span>
            <br />
            <span className="text-gradient-blue">& Entrepreneur</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6 font-light"
          >
            Finance & Political Science Major at East Texas A&M University
            <br />
            <span className="text-primary">Founder of Central Link Media</span>
          </motion.p>

          {/* Bio Blurb */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 mb-10 max-w-3xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a 20-year-old First-Generation student with high goals. A graduate of the{" "}
              <span className="text-secondary font-medium">Judge Barefoot Sanders Law Magnet</span>{" "}
              (ranked #85 nationwide), I am the first in my family to finish high school and graduate
              from such a selective program. My goal is to become a{" "}
              <span className="text-primary font-medium">corporate attorney</span> and eventually a{" "}
              <span className="text-secondary font-medium">State Representative</span>.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-electric-glow hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-blue"
              onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View My Ventures
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary font-semibold px-8 py-6 text-lg rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          {/* Tech Stack Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TechTicker />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
