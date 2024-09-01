import React from "react";
import Image from "next/image";
import { IconWorld } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="px-12 flex justify-between items-baseline">
      <div className="flex items-baseline text-gray-400 font-medium">
        <div>
          <span>© 2017-2024, Baron App, Inc. dba Cameo</span>
          <span className="px-1">•</span>
        </div>
        <div className="flex items-center">
          <span className="hover:text-gray-50 duration-1000 transition cursor-pointer">Your Privacy Choices</span>
          <Image
            src="https://d3el26csp1xekx.cloudfront.net/static/assets/privacyoptions123x59.png"
            alt="choice"
            width={24}
            height={20}
            objectFit="cover"
            className="max-h-4 pl-1"
          />
          <span className="px-1">•</span>
          <span className="hover:text-gray-50 duration-1000 transition cursor-pointer">Terms</span>
          <span className="px-1">•</span>
          <span className="hover:text-gray-50 duration-1000 transition cursor-pointer">Privacy</span>
        </div>
      </div>
      <div className="flex items-center pb-12">
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black font-medium px-6 py-2 rounded-full tracking-widest uppercase font-medium bg-transparent hover:text-white dark:text-neutral-200 transition duration-200 flex items-center gap-2">
          <IconWorld width={16} height={16} />
          EN | United States | $USD
        </button>
      </div>
    </div>
  )
};

export default Footer;
