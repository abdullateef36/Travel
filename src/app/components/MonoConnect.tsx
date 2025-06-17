"use client";

import { useCallback } from "react";

export default function MonoConnectButton() {
  const handleMonoConnect = useCallback(async () => {
    if (typeof window === "undefined") return;

    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const mono = new MonoConnect({
      key: "test_pk_UTSE2b9lxLYx7usd2mHn", // ✅ Your public test key
      scope: "all", // required to get `code`
      customer: {
        id: "65c31fa54e0e963044f014bb", // Optional
        name: "Samuel Olamide",
        email: "samuel@neem.com",
        identity: {
          type: "bvn",
          number: "2323233239",
        },
      },
      onSuccess: async ({ code }: { code: string }) => {
        console.log("Mono code:", code);

        const res = await fetch("/api/mono/exchange-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        const data = await res.json();
        if (data?.accountId) {
          alert("✅ Account linked: " + data.accountId);
        } else {
          alert("❌ Failed to fetch account data");
        }
      },
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded"),
    });

    mono.setup();
    mono.open();
  }, []);

  return (
    <button
      onClick={handleMonoConnect}
      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Link Bank with Mono
    </button>
  );
}
