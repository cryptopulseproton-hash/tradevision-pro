import Header from "../components/Header";
import Hero from "../components/Hero";
import MarketCards from "../components/MarketCards";
import TradingChart from "../components/TradingChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Header />
      <Hero />
      <MarketCards />
      <TradingChart />
    </main>
  );
}
