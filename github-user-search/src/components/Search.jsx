import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserCard from "./UserCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchUserData(query);
      setUser(data);
      setError(null);
    } catch (err) {
      setUser(null);
      setError("Looks like we can't find the user");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub user..."
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}
