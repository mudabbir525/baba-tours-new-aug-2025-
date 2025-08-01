import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bus, 
  Users, 
  Fuel, 
  Clock, 
  AlertCircle, 
  Music, 
  Coffee, 
  MapPin, 
  Film, 
  Wifi, 
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const PricingSection = () => {
  const pricingData = [
    {
      vehicleType: "50 Seater",
      acFare: "₹61",
      nonAcFare: "₹51",
      driverCharges: "₹1000",
      icon: Bus,
      popular: true,
      capacity: "50 passengers"
    },
    {
      vehicleType: "40 Seater",
      acFare: "₹61",
      nonAcFare: "₹51",
      driverCharges: "₹1000",
      icon: Bus,
      popular: false,
      capacity: "40 passengers"
    },
    {
      vehicleType: "28 Seater",
      acFare: "₹40",
      nonAcFare: "₹33",
      driverCharges: "₹1000",
      icon: Users,
      popular: true,
      capacity: "28 passengers"
    },
    {
      vehicleType: "22 Seater",
      acFare: "₹40",
      nonAcFare: "₹33",
      driverCharges: "₹1000",
      icon: Users,
      popular: false,
      capacity: "22 passengers"
    },
    {
      vehicleType: "12 Seater",
      acFare: "₹26",
      nonAcFare: "₹23",
      driverCharges: "₹1000",
      icon: Users,
      popular: false,
      capacity: "12 passengers"
    }
  ];

  const amenities = [
    {
      icon: Shield,
      title: "Premium Comfort",
      description: "Luxury seats with ample legroom and reclining options",
      color: "text-primary"
    },
    {
      icon: Music,
      title: "Music System",
      description: "High-quality sound system with Bluetooth connectivity",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Scenic Stops",
      description: "Strategic stops at best sightseeing spots and photo points",
      color: "text-secondary"
    },
    {
      icon: Film,
      title: "Movie Arrangements",
      description: "On-request entertainment system for long journeys",
      color: "text-primary"
    },
    {
      icon: Coffee,
      title: "Refreshment Breaks",
      description: "Planned stops at quality restaurants and cafes",
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "WiFi Available",
      description: "Stay connected with complimentary internet access",
      color: "text-secondary"
    }
  ];

  const additionalInfo = [
    {
      icon: Fuel,
      title: "Fuel Included",
      description: "Fuel costs are included in the per-km pricing"
    },
    {
      icon: Clock,
      title: "Daily Limit",
      description: "Maximum 300 km/day (extra km chargeable due to driver effort)"
    },
    {
      icon: AlertCircle,
      title: "Additional Charges",
      description: "Toll, parking, border taxes borne by customer"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Premium Vehicle{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-red mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with luxury amenities and exceptional service
          </p>
        </motion.div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Luxury Amenities Included
            </h3>
            <p className="text-muted-foreground">Experience comfort and convenience on every journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group-hover:shadow-red">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-red rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <amenity.icon className={`w-8 h-8 text-white`} />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingData.map((vehicle, index) => (
            <motion.div
              key={vehicle.vehicleType}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-luxury relative ${
                vehicle.popular 
                  ? 'border-accent bg-gradient-to-br from-card to-accent/5 ring-2 ring-accent/20 scale-105' 
                  : 'bg-card/80 backdrop-blur-sm border-accent/20'
              } group-hover:scale-105`}>
                {vehicle.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-red text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-red rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <vehicle.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {vehicle.vehicleType}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{vehicle.capacity}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="text-3xl font-bold text-accent">{vehicle.acFare}</div>
                      <div className="text-xs text-muted-foreground">AC /km</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <div className="text-3xl font-bold text-secondary">{vehicle.nonAcFare}</div>
                      <div className="text-xs text-muted-foreground">Non-AC /km</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">{vehicle.driverCharges}</div>
                    <div className="text-xs text-muted-foreground">Driver charges/day</div>
                  </div> */}
                  
                  {/* Included features */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-primary text-sm">Included:</h5>
                    <div className="space-y-1">
                      {['Fuel charges', 'Professional driver', 'Comfort amenities'].map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant={vehicle.popular ? "red" : "luxury"} 
                    className="w-full"
                  >
                    Book {vehicle.vehicleType}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Parking ,Tolls & taxes are not Included
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {additionalInfo.map((info, index) => (
            <Card key={info.title} className="bg-card/60 backdrop-blur-sm border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-red rounded-full mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;