import EstudentSidebarObservations from '../../components/Student/ObservationsSideBar_Student.jsx'
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Observations.css'
import icono from '../../images/img-user-light.png'
import firma from '../../images/imgfirma.png'
import ModalObservation from '../../components/Student/ModalObservation.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../context/GlobalStateProvider.jsx';



//Instalar el paquete styled (npm install styled --save styled)
function Student_Observations() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [observation, setObservation] = useState([]);

    const [observationSearch, setObservationSearch] = useState([])

    const { state } = useGlobalState();

    const observationDocument = localStorage.getItem('documento');
    console.log(observationDocument)



    useEffect(() => {
        const getObservation = async () => {
          try {
            const respuesta = await axios.get(`http://127.0.0.1:8000/api/v1/observaciones`);
            console.log(respuesta);
            const filtro = respuesta.data.filter(observation => observation.usuario_documento.toString().trim() === observationDocument.toString().trim());
            console.log(filtro);
            setObservation(filtro);
            
          } catch (error) {
            console.error('Error al obtener los datos del estudiante:', error);
          }
        };
    
        getObservation();
      }, []);

    const ModalObservationSearch = (documento) => {
        

        const getObservationSearch = async () => {
            try {
              const respuesta = await axios.get(`http://127.0.0.1:8000/api/v1/observaciones/${documento}`);        
              setObservationSearch(respuesta.data);           
              console.log(respuesta.data);
              setModalVisible(true);

            } catch (error) {
              console.error('Error al obtener los datos del estudiante:', error);
            }
          };
      
          getObservationSearch();
    }
  return (
    <div className='bodyStudentObservation'>
        <NavBarStudent_Index></NavBarStudent_Index>
        <div className="container-fluid">
            <div className="row flex-nowrap " id='contenedor-wrap'>
            <EstudentSidebarObservations/>
                <div className="container-fluid d-flex flex-column" id='container_obs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-md-8 col-xl-10'>
                                <section id="seccion-ob">
                                    <div className='tabla-ob'>
                                        <div id='tl-tabla-ob'>
                                            <h3>Mis observaciones</h3>
                                        </div>
                                        <div id='cont-tabla-ob'>
                                            {observation.length > 0 ? (
                                                observation.map(observation => (
                                                <article key={observation.idobservacion} id='info-user-ob'>
                                                    <div id='info-student-ob'>
                                                        <div id='img-user'>
                                                            <img src={icono} id='img-user-obs' alt='User Icon' />
                                                        </div>
                                                        <div id='info-student-ob'>
                                                            <div id='tabla-info-ob'>
                                                                <p id='celda-ob'>Motivo: {observation.informe}</p>
                                                                <p id='celda-ob'>Fecha: </p>
                                                            </div>
                                                            <button id='info-obs' onClick={() => ModalObservationSearch(observation.idobservacion)}>Mostrar</button>
                                                        </div>
                                                        <ModalObservation 
                                                            state={modalVisible} 
                                                            setState={setModalVisible}>

                                                            <p>Motivo: {observationSearch.informe}</p>
                                                            <p>Fecha: </p>
                                                            <p>Firma:</p>
                                                            <img src={firma} alt='Firma' />
                                                        </ModalObservation>
                                                    </div>
                                                </article>
                                            ))
                                            ):(<h3 id='observation-0'>No hay observaciones</h3>)}
                                           
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



  );
}

export default Student_Observations;