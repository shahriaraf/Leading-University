import React from 'react';
import Banner from './Banner';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';
import LatestNews from './LatestNews';
import Events from './Events';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className="bg-gray-100 py-16 px-4 lg:relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                    {/* Left Content */}
                    <div className="bg-[#e3e3e3] text-black shadow-md p-14 max-w-xl w-full lg:absolute left-40">
                        <h2 className="text-3xl font-semibold mb-4">
                            Leading Open Day
                        </h2>
                        <div className="w-18 h-1 bg-gradient-to-r from-[#023020] to-[#034830] mb-6" />
                        <p className="text-gray-700 text-lg mb-8">
                            Discover what studying at Leading University is really like. Explore our campus and find out more about our admission process and get to know our community.
                        </p>

                       <div className="flex justify-start mb-10 md:mt-4 mt-8 stagger-animate">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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

                    {/* Right Image */}
                    <div className="flex justify-end w-full">
                        <img
                            src="https://www.showcase.com.bd/wp-content/uploads/2020/02/IMG_0063-1024x683.jpg"
                            alt="Campus"
                            className="lg:w-3/5 h-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </section>
            <div
                className="relative h-screen bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('https://unicamp.thememove.com/main/wp-content/uploads/sites/2/2021/04/home-04-program-section-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                        Explore Majors &amp;<br />
                        Programs
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Choose from 16 undergraduate and graduate majors
                    </p>
                    <div className="flex justify-start mb-10 md:mt-4 mt-8 stagger-animate">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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



            <LatestNews></LatestNews>
            <Events></Events>
            <Footer></Footer>



        </div>
    );
};

export default Home;



