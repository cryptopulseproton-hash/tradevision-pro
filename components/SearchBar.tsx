"use client";

import { useState } from "react";

export default function SearchBar() {
  const [symbol, setSymbol] = useState("");

  return (
    <div className="p-4 bg-[#111827] border-b border-gray-800">
      <input
        type="text"
        placeholder="Search BTCUSDT, ETHUSDT..."
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="w-full bg-[#1f2937] text-white rounded-lg px-4 py-3 outline-none"
      />
    </div>
  );
}
