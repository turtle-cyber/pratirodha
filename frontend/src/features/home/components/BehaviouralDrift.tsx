import EChart from "@/components/Echarts";
import React from "react";

const BehaviouralDrift = () => {
  return (
    <div>
      <span className="text-xl font-sf font-bold tracking-wide">
        Behavioral Drift Analysis
      </span>

      <div className="flex items-center justify-center gap-x-4 mt-4">
        <div className="w-[40%] h-full p-4">
          {/* <EChart type="heatmap" data={[]} height="350px" loading={false} /> */}
        </div>

        <div className="bg-[#FFFFFF2E] w-1 h-72"></div>

        <div className="w-[60%] h-full p-4">
          <span className="text-white tracking-wide text-2xl font-bold font-sf">
            Drift Alerts
          </span>

          <div className="flex flex-col gap-y-4 mt-4">
            <div className="flex items-center gap-x-4">
              <span className="text-white text-3xl">22</span>
              <span className="text-[#8F8F8F] text-lg">
                Reconnaissance Detected
              </span>
            </div>

            <div className="flex items-center gap-x-4">
              <span className="text-white text-3xl">22</span>
              <span className="text-[#8F8F8F] text-lg">
                Reconnaissance Detected
              </span>
            </div>

            <div className="flex gap-x-4 items-end">
              <span className="text-white text-3xl">22</span>
              <span className="text-[#8F8F8F] text-lg">
                Reconnaissance Detected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviouralDrift;
