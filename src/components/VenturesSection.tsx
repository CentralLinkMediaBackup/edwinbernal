import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import CountUp from "./motion/CountUp";
import SectionHeader from "./SectionHeader";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface Venture {
  index: string;
  name: string;
  role: string;
  period: string;
  logo: string;
  description: string;
  duties?: string[];
  stats: Stat[];
}

const ventures: Venture[] = [
  {
    index: "01",
    name: "Central Link Media, LLC",
    role: "Founder & CEO",
    period: "Nov 2025 — Present",
    logo: "/logos/central-link-media.png",
    description:
      "As the Founder & CEO of CentralLink Media, I provide executive leadership and strategic direction for a digital marketing agency focused on delivering high-quality, results-driven solutions for small and mid-sized businesses. Services include web design, brand development, social media management, SEO, and digital analytics.",
    stats: [
      { value: 11, label: "Team Members" },
      { value: 16, suffix: "+", label: "Secured Contracts" },
      { value: 3, label: "Day Delivery" },
    ],
  },
  {
    index: "02",
    name: "Business Influencer",
    role: "@edwinbernal.tx",
    period: "Oct 2025 — Present",
    logo: "/logos/instagram.png",
    description:
      "Building a business-focused audience on Instagram — sharing the wins, losses, and lessons of running companies as a first-generation entrepreneur.",
    stats: [
      { value: 53, suffix: "K+", label: "Followers" },
      { value: 1, suffix: "M+", label: "Monthly Impressions" },
    ],
  },
  {
    index: "03",
    name: "Prosperity Fire Protection, LLC",
    role: "Senior Project Manager",
    period: "July 2025 — Present",
    logo: "/logos/prosperity-fire.png",
    description:
      "Leading fire protection projects from inception to completion, coordinating with clients, contractors, and teams to ensure timely delivery. Managing project schedules, budgets, and resources while ensuring compliance with safety regulations and quality standards.",
    duties: [
      "Manage high-priority schedules, contracts, and compliance documentation",
      "Support financial planning, budget oversight, invoicing, and expense tracking",
    ],
    stats: [],
  },
  {
    index: "04",
    name: "Sterling Social Web Services",
    role: "Founder",
    period: "Jan — Nov 2025",
    logo: "/logos/sterling-social.png",
    description:
      "Dallas-based digital solutions company helping small businesses grow their online presence with affordable, high-quality website design and digital branding services. I ultimately sold my shares in the company when my co-owners shifted their focus toward larger clients and began stepping away from the small businesses that had originally placed their trust in us — a direction I wasn't willing to take.",
    stats: [{ value: 47, suffix: "K", label: "Revenue in 8 Months" }],
  },
];

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-14 md:py-20 relative">
      <div className="container px-6">
        <SectionHeader
          number="01"
          eyebrow="Current Leadership"
          title="My Ventures"
          accentWord="Ventures"
          description="Leading organizations and building businesses that create real impact."
        />

        <div>
          {ventures.map((venture, i) => (
            <Reveal key={venture.index} delay={i * 0.05}>
              <article className="row-hover rule group grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 py-10 md:py-14 px-2 md:px-4 -mx-2 md:-mx-4">
                {/* Index + period + logo */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between gap-4">
                  <div>
                    <span className="font-display font-light text-2xl md:text-3xl text-ink block">
                      ({venture.index})
                    </span>
                    <span className="eyebrow text-sm text-muted-foreground mt-2 block">
                      {venture.period}
                    </span>
                  </div>
                  <img
                    src={venture.logo}
                    alt={`${venture.name} logo`}
                    loading="lazy"
                    className="h-14 w-14 md:h-16 md:w-16 object-contain flex-shrink-0 lg:mt-4"
                  />
                </div>

                {/* Name + role */}
                <div className="lg:col-span-5">
                  <h3 className="font-display font-light tracking-tight text-3xl md:text-5xl text-ink leading-tight group-hover:text-cobalt transition-colors duration-300">
                    {venture.name}
                  </h3>
                  <p className="font-display-italic text-xl text-muted-foreground mt-2">
                    {venture.role}
                  </p>
                </div>

                {/* Description + duties + stats */}
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {venture.description}
                  </p>

                  {venture.duties && (
                    <ul className="mt-4 space-y-2">
                      {venture.duties.map((duty, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ArrowUpRight className="h-4 w-4 text-cobalt mt-0.5 flex-shrink-0" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  )}

                  {venture.stats.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                      {venture.stats.map((stat, j) => (
                        <div key={j}>
                          <CountUp
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            className="font-display font-light text-4xl md:text-5xl text-ink block"
                          />
                          <span className="eyebrow text-muted-foreground">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
