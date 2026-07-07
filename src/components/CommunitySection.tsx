import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import CountUp from "./motion/CountUp";
import SectionHeader from "./SectionHeader";

const efforts = [
  {
    name: "Light Program",
    hours: 960,
    suffix: "",
    description:
      "Cared for toddlers in a church setting, providing a safe and nurturing environment for young children while supporting families in the community.",
  },
  {
    name: "Proyecto Inmigrante",
    hours: 147,
    suffix: "",
    description:
      "Assisted with informational drives on Sundays, helping community members access vital resources and citizenship information.",
  },
  {
    name: "Future Leaders of America",
    hours: 35,
    suffix: "+",
    description:
      "Volunteered during Christmas and Thanksgiving, helping feed homeless and low-income families.",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <SectionHeader
          number="05"
          eyebrow="Giving Back"
          title="Community Impact"
          accentWord="Impact"
          description="Service to others has always been at the heart of my journey."
        />

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-x-10" stagger={0.12}>
          {efforts.map((effort, index) => (
            <RevealItem key={index}>
              <div className="rule pt-8 group h-full">
                <div className="flex items-baseline gap-1 mb-6">
                  <CountUp
                    value={effort.hours}
                    suffix={effort.suffix}
                    className="font-display font-light text-7xl md:text-8xl text-ink leading-none tracking-tight group-hover:text-cobalt transition-colors duration-500"
                  />
                  <span className="font-display-italic text-2xl text-muted-foreground">hrs</span>
                </div>
                <h3 className="font-display font-normal text-2xl text-ink tracking-tight mb-3">
                  {effort.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {effort.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="rule mt-16" delay={0.1}>
          <span className="sr-only">End of community section</span>
        </Reveal>
      </div>
    </section>
  );
};

export default CommunitySection;
