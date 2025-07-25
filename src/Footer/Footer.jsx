
import { ChevronRight, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {


    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#023020] to-[#034830] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main footer content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand section */}
                    <div className="space-y-4">
                        <div className="group ml-5">
                            <img
                                src="https://www.lus.ac.bd/wp-content/themes/lu-main/img/logo-white.png"
                                className="w-24 mb-4 flex transition-transform duration-300 group-hover:scale-105"
                                alt="Logo"
                            />
                        </div>
                
                        <div className="flex space-x-4 pt-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#034830] group-hover:to-[#023020] group-hover:scale-110">
                                        <Icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About section */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#038659]">
                            About Us
                        </h4>
                        <ul className="space-y-3">
                            {['Our Story', 'Leadership', 'Careers', 'Campus Life'].map((item, index) => (
                                <li key={index} className="group cursor-pointer">
                                    <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources section */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#038659]">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {['Events', 'Media Kit', 'Newsletter', 'Research'].map((item, index) => (
                                <li key={index} className="group cursor-pointer">
                                    <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe section */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#038659]">
                            Stay Connected
                        </h4>
                        <p className="text-gray-300 text-sm">
                            Subscribe to our newsletter for updates and insights.
                        </p>
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent transition-all duration-300"
                                />
                                <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
                            </div>
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
                    </div>
                </div>

                {/* Contact info bar */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                    <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#023020] to-[#034830] rounded-full flex items-center justify-center">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Address</p>
                                <p className="text-sm font-semibold">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#023020] to-[#034830] rounded-full flex items-center justify-center">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Phone</p>
                                <p className="text-sm font-semibold">+880 123 456 789</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#023020] to-[#034830] rounded-full flex items-center justify-center">
                                <Mail size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Email</p>
                                <p className="text-sm font-semibold">info@lus.ac.bd</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-400">
                        © 2025 Leading University. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;