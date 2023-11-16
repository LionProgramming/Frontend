import SidebarHome from '../../components/Student/IndexSideBar_Student.jsx'
import NavBarStudent_Index from '../../components/Student/NavBar_Student.jsx';
import '../../css/Student_Index.css'
import img from '../../images/foto.png'

function Student_Index() {
  return (
    <div className='bodyStudentIndex'>
      <NavBarStudent_Index></NavBarStudent_Index>
      <div className="container-fluid">
        <div className="row flex-nowrap" id='contenedor-wrap'>
          <SidebarHome />
          <div className="container-fluid d-flex flex-column" id='container_index'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-xl-10'>
                  <div className='tabla'>
                    <div id='tl-tabla'>
                      <h3 className='text-center'>Informacion personal</h3>
                    </div>
                    <div>
                      <article id='info-user' className='d-flex'>
                        <div id='img-user' className='flex-shrink-0'></div>
                        <div id='info-student' className='col-12'>
                          <div className='row'>
                            <div className='col-12 text-center d-flex align-items-start text-wrap'>
                               <img src={img} alt="Imagen perfil" className='image_index'/>
                               <h2 className='text-white'>Nombre:<h6> antonio</h6></h2>
                               
                            </div>
                            <div className='col-6'>
                              
                            </div>
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


    </div>



  );
}

export default Student_Index;
