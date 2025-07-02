import { useEffect, useState } from "react";
import { Search, BookOpen, GraduationCap } from "lucide-react";

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
    const coursesPerPage = 15;

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
            })
            .catch(err => {
                console.error("Error fetching courses:", err);
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

    return (
        <div className="min-h-screen bg-[#023020] mb-10">
            {/* Header */}
            <header className="border-b shadow-sm bg-[#023020] py-16">
                <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-white">
                        <GraduationCap className="h-8 w-8" />
                        <div>
                            <h1 className="text-2xl font-bold">University Portal</h1>
                            <p className="text-green-200">Course Catalog</p>
                        </div>
                    </div>

                    {/* Search Box */}
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input input-bordered w-full pl-10"
                        />
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-4 pt-6">
                <div className="tabs tabs-boxed bg-[#455A64] mb-6 flex flex-wrap">
                    {departments.map((dept) => (
                        <a
                            key={dept.id}
                            role="tab"
                            className={`tab transition-colors duration-200 font-medium ${selectedDepartment.toLowerCase() === dept.id.toLowerCase()
                                ? "tab-active bg-white text-[#023020] border border-[#023020]"
                                : "text-gray-700 hover:bg-white hover:text-[#023020]"
                                }`}
                            onClick={() => setSelectedDepartment(dept.id)}
                        >
                            {dept.id === "all" ? "All" : dept.name.split(" ")[0]}
                        </a>
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-2 text-white px-6">
                    {departments.find((d) => d.id.toLowerCase() === selectedDepartment.toLowerCase())?.name}
                </h2>
                <p className="text-green-200 mb-6 px-6">
                    {selectedDepartment === "all"
                        ? `Showing ${filteredCourses.length} courses across all departments`
                        : `Courses offered by the ${departments.find((d) => d.id.toLowerCase() === selectedDepartment.toLowerCase())?.name} department.`}
                </p>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {currentCourses.map((course) => (
                        <div
                            key={course.id}
                            className="card bg-green-100 shadow-md border-l-4"
                            style={{
                                borderLeftColor:
                                    departments.find((d) => d.id.toLowerCase() === (course.department || "").toLowerCase())?.color || "#999"
                            }}
                        >
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <span className="badge badge-neutral text-xs">{course.courseCode}</span>
                                </div>
                                <h3 className="card-title mt-2 text-lg text-gray-800">{course.courseTitle}</h3>
                                <p className="text-sm text-gray-600">{course.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-medium text-[#023020] border-2 p-2 rounded-2xl">{course.courseCredit} Credits</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-8 space-x-2">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-md border text-sm font-medium ${currentPage === 1
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                        >
                            Prev
                        </button>

                        <span className="text-white text-sm">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-md border text-sm font-medium ${currentPage === totalPages
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* No Courses Found */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
