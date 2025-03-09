import React from "react";

const Reports = () => {
  return (
    <div style={{ 
      backgroundColor: "#121212", 
      color: "#fff", 
      minHeight: "100vh", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Hotel Management Dashboard</h1>

      {/* Quick Stats Row */}
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
      }}>
        <div style={{ backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px" }}>
          <h3>Occupancy Rate</h3>
          <p style={{ fontSize: "24px", color: "#4CAF50" }}>85%</p>
          <small>Next month forecast: 88%</small>
        </div>

        <div style={{ backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px" }}>
          <h3>Daily Revenue</h3>
          <p style={{ fontSize: "24px", color: "#2196F3" }}>$12,450</p>
          <small>Recommended rate: $245/night</small>
        </div>

        <div style={{ backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px" }}>
          <h3>Guest Rating</h3>
          <p style={{ fontSize: "24px", color: "#FF9800" }}>4.8/5</p>
          <small>Last 30 days average</small>
        </div>
      </div>

      {/* Custom Reports Section */}
      <div style={{ 
        backgroundColor: "#1e1e1e", 
        padding: "20px", 
        borderRadius: "8px",
        marginBottom: "30px"
      }}>
        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <select style={{ 
            backgroundColor: "#333", 
            color: "#fff", 
            padding: "10px",
            border: "none",
            borderRadius: "4px"
          }}>
            <option>Occupancy Report</option>
            <option>Revenue Report</option>
            <option>Guest Feedback</option>
          </select>

          <select style={{ 
            backgroundColor: "#333", 
            color: "#fff", 
            padding: "10px",
            border: "none",
            borderRadius: "4px"
          }}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Year to Date</option>
          </select>
        </div>
        
        <div style={{ 
          backgroundColor: "#121212", 
          height: "300px", 
          borderRadius: "8px",
          padding: "20px"
        }}>
          [Selected Report Preview]
        </div>
      </div>

      {/* Analytics Section */}
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>
        <div style={{ 
          backgroundColor: "#1e1e1e", 
          padding: "20px", 
          borderRadius: "8px"
        }}>
          <h3>Demand Forecast</h3>
          <div style={{ height: "200px", margin: "15px 0" }}>
            [Demand Chart]
          </div>
          <p>Peak days: Dec 25-31 (+35% demand)</p>
        </div>

        <div style={{ 
          backgroundColor: "#1e1e1e", 
          padding: "20px", 
          borderRadius: "8px"
        }}>
          <h3>Pricing Suggestions</h3>
          <div style={{ margin: "15px 0" }}>
            <p>Current average rate: $189</p>
            <p style={{ color: "#4CAF50" }}>Recommended rate: $205</p>
          </div>
          <div style={{ height: "150px" }}>
            [Pricing Trends]
          </div>
        </div>

        <div style={{ 
          backgroundColor: "#1e1e1e", 
          padding: "20px", 
          borderRadius: "8px"
        }}>
          <h3>Service Improvements</h3>
          <ul style={{ paddingLeft: "20px", color: "#888" }}>
            <li>Breakfast variety (27% requests)</li>
            <li>Faster check-in (18% feedback)</li>
            <li>Pool maintenance (12% mentions)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;