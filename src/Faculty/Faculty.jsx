import React from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Faculty = () => {
    return (

        <div className='bg-white text-black'>

            <div className='bg-[#023020] text-white p-10 md:px-16 flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold'>Faculty Directory</h2>
                    <p className='font-light'>Meet our distinguished faculty members</p>
                </div>

                <div>
                    <Link to={'/'}>
                        <FaHome className=' text-xl md:text-3xl '></FaHome>
                    </Link>
                </div>
            </div>
            <div className="drawer lg:drawer-open pt-[40px] bg-white px-10">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content p-8 md:px-14">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <h6 className='border bg-[#455A64] text-white text-center p-4 mb-2 w-full font-bold'> Department</h6>

                    <ul className="menu bg-white text-black border border-gray-800 min-h-full w-80  ">
                        <NavLink to="/faculty/cse" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Computer Science and Engineering</NavLink>
                        <NavLink to="/faculty/bba" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Business Administration</NavLink>
                        <NavLink to="/faculty/eee" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Electrical and Electronics Engineering</NavLink>
                        <NavLink to="/faculty/civil" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Civil Engineering</NavLink>
                        <NavLink to="/faculty/architecture" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Architecture</NavLink>
                        <NavLink to="/faculty/thm" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Tourism and Hospitality Management</NavLink>
                        <NavLink to="/faculty/english" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>English</NavLink>
                        <NavLink to="/faculty/law" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Law</NavLink>
                        <NavLink to="/faculty/islamicStudies" className={({ isActive }) => `btn w-full border-b-2 mb-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Islamic Studies</NavLink>
                        <NavLink to="/faculty/publicHealth" className={({ isActive }) => `btn w-full border-b-2 ${isActive ? 'bg-[#023020] text-white' : 'bg-white text-gray-700'}`}>Public Health</NavLink>



                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Faculty;
