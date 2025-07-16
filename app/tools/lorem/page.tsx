"use client";
import { useState } from "react";

export default function LoremGenerator() {
  const [count, setCount] = useState(1);
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lorem Ipsum Generator</h1>
      <input
        type="number"
        min={1}
        value={count}
        onChange={e => setCount(Number(e.target.value))}
        className="border p-2 rounded w-24 mb-4"
      />
      <div className="space-y-2">
        {Array(count).fill(null).map((_, i) => (
          <p key={i} className="bg-gray-100 dark:bg-gray-800 p-2 rounded">{lorem}</p>
        ))}
      </div>
    </main>
  );
}
