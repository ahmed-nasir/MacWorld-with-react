import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import ReviewCard from '../ReviewCard/ReviewCard';


const Home = () => {

    const [reviews, setReviews] = useState();
    // console.log(reviews)
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
    }, [])


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  items-center bg-orange-500 py-5 mb-3 '>
                <div className='container flex justify-center pl-32 '>
                    <h1 className='text-white'><span className=' text-2xl md:text-5xl font-bold'>Revolutionary device at an unbelievable price.  </span> <br /> second linesecond linesecond line</h1>
                </div>
                <div className='flex justify-center'><img className=' md:h-[450px] md:w-[450px] h-60 w-60   md:object-cover' src="https://freepikpsd.com/file/2020/02/Macbook-Pro-PNG-Clipart-Free.png" /></div>
            </div>
            <div >
                <div className='grid justify-center'>
                    <h1 className='text-4xl font-bold'>Customer Reviews</h1>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            // reviews?.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                           reviews?.slice(0,3).map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
                        }
                    </div>
                    <button className='bg-blue-600 rounded-sm p-2 text-white '>See More</button>
                </div>

            </div>
        </div>
    );
};

export default Home;