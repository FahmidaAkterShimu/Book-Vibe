import React from 'react';
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className="hero playfair bg-base-200 rounded-3xl py-20 px-30 mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img
                    src={heroImg}
                />
                <div className='space-y-12'>
                    <h1 className="text-[56px] font-bold">Books to freshen up your bookshelf</h1>
                    <button className='btn work-sans bg-[#23BE0A] text-lg font-semibold text-white rounded-lg py-6 px-5'>View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;