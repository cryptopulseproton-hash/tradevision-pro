import Sidebar from "./Sidebar";
import ChartArea from "./ChartArea";
import MarketInfo from "./MarketInfo";
import NewsPanel from "./NewsPanel";
import UserProfile from "../UserProfile";
import LiveTicker from "../LiveTicker";
import PortfolioCard from "../portfolio/PortfolioCard";

export default function Dashboard() {
  return (
    <div className="bg-[#0d1117] min-h-screen">
      <div className="flex flex-col lg:flex-row">

        {/* Sidebar */}
        <div className="w-full lg:w-64">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 space-y-4">
          <ChartArea />

          <PortfolioCard />

          <LiveTicker />

          <UserProfile />
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-80">
          <MarketInfo />
        </div>

      </div>

      <NewsPanel />
    </div>
  );
}
