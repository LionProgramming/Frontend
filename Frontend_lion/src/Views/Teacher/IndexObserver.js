import React from 'react';
import '../Teacher/styles/estileobservador.css'
// import img from './img/imgtrabajo.png'


function ObservacionesEstudiantes() {
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

            <form id="buscadosEst">
                <input id="textB" className="buscadorEst" type="number" placeholder="No Documento del estudiante" />
                <a href="/Observador/Profesor/busquedaObservador.html" id="botonB" className="buscadorEst">Buscar</a>
            </form>

            <form id="table">
                <h2>Observaciones</h2>
                <input type="date" id="fecha" name="fecha" placeholder="Fecha" value="2023-06-14" /><br />
                <h2>Motivo</h2>
                <div>
                    <div><button type="button" className="btn btn-light">Académico</button></div>
                    <br />
                    <div><button type="button" className="btn btn-light">Convivencial</button></div>
                </div>
                <br />
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción"></textarea>
                    <br />
                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Observaciones"></textarea>
                    <br />
                    <div className="form-group">
                        <h2>Firmas</h2>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" /><br />
                        <input type="file" className="form-control-file" id="exampleFormControlFile2" /><br /><br />
                        <button type="button" className="btn btn-primary btn-lg btn-block">Guardar Observación</button>
                    </div>
                </div>
            </form>
        </body>
    );
}

export default ObservacionesEstudiantes;