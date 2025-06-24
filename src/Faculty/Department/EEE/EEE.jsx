import React, { useEffect, useState } from 'react';
import FacultyCard from '../../FacultyCard/facultyCard'
const EEE = () => {
    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch('/faculty_eee.json')
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

export default EEE;