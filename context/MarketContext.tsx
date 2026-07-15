"use client";

import { createContext, useContext, useState } from "react";

type MarketContextType = {
  symbol: string;
  setSymbol: (symbol: string) => void;
};

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export function MarketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");

  return (
    <MarketContext.Provider value={{ symbol, setSymbol }}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  const context = useContext(MarketContext);

  if (!context) {
    throw new Error("useMarket must be used inside MarketProvider");
  }

  return context;
}
