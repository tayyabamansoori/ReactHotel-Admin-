import React from "react";

const Settings = () => {
  return (
    <div style={{ 
      backgroundColor: "#181818", 
      color: "#fff", 
      minHeight: "100vh", 
      padding: "30px 140px", 
      fontFamily: "Arial, sans-serif", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>    
      <div style={{ 
        backgroundColor: "#1e1e1e", 
        padding: "30px", 
        borderRadius: "12px", 
        maxWidth: "800px", 
        width: "150%", 
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" 
      }}>

        {/* Room Rates Section */}
       <h2>SETTING</h2>
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#4CAF50" }}>Room Rates Management</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Standard Room</label>
              <input
                type="number"
                placeholder="$"
                style={inputStyle}
              />
            </div>
            
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Deluxe Room</label>
              <input
            
                type="number"
                placeholder="$"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Suite</label>
              <input
                type="number"
                placeholder="$"
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Tax Configuration */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#2196F3" }}>Tax Management</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Service Tax (%)</label>
              <input
                type="number"
                placeholder="%"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>VAT (%)</label>
              <input
                type="number"
                placeholder="%"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>City Tax ($)</label>
              <input
                type="number"
                placeholder="$"
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Policies Management */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#FF9800" }}>Hotel Policies</h2>
          <div style={{ display: "grid", gap: "15px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Check-in/Check-out Times</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="time" style={inputStyle} />
                <input type="time" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Cancellation Policy</label>
              <select style={inputStyle}>
                <option>24 hours before check-in</option>
                <option>48 hours before check-in</option>
                <option>72 hours before check-in</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#aaa" }}>Pet Policy</label>
              <select style={inputStyle}>
                <option>No pets allowed</option>
                <option>Pets allowed with fee</option>
                <option>Pets allowed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button style={buttonStyle}>
          Save All Changes
        </button>
      </div>
    </div>
  );
};

// Reusable styles
const inputStyle = {
  width: "90%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #444",
  backgroundColor: "#252525",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.3s",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#808080",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "background-color 0.3s",
  marginTop: "20px"
};

export default Settings;