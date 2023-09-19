import React from 'react';
import './UserRegistration.js'
import '../Admin/styles/AdminView.css'
import './styles/UserRegistration.css';

import Navbar from './prueba';




function UserRegistration() {
  return (
    <body className='body'>
      <header>

      <Navbar/>
        
      </header>

      <section>

        <div className="container-fluid m-0">
          <div className="row flex-wrap">

            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-4 d-none d-sm-inline">Panel de administración</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="/index" className="nav-link align-middle px-0">
                      <i className="fs-4 bi bi-house" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi bi-people" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de usuarios</span>
                    </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="./registrar_usuario.html" className="nav-link px-0 text-white" id="contenedor1"> <span
                          className="d-none d-sm-inline" id="active">Registrar usuario</span><i className="fs-4 bi bi-plus"
                            id="active"></i></a>
                      </li>
                      <li className="w-100">
                        <a href="./gestion_usuarios.html" className="nav-link px-0 text-white" id="tabla"> <span
                          className="d-none d-sm-inline" id="text-hover">Gestiones adicionales</span> <i
                            className="fs-5 bi bi-plus-slash-minus" id="icono2"></i></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./gestion_horarios.html" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de horarios</span>
                    </a>
                  </li>
                  <li>
                    <a href="./gestion_cursos.html" className="nav-link px-0 align-middle ">
                      <i className="fs-4 bi-grid" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de cursos</span>
                    </a>
                  </li>
                </ul>
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../imagenes/Profile-photo.PNG" width="30" height="30" className="rounded-circle" alt="Profile" />
                    <span className="d-none d-sm-inline mx-1">Administrador</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="../Index.html">Salir</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid d-flex flex-column" id="contenedor-tabla">
              <h2 className="text-center text-white shadow-text">Registro de usuario</h2>
              <i className="bi bi-person-plus-fill" id="icon-register"></i>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <form action="">
                      <div className="mb-2 input-group row">
                        <label htmlFor="nombre" className="form-label shadow-text ">Primer nombre</label>
                        <input type="text" className="form-control col-2" id="nombre" placeholder=" " name="Nombre" required />
                        <label htmlFor="nombre" className="form-label shadow-text col">segundo nombre </label>
                        <input type="text" className="form-control" id="nombre" placeholder="*Opcional" name="Nombre" />


                        <label htmlFor="nombre" className="form-label shadow-text"> Pimer apellido </label>
                        <input type="text" className="form-control" id="nombre" placeholder="" name="Nombre" required />
                        <label htmlFor="nombre" className="form-label shadow-text">Segundo apellido </label>
                        <input type="text" className="form-control" id="nombre" placeholder="" name="Nombre" required />
                      

                      <label for="fechaNacimiento" className="form-label shadow-text">Fecha de Nacimiento</label>
                      <input type="date" id="fechaNacimiento " className="form-control" name="fechaNacimiento" required></input>
                    </div>
                    
                      <div className="mb-2 input-group">
                        <label htmlFor="rol" className="form-label shadow-text center">Rol asignado</label>
                        <select id="rol" className="form-select" required>
                          <option value="" disabled selected>Seleccione un rol</option>
                          <option value="1">Administrador</option>
                          <option value="2">Profesor</option>
                          <option value="3">Estudiante</option>
                        </select>
                      </div>
                      <div className="mb-2 input-group">
                        <label htmlFor="correo" className="form-label shadow-text">Correo Electrónico</label>
                        <input type="text" className="form-control" id="correo" required />
                      </div>
                      <div className="mb-2 input-group">
                        <label htmlFor="tipoDocumento" className="form-label shadow-text">Tipo de documento</label>
                        <select id="tipoDocumento" className="form-select" required>
                          <option value="" disabled selected>Seleccione una opción</option>
                          <option value="1">Tarjeta de identidad</option>
                          <option value="2">Cédula de ciudadanía</option>
                          <option value="3">Pasaporte</option>
                          <option value="4">PEP</option>
                          <option value="5">Cédula de extranjería</option>
                        </select>
                      </div>

                      <div className="mb-2 input-group">
                        <label htmlFor="documento" className="form-label shadow-text">Documento de identidad</label>
                        <input type="text" className="form-control" id="documento" required />
                      

                      <div className="mb-2 input-group"></div>
                      <label for="telefono" className="form-label shadow-text min-text">Teléfono</label>
                      <input type="tel" id="telefono" className="form-control" name="telefono" placeholder="Ejemplo: (601) 456-7890"></input>

                      <label for="celular" className="form-label shadow-text min-text">Celular</label>
                      <input type="tel" id="celular" className="form-control" name="celular" placeholder="Ejemplo: (+57) 313333333"></input>
                      </div>
                      
                      <div className="mb-2 input-group">
                        <label htmlFor="contraseña" className="form-label shadow-text min-text">Contraseña</label>
                        <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" name="password" />
                      </div>

                     

                      <div className="mb-3 input-group">
                        <label htmlFor="confirmarContraseña" className="form-label shadow-text">Confirmar Contraseña</label>
                        <input type="password" className="form-control" id="confirmarContraseña" placeholder="Confirmar Contraseña" name="password" />
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlFile1" className='form-label shadow-text'>Insertar foto :</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                      </div> <br></br>
                      <button type="submit" className="btn btn-primary" id="button-register">Registrar</button>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </body>

  );
}

export default UserRegistration;

