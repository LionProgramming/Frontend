import React from 'react';
import './styles/HomePage.css';
import Footer from '../../components/Footer'
import img1 from '../../imagenes/icono.svg';
import img2 from '../../imagenes/uno.jpg';
import img3 from '../../imagenes/dos.jpg';
import img4 from '../../imagenes/tres.jpg';
import img5 from '../../imagenes/cuatro.jpg'
import img6 from '../../imagenes/cinco.jpg'
import img7 from '../../imagenes/seis.jpg'
import img8 from '../../imagenes/cerrar.svg'
import img9 from '../../imagenes/Instalaciones.jpg';
import img10 from '../../imagenes/icono1.svg'
import img11 from '../../imagenes/icono3.svg';
import img12 from '../../imagenes/icono2.svg'







  function HomePage() {
    return (
      <body>
        <header className="header" id="inicio">
          <nav className="navbar navbar-dark bg-transparent" id="nav1">
            <div className="container-fluid">
              <i className="bi bi-list hamburguesa" id="button-burger"></i>
              <a className="nav-link color" id="option" href="login.html">
                Ingresar <i className="bi bi-box-arrow-in-right"></i>
              </a>
            </div>
          </nav>
          <div></div>
          <nav className="menu_navegacion">
            <a href="#inicio">Inicio</a>
            <a href="#informacion">Información general</a>
            <a href="#portafolio">Instalaciones</a>
            <a href="#sobre_nosotros">Ambiente educativo</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="contenedor head">
            <h1 className="titulo">Colegio Agustiniano norte</h1>
            <p className="copy">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </header>
        <main>
          <section className="header" id="informacion">
            <h2 className="subtitulo">Nuestra institución</h2>
            <div className="contenedor_objetivos">
              <img src={img1} alt="" />
              <div className="puntos_objetivo">
                <div className="objetivo">
                  <h3 className="n_objetivo">
                    <span className="numero">1</span>objetivo
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos fugiat placeat labore a
                    veniam quidem recusandae facere alias eum.
                  </p>
                </div>
                <div className="objetivo">
                  <h3 className="n_objetivo">
                    <span className="numero">2</span>Alcance
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos fugiat placeat labore a
                    veniam quidem recusandae facere repellat.
                  </p>
                </div>
                <div className="objetivo">
                  <h3 className="n_objetivo">
                    <span className="numero">3</span>Delimitación
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos fugiat placeat labore a
                    veniam quidem recusandae facere alias eum.
                  </p>
                </div>
              </div>
            </div>
            <br />
          </section>
          <section className="galeria" id="portafolio">
            <div className="contenedor">
              <h2 className="subtitulo">Instalaciones</h2>
              <div className="contenedor_galeria">
                <img src={img2} alt="img1" className="img1" />
                <img src={img3} alt="img1" className="img1" />
                <img src={img4} alt="img1" className="img1" />
                <img src={img5} alt="img1" className="img1" />
                <img src={img6} alt="img1" className="img1" />
                <img src={img7} alt="img1" className="img1" />
              </div>
            </div>
          </section>
          <section className="imagen_trans">
            <img src={img8} alt="" className="cerrar" />
            <img src={img9} alt="" className="agregar_imagen" />
          </section>
          <section className="contenedor" id="sobre_nosotros">
            <h2 className="subtitulo">Ambiente Estudiantil</h2>
            <section className="equipo">
              <div className="cont_equipo">
                <img src={img10} alt="" />
                <h3 className="n_equipo">Docentes</h3>
              </div>
              <div className="cont_equipo">
                <img src={img11} alt="" />
                <h3 className="n_equipo">Coordinadores</h3>
              </div>
              <div className="cont_equipo">
                <img src={img12} alt="" />
                <h3 className="n_equipo">Inscripciones</h3>
              </div>
            </section>
          </section>
        </main>
        

        <Footer></Footer>
      </body>
      


    );
  }

export default HomePage;