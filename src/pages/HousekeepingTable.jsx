import React, { useState } from "react";

const HousekeepingTable = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoomNumber, setNewRoomNumber] = useState("");
  const [newIssue, setNewIssue] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  const addNewRoom = () => {
    if (newRoomNumber && !rooms.some(room => room.id === parseInt(newRoomNumber))) {
      setRooms([...rooms, {
        id: parseInt(newRoomNumber),
        status: "Clean",
        maintenanceIssue: "",
        lastCleaned: new Date().toLocaleString(),
        nextCleaning: ""
      }]);
      setNewRoomNumber("");
    }
  };

  const scheduleCleaning = (roomId) => {
    if (!scheduleTime) return;
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, nextCleaning: scheduleTime } : room
    ));
    setScheduleTime("");
  };

  const reportIssue = (roomId) => {
    if (!newIssue) return;
    setRooms(rooms.map(room => 
      room.id === roomId ? { 
        ...room, 
        maintenanceIssue: newIssue,
        status: "Maintenance Needed" 
      } : room
    ));
    setNewIssue("");
  };

  const updateStatus = (roomId, newStatus) => {
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, status: newStatus } : room
    ));
  };

  return (
    <div style={containerStyle}>
      <div style={headerContainer}>
        <h1 style={titleStyle}>Housekeeping Management</h1>
        
        <div style={roomCreationStyle}>
          <input
            type="number"
            placeholder="Enter room number"
            value={newRoomNumber}
            onChange={(e) => setNewRoomNumber(e.target.value)}
            style={inputStyle}
          />
          <button style={addButton} onClick={addNewRoom}>
            + Add Room
          </button>
        </div>

        <div style={statsContainer}>
          <div style={statItem}>
            <span style={statNumber}>{rooms.length}</span>
            <span style={statLabel}>Total Rooms</span>
          </div>
          <div style={statItem}>
            <span style={{...statNumber, color: '#4CAF50'}}>
              {rooms.filter(room => room.status === 'Clean').length}
            </span>
            <span style={statLabel}>Clean</span>
          </div>
          <div style={statItem}>
            <span style={{...statNumber, color: '#FF9800'}}>
              {rooms.filter(room => room.status === 'In Progress').length}
            </span>
            <span style={statLabel}>In Progress</span>
          </div>
          <div style={statItem}>
            <span style={{...statNumber, color: '#F44336'}}>
              {rooms.filter(room => room.status === 'Maintenance Needed').length}
            </span>
            <span style={statLabel}>Needs Attention</span>
          </div>
        </div>
      </div>

      <div style={gridContainer}>
        {rooms.map((room) => (
          <div key={room.id} style={cardStyle}>
            <div style={cardHeader}>
              <span style={roomNumber}>Room {room.id}</span>
              <span style={statusBadge(room.status)}>{room.status}</span>
            </div>

            <div style={cardBody}>
              <div style={infoRow}>
                <span style={infoLabel}>Last Cleaned:</span>
                <span style={infoValue}>{room.lastCleaned || "N/A"}</span>
              </div>
              
              <div style={infoRow}>
                <span style={infoLabel}>Next Cleaning:</span>
                <span style={infoValue}>
                  {room.nextCleaning || "Not scheduled"}
                </span>
              </div>

              {room.maintenanceIssue && (
                <div style={alertBox}>
                  ⚠️ Maintenance Issue: {room.maintenanceIssue}
                </div>
              )}

              <div style={actionSection}>
                <input
                  type="datetime-local"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  style={dateInput}
                />
                <button 
                  style={primaryButton}
                  onClick={() => scheduleCleaning(room.id)}
                >
                  Schedule Cleaning
                </button>

                <div style={issueReport}>
                  <input
                    type="text"
                    placeholder="Report maintenance issue..."
                    value={newIssue}
                    onChange={(e) => setNewIssue(e.target.value)}
                    style={textInput}
                  />
                  <button 
                    style={secondaryButton}
                    onClick={() => reportIssue(room.id)}
                  >
                    Report Issue
                  </button>
                </div>

                <div style={buttonGroup}>
                  <button
                    style={successButton}
                    onClick={() => updateStatus(room.id, "Clean")}
                  >
                    Mark Clean
                  </button>
                  <button
                    style={warningButton}
                    onClick={() => updateStatus(room.id, "In Progress")}
                  >
                    In Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dark Theme Styles
const containerStyle = {
  padding: "32px",
  backgroundColor: "#121212", // Dark background
  minHeight: "100vh",
  fontFamily: "'Segoe UI', sans-serif",
  color: "#fff", // White text
};

const headerContainer = {
  marginBottom: "32px",
  padding: "24px",
  backgroundColor: "#1e1e1e", // Dark grey background
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#fff", // White text
  marginBottom: "16px",
};

const statsContainer = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
};

const statItem = {
  textAlign: "center",
  padding: "12px 20px",
  backgroundColor: "#333", // Darker grey background
  borderRadius: "8px",
};

const statNumber = {
  display: "block",
  fontSize: "24px",
  fontWeight: "700",
  color: "#fff", // White text
};

const statLabel = {
  fontSize: "14px",
  color: "#ccc", // Light grey text
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "24px",
};

const cardStyle = {
  backgroundColor: "#1e1e1e", // Dark grey background
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
  overflow: "hidden",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  backgroundColor: "#333", // Darker grey background
  borderBottom: "1px solid #444", // Dark grey border
};

const roomNumber = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#fff", // White text
};

const statusBadge = (status) => ({
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
  backgroundColor: 
    status === "Clean" ? "#2E7D32" : // Dark green
    status === "Needs Cleaning" ? "#D32F2F" : // Dark red
    status === "In Progress" ? "#EF6C00" : // Dark orange
    "#6A1B9A", // Dark purple
  color: "#fff", // White text
});

const cardBody = {
  padding: "24px",
};

const infoRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
};

const infoLabel = {
  fontSize: "14px",
  color: "#ccc", // Light grey text
};

const infoValue = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#fff", // White text
};

const alertBox = {
  padding: "12px",
  backgroundColor: "#FF9800", // Orange background
  borderRadius: "8px",
  color: "#fff", // White text
  fontSize: "14px",
  margin: "16px 0",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const actionSection = {
  borderTop: "1px solid #444", // Dark grey border
  paddingTop: "16px",
  marginTop: "16px",
};

const dateInput = {
  width: "100%",
  padding: "10px",
  border: "1px solid #444", // Dark grey border
  borderRadius: "8px",
  marginBottom: "12px",
  fontSize: "14px",
  backgroundColor: "#333", // Darker grey background
  color: "#fff", // White text
};

const textInput = {
  ...dateInput,
  marginBottom: "8px",
};

const buttonGroup = {
  display: "flex",
  gap: "8px",
  marginTop: "12px",
};

const baseButton = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  transition: "all 0.2s ease",
};

const primaryButton = {
  ...baseButton,
  backgroundColor: "#4CAF50", // Green
  color: "white",
  width: "100%",
  marginBottom: "12px",
};

const secondaryButton = {
  ...baseButton,
  backgroundColor: "#333", // Dark grey
  color: "#fff", // White text
  border: "1px solid #444", // Dark grey border
};

const successButton = {
  ...baseButton,
  backgroundColor: "#4CAF50", // Green
  color: "white",
  flex: 1,
};

const warningButton = {
  ...baseButton,
  backgroundColor: "#FF9800", // Orange
  color: "white",
  flex: 1,
};

const roomCreationStyle = {
  display: "flex",
  gap: "16px",
  marginBottom: "24px",
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #444", // Dark grey border
  borderRadius: "8px",
  fontSize: "16px",
  flex: 1,
  backgroundColor: "#333", // Darker grey background
  color: "#fff", // White text
};

const addButton = {
  padding: "12px 24px",
  backgroundColor: "#4CAF50", // Green
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#45a049", // Darker green on hover
  },
};

const issueReport = {
  margin: "12px 0",
};

export default HousekeepingTable;