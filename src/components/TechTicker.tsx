import { Code, FileSpreadsheet, Globe, Terminal } from "lucide-react";

const skills = [
  { name: "Java", icon: Terminal },
  { name: "HTML", icon: Code },
  { name: "Microsoft Office Suite", icon: FileSpreadsheet },
  { name: "Google Platforms", icon: Globe },
  { name: "Legal Secretary Work", icon: FileSpreadsheet },
  { name: "Finance & Marketing", icon: Terminal },
  { name: "Teaching Expertise", icon: Globe },
];

const TechTicker = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="text-center text-sm text-muted-foreground mb-4 uppercase tracking-widest">
        Technical Skills & Expertise
      </p>
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex ticker-scroll">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 mx-2 glass-card whitespace-nowrap"
            >
              <skill.icon className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
