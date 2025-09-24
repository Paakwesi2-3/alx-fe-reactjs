import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the query string
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};
