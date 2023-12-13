import EstudentSidebarSchedule from '../../components/Student/ScheduleSideBar_Student.jsx';
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Schedule.css'
import curso from '../../images/C_Prof.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../context/GlobalStateProvider.jsx';



function Student_Index() {
  const { state } = useGlobalState();

  const scheduleDocument = localStorage.getItem('documento');
  
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const respuesta = await axios.get(`http://127.0.0.1:8000/api/v1/users/${scheduleDocument}`);
        setStudent([respuesta.data]);
        console.log(respuesta)
      } catch (error) {
        console.error('Error al obtener los datos del estudiante:', error);
      }
    };

    getStudent();
  }, []);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const respuesta1 = await axios.get(`http://127.0.0.1:8000/api/v1/horarios`);
        const filtro = respuesta1.data.filter(schedule => schedule.numero_curso === student[0].curso);
        console.log(filtro);
        setSchedule(filtro);
      } catch (error) {
        console.error('Error al obtener los datos del estudiante:', error);
      }
    };
  
    getSchedule();
  }, [student]);

  return (
    <div className='bodyStudentSchedule'>
      <NavBarStudent_Index></NavBarStudent_Index>
      <div className="container-fluid">
        <div className="row flex-nowrap" id='contenedor-wrap'>
          <EstudentSidebarSchedule/>
          <div className="container-fluid d-flex flex-column" id='container_Schedule'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-xl-10'>
                  <div className='tabla-curso'>
                    <div id='tl-tabla-curso'>
                      <h3>Mi Curso</h3>
                    </div>
                      <article id='info-curso'>
                          <img src={schedule[0]?.urlhorario} id='img-curso' alt="Imagen perfil" className='image_index'/>
                      </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_Index;
