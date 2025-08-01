import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Corporate Manager",
      content: "Excellent service for our company outings. The buses were clean, comfortable, and the drivers were very professional. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Wedding Planner",
      content: "Baba Tours made our wedding transportation seamless. All guests reached venues on time with comfortable AC buses. Outstanding coordination!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Venkatesh",
      role: "School Principal",
      content: "Safe and reliable service for our school trips. Parents trust us because we trust Baba Tours. Their safety standards are exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Anita Reddy",
      role: "Tourist",
      content: "Wonderful city tour experience! The driver was knowledgeable about all tourist spots and the vehicle was spotlessly clean. Great value for money.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Event Organizer",
      content: "From small sedans to large buses, they have everything! Professional service and competitive pricing. Our go-to partner for all events.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Meera Patel",
      role: "HR Manager",
      content: "Punctual, professional, and pleasant experience every time. Their customer service is top-notch and drivers are courteous.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-red mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by thousands of satisfied customers across Hyderabad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-luxury group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-accent" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    {/* <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                    /> */}
                    <div>
                      <h4 className="font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;