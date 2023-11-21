import '../../css/Login.css'
import Fotter from "../../components/General/Footer.jsx";
import img from "../../images/bx-user.svg";

const validarcampos = () => {
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  let valor1 = document.getElementById("identificacion").value.trim();
  let valor2 = document.getElementById("contraseña").value.trim();
  if (
    (parseInt(valor1) === 1234 && valor2 === "hola") ||
    valor1 === "" ||
    valor2 === "" ||
    regex.test(valor2)
  ) {
    console.log("error de entrada");
    // Crear nuevo aviso tipo h5 rojo donde diga que los datos son erroneos
  } else {
    //Da paso a la validacion; aut + context
    console.log("Ingresando");
  }
};

const Login = () => {
  return (
    <div>
      <div className="login">
      <a href="/">
          <i className="bi bi-arrow-left" id="arrow-icon" width="10%"></i>
        </a>
        <img src={img} alt="" style={{ width: '20%' }} className="icon" />
        <br />
        <input type="number" placeholder="identificacion" id="identificacion" />
        <br />
        <input type="password" placeholder="contraseña" id="contraseña" />
        <br />
        <input type="button" value="Login" onClick={validarcampos} />
      </div>

      <Fotter/>
      
    </div>
  );
};

export default Login;
