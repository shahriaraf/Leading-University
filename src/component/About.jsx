import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Building2, Globe, Target, Heart, Sparkles, GraduationCap, Wifi, FlaskConical, Library, Wind, Trophy, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    const [activeTab, setActiveTab] = useState('vision');

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const departments = [
        "Business Administration", "Computer Science & Engineering", "Electrical & Electronic Engineering",
        "Civil Engineering", "Architecture", "Law", "English & Modern Languages", "Bangla",
        "Islamic Studies", "Public Health", "Tourism & Hospitality Management"
    ];

    const facilities = [
        { icon: Wifi, text: "High-speed WiFi throughout campus" },
        { icon: FlaskConical, text: "State-of-the-art laboratories" },
        { icon: Library, text: "Fully computerized air-conditioned library" },
        { icon: Wind, text: "Air-conditioned classrooms" },
        { icon: Users, text: "Multiple student clubs & activities" },
        { icon: Trophy, text: "Scholarships up to 75%" }
    ];

    const values = [
        { icon: Heart, title: "Ethical Leadership", color: "text-red-500" },
        { icon: Users, title: "Social Responsibility", color: "text-blue-500" },
        { icon: BookOpen, title: "Interdisciplinary Learning", color: "text-purple-500" },
        { icon: Sparkles, title: "Research & Innovation", color: "text-yellow-500" },
        { icon: Globe, title: "Community Engagement", color: "text-green-500" }
    ];

    const missions = [
        "Delivering programs aligned with societal and professional needs",
        "Empowering students with knowledge, skills, and attitudes for lifelong learning",
        "Cultivating partnerships and collaborations locally and globally",
        "Upholding high standards of integrity, ethics, and social responsibility"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #034830 0%, #045a3d 50%, #056b4a 100%)' }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="absolute inset-0 opacity-10"
                >
                    <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 text-white" />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                    >
                        Leading University
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl text-white/90 font-light"
                    >
                        Shaping Tomorrow's Leaders Today
                    </motion.p>
                </div>
            </motion.section>

            {/* Vision & Mission Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#034830' }}>Vision & Mission</h2>
                        <div className="w-16 sm:w-24 h-1 mx-auto" style={{ backgroundColor: '#034830' }}></div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <button
                            onClick={() => setActiveTab('vision')}
                            className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all ${activeTab === 'vision'
                                    ? 'text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:shadow-md'
                                }`}
                            style={activeTab === 'vision' ? { backgroundColor: '#034830' } : {}}
                        >
                            Vision
                        </button>
                        <button
                            onClick={() => setActiveTab('mission')}
                            className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all ${activeTab === 'mission'
                                    ? 'text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:shadow-md'
                                }`}
                            style={activeTab === 'mission' ? { backgroundColor: '#034830' } : {}}
                        >
                            Mission
                        </button>
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
                    >
                        {activeTab === 'vision' ? (
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                <Target className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0" style={{ color: '#034830' }} />
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Leading University (LUS) aspires to foster a generation of competent, innovative, and socially responsible graduates who can meet global challenges while uplifting their communities. LUS is committed to providing internationally benchmarked education at an accessible cost, bridging academic rigor and real-world relevance.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4 sm:space-y-6">
                                {missions.map((mission, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#034830' }}>
                                            <span className="text-white font-bold text-sm sm:text-base">{idx + 1}</span>
                                        </div>
                                        <p className="text-gray-700 text-base sm:text-lg">{mission}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ backgroundColor: '#034830' }}>
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Leadership</h2>
                        <div className="w-16 sm:w-24 h-1 bg-white mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20"
                        >
                            <Award className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Danobir Dr. Syed Ragib Ali</h3>
                            <p className="text-emerald-200 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Founder & Chairman of the Board of Trustees</p>
                            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                                Emphasizing accessible, quality higher education, driving the university's commitment to excellence and social responsibility.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20"
                        >
                            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Prof. Dr. Mohammed Taj Uddin</h3>
                            <p className="text-emerald-200 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Vice Chancellor</p>
                            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                                Leading the academic mission with a vision of preparing graduates to thrive in both national and international arenas.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Academic Departments */}
            <section className="py-12 sm:py-16 lg:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#034830' }}>Academic Excellence</h2>
                        <div className="w-16 sm:w-24 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#034830' }}></div>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Diverse departments equipped with modern laboratories, well-qualified faculty, and resources for theoretical and practical learning
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    >
                        {departments.map((dept, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 border-2 border-transparent hover:shadow-xl transition-all cursor-pointer"
                                style={{ '--hover-color': '#034830' }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#034830'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                            >
                                <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3" style={{ color: '#034830' }} />
                                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{dept}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#034830' }}>World-Class Facilities</h2>
                        <div className="w-16 sm:w-24 h-1 mx-auto" style={{ backgroundColor: '#034830' }}></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <facility.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" style={{ color: '#034830' }} />
                                <p className="text-gray-700 font-semibold text-base sm:text-lg">{facility.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values & Impact */}
            <section className="py-12 sm:py-16 lg:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#034830' }}>Our Core Values</h2>
                        <div className="w-16 sm:w-24 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#034830' }}></div>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Beyond academic excellence, we nurture morally grounded citizens and leaders
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-10 sm:mb-16">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="text-center"
                            >
                                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all">
                                    <value.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-4 ${value.color}`} />
                                    <h3 className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base">{value.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        {...fadeInUp}
                        className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl"
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                            <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0" style={{ color: '#034830' }} />
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#034830' }}>Making an Impact</h3>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    Graduates of Leading University are increasingly making their mark in diverse sectors nationally and internationally, contributing to development through employment, entrepreneurship, and service. Our alumni are shaping the future across industries, bringing innovation and ethical leadership to every field they enter.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-12 sm:py-16 lg:py-20 px-4 text-center"
                style={{ background: 'linear-gradient(135deg, #034830 0%, #045a3d 100%)' }}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Join Our Journey</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                        Be part of a community that values excellence, innovation, and social responsibility
                    </p>
                    <Link to={'/courses'}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-base sm:text-lg font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all"
                            style={{ color: '#034830' }}
                        >
                            Explore Programs
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.section>
        </div>
    );
}