// src/components/Register.jsx
import './Register.css';
import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const fullTitle = 'Leeading University — Where Futures Begin';
    const fullSubtitle = 'Emmpowering students through digital access';

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const stdId = form.stdId.value;
        const email = form.email.value;
        const department = form.department.value;
        const password = form.password.value;
        const DOB = form.DOB.value;
        const imageFile = form.image.files[0];

        if (!imageFile) {
            toast.error('Please upload a profile image');
            return;
        }

        try {
            // Upload image
            const formData = new FormData();
            formData.append('image', imageFile);
            const res = await fetch(image_hosting_API, {
                method: 'POST',
                body: formData,
            });
            const imageData = await res.json();

            if (!imageData.success) {
                toast.error('Image upload failed');
                return;
            }

            const photoURL = imageData.data.display_url;

            // Create user
            const userCredential = await createUser(email, password);
            await updateUserProfile({ displayName: name, photoURL });
            setUser(userCredential.user);

            // Save to DB
            const userData = {
                name,
                email,
                image: photoURL,
                stdId,
                department,
                DOB,
                role: 'student',
            };

            const dbRes = await axios.post('https://server-lu.vercel.app/users', userData);

            if (dbRes.data.insertedId) {
                toast.success('Welcome to Leading University');
                navigate('/');
            } else {
                toast.error('User registration failed. Try again.');
            }
        } catch (err) {
            console.error('Registration error:', err.message);
            toast.error(err.message || 'Registration Error');
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
                className="flex justify-center items-center px-5 py-20"
                style={{ position: 'relative', zIndex: 3 }}
            >
                <div className="text-center text-white">
                    <motion.h1
                        className="font-bold text-2xl md:text-4xl mb-3"
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

                    <div className="flex justify-center items-center text-left">
                        <div className="card w-full max-w-lg shrink-0 glass-card">
                            <form onSubmit={handleSubmit} className="card-body">
                                <fieldset className="fieldset text-white space-y-4">
                                    <div className="md:flex gap-5">
                                        <div className="w-full">
                                            <label className="label mb-2">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                aria-label="Student name"
                                                className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400 w-full"
                                                placeholder="Student Name"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label className="label mb-2">Student ID</label>
                                            <input
                                                type="text"
                                                name="stdId"
                                                required
                                                aria-label="Student ID"
                                                className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400 w-full"
                                                placeholder="Student ID"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="label mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            aria-label="Email address"
                                            className="input input-bordered w-full bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="md:flex gap-5">
                                        <div className="w-full">
                                            <label className="label mb-2">Department</label>
                                            <select
                                                name="department"
                                                required
                                                className="select w-full bg-transparent bg-opacity-10 text-black"
                                            >
                                                <option disabled selected>
                                                    Select your Department
                                                </option>
                                                <option>Computer Science and Engineering</option>
                                                <option>Electrical and Electronic Engineering</option>
                                                <option>Civil Engineering</option>
                                                <option>Business Administration</option>
                                                <option>Architecture</option>
                                                <option>Tourism and Hospitality Management</option>
                                                <option>Islamic Studies</option>
                                                <option>English</option>
                                                <option>Public Health</option>
                                                <option>Law</option>
                                            </select>
                                        </div>
                                        <div className="w-full">
                                            <label className="label mb-2">Date of Birth</label>
                                            <input
                                                type="date"
                                                name="DOB"
                                                required
                                                aria-label="Date of Birth"
                                                className="input input-bordered w-full bg-transparent bg-opacity-10 text-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            required
                                            aria-label="Password"
                                            className="input input-bordered w-full bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="form-control w-full my-3">
                                        <label className="label mb-2">Profile Image</label>
                                        <input
                                            name="image"
                                            type="file"
                                            accept="image/*"
                                            required
                                            className="file-input file-input-bordered w-full"
                                        />
                                    </div>

                                    <p className="text-sm">
                                        Already have an account?{' '}
                                        <Link to="/login" className="text-blue-300 underline">
                                            Login
                                        </Link>
                                    </p>

                                    <button
                                        type="submit"
                                        className="btn btn-neutral mt-4 w-full"
                                    >
                                        Register
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

export default Register;
