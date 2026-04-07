import React from 'react';
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl py-20 px-30">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 justify-between">
                <img
                    src={heroImg}
                />
                <div className='space-y-12'>
                    <h1 className="text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className='btn bg-[#23BE0A] text-lg font-semibold text-white rounded-lg py-6 px-5'>View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;