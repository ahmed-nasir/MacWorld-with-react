import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import useReviews from '../useReviews/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className=''>
            <div className='text-center my-10'>
                <h1 className='text-5xl'>All Reviews</h1>
            </div>

            <div className='grid'>
            <div className='gird grid-cols-3  grid gap-10 align-center'>
                {
                    reviews?.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
            </div>
        </div>

    );
};

export default Reviews;