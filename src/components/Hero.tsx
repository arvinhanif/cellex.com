import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const banners = [
    {
      id: 1,
      title: "Flash Sale",
      subtitle: "Up to 50% Off",
      description: "Limited time offer on electronics",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Shop Now",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Fashion Collection",
      description: "Discover the latest trends",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Explore",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Home & Garden",
      subtitle: "Transform Your Space",
      description: "Beautiful decor at amazing prices",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Shop Collection",
      color: "from-green-500 to-teal-500"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-96 overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className={`relative h-full bg-gradient-to-r ${banner.color} flex items-center`}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-white mb-2">{banner.title}</h2>
                <p className="text-xl text-white mb-2">{banner.subtitle}</p>
                <p className="text-white mb-6 opacity-90">{banner.description}</p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;