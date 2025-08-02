import { Zap, Shield, Trophy, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Absorption",
    description: "Whey protein isolate for rapid muscle recovery and growth"
  },
  {
    icon: Shield,
    title: "Pure Quality",
    description: "Third-party tested for purity and potency. No fillers or artificial additives"
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Trusted by professional athletes and fitness enthusiasts worldwide"
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Supports lean muscle mass, weight management, and overall wellness"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Why Choose</span>{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Our Protein?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scientifically formulated for maximum results with premium ingredients you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-gradient rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
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