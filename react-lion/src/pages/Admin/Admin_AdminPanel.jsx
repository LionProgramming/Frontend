import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Admin_AdminPanel.css'
import EditPanel from '../../components/Admin/EditPanel.jsx'
import Navbar from '../../components/Admin/Navbar';
import img from '../../images/foto.PNG'
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'

const UserAdminPanel = () => {
  const [userData, setUserData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const[modalConsultar,setModalConsultar]=useState(false);
 
  const [documentoAEditar, setDocumentoAEditar]=useState(null)
 /*  const [searchTerm,setSearchTerm]=useState('')
  const [filteredData,setFilteredData]=useState([...userData])
   */

  const abrirModalEdicion= (documento)=>{
    setDocumentoAEditar(documento);
  }
  /* const handleSearch=(event)=>{
    const term = event.target.value
    setSearchTerm(term)

    const filteredResults= userData.filter((user)=>{
      const fullName=user.nombre1+(user.nombre2? `${user.nombre2}`:'')+user.apellido1+(user.apellido2? `${user.apellido2}`:'')
      return fullName.toLowerCase().includes(term.toLowerCase())
    })

    setFilteredData([...filteredResults])
    
  } */
  useEffect(() => {
    fetchData();
   
  }, [])
  
 
  const fetchData = async () => {
    try {
      //Consulta para ver todos los usuarios
      const resultado = await axios("http://127.0.0.1:8000/api/v1/users/");
      setUserData(resultado.data);
      console.log(resultado.data)
    } catch (err) {
      console.log("Algo esta mal");
    }
   
  }
    
//Consulta para borrar un usuario en especifico por su documento:
  const handleDelete = async (documento) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/users/${documento}`);
      const newUserData = userData.filter((item) => item.documento !== documento);
      setUserData(newUserData);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };
  
//Consulta para ver infor de un usuario especifico por su documento:
const modalView=async(documento)=>{
  setModalConsultar(true);
  const usuario =await axios.get(`http://127.0.0.1:8000/api/v1/users/${documento}`);
  setModalData(usuario.data)
  console.log(usuario.data);
}
const closeModal=()=>{
 setModalConsultar(false);
}
  return (
    <div className='bodyAdminPanel'>
        <Navbar/>
          <section>
        <div className="container-fluid">
          <div className="row flex-nowrap" id='flex-nowrap'>
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
                          className="d-none d-sm-inline" id="active">Ver todos los usuarios</span> <i
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
                    <a href="/CourseManagement" className="nav-link px-0 align-middle ">
                      <i className="fs-4 bi-grid" id="icono2"></i> <span className="ms-1 d-none d-sm-inline text-white"
                        id="text-hover">Gestión de cursos</span>
                    </a>
                  </li>
                </ul>
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img  src={img} width="30" height="30" className="rounded-circle" alt="Profile" />
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
            <div className="container-fluid d-flex flex-column" id="contenedor-tabla_adminpanel">
              <h2 className="text-center fs-4 d-none d-sm-inline">Panel de administración de usuarios</h2>
              {/* <div className="input-group mb-2" id="search-input">
                <input type="text" className="form-control" id="area" placeholder="Ingrese el nombre de la persona a buscar" aria-label="Buscar"/>
                <button className="btn  btn-sm" type="button" id="search-button">Buscar</button>
              </div> */}
              <div className="table-responsive col-8 col-md-0 col-sm-5 px-sm-1 px-0 mt-4" id="tablaRegistros">
                <table className="table-striped  table-bordered">
                  <thead>
                    <tr>
                    
                      <th>Nombre</th>
                      <th>Correo Electrónico</th>
                      <th>Rol</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userData.map((user, i) => {
                        return (
                          <tr key={i}>
                          
                            <td>{user.nombre1 + (user.nombre2 ? ` ${user.nombre2}` : '')+' '+user.apellido1+' '+(user.apellido2? `${user.apellido2}`:' ') }
                            </td>
                            <td>{user.email}</td>
                            <td>{user.rol}</td>
                            <td>
                                <button onClick={()=>abrirModalEdicion(user.documento)} className="btn  btn-sm" id="icon">
                                <i className="bi bi-pencil-fill"></i>
                                </button>
                                <button className="btn  btn-sm" id="icon" onClick={()=>modalView(user.documento)}>
                                <i className="bi bi-eye-fill"></i>
                                </button>
                                <button className="btn  btn-sm" id="icon" onClick={()=>handleDelete(user.documento)}> 
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
      <Modal isOpen={modalConsultar}>
        <ModalHeader>
          <div>
            {modalData && (
              <label>
                {modalData.nombre1 + (modalData.nombre2 ? ` ${modalData.nombre2}` : '') +
                  ' ' +
                  modalData.apellido1 + (modalData.apellido2 ? ` ${modalData.apellido2}` : '')}
              </label>
            )}
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            {modalData && (
              <div>
                <label>Nombres: {modalData.nombre1 + (modalData.nombre2 ? ` ${modalData.nombre2}` : '')}</label>
                <br />
                <label>Apellidos: {modalData.apellido1 + (modalData.apellido2 ? ` ${modalData.apellido2}` : '')}</label>
                <br />
                <label>Documento: {modalData.documento}</label>
                <br />
                <label>Email: {modalData.email}</label>
                <br />
                <label>Rol:{modalData.rol}</label>
              </div>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-sm" id="modal-icon-cancel" onClick={() =>closeModal()}>
            <i className="bi bi-x-lg"></i>
          </button>
        </ModalFooter>
      </Modal>

      {documentoAEditar && (<EditPanel documento={documentoAEditar}/>)}
    </div>
  );
};

export default UserAdminPanel;