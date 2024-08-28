import React from "react";
import { CameoData } from "@/data/cameo";

const Cameo = () => {
  return (
    <div className="pb-6">
      <h2 className="text-xl font-bold">This is Cameo</h2>
      <div className="flex gap-4 mt-4">
        {
          CameoData.map((cameo, index) =>
            <div key={index}>
              <p className="font-bold">{cameo.title}</p>
              <p className="text-sm text-zinc-200">{cameo.content}</p>
            </div>
          )}
      </div>
    </div>
  )
};

export default Cameo;
