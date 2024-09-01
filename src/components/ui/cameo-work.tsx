import React from "react";
import Image from "next/image";

const CameoWorks = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col gap-4 px-40 bg-black'>
        <h1 className='mt-24 text-4xl font-medium'>How Cameo works</h1>
        <div className='grid grid-cols-2'>
          <div className='pt-32'>
            <div className='w-full flex gap-2 mb-3 text-[#02f1e6]'>
              <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#02f1e6] text-black'>1</span>
              <span className='uppercase'>search for a star</span>
            </div>
            <h3 className='text-white text-3xl'>Find the right celeb for any occasion</h3>
            <p className='mt-6 text-gray-300'>
              Birthdays, milestones, or even a well-deserved roast, the perfect celebrity is only a search away. Find yours and request them.
            </p>
          </div>
          <div className='relative py-8 px-4 w-full h-[60vh] justify-center items-center'>
            <Image
              src="https://cdn.cameo.com/static/assets/search-for-a-star-1x.png"
              alt="cameo"
              layout='fill'
              objectFit='contain'
              objectPosition='top'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 px-40 bg-black'>
      <div className='grid grid-cols-2'>
        <div className='relative py-8 px-4 w-full h-[65vh] justify-center items-center'>
          <Image
            src="https://cdn.cameo.com/static/assets/img-get-video-1x.png"
            alt="cameo"
            layout='fill'
            objectFit='contain'
            objectPosition=''
          />
        </div>
        <div className='pt-32'>
          <div className='w-full flex gap-2 mb-3 text-[#02f1e6]'>
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#02f1e6] text-black'>2</span>
            <span className='uppercase'>rEQUEST THEM</span>
          </div>
          <h3 className='text-white text-3xl'>Get your personalized video message</h3>
          <p className='mt-6 text-gray-300'>
            Include all the important details in your request form. After it’s submitted, stars have up to 7 days to complete it. Choose our 24hr delivery option if you need it sooner.
          </p>
        </div>
      </div>
    </div>
    {/* capture the wow */}
    <div className='flex flex-col gap-4 px-40 bg-black'>
      <div className='grid grid-cols-2'>
        <div className='pt-32'>
          <div className='w-full flex gap-2 mb-3 text-[#02f1e6]'>
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#02f1e6] text-black'>3</span>
            <span className='uppercase'>share the magic</span>
          </div>
          <h3 className='text-white text-3xl'>Capture the WOW</h3>
          <p className='mt-6 text-gray-300'>
            Magical moments deserve to be shared. Whether you’re giving one or receiving a personalized video, we want to see your reaction. Bonus points if you tag us.
          </p>
        </div>
        <div className='relative py-8 px-4 w-full h-[50vh] flex justify-center items-center overflow-hidden'>
          <video 
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '100%', objectFit: 'cover' }}
            autoPlay 
            muted 
            loop 
            playsInline 
          >
            <source src="https://cdn.cameo.com/static/assets/img-share.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
};

export default CameoWorks;
