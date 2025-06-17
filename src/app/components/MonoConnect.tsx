"use client";

import { useCallback } from "react";

export default function MonoConnectButton() {
  const handleMonoConnect = useCallback(async () => {
    if (typeof window === "undefined") return;

    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const mono = new MonoConnect({
      key: "test_pk_UTSE2b9lxLYx7usd2mHn", // ✅ Your public test key
      scope: "all",
      onSuccess: async ({ code }: { code: string }) => {
        console.log("Mono code:", code);

        // Step 1: Exchange code for accountId
        const res = await fetch("/api/mono/exchange-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        const data = await res.json();

        if (!data?.accountId) {
          alert("❌ Failed to fetch account ID");
          return;
        }

        const accountId = data.accountId;
        alert("✅ Account linked: " + accountId);
        console.log("Fetched accountId:", accountId);

        // Step 2: Fetch transactions
        const txRes = await fetch("/api/mono/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accountId }),
        });

        const txData = await txRes.json();

        if (txData?.transactions?.data) {
          console.log("✅ Transactions:", txData.transactions.data);
          alert("✅ Transaction count: " + txData.transactions.data.length);
        } else {
          console.error("❌ Failed to fetch transactions", txData);
          alert("❌ Failed to fetch transactions");
        }
      },
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Mono widget loaded"),
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
