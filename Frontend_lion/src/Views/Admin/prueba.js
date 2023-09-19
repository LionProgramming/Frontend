import React from "react";
import { Link } from 'react-router-dom';
import imagen from './imagenes/foto.png'

function Navbar(){
  return(
        
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      id="hamburguesa"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample04"
      aria-controls="navbarsExample04"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="bi bi-list" width="32" height="32"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample04">
      <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
        <li className="nav-item">
          <Link to="/perfil" className="nav-link text-dark color" id="option">
            <i className="bi bi-person-circle" id="icono"></i> Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/salir" className="nav-link text-dark color" id="option">
            <i className="bi bi-box-arrow-right" id="icono"></i> Salir
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

  )

  
}

function sidebar(){
  return (
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
                    <a href="#2" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={imagen} width="30" height="30" className="rounded-circle" alt="Avatar del administrador" />
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
  );
}
export default Navbar;



