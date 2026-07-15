"use client";

import { createContext, useContext, useState } from "react";
import { Trade } from "../types/trade";

type PortfolioContextType = {
  balance: number;
  trades: Trade[];
  addTrade: (trade: Trade) => void;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [balance, setBalance] = useState(10000);
  const [trades, setTrades] = useState<Trade[]>([]);

  function addTrade(trade: Trade) {
    setTrades((prev) => [trade, ...prev]);

    if (trade.type === "BUY") {
      setBalance((prev) => prev - trade.total);
    } else {
      setBalance((prev) => prev + trade.total);
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        balance,
        trades,
        addTrade,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolio must be used inside PortfolioProvider"
    );
  }

  return context;
}
