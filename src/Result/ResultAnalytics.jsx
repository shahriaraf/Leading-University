import React, { useState, useEffect, useContext } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { AuthContext } from "../AuthProvider";
import axios from "axios";

const ResultAnalytics = ({ result }) => {



  // useEffect(() =>{


  //   axios.get(`https://server-lu.vercel.app/users/profileDetails/${user.email}`)
  //   .then(res =>{
  //     setCurrentStudent(res.data);
  //     console.log('Student Now' , res.data)
  //   })

  // } , [user?.email])


  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex justify-center items-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
          <p className="text-xl text-gray-600 font-medium">Loading your academic journey...</p>
        </div>
      </div>
    );
  }

  const { student, results } = result;

  if (!student || !results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center items-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <p className="text-lg text-gray-600">No academic data available at this time.</p>
        </div>
      </div>
    );
  }

  const cgpa = student.cgpa ?? 0;
  const credit = student.credit ?? 0;

  // Process semester data for charts
  const semesterData = [];
  Object.keys(results).forEach((year) => {
    results[year].forEach((semester) => {
      semesterData.push({
        name: semester.name,
        gpa: parseFloat(semester.gpa) || 0,
        credits: parseInt(semester.credit) || 0,
      });
    });
  });

  // Count grades for pie chart
  const gradeCount = {};
  Object.values(results).flat().forEach((semester) => {
    semester.courses.forEach((course) => {
      gradeCount[course.grade] = (gradeCount[course.grade] || 0) + 1;
    });
  });

  const gradeData = Object.entries(gradeCount).map(([grade, count]) => ({
    name: grade,
    value: count,
  }));

  // Enhanced color schemes
  const COLORS = [
    '#22c55e', '#3b82f6', '#facc15', '#ef4444',
    '#a78bfa', '#fb923c', '#34d399', '#ec4899'
  ];

  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState(0);

  const semesterList = Object.keys(results)
    .map((year) => results[year])
    .flat();

  const getGradeColor = (grade) => {
    const gradeColors = {
      'A+': 'text-green-600 bg-green-100',
      'A': 'text-green-600 bg-green-100',
      'A-': 'text-blue-600 bg-blue-100',
      'B+': 'text-blue-600 bg-blue-100',
      'B': 'text-yellow-600 bg-yellow-100',
      'B-': 'text-yellow-600 bg-yellow-100',
      'C+': 'text-orange-600 bg-orange-100',
      'C': 'text-orange-600 bg-orange-100',
      'D': 'text-red-600 bg-red-100',
      'F': 'text-red-600 bg-red-100',
    };
    return gradeColors[grade] || 'text-gray-600 bg-gray-100';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg border">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm">
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 py-12">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="bg-amber-50/90  rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{student.name}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-blue-600">ID:</span>
                  <span className="font-mono">{student.id}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-purple-600">Department:</span>
                  <span>{student.department}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-indigo-600">Degree:</span>
                  <span>{student.degree}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-green-600">Semester:</span>
                  <span>{student.semester}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold">{cgpa.toFixed(2)}</div>
                <div className="text-sm opacity-90">Current CGPA</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold">{credit}</div>
                <div className="text-sm opacity-90">Total Credits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* GPA Trend Chart */}
          <div className="lg:col-span-2 bg-amber-50/90 rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
              Academic Performance Trend
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={semesterData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="gpa"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8 }}
                    name="GPA"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Grade Distribution */}
          <div className="bg-amber-50/90 rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-1 h-8 bg-purple-500 rounded-full mr-4"></div>
              Grade Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gradeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {gradeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value, entry) => (
                      <span style={{ color: entry.color }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Credits Bar Chart */}
        <div className="bg-amber-50/90 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-1 h-8 bg-green-500 rounded-full mr-4"></div>
            Credit Distribution by Semester
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={semesterData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="credits"
                  fill="#22c55e"
                  name="Credits"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Semester Details */}
        <div className="bg-amber-50/90 rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <div className="w-1 h-8 bg-indigo-500 rounded-full mr-4"></div>
            Detailed Semester Breakdown
          </h3>

          {/* Semester Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 p-2 bg-gray-100 rounded-2xl">
              {semesterList.map((sem, i) => (
                <button
                  key={sem.name}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${selectedSemesterIndex === i
                      ? "bg-amber-50/90 text-blue-600 shadow-md transform scale-105"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                    }`}
                  onClick={() => setSelectedSemesterIndex(i)}
                >
                  {sem.name}
                </button>
              ))}
            </div>
          </div>

          {/* Semester Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {semesterList[selectedSemesterIndex]?.gpa}
              </div>
              <div className="text-sm text-blue-500">Semester GPA</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="text-2xl font-bold text-green-600">
                {semesterList[selectedSemesterIndex]?.credit}
              </div>
              <div className="text-sm text-green-500">Credits Earned</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <div className={`inline-block px-4 py-2 rounded-full text-lg font-bold ${getGradeColor(semesterList[selectedSemesterIndex]?.grade)}`}>
                {semesterList[selectedSemesterIndex]?.grade}
              </div>
              <div className="text-sm text-purple-500 mt-2">Letter Grade</div>
            </div>
          </div>

          {/* Course Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Course Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Course Title</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">GPA</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {semesterList[selectedSemesterIndex]?.courses.map((course, index) => (
                  <tr key={course.course_code} className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                    <td className="px-6 py-4 text-sm font-mono text-gray-800">{course.course_code}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{course.course_title}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(course.grade)}`}>
                        {course.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-gray-800">{course.gpa}</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-gray-800">{course.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ResultAnalyticsWrapper() {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); const { user } = useContext(AuthContext);

  const [currentStudent, setCurrentStudent] = useState([]);

 useEffect(() => {
  // First fetch: get current student profile by email
  if (!user?.email) return;

  axios.get(`https://server-lu.vercel.app/users/profileDetails/${user.email}`)
    .then((res) => {
      setCurrentStudent(res.data);
      console.log('Student Now', res.data);
    })
    .catch((err) => {
      setError("Failed to load profile details.");
      setLoading(false);
    });
}, [user?.email]);

// Second fetch: get results using currentStudent info
useEffect(() => {
  if (!currentStudent?.stdId || !currentStudent?.DOB) return;

  const apiUrl = "https://www.lus.ac.bd/wp-admin/admin-ajax.php";

  const formBody = new URLSearchParams({
    action: "get-result",
    student_id: `${currentStudent.stdId}`,
    birth_date: `${currentStudent.DOB}`,
  }).toString();

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
    credentials: "include",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not OK");
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setResultData(data);
      } else {
        throw new Error("API returned unsuccessful response");
      }
    })
    .catch((err) => {
      setError(err.message || "Failed to fetch result.");
    })
    .finally(() => {
      setLoading(false);
    });
}, [currentStudent?.stdId, currentStudent?.DOB]);


  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center items-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
          <p className="text-xl text-gray-600 font-medium">Loading your academic journey...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center items-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Unable to Load Results</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );

  return <ResultAnalytics result={resultData} />;
}