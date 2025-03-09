import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import UserManagementForm from "./pages/UserManagementForm";
import RoomManagement from "./pages/RoomManagement";
import RoomManagementForm from "./pages/RoomManagementForm";
import ReservationList from "./pages/ReservationList";
import ReservationForm from "./pages/ReservationForm";
import BillingForm from "./pages/BillingForm";
import InvoiceTable from "./pages/InvoiceTable";
import HousekeepingTable from "./pages/HousekeepingTable";
import MaintenanceRequestForm from "./pages/MaintenanceRequestForm";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Feedback from "./pages/Feedback";
import StaffManagement from "./pages/StaffManagement";
import AddStaffForm from "./pages/AddStaffForm";

import "./style/index.css";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage ";
import HousekeepingManagement from "./pages/Housekeeping";
import GuestProfiles from "./pages/GuestProfile";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
             
              <Route path="/Guestprofiles" element={<GuestProfiles />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/add-user" element={<UserManagementForm />} />
              <Route path="/rooms" element={<RoomManagement />} />
              <Route path="/add-room" element={<RoomManagementForm />} />
              <Route path="/reservations" element={<ReservationList />} />
              <Route path="/add-reservation" element={<ReservationForm />} />
              <Route path="/billing" element={<BillingForm />} />
              <Route path="/invoice" element={<InvoiceTable />} />
              <Route path="/HousekeepingTable" element={<HousekeepingTable />} />
              <Route path="/HousekeepingManagement" element={<HousekeepingManagement />} />
              <Route path="/maintenance" element={<MaintenanceRequestForm />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/staff-management" element={<StaffManagement />} />
              <Route path="/add-staff" element={<AddStaffForm />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
