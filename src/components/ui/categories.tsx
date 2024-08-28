import React from 'react';
import Image from 'next/image';
import stars from '@/data/stars';

const Categories = () => {
  return (
    <div className="py-8 px-4 w-full flex flex-col gap-4">
      <h2 className="text-xl font-bold">Categories</h2>
      <div className="flex flex-wrap justify-between">
        {
          stars.map((star, index) =>
            <div
              className="flex flex-col gap-2 text-center underline cursor-pointer hover:text-pink-100"
              key={index}
            >
              <div className="flex flex-col w-36 h-36 overflow-hidden rounded-full relative border border-white group">
                <Image
                  src={star.url}
                  alt={star.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center top"
                  className="transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium leading-none">{ star.content }</span>
            </div>  
        )}
        <div className="flex flex-col gap-2 text-center underline cursor-pointer">
          <div className="flex flex-col w-36 h-36 overflow-hidden rounded-full bg-transparent relative border border-white items-center justify-center hover:text-pink-100 hover:border-pink-100">
            <span className="underline text-sm font-medium transform transition-transform duration-300">View all</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Categories;
