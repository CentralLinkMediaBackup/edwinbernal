import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, fadeScale } from "./motion/Reveal";
import SectionHeader from "./SectionHeader";

const badges = [
  { title: "Mock Trial President", subtitle: "ETAMU" },
  { title: "Model UN President", subtitle: "Leadership" },
  { title: "Debate Team President", subtitle: "ETAMU" },
  { title: "Moot Court President", subtitle: "ETAMU" },
  { title: "College of Business Senator", subtitle: "Student Government" },
  { title: "Pi Sigma Alpha Honor Society", subtitle: "Member & Leader" },
  { title: "Sigma Chi Fraternity", subtitle: "ΣΧ Brother" },
  { title: "ETAMU Lion Ambassador", subtitle: "Campus Representative" },
  { title: "Future Leaders of America", subtitle: "Member" },
  { title: "Project Transformation", subtitle: "Best Lite (3x Winner)" },
];

const honorsAwards = [
  { title: "Best Lite Award", subtitle: "3 Consecutive Years" },
  { title: "Congressional Recognition", subtitle: "Presented by Jasmine Crockett (U.S. Representative)" },
  { title: "ESUME Entrepreneur Scholarship", subtitle: "Scholarship Recipient" },
];

const BadgesSection = () => {
  return (
    <section id="leadership" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6">
        <SectionHeader
          number="03"
          eyebrow="Recognition"
          title="Leadership & Extracurriculars"
          accentWord="Extracurriculars"
          description="Positions of leadership and organizations that have shaped my journey."
        />

        {/* Positions grid — tiles invert to ink on hover */}
        <RevealGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border"
          stagger={0.05}
        >
          {badges.map((badge, index) => (
            <RevealItem key={index} variants={fadeScale} className="border-b border-r border-border">
              <div className="card-invert border-0 h-full p-6 flex flex-col justify-between min-h-[180px] cursor-default">
                <span className="font-display text-sm invert-dim text-muted-foreground">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <div>
                  <h3 className="font-display font-normal text-lg leading-snug mb-1">
                    {badge.title}
                  </h3>
                  <p className="eyebrow invert-dim text-muted-foreground">{badge.subtitle}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Honors & Awards */}
        <Reveal className="mt-24" delay={0.1}>
          <div className="rule pt-6 mb-10 flex items-baseline justify-between">
            <span className="eyebrow text-muted-foreground">Honors &amp; Awards</span>
            <span className="font-display text-sm text-muted-foreground">(03.1)</span>
          </div>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10" stagger={0.1}>
            {honorsAwards.map((award, index) => (
              <RevealItem key={index}>
                <div className="group">
                  <span className="font-display-italic text-5xl md:text-6xl text-cobalt block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display font-light text-2xl md:text-3xl text-ink tracking-tight mb-2 group-hover:text-cobalt transition-colors duration-300">
                    {award.title}
                  </h4>
                  <p className="text-muted-foreground">{award.subtitle}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* Featured Press */}
        <Reveal className="mt-24" delay={0.1}>
          <a
            href="https://www.etamu.edu/news/transforming-lives-through-leadership-edwin-zack-bernals-path-of-purpose-and-perseverance/"
            target="_blank"
            rel="noopener noreferrer"
            className="row-hover rule group block py-10 px-2 md:px-4 -mx-2 md:-mx-4"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="eyebrow text-cobalt block mb-3">Featured in ETAMU News</span>
                <p className="font-display font-light text-2xl md:text-4xl text-ink tracking-tight leading-snug max-w-3xl group-hover:text-cobalt transition-colors duration-300">
                  "Transforming Lives Through Leadership: Edwin Zack Bernal's Path of Purpose and Perseverance"
                </p>
                <p className="eyebrow text-muted-foreground mt-4">
                  East Texas A&amp;M University Official News
                </p>
              </div>
              <ArrowUpRight className="h-8 w-8 text-ink flex-shrink-0 mt-2 group-hover:text-cobalt group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </a>

          {/* Publication */}
          <div className="row-hover rule group py-10 px-2 md:px-4 -mx-2 md:-mx-4">
            <span className="eyebrow text-cobalt block mb-3">Publication</span>
            <p className="font-display-italic text-2xl md:text-3xl text-ink leading-snug max-w-3xl">
              "Poison or Cure? Comparison Among Students and its effect on Mental Health"
            </p>
          </div>
          <div className="rule" />
        </Reveal>
      </div>

      {/* Full-bleed marquee of positions */}
      <Reveal className="mt-20 border-y border-border overflow-hidden" delay={0.1}>
        <div className="flex ticker-scroll-fast pause-on-hover py-5">
          {[...badges, ...badges].map((badge, index) => (
            <span key={index} className="flex items-center whitespace-nowrap flex-shrink-0">
              <span className="px-6 font-display font-light text-2xl text-ink">{badge.title}</span>
              <span className="text-cobalt font-display" aria-hidden="true">✳</span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default BadgesSection;
