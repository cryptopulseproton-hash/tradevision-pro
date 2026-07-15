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
      const res = await fetch("/api/market");
      const data = await res.json();
      setMarkets(data);
    }

    load();
  }, []);

  return (
    <aside className="w-80 bg-[#111827] border-l border-gray-800 p-4">
      <h2 className="text-xl font-bold text-green-400 mb-4">
        Live Market
      </h2>

      <div className="space-y-4">
        {markets.map((item) => (
          <div
            key={item.symbol}
            className="bg-[#1f2937] rounded-lg p-4"
          >
            <h3 className="font-bold">{item.symbol}</h3>

            <p className="text-2xl">
              ${Number(item.lastPrice).toFixed(2)}
            </p>

            <p
              className={
                Number(item.priceChangePercent) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {item.priceChangePercent}%
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
