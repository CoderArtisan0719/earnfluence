import React from "react";
import Image from "next/image";
import gifts from "@/data/gifts";

const GiftsForBudget = () => {
  return (
    <div className="grid gap-6">
      <h2 className="text-xl font-bold">Gifts for every budget</h2>
      <div className="flex gap-4">
        {
          gifts.map((gift, index) =>
            <div
              className="w-1/4 flex flex-col h-44 overflow-hidden relative group rounded-xl cursor-pointer"
              key={index}
            >
              <img 
                src={gift.url}
                alt={gift.alt}

                className="h-full"
              />
              {/* <Image
                src={gift.url}
                alt={gift.alt}
                layout="fill"
                objectFit="strech"
                objectPosition="center top"
                className=""
              /> */}
            </div>
          )}
      </div>
    </div>
  )
};

export default GiftsForBudget;
