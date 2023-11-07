import React from 'react';
import './styles/Observations.css';
import SidebarObservation from './components-estudiante/SideBarObservador.js';
import icono from '../Student/img/icono-user.png'


function ObservationsEst() {
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

      <SidebarObservation/>

      <section id="seccion-ob">
        <div className='tabla-ob'>
          <div id='tl-tabla-ob'>
            <h3>Mis observaciones</h3>
          </div>
          <div id='cont-tabla-ob'>

            <article id='info-user-ob'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student-ob'>
                <table id='tabla-info-ob'>
                  <tr>
                    <td id='celda-ob'>Motivo:</td>
                    <td id='celda-ob'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda-ob'>Fecha</td>
                    <td id='celda-ob'>15/08/2022</td>
                  </tr>
                </table>
                <a href="/observador-est" id='info-obs'>Informacion</a>
              </div>
            </article>

            <article id='info-user-ob'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student-ob'>
                <table id='tabla-info-ob'>
                  <tr>
                    <td id='celda-ob'>Motivo:</td>
                    <td id='celda-ob'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda-ob'>Fecha</td>
                    <td id='celda-ob'>15/08/2022</td>
                  </tr>
                </table>
                <a href="/observador-est" id='info-obs'>Informacion</a>
              </div>
            </article>

            <article id='info-user-ob'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student-ob'>
                <table id='tabla-info-ob'>
                  <tr>
                    <td id='celda-ob'>Motivo:</td>
                    <td id='celda-ob'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda-ob'>Fecha</td>
                    <td id='celda-ob'>15/08/2022</td>
                  </tr>
                </table>
                <a href="/observador-est" id='info-obs'>Informacion</a>
              </div>
            </article>

            <article id='info-user-ob'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student-ob'>
                <table id='tabla-info-ob'>
                  <tr>
                    <td id='celda-ob'>Motivo:</td>
                    <td id='celda-ob'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda-ob'>Fecha</td>
                    <td id='celda-ob'>15/08/2022</td>
                  </tr>
                </table>
                <a href="/observador-est" id='info-obs'>Informacion</a>
              </div>
            </article>

            <article id='info-user-ob'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student-ob'>
                <table id='tabla-info-ob'>
                  <tr>
                    <td id='celda-ob'>Motivo:</td>
                    <td id='celda-ob'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda-ob'>Fecha</td>
                    <td id='celda-ob'>15/08/2022</td>
                  </tr>
                </table>
                <a href="/observador-est" id='info-obs'>Informacion</a>
              </div>
            </article>

            <article id='info-user-ob'>
              <div id='img-user'>
                <img src={icono}>
                </img>
              </div>
              <div id='info-student-ob'>
                <table id='tabla-info-ob'>
                  <tr>
                    <td id='celda-ob'>Motivo:</td>
                    <td id='celda-ob'>Mal comportamiento</td>
                  </tr>
                  <tr>
                    <td id='celda-ob'>Fecha</td>
                    <td id='celda-ob'>15/08/2022</td>
                  </tr>
                </table>
                <a href="/observador-est" id='info-obs'>Informacion</a>
              </div>
            </article>
          </div>
        </div>
        
      </section>
      
      </div>
    </>
  );
}

export default ObservationsEst;