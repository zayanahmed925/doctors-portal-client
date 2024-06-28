import React, { useState } from 'react';
import HospitalCreateModal from './HospitalCreateModal';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import DepartmentAddModal from './DepartmentAddModal';

const Departments = () => {
    const [isAddDepartmentModal, setIsAddDepartmentModal] = useState(false)

    // Use useQuery hook to fetch data
    const { data: departments, isLoading, error, refetch } = useQuery(['departments'], () =>
        fetch(`http://localhost:5000/departments`)
            .then(res => res.json()

            )
    )

    // if (isLoading) return <p>Loading...</p>;
    if (error) return toast.error(error.message)

    return (
        <div>
            <div className="flex justify-between py-2">
                <h2 className='text-xl'>Departments</h2>

                <label
                    htmlFor="department-create-modal"
                    onClick={() => setIsAddDepartmentModal(true)}
                    className="btn btn-sm btn-secondary text-white upperCase">Add Department</label>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Department Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            departments?.map((a, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{a.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {
                isAddDepartmentModal && <DepartmentAddModal refetch={refetch} setIsAddDepartmentModal={setIsAddDepartmentModal} />
            }
        </div>
    );
};

export default Departments;