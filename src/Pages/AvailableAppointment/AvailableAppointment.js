import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableService from '../AvailableService/AvailableService';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState('');
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-12'>
            <div>
                <h2 className='text-xl text-secondary text-center font-bold'>Available Appointment {format(date, 'PP')}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AvailableService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></AvailableService>)
                }
            </div>
            <div>
                {
                    treatment && <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                        date={date}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;