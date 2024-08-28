import React from "react";
import { IconWorld } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="px-12 flex justify-between items-center">
      <div className="text-gray-300">
        <span>© 2017-2024, Baron App, Inc. dba Cameo</span>
        <span className="px-1">•</span>
        <span>Your Privacy Choices</span>
        <span className="px-1">•</span>
        <span>Terms</span>
        <span className="px-1">•</span>
        <span>Privacy</span>
      </div>
      <div className="flex items-center">
      
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-medium bg-transparent hover:text-white dark:text-neutral-200 transition duration-200 flex items-center gap-2">
          <IconWorld width={16} height={16} />
          EN | United States | $USD
        </button>
      </div>
    </div>
  )
};

export default Footer;
