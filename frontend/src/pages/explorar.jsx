import './pages.css';
import gta from '../assets/img/gta.jpg';
import fifa from '../assets/img/fifa.jfif';
import minecraft from '../assets/img/minecraft.png';

function Explorar() {
  return (
    <main className="contenedor">

      <section className="explorarJuegos">
        <h1>Explorar Juegos</h1>
        <p>Descubre nuevos juegos y añádelos a tu biblioteca.</p>
      </section>

      <section className="buscador">
        <div className="buscador__contenedor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input type="text" placeholder="Buscar..." />
        </div>
      </section>

      <section className="juegos">

        <div className="juegos__card">
          <img src={gta} alt="" />
          <article className="juegos__info">
            <h4>GTA</h4>
            <p>Fight for survival in a galaxy...</p>
          </article>
        </div>

        <div className="juegos__card">
          <img src={fifa} alt="" />
          <article className="juegos__info">
            <h4>GTA</h4>
            <p>Fight for survival in a galaxy...</p>
          </article>
        </div>

        <div className="juegos__card">
          <img src={minecraft} alt="" />
          <article className="juegos__info">
            <h4>GTA</h4>
            <p>Fight for survival in a galaxy...</p>
          </article>
        </div>

      </section>

    </main>
  );
}

export default Explorar;
