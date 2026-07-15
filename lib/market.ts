export async function getMarketData() {
  const response = await fetch(
    "https://api.binance.com/api/v3/ticker/24hr?symbols=[%22BTCUSDT%22,%22ETHUSDT%22,%22BNBUSDT%22]"
  );

  return response.json();
}
