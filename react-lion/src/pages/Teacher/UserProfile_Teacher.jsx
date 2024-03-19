import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";
import "../../css/Teacher_UserProfile.css";

import { useEffect, useState } from 'react';
import axios from 'axios';
const teacherDocument = localStorage.getItem("documento")
const UserProfile = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/users/${teacherDocument}`);
        setTeacher(response.data);
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

        <div className="col-md-8 m-4 ">
          <div className="container container-teacher-info">
            <div className="user-info-section">
              <div className="row">
                <div className="col-8">
                <h2 className="h2-teacher-profile">Información Basica</h2>
                </div>
                <div className="col-4">
                <img
                      src={teacher.urlfoto}
                      id='img-perfil'
                      alt="Imagen perfil"
                      className='image_index'
                    />
                </div>
              
              </div>
              
                
              <div className="row " key={teacher.documento}>
                
                <div className="col-md-7">
                  <div className="user-details">
                      <p>
                      <strong>Nombre</strong> {teacher.nombre1} {teacher.nombre2}
                      </p>
                      <p>
                      <strong>Apellido</strong> {teacher.apellido1} {teacher.apellido2}
                      </p>
                      <p>
                      <strong>Fecha de nacimiento</strong> {teacher.fechanacimiento}
                      </p>
                      <p>
                      <strong>Email</strong> {teacher.email}
                      </p>
                      <p>
                      <strong>Telefono</strong> {teacher.telefono_fijo}
                      </p>
                      <p>
                      <strong>Telefono celular</strong> {teacher.telefono_celular}
                      </p>
                      <p>
                      <strong>Tipo de usuario</strong> {teacher.rol}
                      
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="user-photo button-photo-edit ">
                    <button type="button" className="btn btn-link">
                      <i className="bi bi-pencil-square"></i>
                      Editar Foto
                    </button>
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


