import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const HospitalCreateModal = ({ refetch, setIsAddHospitalModal }) => {


    // create hospital
    const handleBooking = event => {
        event.preventDefault()
        const hospital = {
            name: event.target.hospital_name.value,
            district: event.target.district.value

        }
        console.log(hospital);
        fetch('http://localhost:5000/hospital', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(hospital)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setIsAddHospitalModal(false)
                    refetch()
                    toast.success(`Hospital Create Successfully`)
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
            <input type="checkbox" id="hospital-create-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="hospital-create-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-2">Add Hospital</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>


                        <input placeholder='Hospital Name' type="text" name="hospital_name" className="input input-bordered w-full max-w-xs" />
                        <select name='district' className="select select-bordered w-full max-w-xs">
                            <option >Select District</option>
                            <option value="Dhaka">Dhaka</option>

                        </select>
                        <input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default HospitalCreateModal;