import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/styles/UserManagement.css';
import '../Admin/styles/AdminView.css';
import Navbar from './prueba';

const UserAdminPanel = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])



  const fetchData = async () => {
    try {
      const resultado = await axios("http://127.0.0.1:8000/api/usuarios");
      console.log(resultado.data);
      setUserData(resultado.data)
    } catch (err) {
      console.log("Algo esta mal");
    }
  }
  return (
    <body className='body'>
      <header>
        <Navbar />
      </header>
      <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-4 d-none d-sm-inline">Panel de administración</span>
                </p>
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
                        <a href="/UserRegistration" className="nav-link px-0 text-white" id="contenedor1"> <span
                          className="d-none d-sm-inline" id="text-hover">Registrar usuario</span><i className="fs-4 bi bi-plus"
                            id="text-hover"></i></a>
                      </li>
                      <li className="w-100">
                        <a href="/UserAdministration" className="nav-link px-0 text-white" id="tabla"> <span
                          className="d-none d-sm-inline" id="active">Gestiones adicionales</span> <i
                            className="fs-5 bi bi-plus-slash-minus" id="active"></i></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Calendar" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de horarios</span>
                    </a>
                  </li>
                  <li>
                    <a href="./Courses" className="nav-link px-0 align-middle ">
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
              <h2 className="text-center">Panel de administración de usuarios</h2>
              <div className="input-group mb-2" id="search-input">
                <input type="text" className="form-control" id="area" placeholder="..." aria-label="Buscar" />
                <button className="btn  btn-sm" type="button" id="search-button">Buscar</button>
              </div>
              <div className="table-responsive col-8 col-md-0 col-xl-10 px-sm-1 px-0 mt-4" id="tablaRegistros">
                <table className="table table-striped  table-bordered" id="table-1">
                  <thead id="color-table">
                    <tr>
                      <th className="col-1"> ID</th>
                      <th>Nombre</th>
                      <th>Correo Electrónico</th>
                      <th>Rol</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userData && userData.map((user, i) => {
                        return (
                          <tr key={i}>
                            <td>{i+1}</td>
                            <td>{user.nombre1 + user.nombre2}</td>
                            <td>{user.email}</td>
                            <td>{user.Rol}</td>
                            <td>
                              <button className="btn  btn-sm " id="icon">
                                <i className="bi bi-pencil-fill"></i>
                              </button>
                              <button className="btn  btn-sm " id="icon">
                                <i className="bi bi-eye-fill"></i>
                              </button>
                              <button className="btn  btn-sm " id="icon">
                                <i className="bi bi-trash-fill"></i>
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </section>
    </body>
  );

};

export default UserAdminPanel;