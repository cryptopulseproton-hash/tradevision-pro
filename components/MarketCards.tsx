export default function MarketCards() {
  const markets = [
    { name: "Bitcoin", price: "$118,250", change: "+2.8%" },
    { name: "Ethereum", price: "$6,420", change: "+1.9%" },
    { name: "Gold", price: "$3,420", change: "-0.4%" },
    { name: "EUR/USD", price: "1.1742", change: "+0.2%" },
  ];

  return (
    <section className="bg-gray-950 py-12 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Live Markets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {markets.map((market) => (
          <div
            key={market.name}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-white">
              {market.name}
            </h3>

            <p className="text-2xl text-green-400 mt-2">
              {market.price}
            </p>

            <p
              className={`mt-2 ${
                market.change.startsWith("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {market.change}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
