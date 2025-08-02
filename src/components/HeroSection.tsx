import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import proteinHero from "@/assets/protein-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-surface-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground font-medium">4.9/5 from 2,500+ reviews</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">FUEL YOUR</span>
              <br />
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                POTENTIAL
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Premium whey protein isolate with 25g protein per serving. 
              Zero sugar, maximum results. Trusted by athletes worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Now - $49.99
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-primary text-lg">25g</div>
                <div>Protein</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary text-lg">0g</div>
                <div>Sugar</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary text-lg">110</div>
                <div>Calories</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative animate-pulse-glow">
              <img
                src={proteinHero}
                alt="Premium Protein Powder"
                className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-accent-gradient opacity-20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;