import React from 'react';
import '../Student/styles/Observations.css'
import img from './img/imgfirma.png'

function Observations() {
  return (
    <body>
      <div>
        <header>
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
                  <li>
                    <a
                      className="nav-link text-dark color"
                      id="option"
                      href="../pages/HorarioEst.html"
                    >
                      <i className="bi bi-calendar-event"></i> Horario
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-dark color"
                      id="option"
                      href="../pages/observador.estudiante.html"
                    >
                      <i className="bi bi-book" id="icono"></i> Observador
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-dark color"
                      id="option"
                      href="../pages/index.html"
                    >
                      <i className="bi bi-person-circle" id="icono"></i> Perfil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-dark color"
                      id="option"
                      href="../../Index.html"
                    >
                      <i className="bi bi-box-arrow-right" id="icono"></i> Salir
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <form id="table">
          <h2>Observaciones</h2>

          <div className="dato"> 00/00/00</div>
          <br />


          <h2>Motivo</h2>
          <div>
            <div className="dato">
              <p>Motivo</p>
            </div>
            <br />
          </div>
          <br />
          <div className="form-group">
            <h2>Observación</h2>
            <div className="informacion">
              <p>Información</p>
            </div>
            <br />
            <div className="informacion">
              <p>Información</p>
            </div>
            <br />
            <div className="form-group">
              <h2>Firmas</h2>
              <div>
                <div class="img"><img src={img} /></div>
              </div>
              <br />
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Observations;
