import React, { useState } from "react";

const MaintenanceRequestForm = () => {
  const [request, setRequest] = useState({
    roomNumber: "",
    issue: "",
    priority: "Medium",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Maintenance Request Submitted:", request);
    alert("Maintenance request submitted successfully!");
    setRequest({ roomNumber: "", issue: "", priority: "Medium" });
  };

  return (
    <div style={{ padding: "20px", background: "#81818", color: "#fff", minHeight: "100vh", textAlign: "center" }}>
      <h2 style={{ borderBottom: "2px solid #fff", paddingBottom: "10px" ,textAlign:"center"}}>Maintenance Request</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto", padding: "20px", background: "#1e1e1e", borderRadius: "8px", width: "150%" }}>
        <label style={{ display: "block", marginBottom: "10px", textAlign: "left" }}>Room Number</label>
        <input
          type="number"
          name="roomNumber"
          placeholder="Enter room number"
          value={request.roomNumber}
          onChange={handleInputChange}
          style={styles.input}
          required
        />

        <label style={{ display: "block", marginBottom: "10px", textAlign: "left" }}>Issue Description</label>
        <textarea
          name="issue"
          placeholder="Describe the issue"
          value={request.issue}
          onChange={handleInputChange}
          style={styles.textarea}
          required
        />

        <label style={{ display: "block", marginBottom: "10px", textAlign: "left" }}>Priority Level</label>
        <select name="priority" value={request.priority} onChange={handleInputChange} style={styles.select}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit" style={styles.submitButton}>Submit Request</button>
      </form>
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #444",
    background: "#252525",
    color: "#fff",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #444",
    background: "#252525",
    color: "#fff",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #444",
    background: "#252525",
    color: "#fff",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#808080",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MaintenanceRequestForm;
