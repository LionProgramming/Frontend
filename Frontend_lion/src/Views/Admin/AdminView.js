import React from 'react';

import './styles/AdminView.css';

import Navbar from './prueba';

function AdminDashboard() {
  return (
    <body className='body'>
      <header>
        <Navbar/>
     
        
      </header>

      <div>
        <section>
          <div className="container-fluid">
            <div className="row flex-nowrap">
              <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" id="sidebar">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <a  href="./AdminView.js" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4 d-none d-sm-inline">Panel de administración</span>
                  </a>
                  <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                      <a href="/index" className="nav-link align-middle px-0" id="active">
                        <i className="fs-4 bi bi-house" id="icono2 active"></i> <span className="ms-1 d-none d-sm-inline text-white" id="active">Inicio</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi bi-people" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white" id="text-hover">Gestión de usuarios</span>
                      </a>
                      <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        <li className="w-100">
                          <a href="/UserRegistration" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline" id="text-hover">Registrar usuario</span><i className="fs-4 bi bi-plus" id="icono2"></i></a>
                        </li>
                        <li className="w-100">
                          <a href="/UserAdministration" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline" id="text-hover">Gestiones adicionales</span> <i className="fs-5 bi bi-plus-slash-minus" id="icono2"></i></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/Calendar" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-table" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white" id="text-hover">Gestión de horarios</span>
                      </a>
                    </li>
                    <li>
                      <a href="./gestion_cursos.html" className="nav-link px-0 align-middle ">
                        <i className="fs-4 bi-grid" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white" id="text-hover">Gestión de cursos</span>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="./imagenes/Profile-photo.PNG" width="30" height="30" className="rounded-circle" alt="Avatar del administrador" />
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
              <div id="contenedor-tabla">
                <div className="card">
                  <div className="card-inner">
                    <h3 className='text-start'>Usuarios</h3>
                    <i className="bi bi-people-fill icon-card"></i>
                    <hr />
                  </div>
                  <hr />
                  <h1 >12</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>Estudiantes</h3>
                    <i className="bi bi-pencil-fill icon-card"></i>
                  </div>
                  <hr />
                  <h1>12</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>Profesores</h3>
                    <i className="bi bi-spellcheck icon-card"></i>
                  </div>
                  <hr />
                  <h1 >15</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>Coordinador</h3>
                    <i className="bi bi-clipboard-data icon-card"></i>
                  </div>
                  <hr />
                  <h1 >12</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>Admins</h3>
                    <i className="bi bi-person-bounding-box icon-card"></i>
                  </div>
                  <hr />
                  <h1 >12</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>Activos</h3>
                    <i className="bi bi-hexagon-fill icon-card"></i>
                  </div>
                  <hr />
                  <h1 >12</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default AdminDashboard;
