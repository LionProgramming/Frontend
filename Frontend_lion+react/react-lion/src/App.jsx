import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from './context/GlobalStateProvider.jsx';
import Login from "./pages/Layout/Login.jsx";
import Home from "./pages/Layout/HomePage.jsx";
import AdminDashboard from "./pages/Admin/Admin_Index.jsx";
import UserAdminPanel from "./pages/Admin/Admin_AdminPanel.jsx";
import UserRegistration from "./pages/Admin/Admin_Registration.jsx";
import UserCalendar from "./pages/Admin/Admin_Calendar.jsx";
import CourseManagement from "./pages/Admin/Admin_CourseManagement.jsx";
// Student
import Student_Index from "./pages/Student/Student_Index.jsx";

import Student_Observations from "./pages/Student/Student_Observations.jsx";
import Student_Schedule from "./pages/Student/Student_Schedule.jsx";

// profesor
import ObserverSearch from "./pages/Teacher/ObserverSearch_Teacher.jsx";
import MyScheduleT from "./pages/Teacher/MySchedule_Teacher.jsx";
import ScheduleCurseT from "./pages/Teacher/ScheduleCurse_Teacher.jsx";
import MakeObservationT from "./pages/Teacher/MakeObservation_Teacher.jsx";
import UserProfile from "./pages/Teacher/UserProfile_Teacher.jsx";




export const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} /> 
          {/* Admin */}
          <Route path="/Adashboard" element={<AdminDashboard/>}/>
          <Route path="/Register" element={<UserRegistration/>}/>
          <Route path="/UserAdministration" element={<UserAdminPanel/>}/>
          <Route path="/Calendar" element={<UserCalendar/>}/>
          <Route path="/CourseManagement" element={<CourseManagement/>}/>
          {/* Student */}
          <Route path="/Student-index" element={<Student_Index/>}/>
          <Route path="/Student-observations" element={<Student_Observations/>}></Route>
          <Route path="/Student-schedule" element={<Student_Schedule/>}></Route>
          {/* Teacher */}
          <Route path="/ObserverSearch" element={<ObserverSearch/>}/>
          <Route path="/MyScheduleT" element={<MyScheduleT/>}/>
          <Route path="/ScheduleCurseT" element={<ScheduleCurseT/>}/>
          <Route path="/MakeObservationT" element={<MakeObservationT/>}/>
          <Route path="/UserProfileT" element={<UserProfile/>}/>

        </Routes>
      </Router>
    </GlobalStateProvider>
  );}