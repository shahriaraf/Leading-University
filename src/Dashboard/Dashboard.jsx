import React, { useContext, useEffect, useState } from 'react';
import AdminPortal from '../Admin Portal/AdminPortal';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import StudentPortal from '../StudentPortal/StudenntPortal';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:5000/users/profileDetails/${user?.email}`)
            .then(res => {
                // console.log(res.data.role);
                setCurrentUser(res.data)
            })


    }, [user?.email])

    const userRole = currentUser.role;
    // console.log(userRole)


    return (
        <div>
            {
                userRole === 'admin'
                    ? <AdminPortal />
                    : <StudentPortal />
            }
        </div>
    );
};

export default Dashboard;