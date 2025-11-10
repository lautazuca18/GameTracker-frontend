import { useNavigate } from "react-router-dom";
import '../pages/pages.css';

function TarjetaJuego({ juego, onDelete }) {
  const navigate = useNavigate();

  // Eliminar juego
  const handleEliminar = () => {
    onDelete(juego._id);
  };

  // Ir al formulario de reseñas con el ID del juego
  const handleAgregarResena = () => {
    navigate(`/resena?juegoId=${juego._id}`);
  };

  // Ir al formulario para editar el juego
  const handleEditar = () => {
    navigate(`/editar/${juego._id}`);
  };


  return (
    <div className="juegosLibreria__card">
      <div className="juegosLibreria__card__img">
        <img src={juego.imagenPortada} alt={juego.titulo} />
      </div>

      <article className="juegosLibreria__card__informacion">
        <div className="juegosLibreria__card__informacion__top">
          <h2>{juego.titulo}</h2>
          <h4>Plataforma/s: <span>{juego.plataforma}</span></h4>
          <h4>Año Lanzamiento: <span>{juego.anioLanzamiento}</span></h4>
          <h4>Género: <span>{juego.genero}</span></h4>
          <h4>Desarrollador/es: <span>{juego.desarrollador}</span></h4>
          <h4>Estado: <span>{juego.completado ? "Terminado" : "En Curso"}</span></h4>
          <p>{juego.descripcion}</p>
        </div>

        <div className="juegosLibreria__card__informacion__bottom">
          
          <button className="boton-juego boton-editar" onClick={handleEditar}>
            Editar
          </button>

          <button
            className="boton-juego boton-agregar-reseña"
            onClick={handleAgregarResena}
          >
            Agregar Reseña
          </button>

          <button
            className="boton-juego boton-eliminar"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </article>
    </div>
  );
}

export default TarjetaJuego;
