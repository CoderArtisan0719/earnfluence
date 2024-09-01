"use client";

import React from "react";

type SocialButtonProps = {
  text: string;
  variant: "facebook" | "apple";
  onClick: () => void;
};

const SocialButton: React.FC<SocialButtonProps> = ({ text, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-3 rounded-full tracking-widest uppercase font-medium bg-transparent text-white transition duration-200
      }`}
    >
      {text}
    </button>
  );
};

export default SocialButton;
