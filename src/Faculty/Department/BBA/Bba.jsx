import React, { useEffect, useState } from 'react';

const Bba = () => {
    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch('/faculty_bba.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTeacher(data)

            })
    }, [])
    return (
        <div>
            <p>teacher count : {teachers.length}</p>
        </div>
    );
};

export default Bba;