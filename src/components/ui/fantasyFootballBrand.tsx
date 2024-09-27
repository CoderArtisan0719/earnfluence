'use client'

import React from 'react';

const FantasyFootballBrand = () => {
    return (
        <React.Fragment>
            <div
                className={`
                    flex justify-center items-center 
                    bg-[url('https://cdn.cameo.com/resizer/08785363-5214-4fb8-89a4-17544d4e84e3.jpg')] bg-contain
                    sm:h-auto
                    h-[400px]
                    lg:aspect-[2048/825]
                ` }
            >
                <h1 className="text-[40px] text-center font-bold w-[450px] leading-[1.2]">
                    Win over your Fantasy league with a Cameo from your favorite celeb
                </h1>
            </div>

            <div className="bg-[#323035] text-center py-[32px] px-[12px]">
                <span className="bg-[#177820] text-[#90F0A2] px-[8px] py-[4px] font-bold rounded-full">LIMITED TIME OFFER</span>
                <p className='mt-[15px] col-start-auto text-[20px] text-[#F2F1F3] font-bold'>Buy 1, get 1 for 20% off</p>
                <p className='mt-[8px] text-[#817A8A]'>Buy a Fantasy Footabll video and get 20% off your next video booking this season. <a className='underline'>Terms apply.</a></p>
            </div>
        </React.Fragment>
    )
}

export default FantasyFootballBrand