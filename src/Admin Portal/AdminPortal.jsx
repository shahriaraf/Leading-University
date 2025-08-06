import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  TrendingUp,
  ClipboardList,
  Settings,
  LogOut,
  Download,
  Calendar,
  Trophy,
  GraduationCap,
  Clock,
  Book,
  Home
} from 'lucide-react';
import Result from '../Result/Result';
import ResultAnalyticsWrapper from '../Result/ResultAnalytics';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import StudentProfile from '../StudentProfile/StudentProfile';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from "react-icons/fa6";
import AdminProfile from './AdminProfile';
import UsersManagement from '../Admin Portal/UsersManagement'
import AddCourse from './AddCourse';

const AdminPortal = () => {
  const [activeRoute, setActiveRoute] = useState('results');
  const { user } = useContext(AuthContext);
  const [currentStudent, setCurrentStudent] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [cgpa, setCgpa] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    axios.get(`https://server-lu.vercel.app/users/profileDetails/${user.email}`)
      .then((res) => {
        setCurrentStudent(res.data);
        console.log('Student Now', res.data);
      })
  }, [user?.email]);

  const sidebarItemVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  const handleRouteChange = (route) => {
    setActiveRoute(route);
    setSidebarOpen(false);
  };


//   ! This is where we will add Components for admin
  const renderContent = () => {
    switch (activeRoute) {
      case 'profile':
        return <AdminProfile></AdminProfile>;
      case 'users':
        return <UsersManagement></UsersManagement>
       // Replace with actual component
      default:
        return <UsersManagement></UsersManagement>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        className={`bg-emerald-800 text-white min-h-screen shadow-lg z-40 fixed top-0 left-0 w-64 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative`}
      >
        <div className="p-6 border-b border-emerald-700">
          <h1 className="text-xl font-bold">Admin Portal</h1>
        </div>

        <motion.div
          className="p-6 border-b border-emerald-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <img className='rounded-full' src={user?.photoURL} alt="" />
            </div>
            <div>
              <p className="font-medium">{currentStudent?.name}</p>
              <p className="text-sm text-emerald-300">{user?.email}</p>
              <p className="text-sm text-emerald-300">{currentStudent?.role}</p>
            </div>
          </div>
        </motion.div>

        <nav className="p-4 space-y-2">
          {[
            { icon: <User />, label: 'Admin Profile', key: 'profile' },
            { icon: <FaUsers />, label: 'Users', key: 'users' },
            
          ].map(item => (
            <motion.button
              key={item.key}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeRoute === item.key
                ? 'bg-emerald-700 border-l-4 border-emerald-300'
                : 'hover:bg-emerald-700'}`}
              variants={sidebarItemVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleRouteChange(item.key)}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}

          <motion.button
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-700 transition-colors"
            variants={sidebarItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/')}
          >
           <AddCourse className='w-5 h-5'></AddCourse>
            <span>Add Course</span>
          </motion.button>
          <motion.button
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-700 transition-colors"
            variants={sidebarItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/')}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </motion.button>

          <motion.button
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-700 transition-colors"
            variants={sidebarItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </motion.button>
        </nav>
      </motion.div>

      {/* Content */}
      <div className="flex-1">
        <div className="lg:hidden p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-emerald-800 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="">
          <AnimatePresence mode="wait">
            <div key={activeRoute}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
