import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22,%22ETHUSDT%22,%22BNBUSDT%22%5D",
      { cache: "no-store" }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch market data" },
      { status: 500 }
    );
  }
}
