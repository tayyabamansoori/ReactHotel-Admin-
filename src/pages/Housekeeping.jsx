import React, { useState } from "react";

const HousekeepingManagement = () => {
  const [rooms, setRooms] = useState([
    { id: 101, status: "Clean" },
    { id: 102, status: "Needs Cleaning" },
    { id: 103, status: "In Progress" },
  ]);

  const updateStatus = (id, newStatus) => {
    setRooms(
      rooms.map((room) => (room.id === id ? { ...room, status: newStatus } : room))
    );
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        background: "#181818", // Dark background
        color: "#fff", // White text
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign:"center" ,
          borderBottom: "2px solid #444", // Dark grey border
          paddingBottom: "10px",
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#fff", // White text
        }}
      >
        Housekeeping Management
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          backgroundColor: "#1e1e1e", // Dark grey background
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <thead>
          <tr style={{ background: "#333", textAlign: "left" }}>
            <th style={{ padding: "15px", fontSize: "16px", fontWeight: "500", color: "#fff" }}>Room</th>
            <th style={{ padding: "15px", fontSize: "16px", fontWeight: "500", color: "#fff" }}>Status</th>
            <th style={{ padding: "15px", fontSize: "16px", fontWeight: "500", color: "#fff" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr
              key={room.id}
              style={{
                borderBottom: "1px solid #444", // Dark grey border
                transition: "background-color 0.3s",
                ":hover": { backgroundColor: "#181818" }, // Slightly lighter grey on hover
              }}
            >
              <td style={{ padding: "15px", fontSize: "14px", color: "#fff" }}>Room {room.id}</td>
              <td
                style={{
                  padding: "15px",
                  fontSize: "14px",
                  color:
                    room.status === "Needs Cleaning"
                      ? "#ff4444" // Red for "Needs Cleaning"
                      : room.status === "In Progress"
                      ? "#ffcc00" // Yellow for "In Progress"
                      : "#0f0", // Green for "Clean"
                }}
              >
                {room.status}
              </td>
              <td style={{ padding: "15px" }}>
                <button
                  style={{
                    padding: "8px 16px",
                    marginRight: "10px",
                    background: "#4CAF50", // Green button
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")} // Darker green on hover
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                  onClick={() => updateStatus(room.id, "Clean")}
                >
                  Mark as Clean
                </button>
                <button
                  style={{
                    padding: "8px 16px",
                    background: "#ff4444", // Red button
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#cc0000")} // Darker red on hover
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4444")}
                  onClick={() => updateStatus(room.id, "Needs Cleaning")}
                >
                  Needs Cleaning
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HousekeepingManagement;