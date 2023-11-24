import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import imagesHorario from "../../images/H_Prof.png";
import "../../css/Teacher_Schelue.css";

function MyScheduleT() {
  return (
    <div className="row bodyAdminPanel" id="contenedor-wrap">
      <SidebarHome className="col-md-5 p-3" />
      <div className="col-md-7 p-0 mb-0" style={{ marginTop: "-100px" }}>
        <h1>CURSOS</h1>
        <section id="table">
          <div className="imgDiv">
            <img src={imagesHorario} alt="" className="images" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyScheduleT;
