import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import BookDoctorAppointmentModal from '../BookDoctorAppointmentModal/BookDoctorAppointmentModal';

const FilterDoctors = ({ doctor }) => {
    const [isBookAppointment, setIsBookAppointment] = useState(false);

    const { name, slots, hospital, department, email, img } = doctor
    console.log(doctor);
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body text-center">
                <img src={img} alt="" />
                <h2 className="card-title text-xl text-primary grid justify-items-center">{doctor?.name}</h2>
                <p>{hospital?.name}</p>
                <p>{department?.name}</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setIsBookAppointment(true)}
                        disabled={slots?.length === 0}
                        className="btn btn-secondary text-white upperCase">Book Appointment</label>
                </div>
            </div>

            {
                isBookAppointment && <BookDoctorAppointmentModal
                    doctor={doctor}
                    setIsBookAppointment={setIsBookAppointment}
                />
            }
        </div>
    );
};

export default FilterDoctors;