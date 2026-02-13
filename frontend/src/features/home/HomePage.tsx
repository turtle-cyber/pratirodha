import React from "react";
import ChaosEngine from "./components/ChaosEngine";
import CriticalAlerts from "./components/CriticalAlerts";
import MovementsBlocked from "./components/MovementsBlocked";
import BehaviouralDrift from "./components/BehaviouralDrift";

const HomePage = () => {
  return (
    <div className="relative z-10">
      <div className="min-h-[calc(100vh-4rem)] mx-40 p-8">
        {/*Progress Bar*/}
        <div className="rounded-lg bg-[#00000033] p-4 backdrop-blur-lg border border-gray-800"></div>

        {/*First Row - Critical Alerts, Movements Blocked & Chaos Engine*/}
        <div className="flex gap-x-4 mt-8 h-[450px]">
          <div className="glassmorphism-card w-[25%]">
            <CriticalAlerts />
          </div>

          <div className="glassmorphism-card w-[50%]">
            <MovementsBlocked />
          </div>

          <div className="w-[25%] rounded-md flex flex-col border border-gray-800">
            <ChaosEngine />
          </div>
        </div>

        {/*Second Row - Critical Alerts, Movements Blocked & Chaos Engine*/}
        <div className="glassmorphism-card mt-8 h-[400px]">
          <BehaviouralDrift />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
