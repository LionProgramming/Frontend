import '../../css/Navbar.css'
import { useGlobalState } from '../../context/GlobalStateProvider'
function Navbar(){
  const {dispatch}=useGlobalState();
  const handleLogout=()=>{
    localStorage.removeItem('documento');

    dispatch({type: 'SET_DOCUMENT',playload:null})
  }
  return(
   <nav className="navbar navbar-expand-md navbar-dark bg-transparent" id="nav">
  <div className="container-navbar">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample04">
      <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
        <li className="nav-item">
          <a href="/Admin/Profile" className="nav-link text-dark" >
            <i className="bi bi-person-circle" ></i> Perfil
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-dark " onClick={handleLogout} >
            <i className="bi bi-box-arrow-right" ></i> Salir
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  

  )

  
}


export default Navbar;



