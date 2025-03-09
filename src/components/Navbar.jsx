import { Bell, Settings, User, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Check if the user is logged in (you can replace this with your actual authentication logic)
  const isLoggedIn = false; // Change this based on your app's state

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2d2d2d",
        color: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "60px",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        <span style={{ color: "#4a90e2" }}>Hotel</span> Admin
      </div>

      {/* Search Bar and Icons/Buttons Container */}
      <div style={{ position: "absolute", right: "5%", display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Search Bar */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#444",
              color: "#fff",
              outline: "none",
              width: "200px",
            }}
          />
          <Search
            style={{ position: "absolute", right: "10px", color: "#ccc", cursor: "pointer" }}
            size={18}
          />
        </div>

        {/* Icons */}
        <Bell size={22} />
        <Settings size={22} />
        <User size={22} />

        {/* Login and Logout Buttons */}
        {isLoggedIn ? (
          <Link to="/logout">
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#666", // Grey color
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#555")} // Darker grey on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#666")}
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#666", // Grey color
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#555")} // Darker grey on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#666")}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;