import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import './Navegacion&footer.css';

function FormularioReseña() {
  const [params] = useSearchParams();
  const juegoId = params.get("juegoId");

  const [juego, setJuego] = useState(null);
  const [resenas, setResenas] = useState([]);

  const [puntuacion, setPuntuacion] = useState("");
  const [textoReseña, setTextoReseña] = useState("");
  const [horasJugadas, setHorasJugadas] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [recomendaria, setRecomendaria] = useState(null);

  // Traer datos del juego
  useEffect(() => {
    const fetchJuego = async () => {
      try {
        const res = await fetch(`http://localhost:3000/juegos/${juegoId}`);
        const data = await res.json();
        setJuego(data);
      } catch (error) {
        console.error("Error cargando juego:", error);
      }
    };

    if (juegoId) fetchJuego();
  }, [juegoId]);

  // Traer reseñas del juego
  const cargarResenas = async () => {
    try {
      const res = await fetch(`http://localhost:3000/resenas/juego/${juegoId}`);
      const data = await res.json();
      setResenas(data);
    } catch (error) {
      console.error("Error cargando reseñas:", error);
    }
  };

  useEffect(() => {
    if (juegoId) cargarResenas();
  }, [juegoId]);

  // Enviar reseña al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaResena = {
      juegoId,
      puntuacion: Number(puntuacion),
      textoReseña,
      horasJugadas: Number(horasJugadas),
      dificultad,
      recomendaria: recomendaria === true,
    };

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaResena),
      });

      if (response.ok) {
        alert("✅ Reseña agregada correctamente");
        setPuntuacion("");
        setTextoReseña("");
        setHorasJugadas("");
        setDificultad("");
        setRecomendaria(null);
        cargarResenas();
      } else {
        alert("❌ Error al guardar la reseña");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      {/* Mostrar datos del juego */}
      {juego && (
        <div className="info-juego">
          <div className="info-juego-juego">
            <img
            src={juego.imagenPortada}
            alt={juego.titulo}
            style={{ width: "250px", borderRadius: "10px", marginBottom: "10px" }}
            />
          </div>
          <div className="info-juego-informacion">
            <div className="info-juego-informacion-1">
              <h2>{juego.titulo}</h2>
              <p>{juego.descripcion}</p>
            </div>            
          </div>
          
        </div>
      )}

      {/*Formulario de reseña */}
      <form onSubmit={handleSubmit}>
        <div className="formulario-agregar-juego">
          <div className="formulario-agregar-juego-campos">
            <label>Puntuación</label>
            <input
              placeholder="Puntuación del juego"
              type="number"
              min={0}
              max={5}
              value={puntuacion}
              onChange={(e) => setPuntuacion(e.target.value)}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Horas Jugadas</label>
            <input
              type="number"
              min={0}
              value={horasJugadas}
              placeholder="Horas jugadas del juego"
              onChange={(e) => setHorasJugadas(e.target.value)}
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Reseña</label>
            <textarea
            placeholder="Reseña sobre el juego"
            value={textoReseña}
            onChange={(e) => setTextoReseña(e.target.value)}
            required
            ></textarea>
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Dificultad</label>
            <input
              type="text"
              placeholder="Dificultad del juego"
              value={dificultad}
              onChange={(e) => setDificultad(e.target.value)}
            />
          </div>
          

          <div>
            <p>Recomendado</p>
            <div>
              <label>Recomiendo</label>
              <input
                type="radio"
                name="recomendacion"
                value="true"
                checked={recomendaria === true}
                onChange={() => setRecomendaria(true)}
              />
            </div>
        
            <label>No Recomiendo</label>
            <input
              type="radio"
              name="recomendacion"
              value="false"
              checked={recomendaria === false}
              onChange={() => setRecomendaria(false)}
            />
          </div>

        </div>
        <button type="submit">Guardar Reseña</button>
      </form>

      {/*Listado de reseñas */}
      <section style={{ marginTop: "30px" }}>
        <h3>Reseñas del juego</h3>

        {resenas.length === 0 ? (
          <p>No hay reseñas todavía.</p>
        ) : (
          resenas.map((r) => (
            <div key={r._id} className="card-reseña" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", marginTop: "10px" }}>
              <p><strong>Puntuación:</strong> {r.puntuacion}/5</p>
              <p><strong>Horas jugadas:</strong> {r.horasJugadas}</p>
              <p><strong>Dificultad:</strong> {r.dificultad}</p>
              <p><strong>Recomienda:</strong> {r.recomendaria ? "Sí" : "No"}</p>
              <p><strong>Reseña:</strong> {r.textoReseña}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default FormularioReseña;
