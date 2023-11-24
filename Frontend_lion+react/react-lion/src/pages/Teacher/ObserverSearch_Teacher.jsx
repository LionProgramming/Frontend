import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher.jsx";
import ComponentSearch from "../../components/Teacher/ComponentSearch_Teacher.jsx";
import "../../css/Teacher_ObserverSearch.css";
import images from "../../images/perfil.png";




const Teacher_ObserverSearch = () => {
  
  return (
    <div className='bodyAdminPanel'>
          <section>
        <div className="container-fluid">
          <div className="row flex-nowrap">
           <SidebarHome></SidebarHome>
            <div className="container-fluid d-flex flex-column" id="contenedor-Observer">
              <h2 className="text-center">Observaciones del estudiante</h2>
              <ComponentSearch></ComponentSearch>
              <div className=" col-8 col-md-0 col-xl-10   mt-4" id="tablaRegistros">
               
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
                        <input
                          className="buttonOb"
                          type="button"
                          value="Mostrar"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
    </div>
  );
};

export default Teacher_ObserverSearch;