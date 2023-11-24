import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher";
import "../../css/Teacher_MakeObservation.css";

function MakeObservationT() {
  return (
    <div className="containeMax bodyAdminPanel ">
      <div id="contenedor-wrap">
        <SidebarHome />

        <div className="containerform">

          <form className="formMakeobserver">

            <h1 className="title">Observaciones</h1>

            <div id="buscadosEst">
                <ComponentSearch />
              </div>

            <div className="observation-section">
              <div className="form-group">
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
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Firma 1: </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlFile2">Firma 2: </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile2"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Guardar Observación
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MakeObservationT;
