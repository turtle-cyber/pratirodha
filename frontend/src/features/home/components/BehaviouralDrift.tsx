import EChart from "@/components/Echarts";
import type { HeatmapChartData } from "@/components/Echarts";
import React from "react";

const mockHeatmapData: HeatmapChartData = {
  xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  yAxisData: ["Week 4", "Week 3", "Week 2", "Week 1"],
  data: [
    // Week 1 (y=3): Wed and Thu have high activity
    [2, 3, 8],
    [3, 3, 7],
    // Week 2 (y=2): Wed has activity, Sat has some
    [2, 2, 6],
    [5, 2, 4],
    // Week 3 (y=1): Sat has notable activity
    [5, 1, 7],
    // Week 4 (y=0): minimal
    [4, 0, 2],
    // Fill remaining cells with 0s
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 0],
    [3, 0, 0],
    [5, 0, 0],
    [6, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [2, 1, 0],
    [3, 1, 0],
    [4, 1, 0],
    [6, 1, 0],
    [0, 2, 0],
    [1, 2, 0],
    [3, 2, 0],
    [4, 2, 0],
    [6, 2, 0],
    [0, 3, 0],
    [1, 3, 0],
    [4, 3, 0],
    [5, 3, 0],
    [6, 3, 0],
  ],
};

const BehaviouralDrift = () => {
  return (
    <div>
      <span className="text-xl font-sf font-bold tracking-wide">
        Behavioral Drift Analysis
      </span>

      <div className="flex items-center justify-center gap-x-4 mt-4">
        <div className="w-[40%] h-full p-4">
          <EChart type="heatmap" data={mockHeatmapData} height="300px" />
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
