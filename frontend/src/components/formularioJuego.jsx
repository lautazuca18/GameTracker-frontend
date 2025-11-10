import { useState } from "react";
import './Navegacion&footer.css';

function FormularioJuego() {
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    anioLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: "",
    completado: false
  });

  // Captura los cambios en cada campo
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "true" : value
    });
  };

  // Envía los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/juegos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Juego agregado correctamente 🎮");
        setFormData({
            titulo: "",
            genero: "",
            plataforma: "",
            anioLanzamiento: "",
            desarrollador: "",
            imagenPortada: "",
            descripcion: "",
            completado: false
        });
      } else {
        alert("Error al agregar el juego");
      }
    } catch (err) {
      console.error(err);
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
              placeholder="Ingresa el título del juego"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Género</label>
            <input
              name="genero"
              type="text"
              placeholder="Ingresa el género del juego"
              value={formData.genero}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Plataforma</label>
            <input
              name="plataforma"
              type="text"
              placeholder="Ingresa la plataforma del juego"
              value={formData.plataforma}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Año de Lanzamiento</label>
            <input
              name="anioLanzamiento"
              type="number"
              min={0}
              placeholder="Ingresa el año de lanzamiento"
              value={formData.anioLanzamiento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Desarrollador</label>
            <input
              name="desarrollador"
              type="text"
              placeholder="Ingresa el desarrollador del juego"
              value={formData.desarrollador}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Imagen de portada</label>
            <input
              name="imagenPortada"
              type="text"
              placeholder="Ingresa el link de la imagen del juego"
              value={formData.imagenPortada}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <label>Descripción</label>
            <textarea
              name="descripcion"
              placeholder="Describe el juego..."
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-agregar-juego-campos">
            <p className="p">Completado</p>
            <div className="campo-completado">
              <div className="campo-completado-completado">
                <label htmlFor="true">Terminado</label>
                <input
                  type="radio"
                  id="true"
                  name="completado"
                  value="true"
                  checked={formData.completado === true}
                  onChange={handleChange}
                  required
                />
                </div>
                <div className="campo-completado-curso">
                  <label htmlFor="false">En curso</label>
                <input
                  type="radio"
                  id="false"
                  name="completado"
                  value="false"
                  checked={formData.completado === false}
                  onChange={handleChange}
                  required
                />
                </div>
            </div>
          </div>
        </div>
        <button className="boton-formulario-agregar-juego" type="submit">Agregar Juego</button>
      </form>
    </div>
  );
}

export default FormularioJuego;
