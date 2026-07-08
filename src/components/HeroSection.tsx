import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import TechTicker from "./TechTicker";
import ParticleNetwork from "./motion/ParticleNetwork";
import Magnetic from "./motion/Magnetic";
import CircularText from "./motion/CircularText";
import { EASE_OUT } from "./motion/Reveal";
import { scrollToTarget } from "@/lib/scroll";
import edwinProfile from "@/assets/edwin-profile.png";

const lineReveal = (delay: number, reduce: boolean) => ({
  initial: reduce ? { opacity: 0 } : { y: "110%" },
  animate: reduce ? { opacity: 1 } : { y: 0 },
  transition: { duration: 0.9, delay, ease: EASE_OUT },
});

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 140]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const D = reduceMotion ? 0 : 1.6; // delay offset after preloader curtain lifts

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 md:pt-32">
      {/* Ink node network — the Central Link motif, whisper-quiet on paper */}
      <ParticleNetwork className="absolute inset-0 h-full w-full opacity-70" />

      <div className="container relative z-10 px-6 flex-1 flex flex-col justify-center">
        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: D }}
          className="rule pt-4 mb-8 md:mb-12 flex flex-wrap items-center justify-between gap-3"
        >
          <span className="eyebrow text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt inline-block" />
            First-Generation Student &amp; Entrepreneur
          </span>
          <span className="eyebrow text-muted-foreground hidden md:block">Texas — Portfolio</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Headline block */}
          <motion.div style={{ y: headlineY, opacity: fade }} className="lg:col-span-8">
            <h1 className="font-display font-light tracking-tight leading-[0.9] text-ink text-[17vw] sm:text-[13vw] lg:text-[9.5rem] xl:text-[11rem]">
              <span className="block overflow-hidden">
                <motion.span {...lineReveal(D + 0.05, !!reduceMotion)} className="block">
                  Edwin
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span {...lineReveal(D + 0.18, !!reduceMotion)} className="block">
                  <span className="font-display-italic text-cobalt">Bernal</span>
                </motion.span>
              </span>
            </h1>

            <div className="overflow-hidden mt-6">
              <motion.p
                {...lineReveal(D + 0.35, !!reduceMotion)}
                className="font-display-italic text-2xl md:text-3xl text-ink"
              >
                Company Owner
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: D + 0.5, ease: EASE_OUT }}
              className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              A&amp;M Alumni&ensp;|&ensp;<span className="text-ink font-medium">Founder, Central Link Media, LLC</span>
              <br />
              Project Manager, Prosperity Fire Protection, LLC
              <span className="mx-2 text-border">|</span>
              <span className="text-cobalt font-medium">53K+ Followers on Instagram</span>
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: D + 0.65, ease: EASE_OUT }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Magnetic>
                <button
                  onClick={() => scrollToTarget('#ventures')}
                  className="btn-editorial-fill px-8 py-4 text-base"
                >
                  View My Ventures
                  <ArrowDown className="h-4 w-4" />
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => scrollToTarget('#contact')}
                  className="btn-editorial px-8 py-4 text-base"
                >
                  Contact Me
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: D + 0.4, ease: EASE_OUT }}
            className="lg:col-span-4 relative max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:justify-self-end"
          >
            <div className="relative border border-ink bg-card">
              <img
                src={edwinProfile}
                alt="Edwin Bernal"
                className="w-full aspect-[4/5] object-cover object-[center_35%]"
              />
              <div className="rule px-4 py-3 flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">Est. Dallas</span>
                <span className="font-display-italic text-ink">2025</span>
              </div>
            </div>
            <CircularText
              text="FOUNDER & CEO — CENTRAL LINK MEDIA — "
              className="absolute -top-12 -left-12 text-ink hidden md:block"
              size={128}
            />
          </motion.div>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: D + 0.8, ease: EASE_OUT }}
          className="rule mt-14 pt-8 grid grid-cols-1 md:grid-cols-12 gap-4 pb-16"
        >
          <span className="eyebrow text-muted-foreground md:col-span-3">About</span>
          <div className="md:col-span-9 max-w-3xl text-base md:text-lg leading-relaxed text-ink/80 space-y-4">
            <p>
              I am a driven leader, strategic thinker, and entrepreneur with a passion for creating
              meaningful impact through business, innovation, and leadership. I am currently pursuing a
              double major in <em className="font-display-italic text-cobalt not-italic">Finance</em> and{" "}
              <em className="font-display-italic text-cobalt not-italic">Political Science</em>,
              complemented by minors in <em className="font-display-italic text-cobalt not-italic">Legal Studies</em> and{" "}
              <em className="font-display-italic text-cobalt not-italic">Elementary Education</em> —
              a multidisciplinary perspective on business strategy, governance, and organizational
              success. My academic journey reflects a commitment to understanding not only how
              businesses operate, but how legal and financial systems shape industries and communities.
            </p>
            <p>
              As a graduate of the{" "}
              <em className="font-display-italic not-italic">Judge Barefoot Sanders Law Magnet</em> —
              recognized among the nation's top high schools and ranked{" "}
              <em className="font-display-italic text-cobalt not-italic">#84 nationally</em> — I built a
              strong foundation in legal studies, critical thinking, and civic leadership that continues
              to shape my approach to decision-making, problem-solving, and strategic leadership.
            </p>
            <p>
              Today, I apply that foundation as the{" "}
              <em className="font-display-italic text-cobalt not-italic">Founder &amp; CEO of Central Link Media</em>,
              leading initiatives in digital marketing, branding, website development, and business
              growth strategies for organizations across a variety of industries. My long-term aspiration
              is to build Central Link Media into{" "}
              <em className="font-display-italic text-cobalt not-italic">one of the premier marketing agencies in Texas</em> —
              recognized for innovative solutions, measurable results, and exceptional client service.
              As both founder and chief executive, I am committed to cultivating a company that sets the
              standard for excellence, empowers businesses to achieve sustainable growth, and creates a
              lasting impact on the communities and clients we serve. Through continuous learning,
              disciplined leadership, and an unwavering commitment to quality, I aim to establish a
              legacy of <em className="font-display-italic not-italic">innovation, integrity, and entrepreneurial success</em>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Competencies ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: D + 1 }}
        className="relative z-10"
      >
        <TechTicker />
      </motion.div>
    </section>
  );
};

export default HeroSection;
