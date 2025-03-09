import React, { useState } from "react";

const BookingManagementForm = () => {
  // State to manage booking data
  const [booking, setBooking] = useState({
    guestName: "",
    guestEmail: "",
    guestContact: "",
    room: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: "",
    specialRequests: "",
    paymentStatus: "pending",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", booking);
    alert("Booking added successfully!");
    // Reset form after submission
    setBooking({
      guestName: "",
      guestEmail: "",
      guestContact: "",
      room: "",
      checkInDate: "",
      checkOutDate: "",
      numberOfGuests: "",
      specialRequests: "",
      paymentStatus: "pending",
    });
  };

  return (
    <div style={{ 
      backgroundColor: "#121212", 
      color: "#fff", 
      minHeight: "100vh", 
      padding: "40px 20px", 
      fontFamily: "Arial, sans-serif", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>
      <h1 style={{ 
        textAlign: "center", 
        fontSize: "28px", 
        marginBottom: "30px", 
        fontWeight: "600", 
        color: "#fff" 
      }}>
        Add New Booking
      </h1>
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: "#1e1e1e", 
        padding: "30px", 
        borderRadius: "12px", 
        maxWidth: "600px", 
        width: "100%", 
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" 
      }}>
        {/* Guest Name Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Guest Name
          </label>
          <input
            type="text"
            name="guestName"
            placeholder="Enter guest name"
            value={booking.guestName}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Guest Email Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Guest Email
          </label>
          <input
            type="email"
            name="guestEmail"
            placeholder="Enter guest email"
            value={booking.guestEmail}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Guest Contact Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Guest Contact
          </label>
          <input
            type="text"
            name="guestContact"
            placeholder="Enter guest contact number"
            value={booking.guestContact}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Room Selection Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Room Selection
          </label>
          <select
            name="room"
            value={booking.room}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          >
            <option value="">Select a room</option>
            <option value="101">Room 101 (Standard)</option>
            <option value="102">Room 102 (Deluxe)</option>
            <option value="103">Room 103 (Suite)</option>
          </select>
        </div>

        {/* Check-In Date Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Check-In Date
          </label>
          <input
            type="date"
            name="checkInDate"
            value={booking.checkInDate}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Check-Out Date Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Check-Out Date
          </label>
          <input
            type="date"
            name="checkOutDate"
            value={booking.checkOutDate}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Number of Guests Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Number of Guests
          </label>
          <input
            type="number"
            name="numberOfGuests"
            placeholder="Enter number of guests"
            value={booking.numberOfGuests}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Special Requests Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Special Requests
          </label>
          <textarea
            name="specialRequests"
            placeholder="Enter special requests"
            value={booking.specialRequests}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
          />
        </div>

        {/* Payment Status Field */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Payment Status
          </label>
          <select
            name="paymentStatus"
            value={booking.paymentStatus}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          style={{ 
            width: "100%", 
            padding: "14px", 
            backgroundColor: "#28a745", 
            color: "#fff", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer", 
            fontSize: "16px", 
            fontWeight: "600", 
            transition: "background-color 0.3s", 
            ":hover": { backgroundColor: "#218838" } 
          }}
        >
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default BookingManagementForm;