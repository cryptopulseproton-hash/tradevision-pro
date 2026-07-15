"use client";

import dynamic from "next/dynamic";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  {
    ssr: false,
  }
);

export default function TradingViewChart() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Live Trading Chart
      </h2>

      <div className="rounded-xl overflow-hidden border border-gray-800">
        <AdvancedRealTimeChart
          theme="dark"
          symbol="BINANCE:BTCUSDT"
          width="100%"
          height={600}
        />
      </div>
    </section>
  );
}
