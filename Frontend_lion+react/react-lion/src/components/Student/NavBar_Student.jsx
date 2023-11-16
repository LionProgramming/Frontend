import '../../css/Navbar_Student.css'
function NavBarStudent_Index(){
  return(
   <nav className="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
  <div className="container-navbar_Student">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end text-center">
      <li className='nav-item'>
        <a className="nav-link text-dark"href="../Horario-Est"><i className="bi bi-calendar-event"></i>
        Horario</a>
      </li>
      <li className="nav-item ">
                  <a className="nav-link text-dark" href="../observaciones-est"><i className="bi bi-book"></i>
                    Observador</a>
                </li>
      <li className="nav-item">
        <a href="/perfil" className="nav-link text-dark" >
          <i className="bi bi-person-circle" ></i> Perfil
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link text-dark " >
        <i className="bi bi-box-arrow-right" ></i> Salir
        </a>
      </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default NavBarStudent_Index



