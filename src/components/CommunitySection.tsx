import { Heart, Clock, Users, Gift, Star } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, SplitWords, fadeScale } from "./motion/Reveal";
import SpotlightCard from "./motion/SpotlightCard";
import CountUp from "./motion/CountUp";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-6">
        <Reveal className="text-center mb-16">
          <span className="badge-gold mb-4 inline-block">Giving Back</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <SplitWords
              text="Community Impact"
              wordClassName={(word) => (word === "Impact" ? "text-gradient-gold" : undefined)}
            />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Service to others has always been at the heart of my journey.
          </p>
        </Reveal>

        <RevealGroup className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12}>
          {/* Light Program */}
          <RevealItem variants={fadeScale}>
            <SpotlightCard className="p-8 relative h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Light Program
                  </h3>
                </div>

                <div className="glass-card p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <CountUp value={960} className="text-4xl font-bold text-gradient-gold" />
                      <span className="text-muted-foreground ml-2">hours</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Cared for toddlers in a church setting, providing a safe and nurturing
                  environment for young children while supporting families in the community.
                </p>
              </div>
            </SpotlightCard>
          </RevealItem>

          {/* Proyecto Inmigrante Volunteer */}
          <RevealItem variants={fadeScale}>
            <SpotlightCard className="p-8 relative h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Proyecto Inmigrante
                  </h3>
                </div>

                <div className="glass-card p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-secondary" />
                    <div>
                      <CountUp value={147} className="text-4xl font-bold text-gradient-blue" />
                      <span className="text-muted-foreground ml-2">hours</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Assisted with informational drives on Sundays, helping community
                  members access vital resources and citizenship information.
                </p>
              </div>
            </SpotlightCard>
          </RevealItem>

          {/* Future Leaders of America */}
          <RevealItem variants={fadeScale}>
            <SpotlightCard className="p-8 relative h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Future Leaders of America
                  </h3>
                </div>

                <div className="glass-card p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <CountUp value={35} suffix="+" className="text-4xl font-bold text-gradient-gold" />
                      <span className="text-muted-foreground ml-2">hours</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    Volunteered during Christmas and Thanksgiving, helping feed
                    homeless and low-income families.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
};

export default CommunitySection;
