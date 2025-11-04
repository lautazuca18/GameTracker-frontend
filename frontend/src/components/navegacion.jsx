import './Navegacion&footer.css'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <header className='navegacion contenedor'>

      <section className='navegacion__logo'>
        <Link to="/biblioteca">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-3"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2z" />
            <path d="M15 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2z" />
            <path d="M12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2z" />
            <path d="M12 9l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2z" />
          </svg>
          <h1>Game<span className='tracker'>Tracker</span></h1>
        </Link>
      </section>

      <section className='navegacion__enlaces'>
        <nav>
          <NavLink to="/biblioteca" className={({ isActive }) => (isActive ? "activo" : "")}>Biblioteca</NavLink>
          <NavLink to="/estadisticas" className={({ isActive }) => (isActive ? "activo" : "")}>Estadísticas</NavLink>
        </nav>
      </section>

    </header>
  );
}

export default Navegacion;
