"use client";

import { useEffect, useState } from "react";

interface Market {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}

export default function MarketInfo() {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/market");
        const data = await res.json();
        setMarkets(data);
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, []);

  return (
    <aside className="bg-[#111827] border-l border-gray-800 p-4 h-full">
      <h2 className="text-xl font-bold text-green-400 mb-4">
        📊 Live Market
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {markets.map((item) => (
          <div
            key={item.symbol}
            className="rounded-xl bg-[#1f2937] p-4 border border-gray-700 hover:border-green-500 transition"
          >
            <h3 className="font-bold text-lg">
              {item.symbol}
            </h3>

            <p className="text-2xl font-semibold mt-2">
              ${Number(item.lastPrice).toLocaleString()}
            </p>

            <p
              className={`mt-2 font-semibold ${
                Number(item.priceChangePercent) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {Number(item.priceChangePercent).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
