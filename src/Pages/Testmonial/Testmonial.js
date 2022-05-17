import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from '../Review/Review';
const Testmonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'Calfonia',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'Calfonia',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'Calfonia',
            img: people3
        },
    ]
    return (
        <div className=' my-20'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl text-primary font-bold'>Testimonial</h2>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div className='w-24 xl:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testmonial;