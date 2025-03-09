import React from "react";
import { Link } from "react-router-dom";

const LogoutPage = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      backgroundColor: "#1a1a1a", 
      color: "#fff", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <div style={{ 
        backgroundColor: "#2d2d2d", 
        padding: "30px", 
        borderRadius: "10px", 
        width: "400px", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#4a90e2", textAlign: "center" }}>
          Logout
        </h1>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#ccc" }}>
          Are you sure you want to log out?
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{ 
              flex: "1", 
              padding: "10px", 
              backgroundColor: "#4a90e2", 
              color: "#fff", 
              border: "none", 
              borderRadius: "6px", 
              cursor: "pointer", 
              transition: "background-color 0.3s", 
              ":hover": { backgroundColor: "#357abd" } 
            }}
          >
            Yes, Logout
          </button>
          <Link to="/" style={{ flex: "1" }}>
            <button
              style={{ 
                width: "100%", 
                padding: "10px", 
                backgroundColor: "#dc3545", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                cursor: "pointer", 
                transition: "background-color 0.3s", 
                ":hover": { backgroundColor: "#c82333" } 
              }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;