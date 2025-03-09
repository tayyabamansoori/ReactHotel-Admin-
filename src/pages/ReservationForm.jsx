import React, { useState } from "react";

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    guestName: "",
    roomNumber: "",
    checkIn: "",
    checkOut: "",
    status: "Confirmed",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Created:", reservation);
    alert("Reservation successfully added!");
    setReservation({ guestName: "", roomNumber: "", checkIn: "", checkOut: "", status: "Confirmed" });
  };

  return (
    <div style={{ padding: "20px", background: "#121212", color: "#fff", minHeight: "100vh", textAlign: "center" }}>
      <h2 style={{ borderBottom: "2px solid #fff", paddingBottom: "10px" }}>Add New Reservation</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto", padding: "20px", background: "#1e1e1e", borderRadius: "8px" }}>
        <label style={styles.label}>Guest Name</label>
        <input type="text" name="guestName" value={reservation.guestName} onChange={handleInputChange} style={styles.input} required />

        <label style={styles.label}>Room Number</label>
        <input type="number" name="roomNumber" value={reservation.roomNumber} onChange={handleInputChange} style={styles.input} required />

        <label style={styles.label}>Check-In Date</label>
        <input type="date" name="checkIn" value={reservation.checkIn} onChange={handleInputChange} style={styles.input} required />

        <label style={styles.label}>Check-Out Date</label>
        <input type="date" name="checkOut" value={reservation.checkOut} onChange={handleInputChange} style={styles.input} required />

        <label style={styles.label}>Status</label>
        <select name="status" value={reservation.status} onChange={handleInputChange} style={styles.input}>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button type="submit" style={styles.submitButton}>Add Reservation</button>
      </form>
    </div>
  );
};

const styles = {
  label: {
    display: "block",
    marginBottom: "8px",
    textAlign: "left",
  },
  input: {
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

export default ReservationForm;
