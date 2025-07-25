import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, BookOpen, Award, GraduationCap, Building, Hash, TrendingUp } from "lucide-react";

const Result = () => {
  const [studentId, setStudentId] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchResult = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const payload = new URLSearchParams();
    payload.append("action", "get-result");
    payload.append("student_id", studentId);
    if (birthDate) {
      payload.append("birth_date", birthDate);
    }

    try {
      const response = await fetch("https://www.lus.ac.bd/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      const data = await response.json();
      if (!data.success) {
        setError("This student is not registered to student portal. Please register first to view your results.");
      } else {
        setResult(data);
      }
      console.log(data);
    } catch (err) {
      setError("Failed to fetch result.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderSemesterTable = (semester, index) => {
    return (
      <motion.div
        key={semester.name}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="mt-8 backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-emerald-200/30 shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
          <BookOpen className="text-emerald-300" size={24} />
          {semester.name}
        </h3>

        <div className="overflow-hidden rounded-xl border border-emerald-200/20">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-emerald-600/30 to-emerald-700/30 backdrop-blur-sm">
              <tr>
                <th className="p-4 text-left text-white font-semibold">Course Code</th>
                <th className="p-4 text-left text-white font-semibold">Course Title</th>
                <th className="p-4 text-center text-white font-semibold">Credit</th>
                <th className="p-4 text-center text-white font-semibold">GP</th>
                <th className="p-4 text-center text-white font-semibold">Grade</th>
              </tr>
            </thead>
            <tbody>
              {semester.courses.map((course, courseIndex) => (
                <motion.tr
                  key={courseIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + (courseIndex * 0.05), duration: 0.3 }}
                  className="border-t border-emerald-200/10 hover:bg-emerald-500/5 transition-all duration-300"
                >
                  <td className="p-4 text-emerald-300 font-mono font-semibold">{course.course_code}</td>
                  <td className="p-4 text-white">{course.course_title}</td>
                  <td className="p-4 text-center text-amber-300 font-semibold">{course.credit}</td>
                  <td className="p-4 text-center text-emerald-300 font-bold">{course.gpa}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      course.grade === 'A+' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      course.grade === 'A' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' :
                      course.grade === 'B+' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                      'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    }`}>
                      {course.grade}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <Hash className="text-emerald-300" size={16} />
            <span className="text-white font-semibold">Total Credit: {semester.credit}</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <TrendingUp className="text-emerald-300" size={16} />
            <span className="text-white font-semibold">GPA: {semester.gpa}</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <Award className="text-amber-300" size={16} />
            <span className="text-white font-semibold">Grade: {semester.grade}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderResultsByYear = () => {
    if (!result?.results) return null;

    return Object.entries(result.results).map(([year, semesters], yearIndex) => (
      <motion.div
        key={year}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: yearIndex * 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
          {year}
        </h2>
        {semesters.map((semester, semesterIndex) => renderSemesterTable(semester, semesterIndex))}
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            Student Result Portal
          </h1>
          <p className="text-emerald-100 text-lg">Discover your academic achievements with style</p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-emerald-200/20 shadow-2xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-300" size={20} />
              <input
                type="text"
                placeholder="Enter Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full bg-emerald-500/5 border border-emerald-200/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-300" size={20} />
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-emerald-500/5 border border-emerald-200/20 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={fetchResult}
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Fetching Results...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <GraduationCap size={20} />
                Get Result
              </div>
            )}
          </motion.button>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-sm bg-red-500/20 border border-red-500/30 rounded-2xl p-6 mb-8"
            >
              <p className="text-red-300 text-center font-medium">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Student Info */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-emerald-200/20 shadow-2xl mb-8"
            >
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Student Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <User className="text-emerald-300" size={20} />
                    <span className="text-emerald-100 text-sm">Student ID</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.id}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-teal-300" size={20} />
                    <span className="text-emerald-100 text-sm">Semester</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.semester}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-amber-300" size={20} />
                    <span className="text-emerald-100 text-sm">CGPA</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.cgpa}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-yellow-300" size={20} />
                    <span className="text-emerald-100 text-sm">Grade</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.grade}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Hash className="text-orange-300" size={20} />
                    <span className="text-emerald-100 text-sm">Credits</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.credit}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="text-pink-300" size={20} />
                    <span className="text-emerald-100 text-sm">Program</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.degree}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="text-indigo-300" size={20} />
                    <span className="text-emerald-100 text-sm">Department</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.department}</p>
                </div>

                <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-200/10">
                  <div className="flex items-center gap-3 mb-3">
                    <User className="text-rose-300" size={20} />
                    <span className="text-emerald-100 text-sm">Name</span>
                  </div>
                  <p className="text-white font-bold text-lg">{result.student.name}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Academic Results */}
        <AnimatePresence>
          {result && birthDate && result.results && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Academic Results
              </h2>
              {renderResultsByYear()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results Message */}
        <AnimatePresence>
          {result && birthDate && !result.results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-sm bg-yellow-500/20 border border-yellow-500/30 rounded-2xl p-6 text-center"
            >
              <p className="text-yellow-300 font-medium">
                No detailed results found. Please check if the birth date is correct.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Result;