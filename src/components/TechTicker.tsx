const skills = [
  "Strategy",
  "Business Dev",
  "Executive Mgmt",
  "Web Design",
  "SEO",
  "Analytics",
  "Social Media",
  "Branding",
  "MS Office",
  "Google Suite",
  "Java",
  "HTML",
];

/** Full-bleed marquee of core competencies between hairline rules. */
const TechTicker = () => {
  return (
    <div className="border-y border-border bg-paper overflow-hidden relative">
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 z-10 items-center bg-paper border-r border-border px-6">
        <span className="eyebrow text-muted-foreground">Core Competencies</span>
      </div>
      <span className="lg:hidden sr-only">Core Competencies</span>
      <div className="flex ticker-scroll pause-on-hover py-4">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="flex items-center whitespace-nowrap flex-shrink-0 eyebrow text-ink"
          >
            <span className="px-6">{skill}</span>
            <span className="text-cobalt font-display" aria-hidden="true">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
