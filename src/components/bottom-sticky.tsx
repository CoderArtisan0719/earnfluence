import React from "react";
import Image from "next/image";

const BottomSticky = () => {
  return (
    <div
      className="sticky overflow-hidden bottom-0 bg-red-500 z-0"
      style={{
        background:
          'linear-gradient(rgb(18, 17, 20) 30%, rgba(42, 42, 42, 0.2) 70%), url("https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=1300,height=300/https://shareable-assets.cameo.com/b8de0a53-a227-418d-bb7e-8e2eac03f0e1.png") rgb(42, 42, 42)',
      }}
    >
      <Image
        src="https://cdn.cameo.com/resizer/26b0d815-32f6-40db-8332-f681cd4831a1.png"
        alt="footer image"
        fill
        className="transform transition-transform duration-300 group-hover:scale-110 !relative"
      />
    </div>
  )
};

export default BottomSticky;
