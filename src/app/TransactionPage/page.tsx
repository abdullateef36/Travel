"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

// 1. Define the transaction type
type Transaction = {
  _id: string;
  type: "credit" | "debit";
  amount: number;
  narration: string;
  date: string;
  currency: string;
};

// 2. Utility function to download CSV
function downloadCSV(transactions: Transaction[]) {
  const headers = ["Amount", "Narration", "Date", "Currency", "_id", "Type"];
  const rows = transactions.map((txn) => [
    (txn.amount / 100).toString(),
    `"${txn.narration}"`,
    new Date(txn.date).toLocaleDateString(),
    txn.currency,
    txn._id,
    txn.type,
  ]);

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "transactions.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      const accountId = localStorage.getItem("accountId");

      if (!accountId) {
        alert("No accountId found. Please link a bank account first.");
        return;
      }

      try {
        const res = await fetch("/api/mono/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accountId }),
        });

        const data = await res.json();
        const txns = data?.transactions?.data || [];
        setTransactions(txns);
      } catch (err) {
        console.error("Failed to fetch transactions", err);
        alert("An error occurred while fetching transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleDelete = (_id: string) => {
    const confirmed = confirm("Are you sure you want to delete this transaction?");
    if (confirmed) {
      setTransactions((prev) => prev.filter((txn) => txn._id !== _id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Transaction History</h1>

      {/* Export to CSV */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => downloadCSV(transactions)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
        >
          Export to CSV
        </button>
      </div>

      {loading ? (
        <p>Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Amount (₦)</th>
                <th className="p-3 border">Narration</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Currency</th>
                <th className="p-3 border">_id</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{(txn.amount / 100).toLocaleString()}</td>
                  <td className="p-3 border">{txn.narration}</td>
                  <td className="p-3 border">{new Date(txn.date).toLocaleDateString()}</td>
                  <td className="p-3 border">{txn.currency}</td>
                  <td className="p-3 border">{txn._id}</td>
                  <td className="p-3 border capitalize">{txn.type}</td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleDelete(txn._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete transaction"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}