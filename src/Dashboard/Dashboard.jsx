import React, { useContext, useEffect, useState } from 'react';
import AdminPortal from '../Admin Portal/AdminPortal';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import StudentPortal from '../StudentPortal/StudenntPortal';
import Loading from '../component/PageWrapper/Loading/Loading';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!user?.email) return;

        axios.get(`https://server-lu.vercel.app/users/profileDetails/${user.email}`)
            .then(res => {
                 console.log('Profile data:', res.data); 
                setCurrentUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [user?.email]);

    if (loading) return <Loading></Loading>;


    const userRole = currentUser?.role;
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