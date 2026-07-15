"use client";

import { useMarket } from "../../context/MarketContext";

const items = [
  "BTCUSDT",
  "ETHUSDT",
  "BNBUSDT",
  "SOLUSDT",
  "XRPUSDT",
  "DOGEUSDT",
  "ADAUSDT",
];

export default function Sidebar() {
  const { symbol, setSymbol } = useMarket();

  return (
    <aside className="bg-[#111827] border-r border-gray-800 p-4 h-full">
      <h2 className="text-xl font-bold text-green-400 mb-4">
        ⭐ Watchlist
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setSymbol(`BINANCE:${item}`)}
            className={`rounded-lg p-3 text-left transition ${
              symbol === `BINANCE:${item}`
                ? "bg-green-600 text-white"
                : "bg-[#1f2937] hover:bg-[#374151]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}
