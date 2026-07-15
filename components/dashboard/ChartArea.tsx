"use client";

import TradingViewChart from "../TradingViewChart";

export default function ChartArea() {
  return (
    <div className="bg-[#161b22] rounded-xl border border-gray-800 shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-800">
        <h2 className="text-xl font-bold text-green-400">
          📈 Live Trading Chart
        </h2>
      </div>

      <div className="h-[350px] md:h-[500px] lg:h-[650px]">
        <TradingViewChart />
      </div>
    </div>
  );
}
