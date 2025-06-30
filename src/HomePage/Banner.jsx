import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import gsap from 'gsap';

const Banner = () => {
  const images = [
    'https://i.ibb.co/FL4BShRC/leadingaksdf.jpg',
     'https://i.ibb.co/4ZcC5vQf/aha-leading.jpg',
    'https://i.ibb.co/NDb5QDQ/leadingaksdsdfdddasdffsdf.jpg',
   
    
    
    
  ];

  const imageRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.realIndex;

    // Reset all scales
    gsap.set(imageRefs.current, { scale: 1 });

    // Animate the current image
    gsap.fromTo(
      imageRefs.current[currentSlide],
      { scale: 1.08 },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: 'power2.out',
      }
    );
  };

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      imageRefs.current[0],
      { scale: 1.08 },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <Swiper
        effect="fade"
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
              <div className="absolute inset-0 bg-black/30 z-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
