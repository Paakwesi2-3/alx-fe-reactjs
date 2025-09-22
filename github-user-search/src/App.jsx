import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query) {
    if (!query) return setUsers([]);
    setLoading(true);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (err) {
      console.error("Search error:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading…</p>}
      <div>
        {users.length === 0 && !loading && <p>No results yet.</p>}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
