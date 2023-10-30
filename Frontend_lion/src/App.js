import React from 'react';
/* import HomePage from './Views/Homepage/Homepage';  */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//vistas admin
import UserRegistration from './Views/Admin/UserRegistration'; 
import UserManagement from './Views/Admin/UserManagement'; 
import ScheduleManagement from './Views/Admin/ScheduleManagement'; 
import CourseManagement from './Views/Admin/CourseManagement';
import AdminView from './Views/Admin/AdminView';
import ViewUser from './Views/Admin/ViewUser';


//vista estudiante
/*
import Observations from './Views/Student/Observations';
import IndexStudent from './Views/Student/Observations';
import Schedule from './Views/Student/schedule'; */

//vista profesor 
import BusquedaObservador from './Views/Teacher/BusquedaObservador';
import CursoPorfesor from './Views/Teacher/CursoProf';
import HorarioProfesor from './Views/Teacher/HorarioProf';
import IndexProfesor from './Views/Teacher/IndexTeacher';

function App() {
  return (
    <>
    <Router> 
      <Switch>
        {/* Router admin */}
      <Route exact path="/index" component={AdminView}/>
      <Route path="/Courses" component={CourseManagement}/>
      <Route path="/UserAdministration" component={UserManagement}/>
      <Route path="/UserRegistration" component={UserRegistration}/>
      <Route path="/Calendar" component={ScheduleManagement}/>
      <Route path="/view/:id" component={ViewUser}/>

      {/* <Route path="/Hom" component={HomePage}/> */}

      {/* Router profesor */}
      
      <Route path="/curso-prof" component={CursoPorfesor}/>
      <Route path="/observador-prof" component={BusquedaObservador}/>
      <Route path="/observador-prof" component={HorarioProfesor}/>
      <Route path="/observador-prof" component={IndexProfesor}/>

      </Switch>
    </Router>
    </>
    
  );
}
export default App;
