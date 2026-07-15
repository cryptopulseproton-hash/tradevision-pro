"use client";

export default function PortfolioCard() {
  const balance = 10000;
  const profit = 245.87;
  const profitPercent = 2.46;

  return (
    <div className="bg-[#161b22] rounded-xl border border-gray-800 p-5">
      <h2 className="text-2xl font-bold text-green-400 mb-5">
        💼 Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-[#1f2937] rounded-lg p-4">
          <p className="text-gray-400">Balance</p>
          <h3 className="text-3xl font-bold mt-2">
            ${balance.toLocaleString()}
          </h3>
        </div>

        <div className="bg-[#1f2937] rounded-lg p-4">
          <p className="text-gray-400">Today's Profit</p>
          <h3 className="text-3xl font-bold mt-2 text-green-400">
            +${profit}
          </h3>
        </div>

        <div className="bg-[#1f2937] rounded-lg p-4">
          <p className="text-gray-400">ROI</p>
          <h3 className="text-3xl font-bold mt-2 text-green-400">
            +{profitPercent}%
          </h3>
        </div>

      </div>
    </div>
  );
}
