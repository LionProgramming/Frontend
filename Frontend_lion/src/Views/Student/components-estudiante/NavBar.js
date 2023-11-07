import React from "react";
import '../../Admin/styles/AdminView.css'

function NavBar (){

  <nav className="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
          <div className="container-fluid">
            <button className="navbar-toggler" id="hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list" width="32" height="32"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
                <li>
                  <a className="nav-link text-dark color" id="option" href="../Horario-Est"><i className="bi bi-calendar-event"></i>
                    Horario</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark color" id="option" href="../observaciones-est"><i className="bi bi-book" id="icono"></i>
                    Observador</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark color" id="option" href="../index-est"><i className="bi bi-person-circle" id="icono"></i>
                    Perfil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark color" id="option" href="../index-est"><i class="bi bi-box-arrow-right" id="icono"></i>
                    Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
}

export default NavBar;
