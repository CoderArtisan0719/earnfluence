import React from "react";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import GooglePay from "@/icons/google-pay";

const DownloadApp = () => {
  return (
    <div className='bg-pink-600 pt-12 pb-2'>
      <div className="relative flex justify-center max-w-[500px] pt-[35%] mx-auto">
        <Image
          src="https://cdn.cameo.com/static/assets/iphone-android-app-1x.png"
          alt="download"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='px-40'>
        <h2 className='text-4xl font-medium my-6'>Download the app</h2>
        <div className='flex flex-col gap-4'>
          <p>Personalized videos are just the beginning. We’ve created world-class products that make it easier to connect with your favorite stars.</p>
          <div className='flex gap-2 text-gray-200'>
            <IconCheck />
            <span>Chat on a 1-on-1 LIVE video call with Cameo Calls</span>
          </div>
          <div className='flex gap-2 text-gray-200'>
            <IconCheck />
            <span>Enjoy daily live events and promotions</span>
          </div>
          <div className='flex gap-2 text-gray-200'>
            <IconCheck />
            <span>Be the first to know about price drops and deal</span>
          </div>
          <div className='flex gap-2 text-gray-200'>
            <IconCheck />
            <span>And so much more!</span>
          </div>
        </div>
        <div className='flex gap-4 my-8'>
          <Image
            src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg"
            alt="Macbook mockup from Aceternity UI"
            width={120}
            height={120}
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="w-[120px] bg-black border border-white flex items-center justify-center rounded-lg px-2 py-0">
            <GooglePay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
