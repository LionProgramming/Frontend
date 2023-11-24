import Navbar from '../../components/Admin/Navbar.jsx';
import '../../css/Admin_CourseManagement.css';
import {useEffect,useState} from 'react';
import axios from 'axios'

function CourseManagement() {
  const [cursosData, setCursosData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const resultado = await axios("http://127.0.0.1:8000/api/v1/grados/");
      setCursosData(resultado.data);
      console.log(resultado.data)
      
    } catch (err) {
      console.log("Algo esta mal");
    }
   
  }
  return (
    <div className='bodyCourseManagement'>
      <section>
      <Navbar/>
        <div className="container-fluid">
          <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Panel de administración</span>
                </p>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="/Adashboard" className="nav-link align-middle px-0">
                      <i className="fs-4 bi bi-house" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi bi-people" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de usuarios</span>
                    </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="/Register" className="nav-link px-0 text-white" id="contenedor1"> <span
                          className="d-none d-sm-inline" id="text-hover">Registrar usuario</span><i className="fs-4 bi bi-plus"
                            id="text-hover"></i></a>
                      </li>
                      <li className="w-100">
                        <a href="/UserAdministration" className="nav-link px-0 text-white" id="tabla"> <span
                          className="d-none d-sm-inline" id="text-hover">Gestiones adicionales</span> <i
                            className="fs-5 bi bi-plus-slash-minus" id="icono2"></i></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Calendar" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de horarios</span>
                    </a>
                  </li>
                  <li>
                    <a href="/CourseManagement" className="nav-link px-0 align-middle ">
                      <i className="fs-4 bi-grid" id="active"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="active">Gestión de cursos</span>
                    </a>
                  </li>
                </ul>
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../imagenes/Profile-photo.PNG" width="30" height="30" className="rounded-circle" alt="Profile" />
                    <span className="d-none d-sm-inline mx-1">Administrador</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="/">Salir</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid d-flex flex-column" id="contenedor-tabla-cursos">
              <h2 className="text-center shadow-text">Panel de administración de cursos</h2>
              <div className="col-8 cold-md-0 col-xl-10" id='addCourse'>
                <button type='button' className='btn btn-primary' id='button'><i className="bi bi-plus"></i></button>
              </div>
              <div className='table-responsive col-8 cold-md-0 col-xl-10 px-sm-1 px-0 mt-4'id="tablaRegistros">
                <table className='table-striped table-bordered'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Curso</th>
                      <th>C.Estudiantes</th>
                      <th>Profesor asignado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      cursosData && cursosData.map((curso) => {
                        return (
                          <tr key={curso.numero}>
                            <td>{curso.numero}</td>
                            <td>{curso.nombre}</td>
                            <td>{curso.cantidadestudiantes}</td>
                            <td>{curso.director_nombre}</td>
                            
                            <td>
                               <button className="btn  btn-sm" id="icon">
                                 <i className="bi bi-pencil-fill"></i>
                                </button>
                                <button className="btn  btn-sm" id="icon">
                                  <i className="bi bi-eye-fill"></i>
                                </button>
                                <button className="btn  btn-sm" id="icon" >  
                                  <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>


            </div>
          </div>
        </div>

      </section>
    </div>

  );
}

export default CourseManagement;
