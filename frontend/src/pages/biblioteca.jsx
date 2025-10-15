import './pages.css';
import { Link } from 'react-router-dom';
import gta from '../assets/img/gta.jpg';

function Biblioteca() {
  return (
    <main>

      <section className="tituloAgregarJuego contenedor">
        <h1>Mi Librería</h1>

        <Link className="tituloAgregarJuego__boton" to="/agregar-juego">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Añadir Juego
        </Link>
      </section>

      <section className="juegosLibreria contenedor">

        <div className="juegosLibreria__card">
          <div className="juegosLibreria__card__img">
            <img src={gta} alt="Juego" />
          </div>

          <article className="juegosLibreria__card__informacion">
            <div className="juegosLibreria__card__informacion__top">
              <h4>The Last Of Us Part II</h4>
              <p>PlayStation 4</p>
              <p>2023</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tempora dolore cum. Animi delectus, facere.
              </p>
            </div>

            <div className="juegosLibreria__card__informacion__bottom">
              <p>Acción</p>
              <p>Unity</p>
              <p>En curso</p>
            </div>
          </article>
        </div>

      </section>

    </main>
  );
}

export default Biblioteca;
