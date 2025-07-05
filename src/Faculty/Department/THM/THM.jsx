import React, { useEffect, useState } from 'react';
import FacultyCard from '../../FacultyCard/FacultyCard'

const THM = () => {
    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teachers/Tourism%20and%20Hospitality%20Management')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTeacher(data)

            })
    }, [])
    return (
        <div>

            <p className="font-bold text-gray-700 mb-6">Faculty({teachers.length})</p>

            <div className="flex flex-wrap gap-3">
                {
                    teachers.map(teacher => <FacultyCard teacher={teacher}></FacultyCard>)
                }
            </div>

        </div>
    );
};

export default THM;