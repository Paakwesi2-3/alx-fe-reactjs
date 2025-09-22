import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    try {
      const users = await onSearch(query);
      if (users.length === 0) {
        setError("Looks like we can't find the user");
      }
      setResults(users);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="results">
        {results.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} width={50} />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
