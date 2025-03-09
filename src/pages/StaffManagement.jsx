import { useState } from "react";
import AddStaffForm from "./AddStaffForm"; // Import the AddStaffForm component

const StaffManagement = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: "Ali Khan", role: "Manager", duty: "Shift Handling", status: "Active" },
    { id: 2, name: "Sara Ahmed", role: "Receptionist", duty: "Check-ins", status: "Active" },
    { id: 3, name: "Ahmed Raza", role: "Housekeeping", duty: "Room Cleaning", status: "On Leave" },
  ]);

  const [showAddStaffForm, setShowAddStaffForm] = useState(false);

  const updateDuty = (id, newDuty) => {
    setStaff(staff.map((member) => (member.id === id ? { ...member, duty: newDuty } : member)));
  };

  return (
    <div style={{ 
      backgroundColor: "rgb(18, 18, 18)", 
      color: "#fff", 
      minHeight: "100vh", 
      padding: "40px", 
      fontFamily: "Arial, sans-serif" 
    }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#4a90e2", marginBottom: "10px" }}>
          Staff Duty Assignment
        </h1>
        <p style={{ color: "#aaa", fontSize: "14px" }}>
          Manage and assign duties to your staff members efficiently.
        </p>
      </div>

      {/* Staff Table */}
      <div style={{ overflowX: "auto", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <table style={{ width: "100%", backgroundColor: "#2d2d2d", borderCollapse: "collapse" }}>
          {/* Table Header */}
          <thead style={{ backgroundColor: "#333" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>
                Name
              </th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>
                Role
              </th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>
                Assign Duty
              </th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>
                Update
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {staff.map((member) => (
              <tr key={member.id} style={{ borderBottom: "1px solid #444", transition: "background-color 0.3s", ":hover": { backgroundColor: "#3a3a3a" } }}>
                {/* Staff Name */}
                <td style={{ padding: "12px", fontWeight: "500" }}>{member.name}</td>

                {/* Staff Role */}
                <td style={{ padding: "12px", color: "#bbb" }}>{member.role}</td>

                {/* Duty Assignment Dropdown */}
                <td style={{ padding: "12px" }}>
                  <select
                    style={{ 
                      width: "100%", 
                      padding: "8px", 
                      backgroundColor: "#444", 
                      color: "#fff", 
                      border: "none", 
                      borderRadius: "6px", 
                      outline: "none", 
                      cursor: "pointer", 
                      ":focus": { border: "2px solid #4a90e2" } 
                    }}
                    value={member.duty}
                    onChange={(e) => updateDuty(member.id, e.target.value)}
                  >
                    <option>Shift Handling</option>
                    <option>Check-ins</option>
                    <option>Room Cleaning</option>
                    <option>Inventory Management</option>
                  </select>
                </td>

                {/* Update Button */}
                <td style={{ padding: "12px" }}>
                  <button
                    style={{ 
                      padding: "8px 16px", 
                      backgroundColor: "#4a90e2", 
                      color: "#fff", 
                      border: "none", 
                      borderRadius: "6px", 
                      cursor: "pointer", 
                      transition: "background-color 0.3s", 
                      ":hover": { backgroundColor: "#357abd" } 
                    }}
                    onClick={() => alert(`Duty updated for ${member.name}`)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Staff Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{ 
            padding: "12px 24px", 
            backgroundColor: "#808080", 
            color: "#fff", 
            border: "none", 
            borderRadius: "6px", 
            cursor: "pointer", 
            fontSize: "16px", 
            fontWeight: "600", 
            transition: "background-color 0.3s", 
            ":hover": { backgroundColor: "#218838" } 
          }}
          onClick={() => setShowAddStaffForm(true)}
        >
          Add New Staff
        </button>
      </div>

      {/* Show AddStaffForm when showAddStaffForm is true */}
      {showAddStaffForm && (
        <AddStaffForm onClose={() => setShowAddStaffForm(false)} />
      )}
    </div>
  );
};

export default StaffManagement;