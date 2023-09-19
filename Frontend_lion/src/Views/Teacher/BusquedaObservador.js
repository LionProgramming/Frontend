import React from 'react';
import '../Teacher/styles/observadorBusqueda.css'
import img from './img/C_Prof.png'


function BusquedaObservador() {
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
                                <li className="nav-item">
                                    <a className="nav-link text-dark color" id="option" href="../pages/busquedaObservador.html"><i className="bi bi-book" id="icono"></i>
                                        Observador</a>
                                </li>
                                <li className="nav-item">
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
                <input id="textB" class="buscadorEst" type="number" placeholder="No Documento del estudiante" />
                <input id="botonB" class="buscadorEst" type="submit" value="Buscar" />
            </form>

            <div id="informacion1">
                <h2>Observaciones del estudiante</h2>
                <br />
                <div >
                    <div class="table">
                        <div class="img"><img src="../images/imgtrabajo.png" />
                        </div>
                        <div class="inf_ob">
                            <br />
                            <p>Estudiante: Pepito Perez</p>
                            <p>Observacion: Mal comportamiento</p>
                            <p>Fecha de observacion: 13/04/2020</p>
                        </div>

                        <div class="buttonObservador">
                            <input class="buttonOb" type="button" value="Mostrar" />
                        </div>

                    </div>

                    <div />
                    <div class="table">
                        <div class="img"><img src="../images/imgtrabajo.png" />
                        </div>
                        <div class="inf_ob">
                            <br />
                            <p>Estudiante: Pepito Perez</p>
                            <p>Observacion: Mal comportamiento</p>
                            <p>Fecha de observacion: 13/04/2020</p>
                        </div>

                        <div class="buttonObservador">
                            <input class="buttonOb" type="button" value="Mostrar" />
                        </div>

                    </div>

                    <div />
                    <div class="table">
                        <div class="img"><img src="../images/imgtrabajo.png" />
                        </div>
                        <div class="inf_ob">
                            <br />
                            <p>Estudiante: Pepito Perez</p>
                            <p>Observacion: Mal comportamiento</p>
                            <p>Fecha de observacion: 13/04/2020</p>
                        </div>
                        <div class="buttonObservador">
                            <input class="buttonOb" type="button" value="Mostrar" />
                        </div>

                    </div>

                    <div>
                        <div class="table">
                            <div class="img"><img src="../images/imgtrabajo.png" />
                            </div>
                            <div class="inf_ob">
                                <br />
                                <p>Estudiante: Pepito Perez</p>
                                <p>Observacion: Mal comportamiento</p>
                                <p>Fecha de observacion: 13/04/2020</p>
                            </div>
                            <div class="buttonObservador">
                                <input class="buttonOb" type="button" value="Mostrar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default BusquedaObservador;
