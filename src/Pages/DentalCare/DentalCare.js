import React from 'react';
import treatment from '../../assets/images/treatment.png';
const DentalCare = () => {
    return (
        <div className='my-32'>
            <div className="hero min-h-screen grid ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl w-fit" alt='' />
                    <div className='max-w-xl pl-8'>
                        <h1 className="sm:text-4xl lg:text-4xl font-bold">Exceptional Health Care <br /> On Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;