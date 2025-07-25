import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import gsap from 'gsap';

const Banner = () => {
  const images = [
    'https://i.ibb.co/FL4BShRC/leadingaksdf.jpg',
    'https://i.ibb.co/4ZcC5vQf/aha-leading.jpg',
    'https://i.ibb.co/NDb5QDQ/leadingaksdsdfdddasdffsdf.jpg',
  ];

  const slides = [
    {
      title: 'Empowering Tomorrow\'s Leaders',
      description: 'Providing top-tier education and a platform for innovation.',
    },
    {
      title: 'Innovation Through Education',
      description: 'Shaping bright minds for a brighter future.',
    },
    {
      title: 'Where Dreams Meet Determination',
      description: 'Turning aspirations into achievements with passion.',
    },
  ];

  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  // Additional refs for enhanced animations
  const titleRefs = useRef([]);
  const descriptionRefs = useRef([]);
  const overlayRefs = useRef([]);
  const containerRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const current = swiper.realIndex;

    // Reset all image scales
    gsap.set(imageRefs.current, { scale: 1 });
    gsap.set(textRefs.current, { opacity: 0, x: -50 });

    // Reset enhanced elements
    gsap.set(titleRefs.current, { opacity: 0, y: 30, rotationX: 15 });
    gsap.set(descriptionRefs.current, { opacity: 0, y: 20, x: -30 });
    gsap.set(overlayRefs.current, { opacity: 0.4 });

    // Animate image
    gsap.fromTo(
      imageRefs.current[current],
      { scale: 1.08 },
      { scale: 1, opacity: 1, duration: 4, ease: 'power2.out' }
    );

    // Animate text from left
    gsap.fromTo(
      textRefs.current[current],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out', delay: 0.2 }
    );

    // Enhanced title animation with 3D rotation
    gsap.fromTo(
      titleRefs.current[current],
      { opacity: 0, y: 50, rotationX: 20, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        scale: 1,
        duration: 1.5, 
        ease: 'back.out(1.7)', 
        delay: 0.3 
      }
    );

    // Enhanced description animation
    gsap.fromTo(
      descriptionRefs.current[current],
      { opacity: 0, y: 30, x: -40, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1,
        duration: 1.2, 
        ease: 'power3.out', 
        delay: 0.6 
      }
    );

    // Overlay animation
    gsap.fromTo(
      overlayRefs.current[current],
      { opacity: 0.2 },
      { 
        opacity: 0.4, 
        duration: 1.5, 
        ease: 'power2.out' 
      }
    );

    // Parallax effect on image
    gsap.fromTo(
      imageRefs.current[current],
      { y: -10 },
      { 
        y: 10, 
        duration: 8, 
        ease: 'none',
        repeat: -1,
        yoyo: true
      }
    );
  };

  useEffect(() => {
    // Container entrance animation
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 1.05 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 2, 
          ease: 'power2.out' 
        }
      );
    }

    // Initial animation
    gsap.fromTo(
      imageRefs.current[0],
      { scale: 1.08 },
      { scale: 1, opacity: 1, duration: 4, ease: 'power2.out' }
    );
    gsap.fromTo(
      textRefs.current[0],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out', delay: 0.2 }
    );

    // Enhanced initial animations
    gsap.fromTo(
      titleRefs.current[0],
      { opacity: 0, y: 50, rotationX: 20, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        scale: 1,
        duration: 1.5, 
        ease: 'back.out(1.7)', 
        delay: 0.5 
      }
    );

    gsap.fromTo(
      descriptionRefs.current[0],
      { opacity: 0, y: 30, x: -40, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1,
        duration: 1.2, 
        ease: 'power3.out', 
        delay: 0.8 
      }
    );

    gsap.fromTo(
      overlayRefs.current[0],
      { opacity: 0.2 },
      { 
        opacity: 0.4, 
        duration: 1.5, 
        ease: 'power2.out',
        delay: 0.3
      }
    );

    // Continuous subtle floating animation for text container
    gsap.to(textRefs.current[0], {
      y: -5,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 2
    });

    // Breathing effect for the entire banner
    gsap.to(containerRef.current, {
      scale: 1.002,
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 3
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf([
        imageRefs.current,
        textRefs.current,
        titleRefs.current,
        descriptionRefs.current,
        overlayRefs.current,
        containerRef.current
      ]);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white overflow-hidden">
      <Swiper
        ref={swiperRef}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, EffectFade]}
        className="w-full h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                ref={(el) => (overlayRefs.current[index] = el)}
                className="absolute inset-0 bg-black z-10" 
              />

              {/* Left-Aligned Text */}
              <div
                ref={(el) => (textRefs.current[index] = el)}
                className="absolute z-20 left-6 sm:left-10 top-1/2 -translate-y-1/2 max-w-[90%] sm:max-w-[70%] lg:max-w-[50%]"
              >
                <h2 
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="sm:text-4xl md:text-5x0l font-bold lg:text-7xl font-mono leading-snug mb-4 drop-shadow-lg"
                  style={{ perspective: '1000px' }}
                >
                  {slides[index].title}
                </h2>
                <p 
                  ref={(el) => (descriptionRefs.current[index] = el)}
                  className="lg:text-2xl sm:text-base md:text-lg font-mono text-gray-200 drop-shadow"
                >
                  {slides[index].description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;