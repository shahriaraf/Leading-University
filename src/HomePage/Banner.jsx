import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import gsap from 'gsap';

const Banner = () => {
  const images = [
    'https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/09/LU-Photo-scaled.jpg?fit=2560%2C1895&ssl=1',
    'https://scontent.fzyl5-1.fna.fbcdn.net/v/t39.30808-6/464962611_3606052286207513_8114212752889115795_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=US8dDojNlq4Q7kNvwE7wBLP&_nc_oc=AdmFuOwCe9U5oZ8Gtq-OcpEb8IazPJL1VLm_J5YFH-SOckCWcqLj0R0R_bgIO5xMSnhOkXk9oftJif31o45mzQqi&_nc_zt=23&_nc_ht=scontent.fzyl5-1.fna&_nc_gid=0KlmTD8o3Tq17wOUH1G2wQ&oh=00_AfMlGDVx4dSkBUNSvL3KgSUd-66q-oy86AMypb83lghPNQ&oe=685B6808',
    'http://163.47.39.187/RKCCL/assets/img/slider/slide3.jpg',
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
