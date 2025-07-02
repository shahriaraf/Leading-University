import './login.css';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const fullTitle = 'Leeading University — Where Futures Begin';
    const fullSubtitle = 'Prromise To Lead';

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const {setUser , UserLogIn} = useContext(AuthContext);
    const navigate = useNavigate()

    const HandleLogin = (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email,password);

        

        UserLogIn(email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
                navigate("/")

            })
            .catch(error => {
                console.log('ERROR' , error.message);
                
            })




    }

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
                            <form onSubmit={HandleLogin} className="card-body">
                                <fieldset className="fieldset text-white">
                                    <label className="label">Email</label>
                                    <input
                                        type="email" name='email'
                                        className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                        placeholder="Email"
                                    />
                                    <label className="label">Password</label>
                                    <input
                                        type="password" name='password'
                                        className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                        placeholder="Password"
                                    />
                                    <div>
                                        <a className="link link-hover text-white text-sm text-left">Forgot password?</a>
                                        <p>New here ? <Link to={'/register'}>Create a account</Link></p>
                                    </div>
                                    <button className="btn btn-neutral mt-4 w-full">Login</button>
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
