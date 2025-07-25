import { useRef, useState, useEffect } from "react";
import { Calendar, Clock, User, ChevronUp, ChevronDown, BookOpen, Award, Home, Search } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Sample News Data
const newsData = [
  {
    id: 1,
    title: "University Announces New Research Center for Artificial Intelligence",
    excerpt:
      "The university is proud to announce the establishment of a cutting-edge AI research center, featuring state-of-the-art facilities and partnerships with leading tech companies...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "3 min read",
    category: "Research",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/Law_news.jpg?resize=250%2C250&ssl=1",
  },
  {
    id: 2,
    title: "Spring Semester Registration Opens Next Week",
    excerpt:
      "Students can begin registering for spring semester courses starting Monday, January 22nd. Priority registration will be given to seniors and graduate students...",
    author: "Academic Affairs",
    date: "2024-01-12",
    readTime: "2 min read",
    category: "Academic",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/1000083439.jpg?resize=250%2C245&ssl=1",
  },
  {
    id: 3,
    title: "Campus Sustainability Initiative Wins National Award",
    excerpt:
      "Our university's comprehensive sustainability program has been recognized with the Green Campus Excellence Award for outstanding environmental stewardship...",
    author: "Environmental Committee",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Campus Life",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/LU-Library-Orientation.jpg?resize=250%2C250&ssl=1",
  },
  {
    id: 4,
    title: "New Student Housing Complex Opens Fall 2024",
    excerpt:
      "Construction is nearing completion on the new 500-bed residential complex, featuring modern amenities, study spaces, and sustainable design elements...",
    author: "Housing Department",
    date: "2024-01-08",
    readTime: "3 min read",
    category: "Campus Life",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/Orientation_Summer-2025.jpg?resize=250%2C208&ssl=1",
  },
  {
    id: 5,
    title: "Faculty Research Team Receives $2M Federal Grant",
    excerpt:
      "The Department of Engineering has been awarded a significant federal grant to advance renewable energy research, focusing on next-generation solar panel technology...",
    author: "Dr. Michael Chen",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Research",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/CSE-Programing-Contest.jpg?resize=250%2C250&ssl=1",
  },
];

const getCategoryConfig = (category) => {
  switch (category) {
    case "Research":
      return {
        color: "bg-blue-600 text-white",
        icon: BookOpen,
        bgAccent: "bg-blue-50"
      };
    case "Academic":
      return {
        color: "bg-green-600 text-white",
        icon: Award,
        bgAccent: "bg-green-50"
      };
    case "Campus Life":
      return {
        color: "bg-purple-600 text-white",
        icon: Home,
        bgAccent: "bg-purple-50"
      };
    default:
      return {
        color: "bg-gray-600 text-white",
        icon: Search,
        bgAccent: "bg-gray-50"
      };
  }
};

export default function UniversityNews() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Additional refs for GSAP animations
  const mainContainerRef = useRef(null);
  const backgroundElementsRef = useRef([]);
  const headerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const progressRef = useRef(null);
  const newsContainerRef = useRef(null);
  const navigationRef = useRef(null);
  const newsCardsRef = useRef([]);

  const CARD_HEIGHT = 280;
  const CARDS_PER_VIEW = 2;

  useEffect(() => {
    // Main container entrance animation
    if (mainContainerRef.current) {
      gsap.fromTo(
        mainContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Background elements animation
    backgroundElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.fromTo(
          element,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.4,
            duration: 2,
            delay: index * 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // Header badge animation
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Title animation with character split effect
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Subtitle animation
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Progress indicator animation
    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current.children,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: progressRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // News container animation
    if (newsContainerRef.current) {
      gsap.fromTo(
        newsContainerRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newsContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }


    // Navigation buttons animation
    if (navigationRef.current) {
      gsap.fromTo(
        navigationRef.current.children,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: navigationRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Continuous floating animation for background elements
    backgroundElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: -20,
          duration: 3 + index,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.5,
        });
      }
    });

    // Parallax effect for the main container
    gsap.to(mainContainerRef.current, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoScrolling) {
        scrollToNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  const scrollToNext = () => {
    if (currentIndex < newsData.length - CARDS_PER_VIEW) {
      setCurrentIndex(currentIndex + 1);
      containerRef.current?.scrollTo({
        top: (currentIndex + 1) * CARD_HEIGHT,
        behavior: "smooth"
      });
    } else {
      setCurrentIndex(0);
      containerRef.current?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      containerRef.current?.scrollTo({
        top: (currentIndex - 1) * CARD_HEIGHT,
        behavior: "smooth"
      });
    } else {
      setCurrentIndex(newsData.length - CARDS_PER_VIEW);
      containerRef.current?.scrollTo({
        top: (newsData.length - CARDS_PER_VIEW) * CARD_HEIGHT,
        behavior: "smooth"
      });
    }
  };

  const handleMouseEnter = () => setIsAutoScrolling(true);
  const handleMouseLeave = () => setIsAutoScrolling(false);

  return (
    <div ref={mainContainerRef} className="min-h-screen bg-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={el => backgroundElementsRef.current[0] = el}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
        ></div>
        <div 
          ref={el => backgroundElementsRef.current[1] = el}
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"
        ></div>
        <div 
          ref={el => backgroundElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-2000"
        ></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div ref={headerRef} className="text-center mb-12 sm:mb-16">
            <div ref={badgeRef} className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-lg mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#023020] to-[#034830] text-white px-4 py-2 rounded-full">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">University News</span>
              </div>
            </div>
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Latest Campus Updates
            </h1>
            <p ref={subtitleRef} className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay connected with the pulse of university life through our curated news and announcements
            </p>
            
            {/* Progress Indicator */}
            <div ref={progressRef} className="flex justify-center mt-8 space-x-2">
              {newsData.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index >= currentIndex && index < currentIndex + CARDS_PER_VIEW
                      ? 'w-8 bg-gradient-to-r from-[#023020] to-[#034830]'
                      : 'w-2 bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced News Container */}
          <div className="relative max-w-6xl mx-auto">
            <div 
              ref={newsContainerRef}
              className="relative backdrop-blur-sm  overflow-hidden border border-white/20"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Scroll Container */}
              <div className="h-[560px] sm:h-[600px] overflow-hidden">
                <div
                  ref={containerRef}
                  className="flex flex-col gap-6 p-6 sm:p-8 overflow-y-auto scrollbar-hide h-full"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {newsData.map((news, index) => {
                    const categoryConfig = getCategoryConfig(news.category);
                    const CategoryIcon = categoryConfig.icon;

                    return (
                      <div
                        key={news.id}
                        ref={el => newsCardsRef.current[index] = el}
                        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${categoryConfig.bgAccent}`}
                        style={{ minHeight: `${CARD_HEIGHT}px` }}
                      >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-[#ecf8f4] transition-all duration-500 pointer-events-none"></div>
                        
                        <div className="relative flex flex-col lg:flex-row h-full">
                          {/* Enhanced Image Section */}
                          <div className="w-full lg:w-80 h-48 lg:h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 z-10"></div>
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Enhanced Category Badge */}
                            <div className="absolute top-4 left-4 z-20">
                              <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg ${categoryConfig.color}`}>
                                <CategoryIcon className="w-4 h-4" />
                                <span>{news.category}</span>
                              </div>
                            </div>
                            
                            {/* Index Badge */}
                            <div className="absolute top-4 right-4 z-20">
                              <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg">
                                {index + 1}
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Content Section */}
                          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between card-content">
                            <div>
                              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 leading-tight">
                                {news.title}
                              </h2>
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                {news.excerpt}
                              </p>
                            </div>

                            {/* Enhanced Meta Information */}
                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="font-medium">{news.author}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                    <Calendar className="w-4 h-4 text-white" />
                                  </div>
                                  <span>{new Date(news.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                                    <Clock className="w-4 h-4 text-white" />
                                  </div>
                                  <span>{news.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Controls */}
            <div ref={navigationRef} className="flex justify-center mt-8 space-x-4">
              <button
                onClick={scrollToPrevious}
                className="group flex items-center space-x-2 bg-gradient-to-r from-[#023020] to-[#034830] backdrop-blur-sm hover:bg-white text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Previous</span>
              </button>
              
              <button
                onClick={scrollToNext}
                className="group flex items-center space-x-2 bg-gradient-to-r from-[#023020] to-[#034830] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Next</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}