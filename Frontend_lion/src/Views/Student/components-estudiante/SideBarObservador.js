import React from "react";
import '../../Admin/styles/AdminView.css'

function SidebarObservation () {
    return(
    
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 d-none d-sm-inline">Panel de administración</span>
      </p>

      
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        {/*Boton de inicio*/}
        <li className="nav-item">
          <a href="/index-est" className="nav-link align-middle px-0">
            <i className="fs-4 bi bi-house" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
              id="text-hover">Inicio</span>
          </a>
        </li>
        {/*Boton de observaciones*/}
        <li>
          <a href="/observaciones-est" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-table" id="active"></i> <span className="ms-1 d-none d-sm-inline text-white"
              id="active">Mis observaciones</span>
          </a>
        </li>
        {/*Boton de horario*/}
        <li>
          <a href="/horario-est" className="nav-link px-0 align-middle">
            <i className="fs-4 bi bi-clock" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
              id="text-hover">Mi horario</span>
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
  
  );
}

export default SidebarObservation