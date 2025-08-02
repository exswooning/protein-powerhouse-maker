import { Button } from "@/components/ui/button";
import { ShoppingCart, Skull } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gothic-gradient relative overflow-hidden border-t border-accent/30">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-pirate text-4xl lg:text-7xl font-bold mb-8 text-foreground animate-gothic-glow">
          Embrace Your Dark Destiny
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-gothic">
          Join the legion of 10,000+ warriors who have surrendered to the darkness. 
          Your transformation awaits. Free shipping for orders worthy of the abyss ($50+).
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="px-10 py-5 text-xl">
            <Skull className="w-6 h-6 mr-3" />
            Claim Your Dominion - $49.99
          </Button>
          <div className="flex items-center text-muted-foreground font-gothic">
            <Skull className="w-5 h-5 mr-2 text-accent" />
            <span>Free shipping for the worthy ($50+)</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-gothic">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></span>
            30-day blood oath guarantee
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></span>
            Forged in shadow, tested by fire
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></span>
            Swift as darkness (2-3 days)
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;