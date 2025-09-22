export async function searchUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return await response.json();
}

