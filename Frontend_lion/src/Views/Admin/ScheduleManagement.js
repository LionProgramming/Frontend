import React from 'react';
import './ScheduleManagement.js'
import '../Admin/styles/ScheduleManagement.css'
import '../Admin/styles/AdminView.css'
import Navbar from './prueba';

function GestionHoriario() {
  return (
    <body className='body'>
      <header>
        <Navbar/>
      </header>
      <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-4 d-none d-sm-inline">Panel de administración</span>
                </p>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="/index" className="nav-link align-middle px-0">
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
                        <a href="/UserRegistration" className="nav-link px-0 text-white" id="contenedor1"> <span
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
                      <i className="fs-4 bi-table" id="active"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="active">Gestión de horarios</span>
                    </a>
                  </li>
                  <li>
                    <a href="./Courses" className="nav-link px-0 align-middle ">
                      <i className="fs-4 bi-grid" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de cursos</span>
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
                    <li><a className="dropdown-item" href="../Index.html">Salir</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="container-fluid d-flex flex-column"
              id="contenedor-tabla"
            >
              <h2 className="text-center shadow-text">
                Panel de administración de horarios
              </h2>
              <nav
                id="barraHorario"
                className="navbar navbar-expand-sm navbar-dark bg-transparent"
              >
                <div className="container-fluid justify-content-center">
                  <a className="navbar-brand shadow-text">Horario</a>
                  <form id="busqueda">
                    <select name="select">
                      <option value="value1">Curso</option>
                      <option value="value1">1</option>
                      <option value="value2">2</option>
                      <option value="value3">4</option>
                      <option value="value3">5</option>
                      <option value="value3">6</option>
                      <option value="value3">7</option>
                      <option value="value3">8</option>
                      <option value="value3">9</option>
                      <option value="value3">10</option>
                      <option value="value3">11</option>
                    </select>
                    <select name="select">
                      <option value="value1">1</option>
                      <option value="value1">2</option>
                      <option value="value1">3</option>
                    </select>
                    <input type="submit" value="Buscar" className="submit" />
                  </form>
                </div>
              </nav>

              <div className="container-input seleccionador">
                <input
                  type="file"
                  name="file-1"
                  id="file-1"
                  className="inputfile inputfile-1"
                  data-multiple-caption="{count} archivos seleccionados"
                  multiple
                />
                <label htmlFor="file-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">Seleccionar archivo</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default GestionHoriario;
