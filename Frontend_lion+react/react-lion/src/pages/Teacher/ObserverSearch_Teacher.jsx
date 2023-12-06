import React, { useEffect, useState } from "react";
import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher.jsx";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher.jsx";
import Modal from "../../components/Teacher/Modal_Teacher.jsx";
import "../../css/Teacher_ObserverSearch.css";
import images from "../../images/perfil.png";
import axios from "axios";

let Observations = 4;
let observersList = [];

const Teacher_ObserverSearch = () => {

  
  // modal
  const [selectedObservation, setSelectedObservation] = useState(null);

  // modal 
  const openModal = (observation) => {
    setSelectedObservation(observation);
  };

  const closeModal = () => {
    setSelectedObservation(null);
  };

  // mostrar observaciones 

  const [Observation, setObservation] = useState([]);

  useEffect(() => {
    const getObservation = async () => {
      try {
        for (let i = 1; i <= Observations; i++) {
          const response = await axios.get(`http://127.0.0.1:8000/api/v1/observaciones/${i}`);
          observersList.push(response.data);
          
        }console.log(observersList)
        setObservation(observersList);
        
      } catch (error) {
        console.error('Error al obtener los datos del profesor:', error);
      }
    };

    getObservation();
  }, []);

  return (
    <div className="bodyAdminPanel">
      <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SidebarHome></SidebarHome>
            <div className="container-fluid d-flex flex-column" id="contenedor-Observer">
              <h2 className="text-center">Observaciones del estudiante</h2>
              <ComponentSearch></ComponentSearch>
              <div className=" col-8 col-md-0 col-xl-10   mt-4" id="tablaRegistros">
                <div className="observaciones-container">
                  {observersList.map((observacion, index) => (
                    <div className="table" key={observacion.idobservacion}>
                      <div className="img">
                        <img src={images} />
                      </div>
                      <div className="inf_ob">
                        <br />
                        <p>Observacion No: {observacion.idobservacion}</p>
                        <p>Documento usuario: {observacion.usuario_documento}</p>
                      </div>
                      <div>
                        <button className="btn btn-dark btn-block" onClick={() => openModal(observacion)}>
                          Mostrar
                        </button>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={selectedObservation !== null}
      onClose={closeModal} observation={selectedObservation} />
    </div>
  );
};

export default Teacher_ObserverSearch;