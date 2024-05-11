import React from 'react';
import InfoCard from '../../InfoCard/InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {/* <InfoCard className='bg-gradient-to-r from-secondary to-primary' cardTitle='24/7 Services' img={clock}></InfoCard>
            <InfoCard className='bg-accent' cardTitle='Visit our location' img={marker}></InfoCard>
            <InfoCard className='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us now' img={phone}></InfoCard> */}
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure className='pl-4'>
                        <img src={clock} className='w-12' alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Booking Time</h2>
                        <p>Booking is available 24/7 for your convenience</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure className='pl-4'>
                        <img src={marker} className='w-12' alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Online Appointment</h2>
                        <p>No need to visit a hospital for appointment</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure className='pl-4'>
                        <img src={phone} className='w-12' alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">24/7 Services</h2>
                        <p>We are ready to assist you Anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;