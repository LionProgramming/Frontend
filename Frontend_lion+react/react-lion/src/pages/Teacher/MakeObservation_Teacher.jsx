import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher";
import "../../css/Teacher_MakeObservation.css";
import { useState } from 'react';

function MakeObservationT() {

  const [fileSelected, setFileSelected ] = useState(false);
  const handleFileChange = (event) => {
    setFileSelected(!!event.target.files.length);
  };


  return (
    <div className="containeMax bodyAdminPanel ">
      <SidebarHome class="h-100" />
      <div className="containerform">

        <form className="formMakeobserver">
          <div className="form-group">
            <h1 className="title text-center">Observaciones  </h1>
            <ComponentSearch />
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="form-control"
              placeholder="Fecha"
              value="2023-06-14"
            />
          </div>

          <div className="form-group">
            <h2>Motivo</h2>
            <div className="btn-group" role="group" aria-label="Motivo">
              <button type="button" className="btn btn-light">
                Académico
              </button>
              <button type="button" className="btn btn-light">
                Convivencial
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Descripción"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="3"
              placeholder="Observaciones"
            ></textarea>
          </div>

          <div className="form-group">
            <h2>Firmas</h2>

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
            </div><br />

            <button
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
