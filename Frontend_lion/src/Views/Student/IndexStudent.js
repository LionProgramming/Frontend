import React from 'react';
import './styles/IndexStudent.css';
import img from './img/imgtrabajo.png'


function IndexEstudiante() {
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
                  <a className="nav-link text-dark color" id="option" href="../pages/HorarioEst.html"><i className="bi bi-calendar-event"></i>
                    Horario</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark color" id="option" href="../pages/observador.estudiante.html"><i className="bi bi-book" id="icono"></i>
                    Observador</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark color" id="option" href="../pages/index.html"><i className="bi bi-person-circle" id="icono"></i>
                    Perfil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark color" id="option" href="../../Index.html"><i class="bi bi-box-arrow-right" id="icono"></i>
                    Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div id="informacion1">
        <h2>Información del estudiante</h2>
        <br />
        <div>
        </div><div id="table">
        <div class="img"><img src={img} /></div>

          <div>
          <br />
            <p>NOMBRE DEL ALUMNO</p>
            <p>Curso 501</p>
            <p>Director de curso</p>
          </div>
        </div>
        <br />
        <br />
        <div id="caja">
          <p><h2>Informacion personal:</h2></p>
          <p>Nombre de la persona</p>
        </div>
        <div id="caja">
          <p>Fecha de nacimiento:</p>
          <p>11/05/2003</p>
        </div>
        <div id="caja">
          <p>Curso:</p>
          <p>Numero de curso</p>
        </div>
        <div id="caja">
          <p>Nombre acudiente:</p>
          <p>Nombre acudiente</p>
        </div>
        <div id="caja">
          <p>Nombre acudiente:</p>
          <p>Nombre acudiente</p>
        </div>

      </div>
      <br />
    


    </body >
  );
}

export default IndexEstudiante;
