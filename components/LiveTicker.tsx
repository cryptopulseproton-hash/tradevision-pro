"use client";

import { useEffect, useState } from "react";

type TickerData = {
  s: string;
  c: string;
  P: string;
};

export default function LiveTicker() {
  const [ticker, setTicker] = useState<TickerData | null>(null);
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:443/ws/btcusdt@ticker"
    );

    ws.onopen = () => {
      setStatus("Connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTicker(data);
    };

    ws.onerror = () => {
      setStatus("Connection Error");
    };

    ws.onclose = () => {
      setStatus("Disconnected");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
      <h2 className="text-xl font-bold mb-4">
        Live Binance Market
      </h2>

      <p className="mb-4">
        Status: {status}
      </p>

      {ticker && (
        <>
          <p>
            <strong>Symbol:</strong> {ticker.s}
          </p>

          <p>
            <strong>Price:</strong> ${Number(ticker.c).toLocaleString()}
          </p>

          <p
            className={
              Number(ticker.P) >= 0
                ? "text-green-400"
                : "text-red-400"
            }
          >
            <strong>24H Change:</strong> {ticker.P}%
          </p>
        </>
      )}
    </div>
  );
}
