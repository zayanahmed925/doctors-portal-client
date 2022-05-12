import React from 'react';

const AvailableService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body text-center">
                <h2 class="card-title text-xl text-primary grid justify-items-center">{name}</h2>
                <p>{slots.length > 0
                    ? <span>{slots[0]}</span>
                    : <span className='text-red-500'> No Slot Available </span>}</p>
                <p>{slots.length} {slots.length < 1 ? 'Space' : 'Spaces'} Available</p>
                <div class="card-actions justify-center">

                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        class="btn btn-secondary text-white upperCase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;