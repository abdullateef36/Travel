// app/api/mono/exchange-code/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    console.log("Received code:", code);

    const response = await fetch("https://api.withmono.com/account/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mono-sec-key": process.env.MONO_SECRET_KEY || "test_sk_O3Mxaqu1NcbmgYOSjvXK",
      },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    console.log("Response from Mono:", data);

    if (!data?.id) {
      return NextResponse.json({ error: "Failed to fetch account ID", raw: data }, { status: 400 });
    }

    return NextResponse.json({ accountId: data.id, account: data });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}