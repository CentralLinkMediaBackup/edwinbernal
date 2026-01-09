import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Code, FileSpreadsheet, Globe, Palette, BarChart3, Megaphone } from "lucide-react";

const skills = [
  { name: "Strategy", icon: Target },
  { name: "Business Dev", icon: TrendingUp },
  { name: "Executive Mgmt", icon: Users },
  { name: "Web Design", icon: Code },
  { name: "SEO", icon: BarChart3 },
  { name: "Analytics", icon: BarChart3 },
  { name: "Social Media", icon: Megaphone },
  { name: "Branding", icon: Palette },
  { name: "MS Office", icon: FileSpreadsheet },
  { name: "Google Suite", icon: Globe },
  { name: "Java", icon: Code },
  { name: "HTML", icon: Code },
];

const TechTicker = () => {
  return (
    <div className="relative">
      <div className="text-center mb-6">
        <span className="text-sm text-muted-foreground uppercase tracking-wider">
          Core Competencies
        </span>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex gap-6 ticker-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 glass-card whitespace-nowrap flex-shrink-0"
            >
              <skill.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechTicker;
