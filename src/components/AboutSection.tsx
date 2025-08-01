import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Vanasthalipuram, Hyderabad",
    },
    {
      icon: Phone,
      label: "Contact",
      value: "9396484899",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@babatoursandtravels.in",
    },
    {
      icon: User,
      label: "Managed by",
      value: "Mr. Pasha",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Baba Tours and Travels
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-red mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Card className="bg-card/80 backdrop-blur-sm shadow-luxury border-accent/20">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We offer a wide range of vehicles – from 50-seater buses to sedans – 
                  with AC/Non-AC options, perfect for city tours, school field trips, 
                  marriages, corporate outings, and outstation travel. Experience comfort, 
                  reliability, and luxury with every journey.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-card/60 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-gold border-accent/20 group-hover:border-accent/40">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-red rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;