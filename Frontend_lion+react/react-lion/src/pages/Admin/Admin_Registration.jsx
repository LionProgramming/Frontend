import Navbar from "../../components/Admin/Navbar";
import '../../css/Admin_Registration.css'
function UserRegistration() {
  
  
  return (
    <div className="body">
    <div>
    <Navbar/>
      <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">
                    Panel de administración
                  </span>
                </p>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <a href="/Adashboard" className="nav-link align-middle px-0">
                      <i className="fs-4 bi bi-house" id="icono2"></i>{" "}
                      <span
                        className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover"
                      >
                        Inicio
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi bi-people" id="icono2"></i>{" "}
                      <span
                        className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover"
                      >
                        Gestión de usuarios
                      </span>
                    </a>
                    <ul
                      className="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a
                          href="/Register"
                          className="nav-link px-0 text-white"
                          id="contenedor1"
                        >
                          {" "}
                          <span
                            className="d-none d-sm-inline"
                            id="active"
                          >
                            Registrar usuario
                          </span>
                          <i className="fs-4 bi bi-plus" id="active"></i>
                        </a>
                      </li>
                      <li className="w-100">
                        <a
                          href="/UserAdministration"
                          className="nav-link px-0 text-white"
                          id="tabla"
                        >
                          {" "}
                          <span
                            className="d-none d-sm-inline"
                            id="text-hover"
                          >
                            Gestiones adicionales
                          </span>{" "}
                          <i
                            className="fs-5 bi bi-plus-slash-minus"
                            id="icono2"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="/Calendar"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-table" id="icono2"></i>{" "}
                      <span
                        className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover"
                      >
                        Gestión de horarios
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/CourseManagement"
                      className="nav-link px-0 align-middle "
                    >
                      <i className="fs-4 bi-grid" id="icono2"></i>{" "}
                      <span
                        className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover"
                      >
                        Gestión de cursos
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="dropdown pb-7" id="last-option">
                  <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../../imagenes/Profile-photo.PNG"
                      width="30"
                      height="30"
                      className="rounded-circle"
                      alt="Profile"
                    />
                    <span className="d-none d-sm-inline mx-1">
                      Administrador
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        Perfil
                      </a>
                    </li>
                    <li>
                      <hr
                        className="d-md-none dropdown-divider"
                      />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Salir
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                <div className="container" id="container-register">
                    <h2 className="text-center text-white shadow-text mb-3" >Registro de usuario</h2>
                    <i className="bi bi-person-plus-fill  bi-grid" id="icon-register"></i>
                    <form className="validation">
                        <div className="row g-3">
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="nombre" className="form-label shadow-text ">Primer nombre</label>
                                <input type="text" className="form-control col-2" id="nombre1" placeholder=" " name="Nombre" required />
                            
                                <label htmlFor="nombre" className="form-label shadow-text"> Pimer apellido </label>
                                <input type="text" className="form-control" id="nombre" placeholder="" name="apellido1" required />
                            
                                <label htmlFor="rol" className="form-label shadow-text center">Rol asignado</label>
                                <select id="rol" className="form-select" required defaultValue="">
                                    <option value="" disabled >Seleccione un rol</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Profesor</option>
                                    <option value="3">Estudiante</option>
                                </select>
                                <label htmlFor="tipoDocumento" className="form-label shadow-text">Tipo de documento</label>
                            
                                <select id="tipoDocumento" className="form-select" required defaultValue="">
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="1">Tarjeta de identidad</option>
                                    <option value="2">Cédula de ciudadanía</option>
                                    <option value="3">Pasaporte</option>
                                    <option value="4">PEP</option>
                                    <option value="5">Cédula de extranjería</option>
                                </select>

                                <label htmlFor="documento" className="form-label shadow-text">Documento de identidad</label>
                                <input type="text" className="form-control" id="documento" required />
                        
                                <label htmlFor="contraseña" className="form-label shadow-text ">Contraseña</label>
                                <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" required/>
                            
                                <label htmlFor="confirmarContraseña" className="form-label shadow-text">Confirmar Contraseña</label>
                                <input type="password" className="form-control" id="confirmarContraseña" placeholder="Confirmar Contraseña" name="password" />
                            

                            </div>
                            <div className="col-sm-6 col-md-6">
                                
                                <label htmlFor="nombre" className="form-label shadow-text col">Segundo nombre </label>
                                <input type="text" className="form-control" id="nombre2" placeholder="*Opcional" name="Nombre" />
                                
                                <label htmlFor="nombre" className="form-label shadow-text">Segundo apellido </label>
                                <input type="text" className="form-control" id="apellido2" placeholder="" name="Nombre" required />
                            
                                <label  className="form-label shadow-text">Fecha de Nacimiento</label>
                                <input type="date" id="fechaNacimiento " className="form-control" name="fechaNacimiento" required></input>
                                
                                <label htmlFor="correo" className="form-label shadow-text">Correo Electrónico</label>
                                <input type="text" className="form-control" id="correo" required />
                            
                                <label className="form-label shadow-text ">Teléfono</label>
                                <input type="tel" id="telefono" className="form-control" name="telefono" placeholder="Ejemplo: (601) 456-7890"></input>

                                <label className="form-label shadow-text min-text">Celular</label>
                                <input type="tel" id="celular" className="form-control" name="celular" placeholder="Ejemplo: (+57) 313333333"></input>
                                
                                
                                    <label className='form-label shadow-text'>Inserte el link de la imagen </label>
                                    <div className="row">
                                        <div className="col-sm-8"  id="link-image">
                                        <input type="text" className="form-control" id="link-image"></input>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn btn-primary" id="check-image">verificar</button>
                                        </div>
                                    </div>
                                
                                    
                            
                                <button type="submit" className="btn btn-primary" id="button-register">Registrar</button>
                            </div>   
                        </div>
                    </form>
                </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  );
}

export default UserRegistration;

