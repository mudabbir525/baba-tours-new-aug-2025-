import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "9396484899",
      description: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@babatoursandtravels.in",
      description: "Quick response guaranteed"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Vanasthalipuram, Hyderabad",
      description: "Telangana, India"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24/7 Service",
      description: "Always at your service"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get In{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-red mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to plan your next journey? Contact us for bookings and inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-accent/20 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-accent/20 focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="luxury" 
                    size="lg" 
                    className="w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-gold">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg font-medium text-foreground mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;