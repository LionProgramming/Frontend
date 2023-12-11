import { useState,useEffect } from "react";
import axios from 'axios'
import Navbar from "../../components/Admin/Navbar";
import "../../css/Admin_Calendar.css";
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
function UserCalendar() {
  
    const [cursosData, setCursosData] = useState([]);
    const [horariosData,setHorariosData]=useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [modalHorario, setModalHorario]=useState(false)
    useEffect(() => {
      fetchData();
      fetchCalendar()
    }, [])
    const fetchData = async () => {
      try {
        const resultado = await axios("http://127.0.0.1:8000/api/v1/grados/");
        setCursosData(resultado.data);
        
      } catch (err) {
        console.log("Algo esta mal");
      }
     
    }
    const fetchCalendar= async()=>{
      try {
        const calendars=await axios("http://127.0.0.1:8000/api/v1/horarios/")
        setHorariosData(calendars.data)
        console.log(calendars.data)

      } catch (err){
        console.error(err)
      }
    }
    const handleSelectChange = event => {
      // Maneja el cambio en el select y actualiza el estado local
      setSelectedOption(event.target.value);
    };

    const modalOpen=()=>{
      setModalHorario(true)
    }
    const modalClose=()=>{
      setModalHorario(false)
    }
  return (
    <div className='body_Calendar'>
     
       
     
      <section>
      <Navbar/>
        <div className="container-fluid">
          <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <p className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-4 d-none d-sm-inline">Panel de administración</span>
                </p>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="/Adashboard" className="nav-link align-middle px-0">
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
                        <a href="/Register" className="nav-link px-0 text-white" id="contenedor1"> <span
                          className="d-none d-sm-inline" id="text-hover">Registrar usuario</span><i className="fs-4 bi bi-plus"
                            id="text-hover"></i></a>
                      </li>
                      <li className="w-100">
                        <a href="/UserAdministration" className="nav-link px-0 text-white" id="tabla"> <span
                          className="d-none d-sm-inline" id="text-hover">Gestiones adicionales</span> <i
                            className="fs-5 bi bi-plus-slash-minus" id="icono2"></i></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Calendar" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table" id="active"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="active">Gestión de horarios</span>
                    </a>
                  </li>
                  <li>
                    <a href="/CourseManagement" className="nav-link px-0 align-middle ">
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
                    <li><a className="dropdown-item" href="/">Salir</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="container-fluid d-flex flex-column"
              id="contenedor-tabla"
            >
              <h2 className="text-center shadow-text">
                Administración de horarios
              </h2>
              <nav
                id="barraHorario"
                className="navbar navbar-expand-sm navbar-dark bg-transparent"
              >
                <div>
                 
                  <form id="busqueda">
                    <select name="select" value={selectedOption} onChange={handleSelectChange}>
                     <option selected disabled>Seleccione una opcion</option>
                     {horariosData.map(option =>(
                      <option key={option.idhorario} value={option.idhorario}>{option.nombre}</option>
                     ))}
                    </select>
                    
                    <button className="btn" id="search-button" >Buscar Horario</button>
                   
                  </form>
                   
                  <div className="img-calendar">
                    
                    <img src="" alt="" id="img_horario"/>
                  </div>
                </div>
              </nav>
              <button className="btn btn-info" onClick={() =>modalOpen()} >+ Horario</button>
              {/* */}
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
      <Modal isOpen={modalHorario}>
        <div className="text-center">
        <ModalHeader>Agregar horario</ModalHeader>
        </div>
        <ModalBody>
          <form>
          <div className="row">
            <div className="col-6 text-center">
              <label>Seleccione un curso:</label>
              <select className='form-control' name="nombre" value={selectedOption} onChange={handleSelectChange} defaultValue="">
                      <option selected disabled>Seleccione una opcion</option>
                      {cursosData.map(option =>(
                        <option key={option.numero} value={option.numero}>{option.nombre}</option>
                      ))}
              </select>
            </div>
            <div className="col-6 text-center" id="div-link-horario">
              <label>Ingrese un link:</label>
              <input type="text" className="form-control" id="input-link" />
            </div>
          </div>
          <div className="row">
          <div className="container-input seleccionador">
                <input
                  type="file"
                  name="file-1"
                  id="file-1"
                  className="inputfile inputfile-1"
                  data-multiple-caption="{count} archivos seleccionados"
                  multiple
                />
                <label htmlFor="file-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">Seleccionar archivo</span>
                </label>
              </div> 
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-2 mt-2 ">
            <button className="btn btn-primary">enviar</button>
            </div>
          </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-sm" id="modal-icon-cancel" onClick={() =>modalClose()}>
            <i className="bi bi-x-lg"></i>
          </button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  );
}

export default UserCalendar;
