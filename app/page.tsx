import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Header />
      <SearchBar />
      <Dashboard />
    </main>
  );
}
