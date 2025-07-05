import React, { useEffect, useState } from 'react';
import FacultyCard from '../../FacultyCard/FacultyCard'

const Islamic = () => {
   const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);
    const [teacherDetail, setTeacherDetail] = useState(null);

    useEffect(() => {
        fetch('https://server-lu.vercel.app/teachers/Islamic%20studies')
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
            {/* Left: Faculty List */}
            <div className="w-1/2 space-y-3">
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

            {/* Right: Faculty Details */}
            <div className="w-1/2">
                {teacherDetail ? (
                    <FacultyDetail teacher={teacherDetail} />
                ) : (
                    <div className="text-gray-500 italic mt-10">Click on a faculty member to view details.</div>
                )}
            </div>
        </div>
    );
};

export default Islamic;