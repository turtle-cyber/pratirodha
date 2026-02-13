import React from "react";
import chaosGif from "@/assets/chaos.gif";

const ChaosEngine = () => {
  return (
    <>
      {/*Gif div*/}
      <div className="w-full h-[75%] overflow-hidden rounded-t-md">
        <img
          src={chaosGif}
          alt="Chaos Engine"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[5px] rounded-full bg-[#99999980]"></div>
      {/*Info div*/}
      <div className=" w-full h-[25%] p-2 flex flex-col">
        <span className="font-sf font-bold text-[#8F8F8F]">CHAOS ENGINE</span>
        <div className="bg-[#131a2a] flex-1">
          <div className="flex justify-between p-2">
            <div className="flex flex-col text-sm text-[#B7B7B7]">
              <span>Temporal Key Rotation</span>
              <span>Entropy Level</span>
              <span>Active Registry Count</span>
            </div>

            <div className="flex flex-col text-sm text-[#B7B7B7]">
              <span>1234567890</span>
              <span>1234567890</span>
              <span>1234567890</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChaosEngine;
