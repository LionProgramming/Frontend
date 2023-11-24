import EstudentSidebarSchedule from '../../components/Student/ScheduleSideBar_Student.jsx';
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Schedule.css'
import curso from '../../images/C_Prof.png'

function Student_Index() {
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
                          <img src={curso} id='img-curso' alt="Imagen perfil" className='image_index'/><img/>
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
