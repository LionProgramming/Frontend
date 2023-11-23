import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher.jsx";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher.jsx";
import "../../css/Teacher_ObserverSearch.css";
import images from "../../images/perfil.png";

function ObserverSearch() {
  return (
    // contenedor max
    <div className="row" id="contenedor-wrap">
  {/* Sidebar profesor ubicado en components/profesor */}
  <SidebarHome className="col-md-5 p-3" />

  {/* Barra buscadora */}
  <div id="informacion1" className="col-md-7 p-3">
    <div className="search-container">
      <ComponentSearch/>
    </div>
    {/* Contenedor de observaciones */}
    <h2>Observaciones del estudiante</h2>
    <div className="observaciones-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="table" key={index}>
          <div className="img">
            <img src={images} alt={`Observacion ${index + 1}`} />
          </div>
          <div className="inf_ob">
            <br />
            <p>Estudiante: Pepito Perez</p>
            <p>Observacion: Mal comportamiento</p>
            <p>Fecha de observacion: 13/04/2020</p>
          </div>
          <div className="buttonObservador">
            <input className="buttonOb" type="button" value="Mostrar" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
export default ObserverSearch;
