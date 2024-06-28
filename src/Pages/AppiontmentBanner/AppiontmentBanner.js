import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/banner.jpg';
const AppiontmentBanner = ({ date, setDate }) => {

    return (
        <div>
            {/* <div className="hero min-h-screen ">
                <div className="hero-content" style={{ width: '100%', maxHeight: ' 200px' }}> */}
            <img src={chair} className="w-100 shadow-xl mb-4" alt='' style={{ width: '100%', maxHeight: ' 400px' }} />
            {/* <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div> */}
            {/* </div>
            </div> */}
        </div>
    );
};

export default AppiontmentBanner;