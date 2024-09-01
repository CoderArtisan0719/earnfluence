import React from "react";

const BrowseStarts = () => {
  return (
    <div className='pt-20 pb-2 px-40 grid grid-cols-2 gap-8' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(16, 16, 16) 100%), linear-gradient(135deg, rgb(189, 0, 255) 0%, rgb(255, 60, 38) 100%)' }}>
      <div className=''>
        <h1 className='text-4xl font-bold leading-snug'>Cameo is where you connect with your favorite stars</h1>
        <p className='my-8 font-medium'>Access thousands of celebrities and request a personalized video message for any occasion.
        </p>
        <button className="px-8 py-4 rounded-full bg-purple-600 font-medium text-white tracking-widest transform text-lg hover:bg-violet-400 transition-colors duration-200">
          Browse stars
        </button>
      </div>
      <div className="w-full border-8 rounded-xl overflow-hidden" style={{ borderColor: 'rgb(65, 61, 64)' }}>
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          controls
          controlsList="nodownload noremoteplayback noplaybackrate"
          poster="https://cdn.cameo.com/static/assets/AboutCameo-poster.jpg"
          disablePictureInPicture
          className="Box-sc-ig1qr7-0 ebdXGd w-full h-full object-cover"
        >
          <source src="https://cdn.cameo.com/static/assets/AboutCameo_FullEdit_v06output.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
};

export default BrowseStarts;
