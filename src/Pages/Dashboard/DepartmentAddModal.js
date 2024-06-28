import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const DepartmentAddModal = ({ refetch, setIsAddDepartmentModal }) => {
    // create department
    // Use useQuery hook to fetch hospital
    const { data: hospitals, isLoading: isHospitalLoading, error: hospitalLoadingError } = useQuery(['hospitals'], () =>
        fetch(`http://localhost:5000/hospitals`)
            .then(res => res.json()

            )
    )

    const handleAddDepartment = event => {
        event.preventDefault()
        const department = {
            name: event.target.department_name.value,
            hospital: event.target.hospital.value,
        }
        console.log(department);
        fetch('http://localhost:5000/department', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(department)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    refetch()
                    setIsAddDepartmentModal(false)
                    toast.success(`department Create Successfully`)
                }
                else {
                    console.log('error');
                    toast.error(`Something Want Wrong`)

                }
                // refetch();
                // setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="department-create-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="department-create-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-2">Add Department</h3>
                    <form onSubmit={handleAddDepartment} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                        <input placeholder='Department Name' type="text" name="department_name" className="input input-bordered w-full max-w-xs" />
                        <select name='hospital' className="select select-info select-bordered w-full max-w-xs">
                            <option disabled selected>Hospital</option>
                            {hospitals?.map((hospital, index) => <option key={index} value={hospital?._id}>{hospital?.name}</option>)}
                        </select>
                        <input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default DepartmentAddModal;