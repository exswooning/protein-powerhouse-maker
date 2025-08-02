import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Trainer",
    rating: 5,
    content: "This protein powder has completely transformed my recovery time. The taste is incredible and it mixes perfectly every time. My clients love it too!"
  },
  {
    name: "Mike Chen",
    role: "Professional Athlete",
    rating: 5,
    content: "As a competitive athlete, I need the best nutrition. This protein delivers exactly what I need for peak performance and recovery."
  },
  {
    name: "Emma Davis",
    role: "Nutritionist",
    rating: 5,
    content: "I recommend this to all my clients. The quality is outstanding and the macronutrient profile is exactly what you want in a premium protein."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">What Our</span>{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied customers who've achieved their fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
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