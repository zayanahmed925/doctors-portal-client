import React from 'react';
import fluoride from '../../assets/images/hospital (2).png';
import cavity from '../../assets/images/medical-team.png';
import whitening from '../../assets/images/medical-appointment.png';
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Govt Hospital',
            description: 'The most comfortable government hospital is where you can seek treatment ',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Specialist Doctor',
            description: 'You have the freedom to select any doctor who specializes in the field you need',
            img: cavity
        },
        {
            _id: 3,
            name: 'Appointment Schedule ',
            description: 'You can easily schedule an appointment on a date that suits you best',
            img: whitening
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='font-bold text-primary text-xl'>Our Services</h2>
                <h2 className='text-4xl'>Services We provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-14'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;