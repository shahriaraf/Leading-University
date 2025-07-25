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

// Mock components for Results and ResultAnalytics
// const Results = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.3 }}
//     className="space-y-6"
//   >
//     {/* Academic Results Header */}
//     <div className="flex justify-between items-center">
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800">Academic Results</h2>
//         <p className="text-gray-600 mt-1">View your grades, GPA, and academic performance</p>
//       </div>
//       <button className="btn btn-outline btn-sm gap-2">
//         <Download className="w-4 h-4" />
//         Download Transcript
//       </button>
//     </div>

//     {/* Stats Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-gray-600">Current CGPA</p>
//             <p className="text-2xl font-bold text-gray-800">3.70</p>
//             <p className="text-xs text-gray-500">Out of 4.0</p>
//           </div>
//           <Trophy className="w-8 h-8 text-blue-500" />
//         </div>
//       </motion.div>

//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-gray-600">Semester GPA</p>
//             <p className="text-2xl font-bold text-gray-800">3.78</p>
//             <p className="text-xs text-gray-500">Current semester</p>
//           </div>
//           <TrendingUp className="w-8 h-8 text-purple-500" />
//         </div>
//       </motion.div>

//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-gray-600">Credits Earned</p>
//             <p className="text-2xl font-bold text-gray-800">87</p>
//             <p className="text-xs text-gray-500">Out of 120 required</p>
//           </div>
//           <GraduationCap className="w-8 h-8 text-green-500" />
//         </div>
//       </motion.div>

//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-gray-600">Completion</p>
//             <p className="text-2xl font-bold text-gray-800">72%</p>
//             <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//               <div className="bg-orange-500 h-2 rounded-full" style={{ width: '72%' }}></div>
//             </div>
//           </div>
//           <Clock className="w-8 h-8 text-orange-500" />
//         </div>
//       </motion.div>
//     </div>

//     {/* Current Semester Results */}
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h3 className="text-xl font-semibold mb-4 text-gray-800">Fall 2024 Results</h3>
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="text-left">Course Code</th>
//               <th className="text-left">Course Name</th>
//               <th className="text-center">Credits</th>
//               <th className="text-center">Points</th>
//               <th className="text-center">Grade</th>
//               <th className="text-center">GPA</th>
//             </tr>
//           </thead>
//           <tbody>
//             <motion.tr 
//               className="hover:bg-gray-50"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               <td className="font-medium">CS 301</td>
//               <td>Data Structures & Algorithms</td>
//               <td className="text-center">3</td>
//               <td className="text-center">95%</td>
//               <td className="text-center">
//                 <span className="badge badge-success">A+</span>
//               </td>
//               <td className="text-center font-bold">4.0</td>
//             </motion.tr>
//             <motion.tr 
//               className="hover:bg-gray-50"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <td className="font-medium">CS 350</td>
//               <td>Database Management Systems</td>
//               <td className="text-center">3</td>
//               <td className="text-center">88%</td>
//               <td className="text-center">
//                 <span className="badge badge-success">A</span>
//               </td>
//               <td className="text-center font-bold">3.7</td>
//             </motion.tr>
//             <motion.tr 
//               className="hover:bg-gray-50"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <td className="font-medium">CS 320</td>
//               <td>Web Development</td>
//               <td className="text-center">3</td>
//               <td className="text-center">92%</td>
//               <td className="text-center">
//                 <span className="badge badge-success">A+</span>
//               </td>
//               <td className="text-center font-bold">4.0</td>
//             </motion.tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </motion.div>
// );

// const ResultAnalytics = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.3 }}
//     className="space-y-6"
//   >
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800">Result Analytics</h2>
//       <p className="text-gray-600 mt-1">Analyze your academic performance trends</p>
//     </div>

//     {/* Analytics Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">GPA Trend</h3>
//         <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
//           <TrendingUp className="w-12 h-12 text-blue-500" />
//         </div>
//         <p className="text-sm text-gray-600 mt-2">Steady improvement over semesters</p>
//       </motion.div>

//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Subject Performance</h3>
//         <div className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center">
//           <Book className="w-12 h-12 text-green-500" />
//         </div>
//         <p className="text-sm text-gray-600 mt-2">Strong in Programming courses</p>
//       </motion.div>

//       <motion.div 
//         className="bg-white p-6 rounded-lg shadow-md"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Credit Progress</h3>
//         <div className="h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
//           <GraduationCap className="w-12 h-12 text-purple-500" />
//         </div>
//         <p className="text-sm text-gray-600 mt-2">On track for graduation</p>
//       </motion.div>
//     </div>

//     {/* Detailed Analytics */}
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h3 className="text-xl font-semibold mb-4 text-gray-800">Performance Insights</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-600">Overall Performance</span>
//             <span className="text-sm font-bold text-green-600">Excellent</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-600">Improvement Rate</span>
//             <span className="text-sm font-bold text-blue-600">+12%</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-600">Class Rank</span>
//             <span className="text-sm font-bold text-purple-600">Top 15%</span>
//           </div>
//         </div>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-600">Attendance Rate</span>
//             <span className="text-sm font-bold text-green-600">94%</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-600">Assignment Completion</span>
//             <span className="text-sm font-bold text-blue-600">98%</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-600">Predicted Final GPA</span>
//             <span className="text-sm font-bold text-purple-600">3.75</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

const ClassRoutine = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
    >
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Class Routine</h2>
            <p className="text-gray-600 mt-1">Your weekly class schedule</p>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Weekly Schedule</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="font-medium">09:00 AM</td>
                            <td>
                                <div className="bg-blue-100 p-2 rounded text-xs">
                                    <div className="font-medium">CS 301</div>
                                    <div className="text-gray-600">Room 101</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div className="bg-green-100 p-2 rounded text-xs">
                                    <div className="font-medium">CS 350</div>
                                    <div className="text-gray-600">Room 203</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div className="bg-purple-100 p-2 rounded text-xs">
                                    <div className="font-medium">CS 320</div>
                                    <div className="text-gray-600">Lab 1</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="font-medium">11:00 AM</td>
                            <td></td>
                            <td>
                                <div className="bg-orange-100 p-2 rounded text-xs">
                                    <div className="font-medium">Math 201</div>
                                    <div className="text-gray-600">Room 105</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div className="bg-red-100 p-2 rounded text-xs">
                                    <div className="font-medium">Eng 101</div>
                                    <div className="text-gray-600">Room 301</div>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="font-medium">02:00 PM</td>
                            <td>
                                <div className="bg-green-100 p-2 rounded text-xs">
                                    <div className="font-medium">CS 350</div>
                                    <div className="text-gray-600">Lab 2</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div className="bg-blue-100 p-2 rounded text-xs">
                                    <div className="font-medium">CS 301</div>
                                    <div className="text-gray-600">Lab 1</div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Today's Classes</h3>
            <div className="space-y-3">
                <motion.div
                    className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                            <p className="font-medium text-gray-800">CS 301 - Data Structures</p>
                            <p className="text-sm text-gray-600">Room 101</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-gray-800">09:00 AM</p>
                        <p className="text-sm text-gray-600">1 hour</p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                            <p className="font-medium text-gray-800">CS 350 Lab - Database Systems</p>
                            <p className="text-sm text-gray-600">Lab 2</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-gray-800">02:00 PM</p>
                        <p className="text-sm text-gray-600">2 hours</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
);

const StudentPortal = () => {
    // State to track current active route
    const [activeRoute, setActiveRoute] = useState('results');
    const { user } = useContext(AuthContext);

    const [currentStudent, setCurrentStudent] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // First fetch: get current student profile by email
        if (!user?.email) return;

        axios.get(`https://server-lu.vercel.app/users/profileDetails/${user.email}`)
            .then((res) => {
                setCurrentStudent(res.data);
                console.log('Student Now', res.data);
            })

    }, [user?.email]);


    // Animation variants for sidebar items
    const sidebarItemVariants = {
        hover: { x: 5, transition: { duration: 0.2 } },
        tap: { scale: 0.98 }
    };

    // Function to handle route changes with smooth transitions
    const handleRouteChange = (route) => {
        setActiveRoute(route);
    };

    const [cgpa, setCgpa] = useState(null);

    // Function to render content based on active route
    const renderContent = () => {
        switch (activeRoute) {
            case 'profile':
                return <StudentProfile student = {currentStudent} cgpa = {cgpa} />;
            case 'results':
                return <Result setCgpa = {setCgpa} />;
            case 'analytics':
                return <ResultAnalyticsWrapper />;
            case 'routine':
                return <ClassRoutine />;
            default:
                return <Result />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Fixed width with dark green theme matching the screenshot */}
            <motion.div
                className="w-64 bg-emerald-800 text-white fixed h-full shadow-lg"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="p-6 border-b border-emerald-700">
                    <h1 className="text-xl font-bold">Student Portal</h1>
                </div>

                {/* User Profile Section */}
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
                            <p className="text-sm text-emerald-300">{currentStudent.stdId}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Menu */}
                <nav className="p-4 space-y-2">
                    {/* Student Profile */}
                    <motion.button
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeRoute === 'profile'
                                ? 'bg-emerald-700 border-l-4 border-emerald-300'
                                : 'hover:bg-emerald-700'
                            }`}
                        variants={sidebarItemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleRouteChange('profile')}
                    >
                        <User className="w-5 h-5" />
                        <span>Student Profile</span>
                    </motion.button>

                    {/* Results - Active route highlighting */}
                    <motion.button
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeRoute === 'results'
                                ? 'bg-emerald-700 border-l-4 border-emerald-300'
                                : 'hover:bg-emerald-700'
                            }`}
                        variants={sidebarItemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleRouteChange('results')}
                    >
                        <ClipboardList className="w-5 h-5" />
                        <span>Results</span>
                    </motion.button>

                    {/* Result Analytics */}
                    <motion.button
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeRoute === 'analytics'
                                ? 'bg-emerald-700 border-l-4 border-emerald-300'
                                : 'hover:bg-emerald-700'
                            }`}
                        variants={sidebarItemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleRouteChange('analytics')}
                    >
                        <TrendingUp className="w-5 h-5" />
                        <span>Result Analytics</span>
                    </motion.button>

                    {/* Class Routine */}
                    <motion.button
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeRoute === 'routine'
                                ? 'bg-emerald-700 border-l-4 border-emerald-300'
                                : 'hover:bg-emerald-700'
                            }`}
                        variants={sidebarItemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleRouteChange('routine')}
                    >
                        <Calendar className="w-5 h-5" />
                        <span>Class Routine</span>
                    </motion.button>

                    

                    {/* Home */}
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
                    {/* Logout */}
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

            {/* Main Content Area - Offset by sidebar width */}
            <div className="flex-1 ml-64">
                <div className="">
                    {/* Content with AnimatePresence for smooth transitions */}
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

export default StudentPortal;