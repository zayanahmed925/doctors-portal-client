import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking/all`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div>
            <h2>All Appointment History {appointments?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Doctor Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appointments?.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patient}</td>
                                <td>{a.doctorName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                {/* <td>{a.treatment}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAppointments;