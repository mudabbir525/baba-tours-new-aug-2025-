import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart, Briefcase, Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "City Sightseeing",
      description: "Explore Hyderabad's iconic landmarks like Charminar, Ramoji Film City, Golkonda Fort, and more with our comfortable vehicles.",
      features: ["Professional drivers", "Flexible timing", "All major attractions"]
    },
    {
      icon: GraduationCap,
      title: "School & College Field Trips",
      description: "Safe and reliable transportation for educational institutions with experienced drivers and well-maintained vehicles.",
      features: ["Safety first", "Experienced drivers", "Affordable rates"]
    },
    {
      icon: Heart,
      title: "Marriages & Events",
      description: "Make your special day memorable with our luxury vehicles for wedding parties, guests, and ceremonial transportation.",
      features: ["Decorated vehicles", "Punctual service", "Large fleet"]
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Professional transportation solutions for business meetings, conferences, and corporate events with premium vehicles.",
      features: ["Premium comfort", "On-time service", "Professional drivers"]
    },
    {
      icon: Car,
      title: "Outstation Rentals",
      description: "Long-distance travel made comfortable with our well-maintained fleet for outstation trips and weekend getaways.",
      features: ["Long distance", "Fuel included", "Flexible packages"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Premium{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-red mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transportation solutions for every occasion and journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-luxury border-accent/20 group-hover:border-accent/40 group-hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-red rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;