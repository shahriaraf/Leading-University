import React, { useState, useEffect, useRef } from 'react';

// Sample event data
const events = [
  {
    title: 'Tech Fest 2025',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-HsMORSu0l3xMnXyk73uzsJqAdlbZyt9hA&s',
    date: 'March 15, 2025',
    location: 'Main Auditorium',
    description: 'The biggest tech event of the year featuring cutting-edge innovations.'
  },
  {
    title: 'CSE Carnival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yUOg3VFWCsBwDGv7vJW3yYEGjjjDPg0zow&s',
    date: 'March 20, 2025',
    location: 'Campus Ground',
    description: 'A fun-filled carnival celebrating computer science and engineering.'
  },
  {
    title: 'Project Showdown',
    image: 'https://media.licdn.com/dms/image/v2/C560BAQHgrN0SvSwb8g/company-logo_200_200/company-logo_200_200/0/1630630928240?e=2147483647&v=beta&t=MNYLsyFTnWe7QO_AAlhihdKdJ252WEAOZKTuAJoAj-k',
    date: 'March 25, 2025',
    location: 'Innovation Lab',
    description: 'Students showcase their most innovative projects and compete for prizes.'
  },
  {
    title: 'Robotics Workshop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDK6l0vR0aPcV47T3iVBXj0dC-rmllPj3EQ&s',
    date: 'April 2, 2025',
    location: 'Engineering Block',
    description: 'Hands-on workshop on building and programming robots.'
  },
  {
    title: 'Career Fair',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdGmVpF_xgg7fU1L7rP4MMxnEQFv58_YYQ&s',
    date: 'April 8, 2025',
    location: 'Conference Hall',
    description: 'Connect with top companies and explore career opportunities.'
  },
  {
    title: 'Hackathon 2025',
    image: 'https://i.ytimg.com/vi/VGJOvwgMXTw/maxresdefault.jpg',
    date: 'April 15, 2025',
    location: 'Tech Hub',
    description: '48-hour coding marathon to solve real-world problems.'
  },
];

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const autoSlideRef = useRef(null);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(events.length / getItemsPerSlide()));
      }, 5000);
    };

    const stopAutoSlide = () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    };

    startAutoSlide();

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', stopAutoSlide);
      container.addEventListener('mouseleave', startAutoSlide);
    }

    return () => {
      stopAutoSlide();
      if (container) {
        container.removeEventListener('mouseenter', stopAutoSlide);
        container.removeEventListener('mouseleave', startAutoSlide);
      }
    };
  }, []);

  // Enhanced intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          setIsVisible(prev => ({
            ...prev,
            [index]: entry.isIntersecting
          }));
        });
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: '0px 0px -20px 0px'
      }
    );

    const currentRefs = cardRefs.current;
    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerSlide = getItemsPerSlide();
      setItemsPerSlide(newItemsPerSlide);
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(events.length / itemsPerSlide);

  const smoothSlideTransition = (newSlide) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const nextSlide = () => {
    smoothSlideTransition((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    smoothSlideTransition((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    smoothSlideTransition(index);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Ultra-smooth animated background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-delayed"
          style={{
            top: '60%',
            right: '10%',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-3xl animate-float-slow"
          style={{
            bottom: '10%',
            left: '50%',
            transform: `translate(-50%, 0) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-8 lg:px-8">
        {/* Enhanced header with smooth animations */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-title-glow">
            Upcoming Events
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 animate-pulse-glow"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Discover amazing events, workshops, and competitions happening at our campus
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative max-w-7xl mx-auto" ref={containerRef}>
          {/* Ultra-smooth slider */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className={`flex transition-all duration-1000 ease-out ${
                isTransitioning ? 'transition-all duration-1000' : ''
              }`}
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`,
                willChange: 'transform'
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className={`grid gap-8 md:gap-10 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' : 
                    itemsPerSlide === 2 ? 'grid-cols-2' : 
                    'grid-cols-1 lg:grid-cols-3'
                  }`}
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {events
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((event, index) => {
                      const globalIndex = slideIndex * itemsPerSlide + index;
                      const isCardVisible = isVisible[globalIndex];
                      
                      return (
                        <div
                          key={globalIndex}
                          ref={(el) => (cardRefs.current[globalIndex] = el)}
                          data-index={globalIndex}
                          className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-700 ease-out will-change-transform ${
                            isCardVisible 
                              ? 'opacity-100 translate-y-0 scale-100' 
                              : 'opacity-0 translate-y-12 scale-95'
                          }`}
                          style={{
                            transitionDelay: `${index * 100}ms`,
                            boxShadow: isCardVisible 
                              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
                              : 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 32px 64px -12px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)';
                          }}
                        >
                          {/* Enhanced image container */}
                          <div className="relative overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-56 md:h-64 object-cover transition-all duration-700 ease-out group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            {/* Enhanced floating date badge */}
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                              {event.date}
                            </div>

                            {/* Subtle overlay pattern */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                          </div>

                          {/* Enhanced content */}
                          <div className="p-6 md:p-8 space-y-5">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-all duration-500 ease-out">
                              {event.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                              {event.description}
                            </p>
                            <div className="flex items-center text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">
                              <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                            
                            {/* Enhanced action button */}
                            <button className="w-full mt-6 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-2xl backdrop-blur-sm transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95">
                              <span className="relative z-10">Learn More</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced navigation arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-xl p-4 rounded-full transition-all duration-500 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20 border border-white/10 hover:border-white/20"
          >
            <svg className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-xl p-4 rounded-full transition-all duration-500 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20 border border-white/10 hover:border-white/20"
          >
            <svg className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Enhanced pagination dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-500 ease-out ${
                index === currentSlide
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-110 shadow-lg shadow-purple-500/50'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced custom styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        @keyframes particle {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
          50% { text-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(236, 72, 153, 0.5); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(236, 72, 153, 0.5); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 30s ease-in-out infinite; }
        .animate-particle { animation: particle linear infinite; }
        .animate-title-glow { animation: title-glow 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        
        /* Enhanced smooth scrolling */
        html { scroll-behavior: smooth; }
        
        /* GPU acceleration for smooth animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\\:opacity-40 {
          opacity: 0.4;
        }
        
        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
        
        .group:hover .group-hover\\:opacity-20 {
          opacity: 0.2;
        }
        
        .group:hover .group-hover\\:text-purple-300 {
          color: rgb(196 181 253);
        }
        
        .group:hover .group-hover\\:text-gray-200 {
          color: rgb(229 231 235);
        }
        
        .group:hover .group-hover\\:text-gray-300 {
          color: rgb(209 213 219);
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        /* Responsive grid fixes */
        @media (max-width: 640px) {
          .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        }
        
        @media (min-width: 641px) and (max-width: 1023px) {
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        
        @media (min-width: 1024px) {
          .grid-cols-1.lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
    </div>
  );
}