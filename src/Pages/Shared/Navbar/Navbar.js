import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/home')
    };

    const menuItems = <>
        <li className='font-bold hover:bg-gradient-to-r from-secondary to-primary rounded-lg'><Link to='/home'>Home</Link></li>
        <li className='font-bold hover:bg-gradient-to-r from-secondary to-primary rounded-lg'><Link to='/appointment'>Appointment</Link></li>
        <li className='font-bold hover:bg-gradient-to-r from-secondary to-primary rounded-lg'><Link to='/reviews'>Reviews</Link></li>
        <li className='font-bold hover:bg-gradient-to-r from-secondary to-primary rounded-lg'><Link to='/contactUS'>Contact US</Link></li>
        {
            user && <li className='font-bold hover:bg-gradient-to-r from-secondary to-primary rounded-lg'><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost className='font-bold hover:bg-gradient-to-r from-bg-red-600 to-neutral rounded-lg'" onClick={logout}>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <a className="font-bold normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" for="dashboard-slider" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;