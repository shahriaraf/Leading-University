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
                    <div className="bg-[#e3e3e3] shadow-md p-14 max-w-xl w-full lg:absolute left-40">
                        <h2 className="text-3xl font-semibold mb-4">
                            Leading Open Day
                        </h2>
                        <div className="w-18 h-1 bg-[#455A64] mb-6" />
                        <p className="text-gray-700 text-lg mb-8">
                            Discover what studying at Leading University is really like. Explore our campus and find out more about our admission process and get to know our community.
                        </p>

                        <motion.button
                            whileTap={{ scale: 1.8 }}

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
                    <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded shadow inline-flex items-center w-max">
                        View all programs
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
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



        </div>
    );
};

export default Home;
