import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher";
import "../../css/Teacher_MakeObservation.css";

import React, { useState } from 'react';
import axios from 'axios';






function MakeObservationT() {

  const [formData, setFormData] = useState({ informe: '', usuario_documento: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/observaciones/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Datos enviados con éxito');
      } else {
        const responseBody = await response.json();  // Obtener el cuerpo de la respuesta
        console.error('Error al enviar datos:', response.statusText, responseBody);
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };
  
  // funcion de los botones  no la hize yo la hizo el jepeto por que no sabia como 
  // const [fileSelected, setFileSelected ] = useState(false);
  // const handleFileChange = (event) => {
  //   setFileSelected(!!event.target.files.length);
  // };

  return (
    <div className="containeMax bodyAdminPanel ">
      <SidebarHome class="h-100" />
      <div className="containerform">

        <form className="formMakeobserver">
          <div className="form-group">
            <h1 className="title text-center">Observaciones  </h1><br /><br />
            <ComponentSearch />

            {/* imputa de fecha  */}
            {/* _______________________________ */}
            {/* <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="form-control"
              placeholder="Fecha"
              value="2023-06-14"
            /> */}
          </div><br /><br /><br />

          {/* se supone que aca unos tenia que hacer un fetche y no fui capaz  */}
          {/* <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
          </select> */}

          <label htmlFor="">Documento</label>
          <input type="number" name="usuario_documento" class="form-control" id="numberInput" onChange={handleChange} />

          {/* campo de seleccion de tipo de observacion  */}
          {/* <div className="form-group">
            <h2>Motivo</h2>
            <div className="btn-group" role="group" aria-label="Motivo">
              <button type="button" className="btn btn-light">
                Académico
              </button>
              <button type="button" className="btn btn-light">
                Convivencial
              </button>
            </div>
          </div> */}


          {/* campo de descripciones  */}
          {/* <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Descripción"
            ></textarea>
          </div> */}

          <div className="form-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea
              name="informe"
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="3"
              placeholder="Observaciones"
            ></textarea>
          </div>

          <div className="form-group"> <br /> <br />


            {/* firmas se quietaron por que toca hacer ajustes en la base de datos y no habia mas plazo */}
            {/* _____________________________________________________________________________________________ */}
            {/* <h2>Firmas</h2>

            <div className={`form-group ${fileSelected ? 'file-selected' : ''}`}>
              <label htmlFor="exampleFormControlFile2">Firma 2: </label><br />
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile2"
                onChange={handleFileChange}
              />
            </div><br />

            <div className={`form-group ${fileSelected ? 'file-selected' : ''}`}>
              <label htmlFor="exampleFormControlFile2">Firma 2: </label><br />
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile2"
                onChange={handleFileChange}
              />
            </div><br /> */}

            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-dark btn-lg btn-block"
            >
              Guardar Observación
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default MakeObservationT;
