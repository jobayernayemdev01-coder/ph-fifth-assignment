import React from 'react';
import bannerStack from '../assets/banner-stack.png';

export default function Hero(){
    return(
        <div className='px-25 mt-24 h-80 flex justify-between items-center'>
            <div className='w-2xl'>
                <h1 className="text-6xl font-bold mb-2">Build Your Ideal</h1>
                <h1 className="text-6xl font-bold mb-8 bg-linear-to-r from-orange-500 via-pink-700 to-purple-600 bg-clip-text text-transparent">Development Stack</h1>
                <p className='text-[18px] text-gray-500 mb-10 w-145'>Explore frontend, backend, database, and tooling options, <br></br>compare them side by side, and put together the stack that fits your next project.</p>
                <div className='w-86 text-[14px] flex gap-2.5 items-center'>
                    <button className='h-9 px-3 flex-1 justify-between items-center text-white rounded-lg bg-linear-to-r from-orange-500 to-pink-500'>Explore Technologies</button>
                    <button className='h-9 px-3 flex-1 justify-between items-center text-black rounded-lg bg-white border border-gray-200'>Learn More</button>
                </div>
            </div>

            <div className='pr-8'>
                <img src={bannerStack} alt=""/>
            </div>
        </div>
    )
}