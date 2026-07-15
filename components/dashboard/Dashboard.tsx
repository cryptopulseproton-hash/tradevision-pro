import Sidebar from "./Sidebar";
import ChartArea from "./ChartArea";
import MarketInfo from "./MarketInfo";
import NewsPanel from "./NewsPanel";

export default function Dashboard() {
  return (
    <div className="bg-[#0d1117]">
      <div className="flex min-h-[700px]">
        <Sidebar />
        <ChartArea />
        <MarketInfo />
      </div>

      <NewsPanel />
    </div>
  );
}
