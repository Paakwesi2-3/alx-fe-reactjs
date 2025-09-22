import { useState } from "react";
import Search from "./components/Search"; // ✅ renamed
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService"; // ✅ corrected

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchUserData(query); // ✅ use fetchUserData
      setUsers(results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <div className="results">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
