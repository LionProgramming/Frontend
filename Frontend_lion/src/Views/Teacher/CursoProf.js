import '../Teacher/styles/HorarioProf.css'
import img from './img/imgtrabajo.png'

function CursoPorfesor() {
  return (
    <body >
      <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
          <div className="container-fluid">

            <button className="navbar-toggler " id="hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list" width="32" height="32"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
                <li>
                  <a className="nav-link text-dark color  " id="option" href="../pages/HorarioProf.html"><i className="bi bi-calendar-event"></i>
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
                  <a className="nav-link text-dark color  " id="option" href="../../Index.html"><i className="bi bi-box-arrow-right" id="icono"></i>
                    Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <h1>CURSOS</h1>
      <section id="table">
        <nav id="barraHorario" className="navbar navbar-expand-sm navbar-transparent bg-dark" aria-label="Third navbar example">
          <div className="container-fluid justify-content-center">
            <a className="navbar-brand" href="#">Horario</a>
            <form id="busqueda">
              <a className="buttonProf" href="../pages/HorarioProf.html">Mi horario</a>
              <a className="buttonProf" href="#">Curso asignado</a>
            </form>
          </div>
        </nav>
        <div className="imgDiv">
          <img src="../images/C_Prof.png" alt="" height="400px" />
        </div>
      </section>

      {/* Observaciones del estudiante */}
      <div id="informacion1">
        <h2>Observaciones del estudiante</h2>
        <br />

        {/* Ejemplo de observación */}
        <div className="table">
          <div className="img"><img src="../images/imgtrabajo.png" alt="Imagen de trabajo" /></div>
          <div className="inf_ob">
            <br />
            <p>Estudiante: Pepito Perez</p>
            <p>Observacion: Mal comportamiento</p>
            <p>Fecha de observacion: 13/04/2020</p>
          </div>
          <div className="buttonObservador">
            <input className="buttonOb" type="button" value="Mostrar" />
                  </div>
      </div>
    </div>
   </body >
  );
}
export default CursoPorfesor;