import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookDoctorAppointmentModal = ({ doctor, hospital, department, setIsBookAppointment }) => {
    const [user] = useAuthState(auth);
    const date = new Date();
    const [appointmentDate, setAppointmentDate] = useState(date)
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    // const { name, slots, _id, price } = treatment;

    // const formattedDate = format(appointmentDate, 'PP');
    // console.log(treatment);
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        // console.log(slot);

        const booking = {
            // treatmentId: _id,
            // treatment: name,
            slot,
            // price,
            doctorName: doctor?.name,
            date: appointmentDate,
            patient: user?.email,
            patientName: user?.displayName,
            hospital: hospital,
            department: department,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setIsBookAppointment(false)
                    toast(`Appointment is booked ${appointmentDate} at ${slot}`)
                }
                else {
                    console.log('error');
                    // toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // refetch();
                // setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-2">You Selected: {doctor?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>

                        <input
                            type="date"
                            className="input input-bordered w-full max-w-xs"
                            name="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        <input type="text" name="doctor_name" value={doctor?.name} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                doctor.slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone No:" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookDoctorAppointmentModal;