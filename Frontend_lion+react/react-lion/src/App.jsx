import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Layout/Login.jsx";
import Home from "./pages/Layout/HomePage.jsx";
import AdminDashboard from "./pages/Admin/Admin_Index.jsx";
import UserAdminPanel from "./pages/Admin/Admin_AdminPanel.jsx";
import UserRegistration from "./pages/Admin/Admin_Registration.jsx";
import UserCalendar from "./pages/Admin/Admin_Calendar.jsx";
import CourseManagement from "./pages/Admin/Admin_CourseManagement.jsx";
// Student
import Student_Index from "./pages/Student/Student_Index.jsx";


// profesor
import ObserverSearch from "./pages/Teacher/ObserverSearch_Teacher.jsx";
import MyScheduleT from "./pages/Teacher/MySchedule_Teacher.jsx";
import ScheduleCurseT from "./pages/Teacher/ScheduleCurse_Teacher.jsx";
import MakeObservationT from "./pages/Teacher/MakeObservation_Teacher.jsx";




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
        <Route path="/Sindex" element={<Student_Index/>}/>
        {/* Teacher */}
        <Route path="/ObserverSearch" element={<ObserverSearch/>}/>
        <Route path="/MyScheduleT" element={<MyScheduleT/>}/>
        <Route path="/ScheduleCurseT" element={<ScheduleCurseT/>}/>
        <Route path="/MakeObservationT" element={<MakeObservationT/>}/>
       

      </Routes>
    </Router>
  );}