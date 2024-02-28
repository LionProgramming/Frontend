import Navbar from "../../components/Admin/Navbar";
import '../../css/Admin_Registration.css'
import axios from 'axios'
import ModalSucces from "../../components/Admin/Modal";
/* import {useNavigate,Navigate } from "react-router-dom"; */
import { useState, useEffect } from "react";

function UserRegistration() {
  /* const navigate = useNavigate();
  const {isAuth}=useAuth */
  /* use document.getElementById('image').style.display='none'; */
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading,setLoading]=useState(false)
  const key=744737558366745
  const [userData, setUserData] = useState({
    documento: '',
    fechanacimiento: '',
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono_fijo: '',
    telefono_celular: '',
    contrasenia: "",
    confirmarContrasenia: '',
    urlfoto: "",
    estado: 1,
    tipo_idtipodocumento: "",
    rol_idrol: ""

  });
 
  //Cambio del estado de todos los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    const updatedValue = e.target.type === 'date' ? e.target.valueAsDate.toISOString().split('T')[0] : value;
    setUserData({ ...userData, [name]: updatedValue });
  };
  //Funcion para limitar la fecha a maximo hace 6 años
  const maxFecha = () => {
    const hoy = new Date();
    const fechamaxima = new Date(hoy.getFullYear() - 6, hoy.getMonth(), hoy.getDate());
    return fechamaxima.toISOString().split('T')[0];
  };
  //
  const handleSelectfile= async(event)=>{
    console.log(event.target.files[0])
    const file=event.target.files[0]
    console.log(file[0])
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
    userData.urlfoto=cloudinaryResponse.secure_url
  }catch(error){
    console.error(error)
  }finally{
    setLoading(false)
  }
}
  useEffect(() => {
        document.getElementById('image').style.display = 'none';
        document.getElementById('imageimg').style.display = 'none';
        document.getElementById('danger').style.display = 'none';
    
  }, [])
  //Validacion password y solicitud de registro
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.contrasenia !== userData.confirmarContrasenia) {
      const advise= document.getElementById('danger')
      advise.style.display='block';
      return;
    }
    const dataTosend={
      documento: userData.documento,
      fechanacimiento: userData.fechanacimiento,
      nombre1: userData.nombre1,
      nombre2: userData.nombre2,
      apellido1: userData.apellido1,
      apellido2: userData.apellido2,
      email: userData.email,
      telefono_fijo: userData.telefono_fijo,
      telefono_celular: userData.telefono_celular,
      contrasenia: userData.contrasenia,
      urlfoto: userData.urlfoto,
      estado: 1,
      tipo_idtipodocumento: userData.tipo_idtipodocumento,
      rol_idrol: userData.rol_idrol,
    }
    const postData= async()=>{
      try{
        const response = await axios.post('http://127.0.0.1:8000/api/v1/users/',dataTosend);
        console.log(response)
        if (response.statusText==='Created'){
          console.log("Usuario creado exitosamente")
          setUserData({
            documento: '',
            fechanacimiento: '',
            nombre1: "",
            nombre2: "",
            apellido1: "",
            apellido2: "",
            email: "",
            telefono_fijo: '',
            telefono_celular: '',
            contrasenia: "",
            confirmarContrasenia: '',
            urlfoto: "",
            estado: 1,
            tipo_idtipodocumento: "",
            rol_idrol: ""
  }
          )
          setShowSuccessModal(true);
        }
        
      }catch(error){
        console.error('Error al enviar los datos:',error)
      }
    }
    postData();
  }

  return (
    <div className="body">
      <div>
        <Navbar />
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
                <form className="validation" id="form-register" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6 col-md-6">
                      <label  className="form-label shadow-text ">Primer nombre</label>
                      <input type="text" className="form-control col-2" id="nombre1" name="nombre1" value={userData.nombre1} onChange={handleInputChange} required />

                      <label  className="form-label shadow-text"> Pimer apellido </label>
                      <input type="text" className="form-control" id="apellido1" value={userData.apellido1} onChange={handleInputChange} name="apellido1" required />

                      <label className="form-label shadow-text center">Rol asignado</label>
                      <select id="rol" className="form-select" required name="rol_idrol" value={userData.rol_idrol} onChange={handleInputChange}  >
                        <option value="" disabled >Seleccione un rol</option>
                        <option value="1">Administrador</option>
                        <option value="2">Estudiante</option>
                        <option value="3">Profesor</option>
                      </select>
                      <label  className="form-label shadow-text">Tipo de documento</label>

                      <select id="tipoDocumento" className="form-select" required name="tipo_idtipodocumento" value={userData.tipo_idtipodocumento} onChange={handleInputChange} >
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="1">Tarjeta de identidad</option>
                        <option value="2">Cédula de ciudadanía</option>
                        <option value="3">PEP</option>
                        <option value="4">Pasaporte</option>
                        <option value="5">Cédula de extranjería</option>
                      </select>

                      <label className="form-label shadow-text">Documento de identidad</label>
                      <input type="text" className="form-control" id="documento" name="documento" value={userData.documento} onChange={handleInputChange} required />

                      <label  className="form-label shadow-text ">Contraseña</label>
                      <input type="password" className="form-control" placeholder="contrasenia" name='contrasenia' value={userData.contrasenia} onChange={handleInputChange} required />

                      <label className="form-label shadow-text">Confirmar Contraseña</label>
                      <input type="password" className="form-control" id="confirmarContraseña" placeholder="Confirmar Contraseña" name='confirmarContrasenia' value={userData.confirmarContrasenia} onChange={handleInputChange} required />
                      <p id="danger" >las contraseñas no coinciden</p>

                    </div>
                    <div className="col-sm-6 col-md-6">

                      <label  className="form-label shadow-text col">Segundo nombre </label>
                      <input type="text" className="form-control" id="nombre2" placeholder="*Opcional" name="nombre2" value={userData.nombre2} onChange={handleInputChange} />

                      <label  className="form-label shadow-text">Segundo apellido </label>
                      <input type="text" className="form-control" id="apellido2" placeholder="" name="apellido2" value={userData.apellido2} onChange={handleInputChange}  />

                      <label className="form-label shadow-text">Fecha de Nacimiento</label>
                      <input type="date" id="fechaNacimiento " className="form-control" name="fechanacimiento" onChange={handleInputChange} max={maxFecha()} required></input>

                      <label  className="form-label shadow-text">Correo Electrónico</label>
                      <input type="text" className="form-control" id="correo" name="email" value={userData.email} onChange={handleInputChange} required />

                      <label className="form-label shadow-text ">Teléfono</label>
                      <input type="tel" id="telefono" className="form-control" name='telefono_fijo' placeholder="Ejemplo: (601) 456-7890" value={userData.telefono_fijo} onChange={handleInputChange} ></input>

                      <label className="form-label shadow-text min-text">Celular</label>
                      <input type="tel" id="celular" className="form-control" name="telefono_celular" placeholder="Ejemplo: (+57) 313333333" value={userData.telefono_celular} onChange={handleInputChange} ></input>


                      <label className='form-label shadow-text'>Foto de perfil </label>
                      <div className="row">
                        <div className="col-sm-8 mt-2" >
                        <input type="file" accept="image/*" onChange={handleSelectfile} id="fileinput" />
                        </div>
                        
                      </div>
                      <div className="row">
                        <div className="col-sm-8 d-flex align-items-center justify-content-center" id="image">
                          <img src="" alt="imagen perfil" id="imageimg" />
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
      {showSuccessModal && <ModalSucces onClose={() => setShowSuccessModal(false)} />}
    </div>

  );
}

export default UserRegistration;

