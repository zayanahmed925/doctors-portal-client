import React from 'react';
import chair from '../../assets/images/banner-appointment-2.jpg';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm lg:max-w-xl rounded-lg " />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Book Your Online Appointment</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;