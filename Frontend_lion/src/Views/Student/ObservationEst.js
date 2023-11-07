import React from 'react';
import './styles/Observation.css';
import SideBarNone from './components-estudiante/SidebarNone.js';
import firma from '../Student/img/imgfirma.png'


function ObservationEst() {
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
      <SideBarNone/>

      <section id="seccion">
        <div className='tabla'>
          <div id='tl-tabla'>
            <h3>Observacion</h3>
          </div>
          <div id='cont-ob'>

            <article id='info-user'>
              <div id='info-student'>
                <table id='tabla-info'>
                  <tr>
                    <td id='celda'>Motivo:</td>
                    <td id='celda'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda'>Fecha:</td>
                    <td id='celda'>15/08/2022</td>
                  </tr>
                  <tr>
                    <td id='celda'>Realizada por:</td>
                    <td id='celda'>Augusto Gomez</td>
                  </tr>
                  <tr>
                    <td id='celda'>Firma</td>
                    <td id='celda'><img src={firma}/></td>
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

export default ObservationEst;
