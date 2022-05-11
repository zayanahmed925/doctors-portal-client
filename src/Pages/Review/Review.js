import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 mt-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5 ">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <div>
                            <h2>{review.name}</h2>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;