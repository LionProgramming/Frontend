import  { useState } from 'react';
import "../../css/HomePage.css";
import Footer from "../../components/General/Footer.jsx";
import img1 from "../../images/icono.svg";
import img2 from "../../images/uno.jpg";
import img3 from "../../images/dos.jpg";
import img4 from "../../images/tres.jpg";
import img5 from "../../images/cuatro.jpg";
import img6 from "../../images/cinco.jpg";
import img7 from "../../images/seis.jpg";
import img10 from "../../images/icono1.svg";
import img11 from "../../images/icono3.svg";
import img12 from "../../images/icono2.svg";

function Home() {
  // funcion hamburguesa
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
    }
  };
  // funcion galeria
  const images = [img2, img3, img4, img5, img6, img7];
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    console.log("Abriendo lightbox con imagen:", image);
    setSelectedImage(image);
    setLightboxVisible(true);
  };
  
  const closeLightbox = () => {
    console.log("Cerrando lightbox");
    setLightboxVisible(false);
  };
  
  return (
    // -------hamburguesa
    <div className={`bodyHome ${menuVisible ? 'menu-open' : ''}`}>
      <header className="header" id="inicio">
        <nav className="navbar navbar-dark bg-transparent" id="nav1">
          <div className="container-fluid">
            <i className="bi bi-list hamburguesa" id="button-burger" onClick={toggleMenu}></i>
            <a href="/login" className="nav-link color d-sm-inline" id="option" >
              Ingresar <i className="bi bi-box-arrow-in-right"></i>
            </a>
          </div>
        </nav>
        <div></div>
        <nav className={`menu_navegacion ${menuVisible ? 'spread' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#informacion" onClick={closeMenu}>Información general</a>
          <a href="#portafolio" onClick={closeMenu}>Instalaciones</a>
          <a href="#sobre_nosotros" onClick={closeMenu}>Ambiente educativo</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
        {/* ----- */}
        <div className="contenedor head">
          <h1 className="titulo">COLEGIO I.T.D. JUAN DEL CORRAL I.E.D.</h1>
          <p className="copy">
            “La formación humana, científica y tecnológica para el desarrollo del ciudadano en el siglo XXI”
          </p>
        </div>
      </header>

      <div className="header" id="informacion">
        <h2 className="subtitulo">Nuestra institución</h2>
        <div className="contenedor_objetivos">
          <img src={img1} alt="" />
          <div className="puntos_objetivo">
            <div className="objetivo">
              <h3 className="n_objetivo">
                <span className="numero">1</span>mision
              </h3>
              <p>
                El Colegio Distrital Instituto Técnico Juan del Corral es una institución educativa distrital articulada con el SENA, que ofrece a niños, niñas y jóvenes una formación ciudadana integral a través del fortalecimiento de valores y capacidades para la ciudadanía y la convivencia y el desarrollo de programas académicos y técnicos, tales como Contabilización de procesos contables y financieros y Desarrollo gráfico de Proyectos de construcción, promoviendo su incorporación a actividades productivas que contribuyan al desarrollo sostenible, social, económico y tecnológico de la capital y del país.
              </p>
            </div>
            <div className="objetivo">
              <h3 className="n_objetivo">
                <span className="numero">2</span>vision
              </h3>
              <p>
                En el año 2026, el Colegio Distrital Instituto Técnico Juan del Corral será reconocido como líder en el ámbito distrital por aportar a la sociedad colombiana bachilleres técnicos con un excelente nivel académico, una amplia conciencia de responsabilidad social y formados en valores ciudadanos, que lideren procesos de emprendimiento en espacios de formación técnica-laboral para que mejoren su calidad de vida y contribuyan a la construcción de una sociedad más justa, equitativa y pací ca.
              </p>
            </div>
            <div className="objetivo">
              <h3 className="n_objetivo">
                <span className="numero">3</span>Filosofía institucional
              </h3>
              <p>
                La filosofía institucional del Colegio Distrital Instituto Técnico Juan del Corral se estructura en torno a dos ejes. Uno relacionado con la formación académica y técnica como elemento funda- mental que contribuye a la realización del proyecto de vida de los estudiantes, y otro que tiene que ver con el desarrollo humano y la formación integral del ciudadano que requiere la ciudad y el país para superar las brechas, las desigualdades, y sobre todo, para aportar a la convivencia pací ca en el posconflicto.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
      {/* _______galeria */}
      <div className="galeria" id="portafolio">
        <div className="contenedor">
          <h2 className="subtitulo">Instalaciones</h2>
          <div className="contenedor_galeria">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`img${index + 2}`}
                className="img1"
                onClick={() => openLightbox(image)}
              />
            ))}
          </div>
        </div>

        {lightboxVisible && (
          <section className="imagen_trans" onClick={closeLightbox}>
            <img src={selectedImage} alt="" className="cerrar" />
          </section>
        )}

      </div>
      {/* ______ */}
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
      <Footer></Footer>
    </div>
  );
}

export default Home;
