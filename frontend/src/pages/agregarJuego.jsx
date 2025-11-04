import './pages.css';
import FormularioJuego from "../components/formularioJuego";

function AgregarJuego(){
    return(
        <main>
            <section className='contenedor'>
                <h1>Agregar un Nuevo Juego</h1>
                <p>Completa el formulario para agregar un nuevo juego a la biblioteca.</p>
            </section>

            <section className='contenedor'>
                <FormularioJuego />
            </section>
    
        </main>
    )
}

export default AgregarJuego;