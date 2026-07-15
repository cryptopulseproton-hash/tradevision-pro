import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#111827] border-b border-gray-800">
      <h1 className="text-2xl font-bold text-green-400">
        TradeVision Pro
      </h1>

      <nav className="flex gap-6 text-gray-300">
        <a href="#">Markets</a>
        <a href="#">Charts</a>
        <a href="#">News</a>
        <a href="#">Watchlist</a>
      </nav>

      <LogoutButton />
    </header>
  );
}
