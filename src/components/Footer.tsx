import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "City Sightseeing",
    "School Field Trips",
    "Wedding Events",
    "Corporate Travel",
    "Outstation Trips"
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-red bg-clip-text text-transparent">
                  Baba Tours
                </span>{" "}
                and Travels
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner for comfortable and luxury travel experiences. 
                From city tours to outstation trips, we provide reliable transportation 
                services with professional drivers and well-maintained vehicles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">
                    Vanasthalipuram, Hyderabad
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">9396484899</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">
                    contact@babatoursandtravels.in
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-accent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-accent">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="text-primary-foreground/80">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-accent">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group"
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-primary-foreground/80">
                  Managed by{" "}
                  <span className="text-accent font-semibold">Mr. Pasha</span>
                </p>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Professional travel services since years
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 bg-primary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-primary-foreground/70 text-sm">
                © 2024 Baba Tours and Travels. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;