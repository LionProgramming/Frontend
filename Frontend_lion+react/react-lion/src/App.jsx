import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Layout/Login.jsx";
import Home from "./pages/Layout/HomePage.jsx";
import AdminDashboard from "./pages/Admin/Admin_Index.jsx";
import UserAdminPanel from "./pages/Admin/User_AdminPanel.jsx";
export const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/Adashboard" element={<AdminDashboard/>}/>
        <Route path="/UserAdministration" element={<UserAdminPanel/>}/>
      </Routes>
    </Router>
  );}