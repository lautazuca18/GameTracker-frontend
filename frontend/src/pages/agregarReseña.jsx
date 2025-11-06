import './pages.css';
import FormularioReseña from "../components/formularioReseña";

function Reseña(){
    return(
        <main>

            <section className='contenedor'>
                <h1>Agregar Reseña</h1>
                <p>Completa el formulario para agregar una nueva reseña al juego.</p>
            </section>

            <section className='contenedor'>
                <FormularioReseña />
            </section>
    
        </main>
    )
}

export default Reseña;