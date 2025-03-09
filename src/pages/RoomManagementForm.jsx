import React, { useState } from "react";

const RoomManagementForm = () => {
  // State to manage room data
  const [room, setRoom] = useState({
    roomName: "",
    roomDescription: "",
    overview: "",
    roomSize: "",
    occupancy: "",
    view: "seaView",
    smokingAllowed: "noSmoking",
    bedSize: "",
    location: "",
    roomService: "yes",
    swimmingPool: "yes",
    roomImage: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setRoom({ ...room, roomImage: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Data:", room);
    alert("Room added successfully!");
    // Reset form after submission
    setRoom({
      roomName: "",
      roomDescription: "",
      overview: "",
      roomSize: "",
      occupancy: "",
      view: "seaView",
      smokingAllowed: "noSmoking",
      bedSize: "",
      location: "",
      roomService: "yes",
      swimmingPool: "yes",
      roomImage: null,
    });
  };

  return (
    <div style={{ 
      backgroundColor: "#181818", 
      color: "#fff", 
      minHeight: "100vh", 
      padding: "60px 150px", 
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
        Add New Room
      </h1>
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: "#1e1e1e", 
        padding: "30px", 
        borderRadius: "12px", 
        maxWidth: "600px", 
        width: "150%", 
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" 
      }}>
        {/* Room Name Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Room Name
          </label>
          <input
            type="text"
            name="roomName"
            placeholder="Enter room name"
            value={room.roomName}
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

        {/* Room Description Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Room Description
          </label>
          <textarea
            name="roomDescription"
            placeholder="Enter room description"
            value={room.roomDescription}
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

        {/* Overview Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Overview
          </label>
          <textarea
            name="overview"
            placeholder="Enter room overview"
            value={room.overview}
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

        {/* Room Size Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Room Size (sq m)
          </label>
          <input
            type="number"
            name="roomSize"
            placeholder="Enter room size"
            value={room.roomSize}
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

        {/* Occupancy Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Occupancy (Adults)
          </label>
          <input
            type="number"
            name="occupancy"
            placeholder="Enter occupancy"
            value={room.occupancy}
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

        {/* View Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            View
          </label>
          <select
            name="view"
            value={room.view}
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
            <option value="seaView">Sea View</option>
            <option value="gardenView">Garden View</option>
            <option value="cityView">City View</option>
          </select>
        </div>

        {/* Smoking Allowed Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Smoking Allowed?
          </label>
          <select
            name="smokingAllowed"
            value={room.smokingAllowed}
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
            <option value="noSmoking">No Smoking</option>
            <option value="smokingAllowed">Smoking Allowed</option>
          </select>
        </div>

        {/* Bed Size Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Bed Size
          </label>
          <input
            type="text"
            name="bedSize"
            placeholder="Enter bed size"
            value={room.bedSize}
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

        {/* Location Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={room.location}
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

        {/* Room Service Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Room Service
          </label>
          <select
            name="roomService"
            value={room.roomService}
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
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Swimming Pool Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Swimming Pool
          </label>
          <select
            name="swimmingPool"
            value={room.swimmingPool}
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
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Upload Room Image Field */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Upload Room Image
          </label>
          <input
            type="file"
            name="roomImage"
            onChange={handleFileChange}
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

        {/* Submit Button */}
        <button 
          type="submit"
          style={{ 
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
            ":hover": { backgroundColor: "#218838" } 
          }}
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default RoomManagementForm;