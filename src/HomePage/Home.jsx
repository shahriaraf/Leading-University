import React from 'react';
import Banner from './Banner';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className="bg-gray-100 py-16 px-4 lg:relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                    {/* Left Content */}
                    <div className="bg-[#e3e3e3] shadow-md p-14 max-w-xl w-full lg:absolute left-40">
                        <h2 className="text-3xl font-semibold mb-4">
                            UniCamp Open Day
                        </h2>
                        <div className="w-18 h-1 bg-[#455A64] mb-6" />
                        <p className="text-gray-700 text-lg mb-8">
                            Discover what studying at UniCamp is really like. Explore our campuses and find out more about our admission process and get to know our community.
                        </p>

                        <motion.button
                        whileTap={{scale:1.8}}

                            className="bg-[#455A64] hover:bg-[#2a3f4b] text-white px-6 py-3 font-semibold rounded transition inline-flex items-center gap-2"
                        >
                            Learn more <span>➝</span>
                        </motion.button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-end w-full">
                        <img
                            src="https://unicamp-4437.kxcdn.com/main/wp-content/uploads/sites/2/elementor/thumbs/home-04-about-image-p52gcwxihlvxl55dwizgfbaf1baqorwcm52retpsju.jpg"
                            alt="Campus"
                            className="lg:w-3/5 h-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
