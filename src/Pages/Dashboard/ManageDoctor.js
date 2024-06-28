import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';
import DoctorAddModal from './DoctorAddModal';

const ManageDoctor = () => {
    const [isAddDoctorModal, setIsAddDoctorModal] = useState(false)

    const handleModalOpen = (status) => {
        // toggleModal() // for the handle z-index of the dashboard sidebar
        setIsAddDoctorModal(true)
    }
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(doctors)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Doctor {doctors?.length}</h2>
            <div className="flex justify-between py-2">
                <h2 className='text-xl'>Manage Doctor</h2>

                <label
                    htmlFor="doctor-create-modal"
                    onClick={() => handleModalOpen(true)}
                    className="btn btn-sm btn-secondary text-white upperCase">Add Doctor</label>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Profile</th>
                            <th>Doctor Name</th>
                            <th>Specialty</th>
                            <th>Hospital</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                isAddDoctorModal && <DoctorAddModal refetch={refetch} setIsAddDoctorModal={setIsAddDoctorModal} />
            }
        </div>
    );
};

export default ManageDoctor;