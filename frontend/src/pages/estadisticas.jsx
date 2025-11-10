import { useEffect, useState } from "react";
import './pages.css';

function Estadisticas() {
  const [estadisticas, setEstadisticas] = useState({
    totalJuegos: 0,
    juegosCompletados: 0,
    horasJugadas: 0,
    promedioPuntuacion: 0,
  });

  useEffect(() => {
    const fetchEstadisticas = async () => {
      try {
        const res = await fetch("http://localhost:3000/estadisticas");
        const data = await res.json();
        setEstadisticas(data);
      } catch (error) {
        console.error("Error cargando estadísticas:", error);
      }
    };
    fetchEstadisticas();
  }, []);

  return (
    <main className="contenedor">
      <section className="estadisticaTitulo">
        <h1>Mis Estadísticas de Juego</h1>
      </section>

      <section className="estadisticaTarjertas">
        <div className="tarjetaEstadistica">
          <p>Total de juegos</p>
          <h2>{estadisticas.totalJuegos}</h2>
        </div>

        <div className="tarjetaEstadistica">
          <p>Juegos completados</p>
          <h2>{estadisticas.juegosCompletados}</h2>
        </div>

        <div className="tarjetaEstadistica">
          <p>Horas jugadas</p>
          <h2>{estadisticas.horasJugadas} h</h2>
        </div>

        <div className="tarjetaEstadistica">
          <p>Promedio de puntuación</p>
          <h2>{estadisticas.promedioPuntuacion}/5</h2>
        </div>
      </section>
    </main>
  );
}

export default Estadisticas;
