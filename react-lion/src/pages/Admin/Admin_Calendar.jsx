import { useState,useEffect } from "react";
import axios from 'axios'
import Navbar from "../../components/Admin/Navbar";
import "../../css/Admin_Calendar.css";
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
import ModalSucces from "../../components/Admin/Modal";
function UserCalendar() {
  
    const [cursosData, setCursosData] = useState([]);
    const [horariosData,setHorariosData]=useState([]);
    const [newCalendar,setNewCalendar]=useState({
      newUrl:'',
      numero_curso:'',
    })
    const [selectedOption, setSelectedOption] = useState('');
    const [modalHorario, setModalHorario]=useState(false)
    const [modalEditHorario, setModalEditHorario]=useState(false)
    const [loading,setLoading]=useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [selectedHorarioImage, setSelectedHorarioImage] = useState('');
    const key=744737558366745
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

      } catch (err){
        console.error(err)
      }
    }

    const handleSelectfile= async(event)=>{
      console.log(event.target.files[0])
      const file=event.target.files[0]
      if (file.type !== 'image/png' && file.type !=='image/jpeg'){
       console.log("Error en tipo de archivo")
       return;
      }
      const data= new FormData();
      data.append("file",file)
      data.append("api_key",key)
      data.append("upload_preset","he2nakb7")
      setLoading(true);
      try{
      const res = await axios.post(
          `https://api.cloudinary.com/v1_1/dgqrkoxks/image/upload`,data,{
              headers: { "Content-Type": "multipart/form-data" }
          }
      )
      const cloudinaryResponse=res.data;
      console.log(cloudinaryResponse.secure_url)
      newCalendar.newUrl=cloudinaryResponse.secure_url
      console.log(newCalendar.newUrl)
    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }
const handleSelectChange = event => {
        const selectedHorario = horariosData.find(option => option.idhorario === event.target.value);
        setSelectedOption(event.target.value);
        setSelectedHorarioImage(selectedHorario ? selectedHorario.urlhorario : '');
};
const handleInputChange = (e) => {
  const { name, value } = e.target;
  console.log(`Updating ${name} to ${value}`);
  setNewCalendar({ ...newCalendar, [name]: value });
};


const newCalendarsend = (event)=> {
  event.preventDefault();
  
  const dataTosend={
    urlhorario:newCalendar.newUrl,
    numero_curso:newCalendar.numero_curso
  }
  console.log(dataTosend);
  const postData=async()=>{
    try{
      const response= await axios.post(`http://127.0.0.1:8000/api/v1/horarios/`,dataTosend)
      console.log(response)
       setShowSuccessModal(true);
    }
  catch(error){
    console.error('Error al enviar los datos:',error)
  }
 
  }
  postData();
}
const editCalendarsend= (event)=> {
  event.preventDefault();
  const dataTosend={
    urlhorario:newCalendar.newUrl,
    numero_curso:newCalendar.numero_curso
  }
  console.log(newCalendar.numero_curso)
  const linkCalendar= newCalendar.numero_curso
  console.log(linkCalendar)
  const putData=async()=>{
    try{
      const response = await axios.put(`http://127.0.0.1:8000/api/v1/horarios/${linkCalendar}/`, dataTosend);
      console.log(response)
       setShowSuccessModal(true);
    }
  catch(error){
    console.error('Error al enviar los datos:',error)
  }
 
  }
  putData();
}
const handleSearchHorario = (event) => {
  event.preventDefault();
  console.log('Buscar horario:', selectedOption);
  const searchCalendar= async()=>{
    try {
      const calendar=await axios(`http://127.0.0.1:8000/api/v1/horarios/${selectedOption}`)
      setSelectedHorarioImage(calendar.data)
      console.log(calendar.data.urlhorario)

    } catch (err){
      console.error(err)
    }
  }
  searchCalendar();
};
 

    const modalOpen=()=>{
      setModalHorario(true)
    }
    const modalEditOpen=()=>{
      setModalEditHorario(true)
    }
    const modalClose=()=>{
      setModalHorario(false)
    }
    const modalEditClose=()=>{
      setModalEditHorario(false)
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
                          className="d-none d-sm-inline" id="text-hover">Ver todos los usuarios</span> <i
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
                    <select name="select"  onChange={handleSelectChange}>
                     <option selected disabled>Seleccione una opcion</option>
                     {horariosData.map(option =>(
                      <option key={option.idhorario} value={option.idhorario}>{option.nombre}</option>
                     ))}
                    </select>
                    <button className="btn" id="search-button" onClick={handleSearchHorario} >Buscar Horario</button>
                  </form>
                   
                  <div className="img-calendar">
                    
                  <img src={selectedHorarioImage.urlhorario}  id="img_horario"/>

                  </div>
                </div>
              </nav>
              <div className="col">
              <button className="btn btn-info m-2" onClick={() =>modalOpen()} >+ Horario</button>
              <button className="btn btn-info m-2" onClick={() =>modalEditOpen()} ><i className="bi bi-pen"></i> Horario</button>
              </div>
              
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
          <form onSubmit={newCalendarsend}>
          <div className="row">
            <div className="col-12 text-center">
              <label>Seleccione un curso:</label>
              <select className='form-control' name="numero_curso" value={newCalendar.numero_curso} onChange={handleInputChange} defaultValue="">
                      <option selected disabled>Seleccione una opcion</option>
                      {cursosData.map(option =>(
                        <option key={option.numero} value={option.numero}>{option.nombre}</option>
                      ))}
              </select>
            </div>
            
          </div>
          <div className="row">
          <div className="container-input ">
                <input
                  className="form-control col-5"type="file" accept="image/*" onChange={handleSelectfile} id="fileinput"
                />
                <label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="col-12"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
             
                </label>
              </div> 
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-2 mt-2 ">
            <button className="btn btn-primary" type="submit">enviar</button>
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


      <Modal isOpen={modalEditHorario}>
        <div className="text-center">
        <ModalHeader>Editar horario</ModalHeader>
        </div>
        <ModalBody>
          <form onSubmit={editCalendarsend}>
          <div className="row">
            <div className="col-12 text-center">
              <label>Seleccione un curso:</label>
              <select className='form-control' name="numero_curso" value={newCalendar.numero_curso} onChange={handleInputChange} defaultValue="">
                      <option selected disabled>Seleccione una opcion</option>
                      {horariosData.map(option =>(
                        <option key={option.idhorario} value={option.idhorario}>{option.nombre}</option>
                      ))}
              </select>
            </div>
            
          </div>
          <div className="row">
          <div className="container-input ">
                <input
                  className="form-control col-5"type="file" accept="image/*" onChange={handleSelectfile} id="fileinput"
                />
                <label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="col-12"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
             
                </label>
              </div> 
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-2 mt-2 ">
            <button className="btn btn-primary" type="submit">enviar</button>
            </div>
          </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-sm" id="modal-icon-cancel" onClick={() =>modalEditClose()}>
            <i className="bi bi-x-lg"></i>
          </button>
        </ModalFooter>
      </Modal>
      </div>
      {showSuccessModal && <ModalSucces onClose={() => setShowSuccessModal(false)} />}
    </div>
  );
}

export default UserCalendar;
