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

        <button type="submit" style={styles.printButton}>Generate Invoice</button>
      </form>
    </div>
  );
};

const InvoiceTable = ({ billingData }) => {
  const { roomRate, stayDuration, foodCharges, laundryCharges, taxRate } = billingData;
  const subtotal = roomRate * stayDuration + foodCharges + laundryCharges;
  const taxAmount = (subtotal * taxRate) / 100;
  const totalAmount = subtotal + taxAmount;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Invoice</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Room Charges ({roomRate} × {stayDuration})</td>
            <td>{roomRate * stayDuration}</td>
          </tr>
          <tr>
            <td>Food Charges</td>
            <td>{foodCharges}</td>
          </tr>
          <tr>
            <td>Laundry Charges</td>
            <td>{laundryCharges}</td>
          </tr>
          <tr>
            <td>Tax ({taxRate}%)</td>
            <td>{taxAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Total Amount</strong></td>
            <td><strong>{totalAmount.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const BillingAndInvoicing = () => {
  const [billingData, setBillingData] = useState(null);

  return (
    <div>
      <BillingForm setBillingData={setBillingData} />
      {billingData && <InvoiceTable billingData={billingData} />}
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
  printButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#333",
    color: "#fff",
  },
  th: {
    border: "1px solid #fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    border: "1px solid #fff",
    padding: "10px",
  },
};

export default Billing;
