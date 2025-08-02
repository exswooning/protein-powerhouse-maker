import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Skull, Crown } from "lucide-react";
import gothicProtein from "@/assets/gothic-protein.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-shadow-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gothic-gradient opacity-80"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent/5 to-accent/20"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Crown className="w-8 h-8 text-accent mr-3" />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="ml-3 text-muted-foreground font-gothic font-medium">Forged by 2,500+ Warriors</span>
            </div>
            
            <h1 className="font-pirate text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-gothic-glow">
              <span className="text-foreground">DARK</span>
              <br />
              <span className="bg-blood-gradient bg-clip-text text-transparent">
                DOMINION
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl font-gothic">
              Forged in darkness, perfected through pain. 25g of pure protein to fuel your ascension. 
              No mercy, no compromise. Only power.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="px-8 py-4 text-lg backdrop-blur-md bg-blood-gradient/80 border border-white/20">
                <Skull className="w-5 h-5 mr-2" />
                Kinnu Sakti - $49.99
              </Button>
              <Button variant="gothic" size="lg" className="px-8 py-4 text-lg backdrop-blur-sm bg-black/40 border border-accent/30">
                Hernu Andhakaar
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground font-gothic">
              <div className="text-center">
                <div className="font-bold text-accent text-2xl">25g</div>
                <div>Pure Protein</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-accent text-2xl">0g</div>
                <div>Weakness</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-accent text-2xl">110</div>
                <div>Dark Energy</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative animate-blood-pulse">
              <img
                src={gothicProtein}
                alt="Dark Dominion Protein"
                className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-blood-gradient opacity-30 blur-3xl rounded-full"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 border border-accent/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;