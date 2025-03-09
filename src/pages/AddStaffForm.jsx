import { useState } from "react";

const AddStaffForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    duty: "",
    contact: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Staff Added:", formData);
    // Yahan API call ya database insert logic add karna hoga
    onClose(); // Close the form after submission
  };

  return (
    <div style={{ 
      position: "fixed", 
      top: "0", 
      left: "0", 
      width: "100%", 
      height: "100%", 
      backgroundColor: "rgba(0, 0, 0, 0.8)", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      zIndex: "1000" 
    }}>
      <div style={{ 
        backgroundColor: "#2d2d2d", 
        padding: "20px", 
        borderRadius: "10px", 
        width: "400px", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#4a90e2" }}>
          Add New Staff Member
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Name:</label>
            <input
              type="text"
              name="name"
              style={{ 
                width: "100%", 
                padding: "8px", 
                backgroundColor: "#444", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                outline: "none" 
              }}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Role:</label>
            <select
              name="role"
              style={{ 
                width: "100%", 
                padding: "8px", 
                backgroundColor: "#444", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                outline: "none", 
                cursor: "pointer" 
              }}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Manager">Manager</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Housekeeping">Housekeeping</option>
            </select>
          </div>

          {/* Duty Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Duty:</label>
            <input
              type="text"
              name="duty"
              style={{ 
                width: "100%", 
                padding: "8px", 
                backgroundColor: "#444", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                outline: "none" 
              }}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Field */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Contact:</label>
            <input
              type="text"
              name="contact"
              style={{ 
                width: "100%", 
                padding: "8px", 
                backgroundColor: "#444", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                outline: "none" 
              }}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              style={{ 
                padding: "10px 20px", 
                backgroundColor: "#4a90e2", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                cursor: "pointer", 
                flex: "1", 
                transition: "background-color 0.3s", 
                ":hover": { backgroundColor: "#357abd" } 
              }}
            >
              Add Staff
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ 
                padding: "10px 20px", 
                backgroundColor: "#dc3545", 
                color: "#fff", 
                border: "none", 
                borderRadius: "6px", 
                cursor: "pointer", 
                flex: "1", 
                transition: "background-color 0.3s", 
                ":hover": { backgroundColor: "#c82333" } 
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffForm;