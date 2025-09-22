import React from "react";

export default function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 12,
      marginBottom: 10,
      display: "flex",
      gap: 12,
      alignItems: "center"
    }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: 64, height: 64, borderRadius: 8 }} />
      <div>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
          {user.login}
        </a>
        <div style={{ color: "#666" }}>{user.type}</div>
      </div>
    </div>
  );
}
