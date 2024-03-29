import  {useState,useEffect} from 'react'
import axios from 'axios'
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
const EditPanel=({documento})=> {
    const [datosEditados,setDatosEditados]=useState({})
    const [cargados,setCargados]=useState(true)
    const[modalConsultar,setModalConsultar]=useState(false);
    const [infoCalendars, setInfoCalendars] = useState([]);

    const closeModal=()=>{
        setModalConsultar(false);
       }
   
    useEffect(()=>{
        setModalConsultar(true)
        const fetchData = async ()=>{
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/users/${documento}/`)
                setDatosEditados(response.data)
                console.log(response.data)
                setCargados(false);
            }   catch(error){
                console.error(error)
            }
        };
        
        fetchData();
        fetchDataCalendar();
    },[documento])
    const fetchDataCalendar = async () => {
        try {
          const resultado = await axios("http://127.0.0.1:8000/api/v1/grados/");
          console.log(resultado.data)
          setInfoCalendars(resultado.data)
          
        } catch (err) {
          console.log("Algo esta mal");
        }
       
      }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setDatosEditados({ ...datosEditados,[name]:value})
        console.log(name,"cambio a ", value)
    }
    const submit= async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://127.0.0.1:8000/api/v1/users/${documento}/`,datosEditados)
            console.log('Datos editados con exito')
            console.log(datosEditados)
        }catch(error){
            console.error(error)
        }
    }
    if (cargados){
        return <p>Cargando..</p>
    }
    return(
        <Modal isOpen={modalConsultar}>
            <ModalHeader>
            <h1 className="text-center">Editar perfil</h1>
            </ModalHeader>
            <ModalBody>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-6 ">
                        <label>Primer Nombre:</label>
                    <input type="text" name="nombre1" className="form-control text-black" value={datosEditados.nombre1} onChange={handleChange} />
                    </div>
                    <div className="col-6">
                    <label>Segundo Nombre:</label>
                    <input type="text" name="nombre2" className="form-control text-black"value={datosEditados.nombre2} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                    <label>Primer apellido:</label>
                        <input type="text"  className="form-control text-black " name="apellido1" value={datosEditados.apellido1} onChange={handleChange}  />
                    </div>
                    <div className="col-6">
                    <label>Segundo apellido:</label>
                        <input type="text"  className="form-control  text-black" name="apellido2" value={datosEditados.apellido2? datosEditados.apellido2:''} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                    <label>Documento:</label>
                        <input type="text"  className="form-control text-black " name="documento" value={datosEditados.documento} onChange={handleChange}  />
                    </div>
                    <div className="col-2">
                        <label>T.Doc:</label>
                        <input type="text" className='form-control text-black' name="tipo_documento" value={datosEditados.tipoDoc===1? 'C.C':'T.I'}  />
                    </div>
                    <div className="col-4">
                    <label>Telefono:</label>
                        <input type="text"  className="form-control text-black " name="nombre2" value={datosEditados.telefono_celular} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-5">
                    <label>rol:</label>
                        <input type="text"  className="form-control text-black " name="documento" value={datosEditados.rol} onChange={handleChange}  />
                    </div>
                    
                    <div className="col-6">
                    <label>Fecha de nacimiento:</label>
                        <input type="date"  className="form-control text-black " name="nombre2" value={datosEditados.fechanacimiento} onChange={handleChange}/>
                    </div>
                    
                </div>
                <div className="row mt-2">
                <div className="col-7 text-center">
                    <label className='text-center'>Estado</label>
                       <select name="" id="" className='form-control' value={datosEditados.estado} onChange={handleChange}>
                            <option value="1" className='text-black'>Activo</option>
                            <option value="0">Inactivo</option>
                       </select>
                    </div>
                <div className="col-5 text-center">
                    <label className='text-center'>Curso</label>
                    <select className='form-control' value={datosEditados.curso} name='curso'onChange={handleChange}>
                    {infoCalendars.map(option =>(
                        <option key={option.numero} value={option.numero}>{option.nombre}</option>
                      ))}
                    </select>
                </div>
                </div>

                <div className="col-12 d-flex justify-content-end mt-2">
                     <button className="btn btn-sm bg-success" type="submit" >
                        <i className="bi bi-pen"></i>
                    </button>
                 </div>
                </form>
           
            </ModalBody>
            <ModalFooter>
            
            <button className="btn btn-sm bg-danger"  onClick={() =>closeModal()}>
            <i className="bi bi-x-lg"></i>
          </button>

            </ModalFooter>
        </Modal>
        )
}
export default EditPanel