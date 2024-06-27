import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from '../Review/Review';
import ReviewRaw from './ReviewRaw';

const Testmonial = () => {
    // const reviews = [
    //     {
    //         _id: 1,
    //         name: 'Rifat hossain',
    //         location: 'dhaka',
    //         img: people1,

    //     },
    //     {
    //         _id: 2,
    //         name: 'Shamima islam',
    //         location: 'dhaka',
    //         img: people2
    //     },
    //     {
    //         _id: 3,
    //         name: 'Tushi akhter',
    //         location: 'sylhet',
    //         img: people3
    //     },
    // ]
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);

    // console.log(reviews);
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
                    reviews.map(review => <ReviewRaw
                        key={review._id}
                        review={review}
                    ></ReviewRaw>)
                }
            </div>
        </div>
        // <div className='container mx-auto'>
        //     <h2 className='text-center text-gray-900 text-3xl font-bold mb-12 font-sans'>Our Client <span className='text-primary'>Review</span> !!</h2>
        //     <div className='grid lg:grid-cols-2 gap-5  '>
        //         {
        //             reviews?.map(review => <ReviewRaw
        //                 review={review}
        //                 key={review._id}
        //             ></ReviewRaw>)
        //         }
        //     </div>
        // </div>
    );
};

export default Testmonial;