export default function NewsPanel() {
  const news = [
    "Bitcoin hits new weekly high",
    "Ethereum network upgrade announced",
    "Gold prices remain under pressure",
    "US Dollar strengthens against Euro",
  ];

  return (
    <section className="bg-[#111827] border-t border-gray-800 p-6">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Market News
      </h2>

      <div className="space-y-3">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-[#1f2937] rounded-lg p-4 hover:bg-[#374151] transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
