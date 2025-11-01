import '../pages/pages.css'

function TarjetaJuego({ juego }){
    return(
        <div className="juegosLibreria__card">
          <div className="juegosLibreria__card__img">
            <img src={juego.imagenPortada} alt={juego.titulo} />
          </div>

          <article className="juegosLibreria__card__informacion">
            <div className="juegosLibreria__card__informacion__top">
              <h4>{juego.titulo}</h4>
              <p>{juego.plataforma}</p>
              <p>{juego.añoLamzamiento}</p>
              <p>
                {juego.descripcion}
              </p>
            </div>

            <div className="juegosLibreria__card__informacion__bottom">
              <p>{juego.genero}</p>
              <p>{juego.desarrollador}</p>
              <p>{juego.completado == "true" ? "Terminado" : "En Curso"}</p>
            </div>
          </article>
        </div>
    )
}

export default TarjetaJuego