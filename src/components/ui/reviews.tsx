import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { IconStarFilled } from '@tabler/icons-react';
import { Card, CardContent } from "@/components/ui/card";
import ReviewData from '@/data/reviews-content';

const Reviews = () => {
  return (
    <div className="pt-6">
      <h2 className="text-xl font-bold py-2">Recent reviews</h2>
      <div className="w-full relative">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {ReviewData.map((review, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="pt-4">
                      <p className="font-bold">{review.title}</p>
                      <div className='py-1 flex items-center'>
                        {Array(review.star).fill(0).map((_, i) => (
                          <IconStarFilled key={i} color='yellow' width={12} height={12} />
                        ))}
                        <span className='ml-2 text-sm'>{ review.name }</span>
                      </div>
                      <p className="pt-1 italic text-gray-200 overflow-hidden text-ellipsis line-clamp-4">
                        {review.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
