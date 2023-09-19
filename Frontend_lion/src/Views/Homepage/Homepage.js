import React from 'react';
import  './Header.js'
import './Header.css';

function Header() {
  return (
    <main>
    <header className="header" id="inicio">
      <nav className="navbar navbar-dark bg-transparent" id="nav1">
        <div className="container-fluid">
          <i className="bi bi-list hamburguesa" id="button-burger"></i>
          <a className="nav-link color" id="option" href="login.html">Ingresar <i className="bi bi-box-arrow-in-right"></i></a> {/* Cierra la etiqueta <i> correctamente */}
        </div>
      </nav>

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

    <section className="header" id="informacion">
        <h2 className="subtitulo">Nuestra institucion</h2>
        <div className="contenedor_objetivos"/>
          <img src="imagenes/icono.svg" alt="" />
          <div className="puntos_objetivo">
            <div className="objetivo">
              <h3 className="n_objetivo">
                <span className="numero">1</span>objetivo
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quos fugiat placeat labore a veniam quidem recusandae facere
                alias eum.
              </p>
            </div>
            <div className="objetivo">
              <h3 className="n_objetivo">
                <span className="numero">2</span>Alcance
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quos fugiat placeat labore a veniam quidem recusandae facere
                repellat.
              </p>
            </div>
            <div className="objetivo">
              <h3 className="n_objetivo">
                <span className="numero">3</span>Delimitacion
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quos fugiat placeat labore a veniam quidem recusandae facere
                alias eum.
              </p>
            </div>
          </div>
        </section>
        <section className="galeria" id="portafolio">
          <div className="contenedor">
            <h2 className="subtitulo">Instalaciones</h2>
            <div className="contenedor_galeria">
              <img src="../public/imagenes/uno.jpg" alt="img1" className="img1" />
              <img src="../piblic/imagenes/dos.jpg" alt="img1" className="img1" />
              <img src="../piblic/imagenes/tres.jpg" alt="img1" className="img1" />
              <img src="../piblic/imagenes/cuatro.jpg" alt="img1" className="img1" />
              <img src="../piblic/imagenes/cinco.jpg" alt="img1" className="img1" />
              <img src="../piblic/imagenes/seis.jpg" alt="img1" className="img1" />
            </div>
          </div>
        </section>
        <section className="imagen_trans">
          <img src="imagenes/cerrar.svg" alt="" className="cerrar" />
          <img src="../public/imgenes/" alt="" className="agregar_imagen" />
        </section>

        <section className="contenedor" id="sobre_nosotros">
          <h2 className="subtitulo">Ambiente Estudiantil</h2>
          <section className="equipo">
            <div className="cont_equipo">
              <img src="../public/imagenes/icono1.svg" alt="" />
              <h3 className="n_equipo">Docentes</h3>
            </div>
            <div className="cont_equipo">
              <img src="../public/imagenes/icono2.svg" alt="" />
              <h3 className="n_equipo">Coordinadores</h3>
            </div>
            <div className="cont_equipo">
              <img src="../public/imagenes/icono3.svg" alt="" />
              <h3 className="n_equipo">Inscripciones</h3>
            </div>
          </section>
        </section>
        <footer id="contacto">
      <div className="contenerdor contenedor_footer">
        <div className="contacto_us">
          <h2 className="marca">Colegio Agustiniano norte</h2>
          <p>
            La unión estudiantil promueve la participación, defiende nuestros derechos y lucha por una educación justa y accesible para todos.
          </p>
        </div>
        <div className="redes_sociales">
          <a href="./" className="red_csocial">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" alt="" />
          </a>
          <a href="./" className="red_csocial">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg==" alt="" />
          </a>
          <a href="./" className="red_csocial">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL1JREFUSEvtlIEJwjAQRV836AY6ghtUJ9EROoJOoCO4ghvoBDqCbuAGlQ8JHGo9UhJUaKBw0Ob/+4+7VhQ+VWF9fs5gCmyBGaBa5wTM+0ikJJDgGaifxLIZ7IHlm06zGRyBJhgcgBVw94YkBVFnxDbA2hPX+68bCMMkdGo7Fi49cYpi/RLKS2C59xH5iCuHwcKkSU6wC0uli3GCVN+Aa1BrgUuORfvPKbLJxwTu4o+IXESDPvB+FYNE7aXiBg+0MykZNmDKCAAAAABJRU5ErkJggg==" alt="" />
          </a>
        </div>
      </div>
      <div className="linea"></div>
    </footer>


    </main>
    

    
  );
}

export default Header;