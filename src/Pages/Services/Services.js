import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'We provide best and quality full service service ',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'We provide best and quality full service service ',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'We provide best and quality full service service ',
            img: whitening
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='font-bold text-primary text-xl'>Our Services</h2>
                <h2 className='text-4xl'>Services We provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 my-14'>
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