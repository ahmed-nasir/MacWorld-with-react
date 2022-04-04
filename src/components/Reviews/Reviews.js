import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import useReviews from '../useReviews/useReviews';

const Reviews = () => {
    const [reviews,setReviews]=useReviews()
    return (
        <div>
            {
                reviews?.map(review=><ReviewCard></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;