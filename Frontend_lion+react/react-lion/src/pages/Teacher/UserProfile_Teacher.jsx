import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import "../../css/Teacher_UserProfile.css";
import images from "../../images/perfil.png";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const teacherDocument = 1010123457;
const UserProfile = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/users/${teacherDocument}`);
        setTeacher([response.data]);
        console.log(response);
      } catch (error) {
        console.error('Error al obtener los datos del profesor:', error);
      }
    };

    getTeacher();
  }, []);

  return (
    <div className="container-fluid bodyAdminPanel">
      <div className="row">
        <SidebarHome />

        <div className="col-md-9 p-3">
          <div className="container">
            <div className="user-info-section">
              <h2>Información Personal</h2>

              <div className="row" key={teacher[0]?.documento}>
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
                    <p>
                      <strong>Nombre:</strong> {teacher[0]?.nombre1} {teacher[0]?.nombre2}
                      <br />
                      <strong>Apellido :</strong> {teacher[0]?.apellido1} {teacher[0]?.apellido2}
                      <br />
                      <strong>Fecha de nacimiento  :</strong> {teacher[0]?.fechanacimiento} 
                      <br />
                      <strong>Email:</strong> {teacher[0]?.email}
                      <br />
                      <strong>Telefono:</strong> {teacher[0]?.telefono_fijo}
                      <br />
                      <strong>Celualr:</strong> {teacher[0]?.telefono_celular}
                      <br />
                      <strong>Tipo de usuario:</strong> {teacher[0]?.rol}
                      <br />
                    </p>
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


