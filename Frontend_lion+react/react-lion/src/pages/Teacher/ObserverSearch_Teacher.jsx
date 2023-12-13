import React, { useEffect, useState } from "react";
import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher.jsx";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher.jsx";
import Modal from "../../components/Teacher/Modal_Teacher.jsx";
import "../../css/Teacher_ObserverSearch.css";
import images from "../../images/perfil.png";
import axios from "axios";

const Teacher_ObserverSearch = () => {
  const [observations, setObservations] = useState([]);
  const [selectedObservation, setSelectedObservation] = useState(null);

  // modal 
  const openModal = (observation) => {
    setSelectedObservation(observation);
  };

  const closeModal = () => {
    setSelectedObservation(null);
  };

  useEffect(() => {
    const getObservations = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/observaciones/");
        setObservations(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de las observaciones:", error);
      }
    };

    getObservations();
  }, []);

  return (
    <div className="bodyAdminPanel">
      <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SidebarHome></SidebarHome>
            <div className="container-fluid d-flex flex-column" id="contenedor-Observer">
              <h2 className="text-center">Observaciones del estudiante</h2>
              <div className=" col-8 col-md-0 col-xl-10   mt-4" id="tablaRegistros">
                <div className="observaciones-container">
                  {observations.map((observacion, index) => (
                    <div className="table" key={observacion.idobservacion}>
                      <div className="img">
                        <img src={images} alt={`Imagen de observación ${observacion.idobservacion}`} />
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
      <Modal isOpen={selectedObservation !== null} onClose={closeModal} observation={selectedObservation} />
    </div>
  );
};

export default Teacher_ObserverSearch;
