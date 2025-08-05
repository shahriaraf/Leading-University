import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const images = [
    'https://i.ibb.co/FL4BShRC/leadingaksdf.jpg',
    'https://i.ibb.co/4ZcC5vQf/aha-leading.jpg',
    'https://i.ibb.co/NDb5QDQ/leadingaksdsdfdddasdffsdf.jpg',
  ];

  const slides = [
    {
      title: 'Empowering Tomorrow\'s Leaders',
      description: 'Providing top-tier education and a platform for innovation that shapes the future of learning.',
      accent: 'Innovate'
    },
    {
      title: 'Innovation Through Education',
      description: 'Shaping bright minds for a brighter future with cutting-edge technology and methodologies.',
      accent: 'Educate'
    },
    {
      title: 'Where Dreams Meet Determination',
      description: 'Turning aspirations into achievements with passion, dedication, and unwavering support.',
      accent: 'Achieve'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/30" />
          </div>
        ))}
      </div>

    

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
          
            {/* Main Title */}
            <div className="mb-6 overflow-hidden">
              <h1 
                className={`text-4xl md:text-7xl font-bold leading-tight transform transition-all duration-1000 delay-300 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                <span className="bg-gradient-to-r from-white via-green-50 to-green-50 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-8 overflow-hidden">
              <p 
                className={`text-sm md:text-xl text-gray-200 max-w-2xl leading-relaxed transform transition-all duration-1000 delay-500 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-700 ${
              currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              
              <button className="px-4 py-2 md:px-7 md:py-3 md:text-lg border-2 border-white/30 text-white text-sm font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute hidden md:inline left-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute hidden md:inline right-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
       

        {/* Progress Bar */}
        <div className="w-12 md:w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full  bg-white/80 rounded-full transition-all duration-300"
            style={{ 
              width: `${((currentSlide + 1) / images.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;