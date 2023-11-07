import React from 'react';
import './styles/IndexStudent.css';
import SidebarHome from './components-estudiante/SideBarIndex.js';
import icono from '../Student/img/icono-user.png'


function IndexEstudiante() {
  return (
    <>
      <header>
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
      </header>

      <div className='content'>
      <SidebarHome/>

      <section id="seccion">
        <div className='tabla'>
          <div id='tl-tabla'>
            <h3>Informacion personal</h3>
          </div>
          <div id='cont-tabla'>

            <article id='info-user'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student'>
                <table id='tabla-info'>
                  <tr>
                    <td id='celda'>Nombre</td>
                    <td id='celda'>Nombre 1 / Nombre 2 / Apellido 1 / Apellido 2</td>
                  </tr>
                  <tr>
                    <td id='celda'>Curso</td>
                    <td id='celda'>501</td>
                  </tr>
                  <tr>
                    <td id='celda'>Tipo de documento</td>
                    <td id='celda'>Tarjeta de identidad</td>
                  </tr>
                  <tr>
                    <td id='celda'>Correo</td>
                    <td id='celda'>Ejemplo@gmail.com</td>
                  </tr>
                </table>
              </div>
            </article>
          </div>
        </div>
        
      </section>
      
      </div>
    </>
  );
}

export default IndexEstudiante;
