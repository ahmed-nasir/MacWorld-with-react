import React from 'react';
import Rating from 'react-rating';

const ReviewCard = ({ review }) => {
    console.log(review)
    const { name, picture, rating, review: reviewText } = review;
    return (


        <div className=" bg-gray-300 flex items-center  h-96 w-80 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col  items-center ">
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={review.picture} alt="Bonnieimage" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-sm px-5 text-center text-gray-500 dark:text-gray-400">{reviewText.slice(0, 100)}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                    <span className='text-black'>Rating:</span>
                    <Rating
                        initialRating={rating}
                        readonly
                    />
                </div>
            </div>
        </div>



    );
};

export default ReviewCard;