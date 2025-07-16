"use client";
import { useState } from "react";

export default function SlugifyPage() {
  const [input, setInput] = useState("");
  const slug = input.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Slugify Text</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Masukkan teks..."
      />
      <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">Slug: {slug}</p>
    </main>
  );
}
