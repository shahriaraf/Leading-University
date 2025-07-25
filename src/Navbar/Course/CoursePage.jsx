import { useEffect, useState } from "react";
import { Search, BookOpen, GraduationCap, Sparkles, Clock, User } from "lucide-react";

// Departments including "All"
const departments = [
    { id: "all", name: "All Departments", color: "#374151" },
    { id: "CSE", name: "Computer Science and Engineering", color: "#1E3A8A" },
    { id: "BBA", name: "Business Administration", color: "#4B5563" },
    { id: "EEE", name: "Electronics and Electrical Engineering", color: "#2563EB" },
    { id: "LAW", name: "LAW", color: "#065F46" },
    { id: "Architecture", name: "Architecture", color: "#6D28D9" },
    { id: "English", name: "English", color: "#78350F" },
    { id: "CE", name: "Civil Engineering", color: "#DC2626" },
    { id: "IslamicStudies", name: "Islamic Studies", color: "#15803D" },
    { id: "PublicHealth", name: "Public Health", color: "#0E7490" },
    { id: "THM", name: "Tourism and Hospitality Management", color: "#B45309" },
];

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const coursesPerPage = 15;

    useEffect(() => {
        setLoading(true);
        fetch('https://server-lu.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching courses:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on filter change
    }, [searchTerm, selectedDepartment]);

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            (course.courseTitle || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (course.courseCode || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (course.instructor || "").toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDepartment =
            selectedDepartment === "all" ||
            (course.department || "").toLowerCase() === selectedDepartment.toLowerCase();

        return matchesSearch && matchesDepartment;
    });

    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const LoadingSpinner = () => (
        <div className="flex justify-center items-center py-20">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-emerald-500" />
                </div>
            </div>
        </div>
    );

    const FloatingElements = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-300 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-300 rounded-full animate-bounce opacity-30" style={{animationDelay: '0.5s'}}></div>
        </div>
    );

    return (
        <div className="min-h-screen px-4 py-12 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
            <FloatingElements />
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[length:20px_20px] animate-pulse"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-emerald-800/30 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-emerald-900/80"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                        <div className="flex items-center space-x-4 text-white group">
                            <div className="relative">
                                <GraduationCap className="h-10 w-10 text-emerald-400 group-hover:text-emerald-300 transition-all duration-300 transform group-hover:scale-110" />
                                <div className="absolute -inset-1 bg-emerald-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                                    University Portal
                                </h1>
                                <p className="text-emerald-200 flex items-center space-x-2">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Course Catalog</span>
                                </p>
                            </div>
                        </div>

                        {/* Enhanced Search Box */}
                        <div className="relative w-full max-w-md">
                            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur-sm opacity-0 transition-opacity duration-300 ${isSearchFocused ? 'opacity-30' : ''}`}></div>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                                <input
                                    type="text"
                                    placeholder="Search courses, codes, or instructors..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8">
                {/* Enhanced Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 p-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                        {departments.map((dept, index) => (
                            <button
                                key={dept.id}
                                onClick={() => setSelectedDepartment(dept.id)}
                                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                    selectedDepartment.toLowerCase() === dept.id.toLowerCase()
                                        ? "bg-white text-slate-900 shadow-lg"
                                        : "text-white hover:bg-white/10"
                                }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'slideInFromTop 0.5s ease-out forwards'
                                }}
                            >
                                {dept.id === "all" ? "All Departments" : dept.name.split(" ")[0]}
                                {selectedDepartment.toLowerCase() === dept.id.toLowerCase() && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl blur-sm opacity-20"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Department Title */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold mb-2 text-white">
                        {departments.find((d) => d.id.toLowerCase() === selectedDepartment.toLowerCase())?.name}
                    </h2>
                    <p className="text-emerald-200 text-lg">
                        {selectedDepartment === "all"
                            ? `Discover ${filteredCourses.length} courses across all departments`
                            : `Explore courses from the ${departments.find((d) => d.id.toLowerCase() === selectedDepartment.toLowerCase())?.name} department`}
                    </p>
                </div>

                {/* Loading State */}
                {loading && <LoadingSpinner />}

                {/* Courses Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {currentCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'slideInFromBottom 0.6s ease-out forwards'
                                }}
                            >
                                {/* Gradient Border */}
                                <div 
                                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"
                                    style={{
                                        background: `linear-gradient(45deg, ${departments.find((d) => d.id.toLowerCase() === (course.department || "").toLowerCase())?.color || "#999"}, transparent)`
                                    }}
                                ></div>
                                
                                {/* Card Content */}
                                <div className="relative p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span 
                                            className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                                            style={{
                                                backgroundColor: departments.find((d) => d.id.toLowerCase() === (course.department || "").toLowerCase())?.color || "#999"
                                            }}
                                        >
                                            {course.courseCode}
                                        </span>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Sparkles className="w-5 h-5 text-emerald-400" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                                        {course.courseTitle}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                        {course.description}
                                    </p>
                                    
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-emerald-400" />
                                            <span className="text-emerald-200 font-medium">
                                                {course.courseCredit} Credits
                                            </span>
                                        </div>
                                        {course.instructor && (
                                            <div className="flex items-center space-x-1">
                                                <User className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-300 text-sm">
                                                    {course.instructor}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Enhanced Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                                currentPage === 1
                                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                            }`}
                        >
                            Previous
                        </button>

                        <div className="flex items-center space-x-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
                                        currentPage === i + 1
                                            ? "bg-emerald-500 text-white shadow-lg"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                                currentPage === totalPages
                                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* No Courses Found */}
                {!loading && filteredCourses.length === 0 && (
                    <div className="text-center py-16">
                        <div className="relative inline-block">
                            <BookOpen className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-pulse" />
                            <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">No courses found</h3>
                        <p className="text-gray-300 text-lg">
                            Try adjusting your search terms or explore different departments
                        </p>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes slideInFromTop {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}