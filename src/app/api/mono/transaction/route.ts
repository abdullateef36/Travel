import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { accountId } = await req.json();

    const res = await fetch(`https://api.withmono.com/accounts/${accountId}/transactions`, {
      method: "GET",
      headers: {
        "mono-sec-key": process.env.MONO_SECRET_KEY || "test_sk_O3Mxaqu1NcbmgYOSjvXK",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("Transaction data:", data);

    if (!data || data.error) {
      return NextResponse.json({ error: "Failed to fetch transactions", raw: data }, { status: 400 });
    }

    return NextResponse.json({ transactions: data });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
