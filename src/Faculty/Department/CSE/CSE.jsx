import { useEffect, useState } from "react";
import FacultyCard from "../../FacultyCard/facultyCard";
import FacultyDetail from "../../FacultyDetail/FacultyDetails";

const CSE = () => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);
    const [teacherDetail, setTeacherDetail] = useState(null);

    useEffect(() => {
        fetch(`https://server-lu.vercel.app/teachers/Computer%20Science%20and%20Engineering`)
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);

    useEffect(() => {
        if (selectedTeacherId) {
            fetch(`https://server-lu.vercel.app/teacherDetails/${selectedTeacherId}`)
                .then(res => res.json())
                .then(data => setTeacherDetail(data));
        }
    }, [selectedTeacherId]);

    return (
        <div className="flex gap-6">
            {/* Left: List of Teachers */}
            <div className="w-1/2 space-y-2">
                <p className="font-bold text-gray-700 mb-4">Faculty ({teachers.length})</p>
                {
                    teachers.map((teacher) => (
                        <FacultyCard
                            key={teacher._id}
                            teacher={teacher}
                            onClick={() => setSelectedTeacherId(teacher._id)}
                        />
                    ))
                }
            </div>

            {/* Right: Teacher Details */}
            <div className="w-1/2">
                {teacherDetail ? (
                    <FacultyDetail teacher={teacherDetail} />
                ) : (
                    <div className="text-gray-500 italic mt-10">Click on a faculty member to see details.</div>
                )}
            </div>
        </div>
    );
};

export default CSE;
