import { useState, useEffect } from "react";
import { useGlobalState } from "../../context/GlobalStateProvider.jsx"; //importar esto
import Navbar from "../../components/Admin/Navbar.jsx";
import "../../css/Admin_AdminProfile.css";
import axios from "axios";
function Admin_profile() {
  const [loading, setLoading] = useState(true);
  const [infoAdmin, setInfoAdmin] = useState();
  const { state } = useGlobalState(); //importar esto
  useEffect(() => {
    const adminData = async () => {
      const documento = localStorage.getItem("documento"); //definir documento con localStorage !!!!!!!!!! !!!!!!!!!!
      try {
        const dataAdmin = await axios.get(
          `http://127.0.0.1:8000/api/v1/users/${documento}/`
        );
        setInfoAdmin(dataAdmin.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    adminData();
  }, [state.documento]);
  if (loading) {
    return <p className="text-center">Cargando...</p>;
  }
  return (
    <div className="bodyAdminPanel">
      <Navbar />
      <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-4 d-none d-sm-inline">
                    Panel de administración
                  </span>
                </p>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <a
                      href="/Adashboard"
                      className="nav-link align-middle px-0"
                    >
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
                          <span className="d-none d-sm-inline" id="text-hover">
                            Registrar usuario
                          </span>
                          <i className="fs-4 bi bi-plus" id="text-hover"></i>
                        </a>
                      </li>
                      <li className="w-100">
                        <a
                          href="/UserAdministration"
                          className="nav-link px-0 text-white"
                          id="tabla"
                        >
                          {" "}
                          <span className="d-none d-sm-inline" id="text-hover">
                            Gestiones adicionales
                          </span>{" "}
                          <i
                            className="fs-5 bi bi-plus-slash-minus"
                            id="text-hover"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Calendar" className="nav-link px-0 align-middle">
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
                <div className="dropdown pb-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <img  src={img} width="30" height="30" className="rounded-circle" alt="Profile" /> */}
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
                      <hr className="dropdown-divider" />
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
            <div
              className="container-fluid d-flex flex-column"
              id="contenedor-profile"
            >
              <div className="admin_profile_info row">
                <div className="col-6">
                  <div className="row mt-2">
                    <div className="col-12"><br />
                      <h6>Nombres: </h6>
                      <label className="text-start">
                        {" "}
                        {infoAdmin.nombre1}{" "}
                        {infoAdmin.nombre2 ? infoAdmin.nombre2 : ""}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12"><br />
                      <h6>Apellidos: </h6>
                      <label className="text-start">
                        {infoAdmin.apellido1}{" "}
                        {infoAdmin.apellido2 ? infoAdmin.apellido2 : ""}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12"><br />
                      <h6>Identificacion:</h6>
                      <label className="text-start">
                        {" "}
                        {infoAdmin.documento}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12"><br />
                      <h6>Email:</h6>
                      
                      <label className="text-start"> {infoAdmin.email}</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12"><br />
                      <h6>Telefono fijo:</h6>
                      <label className="text-start">
                        Telefono fijo:{" "}
                        {infoAdmin.telefono_fijo
                          ? infoAdmin.telefono_fijo
                          : "No presenta"}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12"><br />
                      <h6>Telefono celular:</h6>
                      <label className="text-start">
                        {" "}
                        {infoAdmin.telefono_celular}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12"><br />
                      <h6>Estado:</h6>
                      <label className="text-start">
                        {" "}
                        {infoAdmin.estado === 1 ? "Activo" : "Inactivo"}
                      </label>
                    </div>
                  </div>
                  
                </div>
                <div className="col-6 text-center" id="image-profile"><img id="image-profile-img" src={infoAdmin.urlfoto}
                   alt="profile-foto"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin_profile;
