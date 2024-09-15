import React from 'react';
import Image from 'next/image';
import picks from '@/data/featured-picks';

const FeaturedPicks = () => {
  return (
    <div className="grid gap-6">
      <h2 className="text-xl font-bold">Featured picks</h2>
      <div className="flex gap-4">
        {
          picks.map((pick, index) =>
            <div
              className="w-1/4 flex flex-col h-44 overflow-hidden relative group cursor-pointer"
              key={index}
            >
              <Image
                src={pick.url}
                alt={pick.alt}
                layout="fill"
                objectFit="strech"
                objectPosition="center top"
              />
            </div>
        )}
      </div>
    </div>
  )
};

export default FeaturedPicks;
