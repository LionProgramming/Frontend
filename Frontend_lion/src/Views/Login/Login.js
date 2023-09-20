import React  from 'react';
import './styles/login.css'
import Fotter from '../../components/Footer'
import img from '../../imagenes/bx-user.svg'
// import img from '../../imagenes/bx-user.svg'
// import Swal from 'sweetalert2'



  const Swal = require('sweetalert2')
  const validarcampos = () => {
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    let valor1 = document.getElementById('identificacion').value.trim();
    let valor2 = document.getElementById('contraseña').value.trim();
    if ((parseInt(valor1) === 1234 && valor2 === 'hola') || (valor1 === '' || valor2 === '' || regex.test(valor2))) {
      Swal.fire({
        title: 'Error',
        text: 'Los datos ingresados contienen caracteres no válidos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Éxito',
        text: 'El valor ingresado es válido',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  }; 



const App = () => {
 
  return (
    <div>
      <header id="return-button">
        <a href="index"><i className="bi bi-arrow-left" id="arrow-icon"></i></a>
      </header>
      <div className="login">
        <img src={img} alt="" width="10%" className="icon" /><br />
        <input type="number" placeholder="identificacion" id="identificacion" /><br />
        <input type="password" placeholder="contraseña" id="contraseña" /><br />
        <input type="button" value="Login" onClick={validarcampos} />
      </div>

      <Fotter />
    </div>
  );
};

export default App;

