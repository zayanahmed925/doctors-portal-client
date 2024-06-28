import React, { useState } from 'react';
import HospitalCreateModal from './HospitalCreateModal';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const Hospitals = () => {
    const [isAddHospitalModal, setIsAddHospitalModal] = useState(false)

    // Use useQuery hook to fetch data
    const { data: hospitals, isLoading, error, refetch } = useQuery(['hospitals'], () =>
        fetch(`http://localhost:5000/hospitals`)
            .then(res => res.json()

            )
    )

    // if (isLoading) return <p>Loading...</p>;
    if (error) return toast.error(error.message)
    // if (data) setHospitals(data)

    return (
        <div>
            <div className="flex justify-between py-2">
                <h2 className='text-xl'>Hospital</h2>

                <label
                    htmlFor="hospital-create-modal"
                    onClick={() => setIsAddHospitalModal(true)}
                    className="btn btn-sm btn-secondary text-white upperCase">Add Hospital</label>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Hospital Name</th>
                            <th>District Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            hospitals?.map((a, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{a.name}</td>
                                        <td>{a.district}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {
                isAddHospitalModal && <HospitalCreateModal refetch={refetch} setIsAddHospitalModal={setIsAddHospitalModal} />
            }
        </div>
    );
};

export default Hospitals;