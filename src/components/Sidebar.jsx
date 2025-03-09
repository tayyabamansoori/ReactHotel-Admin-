import React from "react";
import { Home, Users, Bed, CalendarCheck, CreditCard, Brush, BarChart, Bell, Settings as SettingsIcon, MessageCircle, FilePlus } from "lucide-react";
import { Link } from "react-router-dom";
import "../style/Sidebar.css";
import "../style/components.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">🏨 Hotel Admin</h2>
      <ul className="menu">
        <li><Link to="/"><Home size={20} /> Dashboard</Link></li>
        <li><Link to="/users"><Users size={20} /> User Management</Link></li>
        <li><Link to="/add-user"><FilePlus size={20} /> Add User</Link></li>
        <li><Link to="/rooms"><Bed size={20} /> Room Management</Link></li>
        <li><Link to="/add-room"><FilePlus size={20} /> Add Room</Link></li>
        <li><Link to="/reservations"><CalendarCheck size={20} /> Reservations</Link></li>
        <li><Link to="/HousekeepingTable"><CalendarCheck size={20} /> HousekeepingTable</Link></li>
        <li><Link to="/GuestProfiles"><CalendarCheck size={20} /> GuestProfiles</Link></li>
        {/* <li><Link to="/add-reservation"><FilePlus size={20} /> Add Reservation</Link></li> */  }
        {/* <li><Link to="/billing"><CreditCard size={20} /> Billing</Link></li> */}
        {/* <li><Link to="/invoice"><CreditCard size={20} /> Invoice</Link></li> */}
        <li><Link to="/HousekeepingManagement"><Brush size={20} /> Housekeeping</Link></li>
      
        <li><Link to="/maintenance"><Brush size={20} /> Maintenance</Link></li>
        <li><Link to="/reports"><BarChart size={20} /> Reports</Link></li>
        <li><Link to="/notifications"><Bell size={20} /> Notifications</Link></li>
        <li><Link to="/settings"><SettingsIcon size={20} /> Settings</Link></li>
        <li><Link to="/feedback"><MessageCircle size={20} /> Feedback</Link></li>
        <li><Link to="/staff-management"><Users size={20} /> Staff Management</Link></li>
      
      </ul>
    </div>
  );
};

export default Sidebar;
