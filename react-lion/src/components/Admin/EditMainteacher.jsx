import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const EditTeacher = ({numero}) => {
    const [datosEditados, setDatosEditados] = useState({});
    const [cargados, setCargados] = useState(true);
    const [modalProfesores, setModalProfesores] = useState(false);
    const [cursosData, setCursosData] = useState();
    const [teachersData, setTeachersData] = useState([]);

    const closeModal = () => {
        setModalProfesores(false);
    }

    useEffect(() => {
        setModalProfesores(true);
        const fetchGrados = async () => {
            try {
                const resultado = await axios(`http://127.0.0.1:8000/api/v1/grados/${numero}`);
                const { salonasignado, anio,nombre,director_nombre} = resultado.data; // Obtener los datos del resultado
                setDatosEditados({ salonasignado,anio,nombre,director_nombre}); 
                setCursosData(resultado.data);
                setCargados(false);
            } catch (err) {
                console.log("Algo está mal");
            }
        }
        fetchUsers();
        fetchGrados();
    }, [numero]);

    const fetchUsers = async () => {
        try {
            const response = await axios("http://127.0.0.1:8000/api/v1/users/");
            const teacherFilter = response.data.filter(usuario => usuario.rol_idrol === 3);
            setTeachersData(teacherFilter);
            console.log('Profesores:  ',teachersData)
        } catch (err) {
            console.log('Los profesores no fueron filtrados');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosEditados({ ...datosEditados, [name]: value });
        console.log(name, "cambio a ", value);
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/grados/${numero}/`, datosEditados);
            console.log('Datos editados con éxito');
            console.log(datosEditados);
        } catch (error) {
            console.error(error);
        }
    }

    if (cargados) {
        return <p>Cargando..</p>;
    }

    return (
        <Modal isOpen={modalProfesores}>
            <ModalHeader>
                <h1 className="text-center">Editar grado</h1>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-6">
                            <label>Salon Asignado:</label>
                            <input  type="number" value={datosEditados.salonasignado} name='salonasignado'className='form-control' onChange={handleChange}/>
                            
                        </div>
                        <div className="col-6 text-center">
                            <label>Curso Asignado:</label>
                            <br />
                            <label className='mt-2'>{datosEditados.nombre} </label>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-5">
                            <label>Año:</label>
                            <input type="number" className="form-control text-black " name="anio" value={datosEditados.anio} onChange={handleChange} maxLength="4"/>
                        </div>
                        <div className="col-7">
                            <label>Director:</label>
                            <select name="director" className="form-control" value={datosEditados.director} onChange={handleChange}>
                                <option value="" selected>{datosEditados.director_nombre}</option>
                                {teachersData.map(teacher => (
                                    <option key={teacher.documento} value={teacher.documento}>{teacher.nombre1+" "+(teacher.nombre2? teacher.nombre2: " ")+" "+teacher.nombre1+" "+(teacher.apellido2? teacher.apellido2: " ") }</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end mt-2">
                        <button className="btn btn-sm bg-success" type="submit">
                            <i className="bi bi-pen"></i>
                        </button>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-sm bg-danger" onClick={() => closeModal()}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTeacher;
