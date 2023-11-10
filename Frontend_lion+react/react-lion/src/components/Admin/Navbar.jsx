import { Link } from 'react-router-dom';
function Navbar(){
  return(
        
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      id="hamburguesa"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample04"
      aria-controls="navbarsExample04"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="bi bi-list" width="32" height="32"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample04">
      <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
        <li className="nav-item">
          <Link to="/perfil" className="nav-link text-dark color" id="option">
            <i className="bi bi-person-circle" id="icono"></i> Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Home" className="nav-link text-dark color" id="option">
            <i className="bi bi-box-arrow-right" id="icono"></i> Salir
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

  )

  
}


export default Navbar;



