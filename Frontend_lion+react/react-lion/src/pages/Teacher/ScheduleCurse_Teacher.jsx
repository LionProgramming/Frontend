import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import images from "../../images/C_Prof.png";
import "../../css/Teacher_Schelue.css";

function ScheduleCurseT() {
  return (
    <div className="row bodyAdminPanel" id="contenedor-wrap">
      <SidebarHome className="col-md-5 p-3" />
      <div className="col-md-7 col-8  responsive-col" >
        <h1 id="h_schedule">CURSOS</h1>
        <section id="table">
          <div className="imgDiv">
            <img src={images} alt="" className="images" />
          </div>
        </section>
      </div>
    </div>
  
  );
}

export default ScheduleCurseT;
