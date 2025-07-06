import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  User,
  Mail,
  Calendar,
  GraduationCap,
  Building2,
  Edit3,
  Camera,
  MapPin,
  Phone,
  Award,
  BookOpen,
  Star,
  TrendingUp
} from 'lucide-react';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';



const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const profileRef = useRef(null);
  const avatarRef = useRef(null);
  const controls = useAnimation();
  const [studentData, setStudentData] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    // First fetch: get current student profile by email
    if (!user?.email) return;

    axios.get(`https://server-lu.vercel.app/users/profileDetails/${user.email}`)
      .then((res) => {
        setStudentData(res.data);
        console.log('Student Now', res.data);
      })
      
  }, [user?.email]);

  // Student data
  // const studentData = {
  //   name: "Rifat Ahmed",
  //   email: "rifatahm033@gmail.com",
  //   image: "https://i.ibb.co/5dcyVXg/sdfdsf.jpg",
  //   stdId: "0182310012101033",
  //   department: "Computer Science and Engineering",
  //   DOB: "2002-06-03"
  // };

  // Calculate age
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Mock additional data
  const additionalInfo = {
    age: calculateAge(studentData.DOB),
    phone: "+880 1234-567890",
    address: "Dhaka, Bangladesh",
    semester: "8th",
    cgpa: "3.75",
    totalCredits: "140",
    year: "4th Year"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Floating animation for profile picture
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-8">
      <motion.div
        ref={profileRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Student Profile
          </h1>
          <p className="text-gray-600 text-lg"> Your academic information</p>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          variants={cardVariants}
          className="card bg-white shadow-2xl rounded-3xl overflow-hidden mb-8"
        >
          {/* Cover Section */}
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Floating shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white/20 rounded-lg"
            ></motion.div>
          </div>

          {/* Profile Info Section */}
          <div className="relative px-6 md:px-8 pb-8">
            {/* Profile Picture */}
            <motion.div
              ref={avatarRef}
              animate={floatingAnimation}
              className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-400">
                  <img
                    src={studentData.image}
                    alt={studentData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors"
                >
                  <Camera size={16} />
                </motion.button>
              </div>
            </motion.div>



            {/* Name and Basic Info */}
            <div className="pt-20 md:pt-24 text-center">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
              >
                {studentData.name}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-emerald-600 font-semibold text-lg mb-1"
              >
                {studentData.stdId}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-6"
              >
                {additionalInfo.year} • {additionalInfo.semester} Semester
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4 md:gap-8 mb-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{additionalInfo.cgpa}</div>
                  <div className="text-sm text-gray-500">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">{additionalInfo.totalCredits}</div>
                  <div className="text-sm text-gray-500">Credits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{additionalInfo.age}</div>
                  <div className="text-sm text-gray-500">Years Old</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <motion.div
            variants={cardVariants}
            className="card bg-white shadow-xl rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <User className="text-emerald-600" size={24} />
              Personal Information
            </h3>

            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
              >
                <Mail className="text-emerald-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-800">{studentData.email}</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors"
              >
                <Calendar className="text-teal-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-semibold text-gray-800">{formatDate(studentData.DOB)}</p>
                </div>
              </motion.div>

             
             
            </div>
          </motion.div>

          {/* Academic Information */}
          <motion.div
            variants={cardVariants}
            className="card bg-white shadow-xl rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <GraduationCap className="text-emerald-600" size={24} />
              Academic Information
            </h3>

            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
              >
                <Building2 className="text-emerald-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-semibold text-gray-800">{studentData.department}</p>
                </div>
              </motion.div>

             

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors"
              >
                <TrendingUp className="text-yellow-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">CGPA</p>
                  <p className="font-semibold text-gray-800">{additionalInfo.cgpa}/4.00</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
              >
                <Award className="text-purple-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Total Credits</p>
                  <p className="font-semibold text-gray-800">{additionalInfo.totalCredits} Credits</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>



      </motion.div>
    </div>
  );
};

export default StudentProfile;