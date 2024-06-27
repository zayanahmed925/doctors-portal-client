import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Rating from 'react-rating';
import userProfile from '../../assets/images/people1.png';
const ReviewRaw = ({ review }) => {
    console.log(review);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>{review.comments}</p>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 mt-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5 ">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h2>{review.name}</h2>
                            <p>{review.location}</p>
                            <div>
                                <div className="flex items-center gap-1">
                                    <Rating
                                        initialRating={review.reviewStar}
                                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                        readonly
                                    >
                                    </Rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewRaw;