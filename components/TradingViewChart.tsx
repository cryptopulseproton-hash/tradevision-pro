"use client";

import dynamic from "next/dynamic";
import { useMarket } from "../context/MarketContext";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-full flex items-center justify-center text-gray-400">
        Loading TradingView Chart...
      </div>
    ),
  }
);

export default function TradingViewChart() {
  const { symbol } = useMarket();

  return (
    <div className="w-full h-full">
      <AdvancedRealTimeChart
        theme="dark"
        symbol={symbol}
        interval="15"
        timezone="Etc/UTC"
        width="100%"
        height="100%"
        hide_top_toolbar={false}
        hide_side_toolbar={false}
        allow_symbol_change={true}
      />
    </div>
  );
}
