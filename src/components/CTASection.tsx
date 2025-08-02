import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-foreground">
          Ready to Transform Your Fitness?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join over 10,000+ athletes who trust our premium protein for their fitness journey. 
          Get yours today with free shipping on orders over $50.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Order Now - $49.99
          </Button>
          <div className="flex items-center text-primary-foreground/80">
            <Truck className="w-5 h-5 mr-2" />
            <span>Free shipping on orders $50+</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            30-day money-back guarantee
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Third-party tested for quality
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Fast 2-3 day shipping
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;