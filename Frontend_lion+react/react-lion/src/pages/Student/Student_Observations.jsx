import React, { useState } from 'react';
import EstudentSidebarObservations from '../../components/Student/ObservationsSideBar_Student.jsx'
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Observations.css'
import icono from '../../images/img-user-light.png'
import firma from '../../images/imgfirma.png'
import ModalObservation from '../../components/Student/ModalObservation.jsx';

//Instalar el paquete styled (npm install styled --save styled    )
function Student_Observations() {
    const [modalVisible, setModalVisible] = useState(false);

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
                                            <article id='info-user-ob'>
                                            
                                                <div id='info-student-ob'>
                                                    <div id='img-user'>
                                                        <img src={icono} id='img-user-obs'>
                                                        </img>
                                                    </div>
                                                    <div id='info-student-ob'>
                                                        <div id='tabla-info-ob'>
                                                            <p id='celda-ob'>Motivo: Mal comportamiento</p>
                                                            <p id='celda-ob'>Fecha: 15/08/2022</p>
                                                        </div>
                                                        
                                                        <button id='info-obs' onClick={() => setModalVisible(true)}>Mostrar</button>
                                                    </div>
                                                    <ModalObservation
                                                        state = {modalVisible}
                                                        setState = {setModalVisible}
                                                    >
                                                        <p>Motivo: Mal comportamiento</p>
                                                        <p>Fecha: 15/08/2022</p>
                                                        <p>Firma:</p>
                                                        <img src={firma}></img>
                                                    </ModalObservation>
                                                </div>
                                            </article>

                                            <article id='info-user-ob'>
                                                <div id='img-user'>
                                                    <img src={icono} id='img-user-obs'>
                                                    </img>
                                                </div>
                                                <div id='info-student-ob'>
                                                    <div id='tabla-info-ob'>
                                                        <p id='celda-ob'>Motivo: Mal comportamiento</p>
                                                        <p id='celda-ob'>Fecha: 15/08/2022</p>
                                                    </div>
                                                    
                                                    <button id='info-obs' onClick={() => setModalVisible(true)}>Mostrar</button>
                                                </div>
                                            </article>

                                            <article id='info-user-ob'>
                                                <div id='img-user'>
                                                    <img src={icono} id='img-user-obs'>
                                                    </img>
                                                </div>
                                                <div id='info-student-ob'>
                                                    <div id='tabla-info-ob'>
                                                        <p id='celda-ob'>Motivo: Mal comportamiento</p>
                                                        <p id='celda-ob'>Fecha: 15/08/2022</p>
                                                    </div>
                                                    <button id='info-obs' onClick={() => setModalVisible(true)}>Mostrar</button>
                                                </div>
                                            </article>
                                            <article id='info-user-ob'>
                                                <div id='img-user'>
                                                    <img src={icono} id='img-user-obs'>
                                                    </img>
                                                </div>
                                                <div id='info-student-ob'>
                                                    <div id='tabla-info-ob'>
                                                        <p id='celda-ob'>Motivo: Mal comportamiento</p>
                                                        <p id='celda-ob'>Fecha: 15/08/2022</p>
                                                    </div>
                                                    <button id='info-obs' onClick={() => setModalVisible(true)}>Mostrar</button>
                                                </div>
                                            </article>
                                            <article id='info-user-ob'>
                                                <div id='img-user'>
                                                    <img src={icono} id='img-user-obs'>
                                                    </img>
                                                </div>
                                                <div id='info-student-ob'>
                                                    <div id='tabla-info-ob'>
                                                        <p id='celda-ob'>Motivo: Mal comportamiento</p>
                                                        <p id='celda-ob'>Fecha: 15/08/2022</p>
                                                    </div>
                                                    <button id='info-obs' onClick={() => setModalVisible(true)}>Mostrar</button>
                                                </div>
                                            </article>

                                            <article id='info-user-ob'>
                                                <div id='img-user'>
                                                    <img src={icono} id='img-user-obs'>
                                                    </img>
                                                </div>
                                                <div id='info-student-ob'>
                                                    <div id='tabla-info-ob'>
                                                        <p id='celda-ob'>Motivo: Mal comportamiento</p>
                                                        <p id='celda-ob'>Fecha: 15/08/2022</p>
                                                    </div>
                                                    <button id='info-obs' onClick={() => setModalVisible(true)}>Mostrar</button>
                                                </div>
                                            </article>
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