import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully make admin')
                    refetch()
                }

            })
    }
    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <h4 className='font-bold'>Already Admin</h4>}</td>
            <td><button class="btn btn-xs">Delete</button></td>
        </tr>

    );
};

export default UserRow;