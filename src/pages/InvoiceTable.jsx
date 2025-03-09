import React from "react";

const InvoiceTable = ({ billingData }) => {
  if (!billingData) {
    return <p style={{ textAlign: "center", color: "#fff" }}>No billing data available.</p>;
  }

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

export default InvoiceTable;
