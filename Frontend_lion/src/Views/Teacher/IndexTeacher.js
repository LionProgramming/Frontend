import React from 'react';
import '../Teacher/styles/estileperfil.css'
import img from './img/imgtrabajo.png'


function IndexProfesor() {
  return (
    <body>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
          <div className="container-fluid">
            <button className="navbar-toggler" id="hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list" width="32" height="32"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
                <li>
                  <a className="nav-link text-dark color" id="option" href="../pages/HorarioProf.html"><i className="bi bi-calendar-event"></i>
                    Horario</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-dark color" id="option" href="../pages/busquedaObservador.html"><i className="bi bi-book" id="icono"></i>
                    Observador</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-dark color" id="option" href="../pages/index.prof.html"><i className="bi bi-person-circle" id="icono"></i>
                    Perfil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark color" id="option" href="../../Index.html"><i className="bi bi-box-arrow-right" id="icono"></i>
                    Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div id="informacion1">
        <h2>Información del docente</h2>
        <br />
        <div>
          <div id="table">
            <img src={img} />
          </div>
          <div>
            <br />
            <P>NOMBRE DEL DOCENTE</P>
            <p>Curso asignado: 501</p>
            <p>Materias dictadas: Español</p>
          </div>

        </div>
        <brbr />
        <br />
        <div id="caja">
          <h2>Perfil del docente</h2>
          <p >Nombre de la persona</p>
        </div>

        <div id="caja">
          <p >No documento</p>
          <p >11052003</p>
        </div>

        <div id="caja">
          <p >Curso:</p>
          <p >Numero de curso</p>
        </div>

        <div id="caja">
          <p >Telefono:</p>
          <p >3485248974</p>
        </div>

        <div id="caja">
          <p >Correo:</p>
          <p >nombre@gmail.com</p>
        </div>
        <br />
      </div>


    </body>
  );
}

export default IndexProfesor;