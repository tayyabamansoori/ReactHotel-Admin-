import React, { useState } from "react";

const BillingForm = ({ setBillingData }) => {
  const [roomRate, setRoomRate] = useState(0);
  const [stayDuration, setStayDuration] = useState(1);
  const [foodCharges, setFoodCharges] = useState(0);
  const [laundryCharges, setLaundryCharges] = useState(0);
  const [taxRate, setTaxRate] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBillingData({ roomRate, stayDuration, foodCharges, laundryCharges, taxRate });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Billing Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Room Rate (per night):</label>
        <input type="number" value={roomRate} onChange={(e) => setRoomRate(Number(e.target.value))} style={styles.input} />

        <label style={styles.label}>Stay Duration (nights):</label>
        <input type="number" value={stayDuration} min="1" onChange={(e) => setStayDuration(Number(e.target.value))} style={styles.input} />

        <label style={styles.label}>Food Charges:</label>
        <input type="number" value={foodCharges} onChange={(e) => setFoodCharges(Number(e.target.value))} style={styles.input} />

        <label style={styles.label}>Laundry Charges:</label>
        <input type="number" value={laundryCharges} onChange={(e) => setLaundryCharges(Number(e.target.value))} style={styles.input} />

        <label style={styles.label}>Tax Rate (%):</label>
        <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} style={styles.input} />

        <button type="submit" style={styles.submitButton}>Generate Invoice</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #444",
    borderRadius: "10px",
    backgroundColor: "#222",
    textAlign: "center",
    color: "#fff",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #666",
    fontSize: "16px",
    backgroundColor: "#333",
    color: "#fff",
  },
  submitButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#808080",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BillingForm;
