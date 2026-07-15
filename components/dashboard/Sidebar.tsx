export default function Sidebar() {
  const items = [
    "BTCUSDT",
    "ETHUSDT",
    "BNBUSDT",
    "SOLUSDT",
    "XAUUSD",
    "EURUSD",
    "GBPUSD",
  ];

  return (
    <aside className="w-64 bg-[#111827] border-r border-gray-800 p-4">
      <h2 className="text-xl font-bold text-green-400 mb-4">
        Watchlist
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="bg-[#1f2937] rounded-lg p-3 hover:bg-[#374151] cursor-pointer transition"
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
}
