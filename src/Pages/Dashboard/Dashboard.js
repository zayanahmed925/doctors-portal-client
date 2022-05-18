import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    console.log(admin);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-slider" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl'>Welcome to my Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-slider" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;