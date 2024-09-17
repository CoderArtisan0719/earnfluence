import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const MailingList = () => {
  return (
    <div className="w-1/3 border">
      <h2 className="font-medium">Join our mailing list</h2>
      <p className="pb-6 pt-2">Be the first to know about the newest stars and best deals on Cameo</p>
      <div className="flex w-full items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Join</Button>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <button className="px-12 py-4 rounded-full w-full bg-violet-800 font-medium text-white tracking-widest uppercase transform hover:bg-violet-400 transition-colors duration-200">
          Join as a talent
        </button>
        <button className="w-full shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-medium bg-transparent hover:text-white dark:text-neutral-200 transition duration-200">
          Become a partner
        </button>
      </div>
    </div>
  )
};

export default MailingList;
