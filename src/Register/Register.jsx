import './Register.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {
    const fullTitle = 'Leeading University — Where Futures Begin';
    const fullSubtitle = 'Emmpowering students through digital access';

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext)

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const navigate = useNavigate();



    const HandleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const stdId = form.stdId.value;
        const email = form.email.value;
        const department = form.department.value;
        const password = form.password.value;
        const imageFile = form.image.files[0];
        const DOB = form.DOB.value;

        if (!imageFile) {
            alert("Please upload a profile image.");
            return;
        }

        // Upload image to imgbb
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const res = await fetch(image_hosting_API, {
                method: "POST",
                body: formData,
            });

            const imageData = await res.json();

            if (imageData.success) {
                const photoURL = imageData.data.display_url;

                // Create user
                createUser(email, password)
                    .then(result => {
                        setUser(result.user);
                        updateUserProfile({ displayName: name, photoURL }).then(() => {
                            const userData = {
                                name,
                                email,
                                image: photoURL,
                                stdId,
                                department,
                                DOB
                            }

                            axios.post('https://server-lu.vercel.app/users', userData)
                                .then(results => {
                                    console.log(results.data);
                                    navigate("/");
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Welcome",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }).catch(err => {
                                    console.error("User save error:", err);
                                });
                        }).catch(error => {
                            console.error("Update profile error:", error.message);
                        });
                    })

                    .catch(error => {
                        console.error("Create user error:", error.message);
                    });

            } else {
                console.error("Image upload failed");
            }
        } catch (err) {
            console.error("Image upload error:", err);
        }
    };


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
            <div className="flex justify-center items-center px-5 py-20" style={{ position: "relative", zIndex: 3 }}>
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

                    <div className="flex justify-center items-center text-left">
                        <div className="card w-full max-w-lg shrink-0 glass-card">
                            <form onSubmit={HandleSubmit} className="card-body">
                                <fieldset className="fieldset text-white">
                                    <div className='md:flex gap-5'>
                                        <div>
                                            <label className="label text-left mb-2">Name</label>
                                            <input
                                                type="text" name='name'
                                                className="input input-bordered bg-transparent  bg-opacity-10 text-white placeholder-gray-400"
                                                placeholder="Student Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="label mb-2">Student ID</label>
                                            <input
                                                type="text" name='stdId'
                                                className="input input-bordered bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                                placeholder="student ID"
                                            />
                                        </div>
                                    </div>
                                    <label className="label mb-2">Email</label>
                                    <input
                                        type="email" name='email'
                                        className="input input-bordered w-full bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                        placeholder="email"
                                    />
                                    <div className='flex gap-3'>
                                        <div>
                                            <label className="label mb-2">Department</label>
                                            <select name='department' defaultValue="Select your Department" className=" select bg-transparent w-full bg-opacity-10 text-black placeholder-gray-400">

                                                <option className='text-gray-400'>Select your Department</option>
                                                <option>Computer Science and Engineering</option>
                                                <option>Electric and Electronic Engineering</option>
                                                <option>CivilEngineering</option>
                                                <option>Business Administration</option>
                                                <option>Architecture</option>
                                                <option>Tourism and Hospitality Management</option>
                                                <option>Islamic Studies</option>
                                                <option>English</option>
                                                <option>Public Health</option>
                                                <option>Law</option>

                                            </select>
                                        </div>
                                        <div>
                                            <label className="label mb-2">Date of Birth</label>
                                            <input
                                                type="date" name='DOB'
                                                className="input input-bordered w-full bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                                placeholder="email"
                                            />
                                        </div>
                                    </div>
                                    <label className="label">Password</label>
                                    <input
                                        type="password" name='password'
                                        className="input input-bordered w-full bg-transparent bg-opacity-10 text-white placeholder-gray-400"
                                        placeholder="Password"
                                    />

                                    <div className='form-control w-full my-3'>
                                        <label className="label mb-2 mr-2">Profile Image</label>
                                        <input name='image' type="file" className="file-input" />
                                    </div>
                                    <p>Already have a account ? <Link to={'/login'}>Login</Link></p>
                                    <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
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
