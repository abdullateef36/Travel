"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function MonoConnectButton() {
  const router = useRouter();

  const handleMonoConnect = useCallback(async () => {
    if (typeof window === "undefined") return;

    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const mono = new MonoConnect({
      key: "test_pk_UTSE2b9lxLYx7usd2mHn",
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
          alert("Failed to fetch account ID");
          return;
        }

        const accountId = data.accountId;
        console.log("Fetched accountId:", accountId);

        // ✅ Save to localStorage so /transactions page can use it
        localStorage.setItem("accountId", accountId);

        // ✅ Redirect to /transactions
        router.push("/TransactionPage");
      },
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Mono widget loaded"),
    });

    mono.setup();
    mono.open();
  }, [router]);

  return (
    <button
      onClick={handleMonoConnect}
      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Bank Sync
    </button>
  );
}
