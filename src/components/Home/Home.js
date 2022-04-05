import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import useReviews from '../useReviews/useReviews';


const Home = () => {

    // custom hook
    const [reviews,setReviews]=useReviews()
    
    /* const [reviews, setReviews] = useState();
    // console.log(reviews)
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
    }, [])

 */
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  items-center bg-orange-500 py-5 mb-3 '>
                <div className='container flex justify-center pl-32 '>
                    <h1 className='text-white'><span className=' text-2xl md:text-5xl font-bold'>Take your <span className='underline'>MacBook</span>  </span> <br /> <span className='text-3xl'>Revolutionary device at an unbelievable price <br/> provide any kind of mac book.</span></h1>
                </div>
                <div className='flex justify-center'>
                    <img className=' md:h-[450px] md:w-[450px] h-60 w-60   md:object-cover' src="https://freepikpsd.com/file/2020/02/Macbook-Pro-PNG-Clipart-Free.png" alt='hero-img'/>
                </div>
            </div>
            <div >
                <div className='text-center'>
                    <h1 className='text-4xl font-bold my-8 '>Customer Reviews</h1>
                    <div className='grid grid-cols-3  gap-7'>
                        {
                            
                           reviews?.slice(0,3).map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
                        }
                    </div>
                    <Link to="/reviews"><button  className='mt-6 bg-blue-600 rounded-sm p-2 text-white '>See All Reviews</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Home;