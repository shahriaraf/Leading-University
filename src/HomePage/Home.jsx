import React, { useEffect, useRef } from 'react';
import Banner from './Banner';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';
import LatestNews from './LatestNews';
import Events from './Events';
import ChatbaseBot from '../../Chatbot/Chatbot';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // refs for elements to animate
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const bgTextBlockRef = useRef(null);
  
  // Additional refs for enhanced animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gradientLineRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const heroButtonRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the main section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });

    // Animate section background
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { backgroundColor: '#f3f4f6' },
        {
          backgroundColor: '#e5e7eb',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          }
        }
      );
    }

    // Existing left content animation
    if (leftContentRef.current) {
      gsap.fromTo(
        leftContentRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Enhanced title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 30, scale: 0.9 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Gradient line animation
    if (gradientLineRef.current) {
      gsap.fromTo(
        gradientLineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gradientLineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Description text animation
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Button animation
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { autoAlpha: 0, y: 20, scale: 0.9 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Existing right image animation
    if (rightImageRef.current) {
      gsap.fromTo(
        rightImageRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightImageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Additional image scale animation on scroll
      gsap.fromTo(
        rightImageRef.current.querySelector('img'),
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightImageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Existing background text block animation
    if (bgTextBlockRef.current) {
      gsap.fromTo(
        bgTextBlockRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bgTextBlockRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Overlay animation
    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0.2 },
        {
          autoAlpha: 0.6,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: overlayRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Hero text animations
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { autoAlpha: 0, y: 100, scale: 0.9 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (heroSubtextRef.current) {
      gsap.fromTo(
        heroSubtextRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroSubtextRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (heroButtonRef.current) {
      gsap.fromTo(
        heroButtonRef.current,
        { autoAlpha: 0, y: 30, scale: 0.8 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: heroButtonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Parallax effect for background image
    if (bgTextBlockRef.current) {
      gsap.to(bgTextBlockRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: bgTextBlockRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Banner />
      <section ref={sectionRef} className="bg-gray-100 py-16 px-4 lg:relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div
            ref={leftContentRef}
            className="bg-[#e3e3e3] text-black shadow-md z-10 p-14 max-w-xl w-full lg:absolute left-40"
          >
            <h2 ref={titleRef} className="text-3xl font-semibold mb-4">Leading Open Day</h2>
            <div ref={gradientLineRef} className="w-18 h-1 bg-gradient-to-r from-[#023020] to-[#034830] mb-6" />
            <p ref={descriptionRef} className="text-gray-700 text-lg mb-8">
              Discover what studying at Leading University is really like. Explore our campus and find out more about our admission process and get to know our community.
            </p>

            <div ref={buttonRef} className="flex justify-start mb-10 md:mt-4 mt-8 stagger-animate">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  className="group relative rounded-xl bg-gradient-to-r from-[#023020] to-[#034830] text-base sm:text-lg font-semibold px-6 sm:px-12 py-2 text-white hover:text-black transition-colors duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Learn more <span>➝</span>
                  </span>
                </button>
              </motion.a>
            </div>
          </div>


            <section className="py-16 bg-white px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "Arts and Culture",
                            img: "https://i.ibb.co/7rR4kWD/art.jpg",
                            desc: "A vibrant mix of creativity and tradition.",
                        },
                        {
                            title: "Student Life",
                            img: "https://i.ibb.co/zS5bsRf/student.jpg",
                            desc: "Live, learn, and grow with peers across campus.",
                        },
                        {
                            title: "Sports and Fitness",
                            img: "https://i.ibb.co/QmyKqCT/sports.jpg",
                            desc: "Stay active and balanced through recreation.",
                        },
                    ].map((card, idx) => (
                        <div key={idx} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
                            <img src={card.img} alt={card.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.desc}</p>
                            <button className="text-red-700 font-medium hover:underline">Learn more ➝</button>
                        </div>
                    ))}
                </div>
            </section>
            <LatestNews></LatestNews>
            <section className="py-12 bg-white px-4 text-center">
                <h2 className="text-2xl font-bold mb-8">@UniCamp</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className={`bg-${i % 2 === 0 ? 'red' : 'blue'}-700 text-white p-4 rounded shadow`}>
                            <p className="text-sm mb-3">"Student highlight or tweet content here..."</p>
                            <span className="text-sm">March 20, 2025</span>
                        </div>
                    ))}
                </div>
            </section>
            
            <Events></Events>
            <Footer></Footer>



          {/* Right Image */}
          <div ref={rightImageRef} className="flex justify-end w-full">
            <img
              src="https://www.showcase.com.bd/wp-content/uploads/2020/02/IMG_0063-1024x683.jpg"
              alt="Campus"
              className="lg:w-3/5 h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>
      <div
        ref={bgTextBlockRef}
        className="relative h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://i.postimg.cc/nVRL94Cz/Whats-App-Image-2025-07-07-at-8-03-36-PM.jpg')" }}
      >
        <div ref={overlayRef} className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-4xl">
          <h1 ref={heroTextRef} className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Explore Majors &amp;<br />
            Programs
          </h1>
          <p ref={heroSubtextRef} className="text-lg md:text-xl mb-6">
            Choose from 16 undergraduate and graduate majors
          </p>
          <div ref={heroButtonRef} className="flex justify-start mb-10 md:mt-4 mt-8 stagger-animate">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="group relative rounded-xl bg-white text-base sm:text-lg font-semibold px-6 sm:px-12 py-2 text-black hover:text-white transition-colors duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#023020] to-[#034830] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative z-10 flex items-center gap-2">
                  View All Programs
                </span>
              </button>
            </motion.a>
          </div>
        </div>
      </div>
        <ChatbaseBot />
      <LatestNews />
      <Events />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;