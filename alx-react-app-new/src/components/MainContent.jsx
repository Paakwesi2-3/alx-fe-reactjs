import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2 style={{ textAlign: "center", color: "darkgreen" }}>Featured Users</h2>
      <UserProfile name="Kwame" age={25} bio="Loves coding and traveling." />
      <UserProfile name="Akua" age={30} bio="Enjoys art, design, and photography." />
      <UserProfile name="Yaw" age={28} bio="Passionate about sports and fitness." />
    </main>
  );
}

export default MainContent;
