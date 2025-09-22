import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(q.trim());
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 16 }}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search GitHub users..."
        style={{ padding: 8, width: "70%", marginRight: 8 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Search
      </button>
    </form>
  );
}
