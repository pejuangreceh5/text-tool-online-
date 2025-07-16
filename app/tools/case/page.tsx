"use client";
import { useState } from "react";

export default function CaseConverter() {
  const [input, setInput] = useState("");
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case Converter</h1>
      <textarea
        className="border rounded p-2 w-full mb-4"
        rows={4}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Masukkan teks..."
      />
      <div className="space-x-2">
        <button onClick={() => setInput(input.toUpperCase())} className="btn">UPPERCASE</button>
        <button onClick={() => setInput(input.toLowerCase())} className="btn">lowercase</button>
        <button onClick={() => setInput(input.replace(/\b\w/g, c => c.toUpperCase()))} className="btn">Capital Case</button>
      </div>
    </main>
  );
}
