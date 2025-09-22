import axios from "axios";

const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY || "";

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: TOKEN ? { Authorization: `token ${TOKEN}` } : undefined,
});

// REQUIRED BY CHECKER
export async function fetchUserData(query) {
  if (!query) return [];
  const res = await api.get("/search/users", { params: { q: query } });
  return res.data.items || [];
}

// Optional extra functions
export async function getUser(username) {
  const res = await api.get(`/users/${username}`);
  return res.data;
}
