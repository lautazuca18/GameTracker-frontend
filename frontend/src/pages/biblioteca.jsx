import './pages.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TarjetaJuego from "../components/TarjetaJuego";

function Biblioteca() {
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    //Conexión con el back

    fetch("http://localhost:3000/juegos")
      .then((res) => res.json())
      .then((data) => {
        setJuegos(data);
        setCargando(false);
      });
  }, []);

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

        {juegos.map((juego) => (
          <TarjetaJuego key={juego._id} juego={juego}/>
        ))}
      
      </section>
    </main>
  );
}

export default Biblioteca;
