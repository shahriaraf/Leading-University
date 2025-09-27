// src/components/Login.jsx
import './login.css';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const fullTitle = 'Leading University — Where Futures Begin';
    const fullSubtitle = 'Promise To Lead';

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const { setUser, UserLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target;

        try {
            const result = await UserLogIn(email.value, password.value);
            setUser(result.user);
            toast.success('Welcome Back to LU');
            navigate('/');
        } catch (error) {
            toast.error(error.message || 'Login failed');
        }
    };

    useEffect(() => {
        let titleIndex = 0;
        let subtitleIndex = 0;
        let typingTimer;

        const typeAll = () => {
            if (titleIndex < fullTitle.length) {
                setTitle((prev) => prev + fullTitle.charAt(titleIndex));
                titleIndex++;
                typingTimer = setTimeout(typeAll, 70);
            } else if (subtitleIndex < fullSubtitle.length) {
                setSubtitle((prev) => prev + fullSubtitle.charAt(subtitleIndex));
                subtitleIndex++;
                typingTimer = setTimeout(typeAll, 45);
            }
        };

        typeAll();
        return () => clearTimeout(typingTimer);
    }, []);

    return (
        <div className="loginbg">
            <div
                className="flex justify-center items-center px-5 py-28"
                style={{ position: 'relative', zIndex: 3 }}
            >
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
                            <form onSubmit={handleLogin} className="card-body">
                                <fieldset className="fieldset text-white">
                                    <label className="label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        aria-label="Email address"
                                        className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                        placeholder="Email"
                                    />
                                    <label className="label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        aria-label="Password"
                                        className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                        placeholder="Password"
                                    />
                                    <div className="mt-2 text-sm">
                                        <button
                                            type="button"
                                            className="link link-hover text-white"
                                        >
                                            Forgot password?
                                        </button>
                                        <p>
                                            New here?{' '}
                                            <Link
                                                to="/register"
                                                className="text-blue-300 underline"
                                            >
                                                Create an account
                                            </Link>
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-neutral mt-4 w-full"
                                    >
                                        Login
                                    </button>
                                    {/* Back to Home Button */}
                                    <Link
                                        to="/"
                                        className="btn btn-outline mt-3 w-full text-white"
                                    >
                                        Back to Home
                                    </Link>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
