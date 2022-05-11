import React from 'react';

const InfoCard = ({ img, cardTitle, className }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${className}`}>
                <figure className='pl-4'>
                    <img src={img} className='w-12' alt="Album" />
                </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;