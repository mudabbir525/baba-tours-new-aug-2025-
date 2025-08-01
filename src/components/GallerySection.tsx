import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import bus50Seater from "@/assets/bus-50-seater.jpg";
import sedan from "@/assets/sedan.jpg";


const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/38/0b/aa.jpg",
      title: "50 Seater Luxury Bus",
      category: "Vehicles",
      description: "Premium comfort for large groups"
    },
    {
      id: 2,
      image: sedan,
      title: "Luxury Sedan",
      category: "Vehicles",
      description: "Executive travel in style"
    },
    {
      id: 3,
      image: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/Charminar-Hyderabad.jpg?fit=1000%2C551&ssl=1",
      title: "Charminar",
      category: "Destinations",
      description: "Historic monument tour"
    },
    {
      id: 4,
      image: "https://www.simplytrip.in/upload/home/new-mobile-banner.webp",
      title: "Tourist Bus Fleet",
      category: "Vehicles",
      description: "Modern fleet for every need"
    },
    {
      id: 5,
      image: "https://assets-news.housing.com/news/wp-content/uploads/2020/11/02184143/Everything-you-need-to-know-about-Golconda-Fort-FB-1200x700-compressed.jpg",
      title: "Golkonda Fort",
      category: "Destinations",
      description: "Majestic fort exploration"
    },
    {
      id: 6,
      image: "https://cdn0.weddingwire.in/vendor/2596/3_2/640/jpg/tvf64439_15_442596-168534840339999.jpeg",
      title: "Wedding Transportation",
      category: "Events",
      description: "Special occasion vehicles"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1688658475871-cbb49a044f42?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hussain Sagar",
      category: "Destinations",
      description: "Lakeside Scenic Rides"
},
    {
      id: 8,
      image: "https://i.pinimg.com/736x/93/32/f8/9332f8a07ae4551efeec53325f0917c6.jpg",
      title: "HI-Tech City",
      category: "Destinations",
      description: "Corporate Travel Hub"
},
    {
      id: 8,
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/birla-temple-hyderabad-secunderabad-telangana-1-attr-hero?qlt=82&ts=1742170051392",
      title: "Birla Telmple",
      category: "Destinations",
      description: "Peaceful Spiritual Retreat"
}
    
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-red mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our premium fleet and the beautiful destinations we serve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group-hover:shadow-luxury">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;