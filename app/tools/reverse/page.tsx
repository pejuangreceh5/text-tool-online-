"use client";
import { useState } from "react";

export default function ReverseText() {
  const [input, setInput] = useState("");
  const reversed = input.split("").reverse().join("");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reverse Text</h1>
      <textarea
        className="border p-2 rounded w-full mb-4"
        rows={4}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Masukkan teks..."
      />
      <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded">{reversed}</p>
    </main>
  );
}
