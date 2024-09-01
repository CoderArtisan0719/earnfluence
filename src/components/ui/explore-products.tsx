import React from "react";
import Image from "next/image";
import { IconBolt, IconCheck, IconWorld } from "@tabler/icons-react";

const ExploreProducts = () => {
  return (
    <React.Fragment>
      <div className='px-40'>
        <h2 className='mt-36 mb-20 font-medium text-4xl'>Explore all products</h2>
        <div className='grid grid-cols-2 gap-12 items-center'>
          <div className='w-full relative border border-4 border-gray-600 rounded-lg' style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://cdn.cameo.com/resizer/ab730511-92e2-4f33-9549-65234f166918.png"
              alt="collage"
              layout='fill'
              objectFit='cover'
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
          <div className='flex flex-col gap-6'>
            <span className='text-[#02f1e6] uppercase'>cameo collage</span>
            <h3 className='text-3xl font-medium'>Make it memorable with Cameo Collage</h3>
            <p className='text-gray-300'>Turn your Cameo video into a free collage featuring personalized messages from friends and family.</p>
            <div>
              <button className="shadow-[inset_0_0_0_2px_#616467] px-6 py-3 text-white rounded-full tracking-widest font-medium bg-transparent hover:text-white transition duration-200">
                Learn more
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className='px-40 pb-28 grid grid-cols-2 gap-4 items-center mt-12'>
        <div className='flex flex-col gap-4'>
          <span className='text-[#02f1e6] uppercase'>feeds</span>
          <h2 className='text-3xl mb-4 font-medium'>Get exclusive access with Follow</h2>
          <p className='text-gray-300'>Stay up-to-date with your favorite personalities and get access to exclusive feed content, promotions, and price drops.</p>
          <div className='flex gap-4'>
            <IconCheck color='#FF58A6' />
            <span>Insider access to special promotions</span>
          </div>
          <div className='flex gap-4'>
            <IconBolt color='#FF58A6' />
            <span>Exclusive updates directly from celebrities</span>
          </div>
          <div className='flex gap-4'>
            <IconWorld color='#FF58A6' />
            <span>Share your love for your favorite celebrity with other fans</span>
          </div>
        </div>
        <div className='relative pt-[85%] px-8'>
          <Image
            src="https://cdn.cameo.com/static/assets/img-fan-clubs.png"
            alt="feed"
            layout='fill'
            objectFit='cover'
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExploreProducts;
