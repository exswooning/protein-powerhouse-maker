import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Morgana Blackheart",
    role: "Shadow Warrior",
    rating: 5,
    content: "This elixir has awakened powers within me I never knew existed. Each sip brings me closer to absolute dominance. The darkness flows through my veins."
  },
  {
    name: "Viktor Grimwald",
    role: "Master of Pain",
    rating: 5,
    content: "In the abyss of competition, only the strongest survive. This protein has been my weapon of choice for transcending mortal limitations."
  },
  {
    name: "Raven Nightshade",
    role: "High Priestess of Iron",
    rating: 5,
    content: "I have guided countless souls to their physical awakening. This dark formula is the key to unlocking one's true potential. Embrace the darkness."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-shadow-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pirate text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Voices from the</span>{" "}
            <span className="bg-blood-gradient bg-clip-text text-transparent animate-gothic-glow">
              Abyss
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-gothic">
            Hear the testimonies of those who have embraced the darkness and emerged victorious
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-blood transition-haunting hover:scale-105 bg-card border-accent/30">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-card-foreground mb-6 leading-relaxed font-gothic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-card-foreground font-gothic">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm font-gothic">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;