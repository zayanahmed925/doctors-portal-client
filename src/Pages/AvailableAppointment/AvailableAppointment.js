import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AvailableService from '../AvailableService/AvailableService';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';

const AvailableAppointment = ({ date }) => {
    // console.log(date)
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState('');
    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, error, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div className='px-12'>
            <div>
                <h2 className='text-xl text-secondary text-center font-bold'>Available Appointment {format(date, 'PP')}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AvailableService
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
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;