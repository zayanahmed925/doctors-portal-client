import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h2 className='text-xl text-secondary text-center font-bold'>Available Appointment {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;