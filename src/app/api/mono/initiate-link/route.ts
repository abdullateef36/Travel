// app/api/mono/initiate-link/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch("https://api.withmono.com/v2/accounts/initiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mono-sec-key": process.env.MONO_SECRET_KEY || "test_sk_O3Mxaqu1NcbmgYOSjvXK",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
