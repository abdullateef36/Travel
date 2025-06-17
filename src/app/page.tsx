"use client";

import React from "react";

export default function MonoLinkButton() {
  const handleClick = async () => {
    const res = await fetch("/api/mono/initiate-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer: {
          name: "Jane Doe",
          email: "jane@example.com"
        },
        meta: {
          reference: "USER_123"
        },
        scope: "auth",
        redirect_url: `${window.location.origin}/mono/callback`,
      }),
    });

    const data = await res.json();
    if (data?.data?.mono_url) {
      window.location.href = data.data.mono_url;
    } else {
      alert("Unable to initiate Mono link");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
    >
      Link Bank Account
    </button>
  );
}