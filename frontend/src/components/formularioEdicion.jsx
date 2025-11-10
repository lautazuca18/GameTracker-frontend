import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Navegacion&footer.css';

function FormularioEdicion() {
  const { id } = useParams(); // obtenemos el id del juego desde la URL
  const navigate = useNavigate();

  const [juego, setJuego] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    anioLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: "",
    completado: false,
  });

  // 🔹 Traer los datos del juego para editarlos
  useEffect(() => {
    const fetchJuego = async () => {
      try {
        const res = await fetch(`http://localhost:3000/juegos/${id}`);
        const data = await res.json();
        setJuego(data);
      } catch (error) {
        console.error("Error cargando juego:", error);
      }
    };
    fetchJuego();
  }, [id]);

  // 🔹 Manejar los cambios de los inputs
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setJuego((prev) => ({
      ...prev,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  // 🔹 Guardar los cambios (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/juegos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(juego),
      });

      if (res.ok) {
        alert("✅ Juego actualizado correctamente");
        navigate("/biblioteca"); // volver a la biblioteca
      } else {
        alert("❌ Error al actualizar el juego");
      }
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("⚠️ No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formulario-agregar-juego">
          <div className="formulario-agregar-juego-campos">
            <label>Título del Juego</label>
            <input
              name="titulo"
              type="text"
              value={juego.titulo}
              onChange={handleChange}
              placeholder="Ingresa el título del juego"
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Género</label>
            <input
              name="genero"
              type="text"
              value={juego.genero}
              onChange={handleChange}
              placeholder="Ingresa el género del juego"
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Plataforma</label>
            <input
              name="plataforma"
              type="text"
              value={juego.plataforma}
              onChange={handleChange}
              placeholder="Ingresa la plataforma del juego"
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Año de Lanzamiento</label>
            <input
              name="anioLanzamiento"
              type="number"
              min={0}
              value={juego.anioLanzamiento}
              onChange={handleChange}
              placeholder="Ingresa el año de lanzamiento"
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Desarrollador</label>
            <input
              name="desarrollador"
              type="text"
              value={juego.desarrollador}
              onChange={handleChange}
              placeholder="Ingresa el desarrollador del juego"
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Imagen de portada</label>
            <input
              name="imagenPortada"
              type="text"
              value={juego.imagenPortada}
              onChange={handleChange}
              placeholder="Ingresa el link de la imagen del juego"
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={juego.descripcion}
              onChange={handleChange}
              placeholder="Describe el juego..."
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <p className="p">Completado</p>
            <div className="campo-completado">
              <div>
                <label htmlFor="true">Terminado</label>
                <input
                  type="radio"
                  id="true"
                  name="completado"
                  value="true"
                  checked={juego.completado === true}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="false">En curso</label>
                <input
                  type="radio"
                  id="false"
                  name="completado"
                  value="false"
                  checked={juego.completado === false}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button className="boton-formulario-agregar-juego" type="submit">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default FormularioEdicion;
