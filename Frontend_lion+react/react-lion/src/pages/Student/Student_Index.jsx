import EstudentSidebarHome from '../../components/Student/IndexSideBar_Student.jsx'
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Index.css'
import img from '../../images/foto.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const studentDocument = 1010123457;

function Student_Index() {

  const [student, setStudent] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const respuesta = await axios.get(`http://127.0.0.1:8000/api/v1/users/${studentDocument}`);
        setStudent([respuesta.data]);
        console.log(respuesta)
      } catch (error) {
        console.error('Error al obtener los datos del estudiante:', error);
      }
    };

    getStudent();
  }, []);

  

  return (
    <div className='bodyStudentIndex'>
      <NavBarStudent_Index></NavBarStudent_Index>
      <div className="container-fluid">
        <div className="row flex-nowrap" id='contenedor-wrap'>
          <EstudentSidebarHome/>
          <div className="container-fluid d-flex flex-column" id='container_index'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-xl-10'>
                  <div className='tabla'>
                    <div id='tl-tabla'>
                      <h3 className='text-center'>Informacion personal</h3>
                    </div>
                      <article id='info-user'>
                          <img src={student.length > 0 && student[0].urlfoto} id='img-perfil' alt="Imagen perfil" className='image_index'/>
                        <div id='cont-info-user'>
                          <div id='info-student'>
                              <h3>Nombre: {student.length > 0 && student[0].nombre1 +" "+(student[0].nombre2 ? `${student[0].nombre2}` : ' ')+" "+student[0].apellido1+" "+(student[0].apellido2 ? `${student[0].apellido2}` : ' ')}</h3>
                          </div>
                          <div id='info-student'>
                              <h3>Curso: {student.length > 0 && student[0].curso_nombre}</h3>
                          </div>
                          <div id='info-student'>
                              <h3>Correo: {student.length > 0 && student[0].email}</h3>
                          </div>
                          <div id='info-student'>
                              <h3>Telefono: {student.length > 0 && student[0].telefono_celular}</h3>
                          </div>
                        </div>
                      </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_Index;
