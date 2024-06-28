import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, department, hospital, img, email } = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success(`Doctor: ${name} successfully delete`)
                refetch();

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 mask mask-squircle">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{hospital.name}</td>
            <td>{department.name}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;