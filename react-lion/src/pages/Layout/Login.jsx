import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../../css/Login.css'
import Fotter from "../../components/General/Footer.jsx";
import img from "../../images/bx-user.svg";
import { useGlobalState } from '../../context/GlobalStateProvider.jsx';
const Login = () => {
  const nav = useNavigate();
  const {dispatch}=useGlobalState();
  const [error,Seterror]=useState('');
  const [credentials,SetCredentials]=useState({
    documentoCredential:'',
    contraseniaCredential:''
  });
  useEffect(()=>{
    const validacion1=document.getElementById('validacion1')
    validacion1.style.display="none"
  })
  const handleChange=(e)=>{
    const{name,value}=e.target
    console.log(`Input "${name}" valor:`, value);
    SetCredentials({... credentials,[name]:value})
    
  }
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(credentials)
    if ((credentials.documentoCredential)===''|(credentials.contraseniaCredential)===''){
      const validacion1appear=document.getElementById('validacion1')
      validacion1appear.style.display='block'
      return
    }
    const formcheck={
      documento:parseInt(credentials.documentoCredential),
      contrasenia:credentials.contraseniaCredential
    }
    console.log(formcheck)
    const verify =async()=>{
      try{
        const response=await axios.post(`http://127.0.0.1:8000/login/`,formcheck)
        console.log(response.data)
        if(response.data.response===1){
          localStorage.setItem('documento', response.data.documento); //poner esto en als validaciones 
          dispatch({type:'SET_DOCUMENT', payload: response.data.documento})
          console.log(credentials.documentoCredential)
          if(response.data.rol===1){
            nav("/Admin/Profile")
          }else if(response.data.rol===2){
            nav("/Student-index")
          } 
          else{
            nav("/UserProfileT")
          }
        }

      }catch(error){
        console.error(error)
        if (error.response && error.response.status ===401){
          Seterror('Usuario o contraseña incorrectos');
        }else{
          Seterror('Error en el servidor, por favor intentalo de nuevo mas tarde');
        }
      }

      
    }
    verify();
  } 
  return (
    <div>
      <div className="login d-flex align-items-center">
      <a href="/">
          <i className="bi bi-arrow-left" id="arrow-icon" width="10%"></i>
        </a>
        <img src={img} alt="" style={{ width: '20%' }} className="icon" />
      


        <form onSubmit={handleSubmit} className=' text-center align-items-center justify-content-center'>
        <input className='form-control' type="number" placeholder="identificacion" id="documento" name='documentoCredential' value={credentials.documentoCredential} onChange={handleChange} />
        <br/>
        <input className='form-control' type="password" placeholder="contraseña" id="contraseña"  name="contraseniaCredential" value={credentials.contraseniaCredential} onChange={handleChange} />
        <br />
        <label className='text-center' id="validacion1">Porfavor ingrese los campos requeridos</label>
        {error && <p className='text-danger'>{error}</p>}
        <button className="btn btn-primary mt-2 " type='submit'>ingresar</button>
        </form>
       
      </div>
        

      <Fotter/>
      
    </div>
  );
};

export default Login;
