import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Layout/Login.jsx";
import Home from "./pages/Layout/HomePage.jsx";
import AdminDashboard from "./pages/Admin/Admin_Index.jsx";
import UserAdminPanel from "./pages/Admin/Admin_AdminPanel.jsx";
import UserRegistration from "./pages/Admin/Admin_Registration.jsx";
import UserCalendar from "./pages/Admin/Admin_Calendar.jsx";
import CourseManagement from "./pages/Admin/Admin_CourseManagement.jsx";
export const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/Adashboard" element={<AdminDashboard/>}/>
        <Route path="/Register" element={<UserRegistration/>}/>
        <Route path="/UserAdministration" element={<UserAdminPanel/>}/>
        <Route path="/Calendar" element={<UserCalendar/>}/>
        <Route path="/CourseManagement" element={<CourseManagement/>}/>
      </Routes>
    </Router>
  );}