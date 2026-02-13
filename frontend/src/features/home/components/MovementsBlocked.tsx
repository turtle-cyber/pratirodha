import GlassSurface from "@/components/GlassSurface";
import { Info } from "lucide-react";
import React from "react";

const MovementsBlocked = () => {
  return (
    <div className="flex flex-col h-full">
      <span className="text-xl font-sf font-bold">Movements Blocked</span>

      <div className="mt-4 flex flex-col gap-y-8 p-4">
        {/*First row*/}
        <div>
          {/*Header*/}
          <div className="flex justify-between">
            <span className="font-sf tracking-wide font-semibold text-[#8f8f8f]">
              Lateral Movements Blocked
            </span>
            <Info className="text-[#8f8f8f]" />
          </div>

          {/*Metric*/}
          <GlassSurface width={200} height={70} className="mt-4">
            <div className="flex items-end gap-x-4">
              <span className="text-3xl font-sf font-bold">1234</span>
              <span className="font-sf text-[#8f8f8f]">This Month</span>
            </div>
          </GlassSurface>
        </div>

        <div className="h-0.5 w-full bg-linear-to-r from-white to-transparent" />

        {/*Second row*/}
        <div>
          {/*Header*/}
          <div className="flex justify-between">
            <span className="font-sf tracking-wide font-semibold text-[#8f8f8f]">
              Traditional EDR Misses
            </span>
            <Info className="text-[#8f8f8f]" />
          </div>

          {/*Metric*/}
          <GlassSurface width={200} height={70} className="mt-4">
            <div className="flex items-end gap-x-4">
              <span className="text-3xl font-sf font-bold">1234</span>
              <span className="font-sf text-[#8f8f8f]">This Month</span>
            </div>
          </GlassSurface>
        </div>
      </div>

      <div className="text-[#8f8f8f] font-mono mt-auto text-lg">
        Lateral Movements Blocked (Last Month): 1887
      </div>
    </div>
  );
};

export default MovementsBlocked;
