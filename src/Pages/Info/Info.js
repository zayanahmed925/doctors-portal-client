import React from 'react';
import InfoCard from '../../InfoCard/InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard className='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hour' img={clock}></InfoCard>
            <InfoCard className='bg-accent' cardTitle='Visit our location' img={marker}></InfoCard>
            <InfoCard className='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;