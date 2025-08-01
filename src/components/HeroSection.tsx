import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bus.jpg";


const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-accent/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10  px-3 sm:px-5 lg:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <span className="font-archivo bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-7xl mt-2">
  BABA
</span>

        <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-primary-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            
            <span className="block bg-gradient-red bg-clip-text text-transparent mt-2">
            
      <span className="font-archivo mt-9 text-white">Tours and Travels</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience premium travel services with our wide range of luxury vehicles 
            for all your journey needs
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="luxury" 
              
              size="xl"
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg font-semibold">Book Your Trip</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>
            
            <Button 
              variant="premium" 
              size="xl"
              className="group"
            >
              <span className="text-lg">View Fleet</span>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-12 bg-primary-foreground/50 rounded-full relative">
          <motion.div 
            className="w-1 h-3 bg-accent rounded-full absolute top-0"
            animate={{ y: [0, 36, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;