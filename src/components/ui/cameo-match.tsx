import React from "react";
import Image from "next/image";

const CameoMatch = () => {
  return (
    <div className="grid grid-cols-2 bg-pink-600 items-center">
      <div className='grid grid-cols-6 pr-3'>
        <div className='col-span-2'></div>
        <div className='col-span-4'>
          <h2 className='text-4xl leading-snug font-medium'>Find your Cameo match</h2>
          <p className='my-8'>Looking for the perfect star for any occasion? Take this quiz to get your personalized recommendations.
          </p>
          <button className="px-5 py-2 rounded-full bg-gray-700 font-500 text-white tracking-widest transform text-lg hover:bg-violet-400 transition-colors duration-200">
            Get tailored results
          </button>
        </div>
      </div>
      <div className='relative w-full ' style={{ paddingTop: '56.25%' }}>
        <Image
          src="https://cdn.cameo.com/static/assets/questionnaire-bg.png"
          alt="tailored result"
          layout='fill'
          objectFit='cover'
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default CameoMatch;
