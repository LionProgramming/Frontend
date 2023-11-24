import EstudentSidebarHome from '../../components/Student/IndexSideBar_Student.jsx'
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Index.css'
import img from '../../images/foto.png'

function Student_Index() {
  return (
    <div className='bodyStudentIndex'>
      <NavBarStudent_Index></NavBarStudent_Index>
      <div className="container-fluid">
        <div className="row flex-nowrap" id='contenedor-wrap'>
          <EstudentSidebarHome/>
          <div className="container-fluid d-flex flex-column" id='container_index'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-xl-10'>
                  <div className='tabla'>
                    <div id='tl-tabla'>
                      <h3 className='text-center'>Informacion personal</h3>
                    </div>
                      <article id='info-user'>
                          <img src={img} id='img-perfil' alt="Imagen perfil" className='image_index'/>
                        <div id='cont-info-user'>
                          <div id='info-student'>
                              <h3>Nombre:Juan  Martin Elias Martinez</h3>
                          </div>
                          <div id='info-student'>
                              <h3>Curso: 502</h3>
                          </div>
                          <div id='info-student'>
                              <h3>Correo: MELIAS39@gmail.com</h3>
                          </div>
                          <div id='info-student'>
                              <h3>Nombre:Juan  Martin Elias Martinez</h3>
                              
                          </div>
                        </div>
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
