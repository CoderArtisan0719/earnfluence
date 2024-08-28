import React from 'react';
import { CameoCardData } from '@/data/cameo';

const CameoCards = () => {
  return (
    <div className="pb-12">
      <h2 className="text-xl font-bold">How Cameo works</h2>
      <p className="text-gray-100">Get a personalized video in just four steps. <span className="font-medium underline">Learn more</span></p>
      <div className="flex gap-4 mt-4">
        {
          CameoCardData.map((item, index) =>
            <div
              className="w-1/4 flex flex-col overflow-hidden relative group cursor-pointer bg-zinc-800 rounded-md px-4 py-6"
              key={index}
            >
              {item.icon}
              <p className="font-bold">{item.title}</p>
              <p className="pt-1">{item.content}</p>
            </div>
          )}
        
      </div>
    </div>
  )
};

export default CameoCards;
