import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1c1c1c] text-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                <div>
                    <img src="https://www.lus.ac.bd/wp-content/themes/lu-main/img/logo-white.png" className="w-20 mb-3" alt="Logo" />
                    <p className="text-sm">Leading the way in education.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">About</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>Our Story</li>
                        <li>Leadership</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Resources</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>Events</li>
                        <li>Media Kit</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Subscribe</h4>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 rounded mb-2 text-black"
                    />
                    <button className="bg-red-700 hover:bg-red-800 px-4 py-2 text-sm rounded">Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;