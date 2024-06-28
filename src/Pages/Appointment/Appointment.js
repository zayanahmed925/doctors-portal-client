import React, { useState } from 'react';
import AppiontmentBanner from '../AppiontmentBanner/AppiontmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Footer from '../Shared/Footer/Footer';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppiontmentBanner date={date} setDate={setDate}></AppiontmentBanner>
            <div className='py-4'>
                <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;