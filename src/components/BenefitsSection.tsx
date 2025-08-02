import { Flame, Shield, Sword, Skull } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Infernal Absorption",
    description: "Whey protein isolate engineered for rapid dominance and dark muscle recovery"
  },
  {
    icon: Shield,
    title: "Unholy Purity",
    description: "Forged in darkness, tested by fire. No weakness, no fillers, only power"
  },
  {
    icon: Sword,
    title: "Warrior's Choice",
    description: "Wielded by champions of the abyss and masters of their domain"
  },
  {
    icon: Skull,
    title: "Mortal Transcendence",
    description: "Ascend beyond human limits. Embrace the darkness within"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gothic-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pirate text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Powers of the</span>{" "}
            <span className="bg-blood-gradient bg-clip-text text-transparent animate-gothic-glow">
              Abyss
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-gothic">
            Harness ancient powers forged in shadow. Each scoop unleashes the darkness within.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg border border-accent/30 hover:shadow-blood transition-haunting hover:scale-105 bg-card shadow-deep hover:border-accent/60"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blood-gradient rounded-full flex items-center justify-center border border-accent/40">
                <benefit.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground font-gothic">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-gothic">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;