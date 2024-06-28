import React from 'react';

const AvailableService = ({ doctor, setTreatment }) => {
    const { name, slots } = doctor;
    console.log(doctor);
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body text-center">
                <h2 className="card-title text-xl text-primary grid justify-items-center">{name}</h2>
                <p>{slots?.length > 0
                    ? <span>{slots && slots[0]}</span>
                    : <span className='text-red-500'> No Slot Available </span>}</p>
                <p>{slots?.length} {slots?.length < 1 ? 'Space' : 'Spaces'} Available</p>
                {/* <p>Price: ${price}</p> */}
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(doctor)}
                        disabled={slots?.length === 0}
                        className="btn btn-secondary text-white upperCase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;