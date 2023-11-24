import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import "../../css/Teacher_UserProfile.css";
import images from "../../images/perfil.png";


const UserProfile = () => {
  return (
    <div className="container-fluid bodyAdminPanel">
  <div className="row">
    <SidebarHome />

    <div className="col-md-9 p-3">
      <div className="container">
        <div className="user-info-section">
          <h2>Información Personal</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="user-photo text-center">
                <img
                  src={images}
                  alt="Foto del usuario"
                  className="img-fluid rounded-circle"
                />
                <button type="button" className="btn btn-link">
                  <i className="bi bi-pencil-square"></i>
                  Editar Foto
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="user-details">
                <p><strong>Nombre:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Teléfono:</strong> +123 456 7890</p>
                {/* Agrega más detalles según sea necesario */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default UserProfile;

