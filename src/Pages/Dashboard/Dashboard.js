import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //     toggleModal()
    // }, [])

    // console.log(admin);
    return (
        <div className="drawer drawer-mobile" style={{ zIndex: '888' }}>
            <input id="dashboard-slider" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <h2 className='text-2xl'>Welcome to my Dashboard</h2> */}
                <Outlet user={user} />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-slider" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/allAppointments'> All Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>

                        <li><Link to='/dashboard/hospital'>Manage Hospital</Link></li>
                        <li><Link to='/dashboard/departments'>Manage Departments</Link></li>
                        {/* <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li> */}
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;