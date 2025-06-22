import './login.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    const fullTitle = 'Leeading University — Where Futures Begin';
    const fullSubtitle = 'Emmpowering students through digital access';

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    useEffect(() => {
        let titleIndex = 0;
        let subtitleIndex = 0;
        let typingTimer;

        const typeAll = () => {
            if (titleIndex < fullTitle.length) {
                setTitle(prev => prev + fullTitle.charAt(titleIndex));
                titleIndex++;
                typingTimer = setTimeout(typeAll, 70); // slower typing for title
            } else if (subtitleIndex < fullSubtitle.length) {
                setSubtitle(prev => prev + fullSubtitle.charAt(subtitleIndex));
                subtitleIndex++;
                typingTimer = setTimeout(typeAll, 45); // faster for subtitle
            }
        };

        typeAll();

        return () => clearTimeout(typingTimer); // clean up on unmount
    }, []);

    return (
        <div className="loginbg">
            <div className="flex justify-center items-center px-5 py-28" style={{ position: "relative", zIndex: 3 }}>
                <div className="text-center text-white">
                    <motion.h1
                        className="text-white font-bold text-2xl md:text-4xl mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: subtitle.length > 0 ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {subtitle}
                    </motion.p>

                    <div className="flex justify-center items-center">
                        <div className="card w-full max-w-sm shrink-0 glass-card">
                            <div className="card-body">
                                <fieldset className="fieldset text-white">
                                    <label className="label">Student ID or Username</label>
                                    <input
                                        type="email"
                                        className="input input-bordered bg-white bg-opacity-10 text-white placeholder-white"
                                        placeholder="Email"
                                    />
                                    <label className="label">Password</label>
                                    <input
                                        type="password"
                                        className="input input-bordered bg-white bg-opacity-10 text-white placeholder-white"
                                        placeholder="Password"
                                    />
                                    <div>
                                        <a className="link link-hover text-white text-sm">Forgot password?</a>
                                    </div>
                                    <button className="btn btn-neutral mt-4 w-full">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
