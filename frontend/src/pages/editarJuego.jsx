import './pages.css';
import FormularioEdicion from "../components/formularioEdicion";

function EditarJuego(){
    return(
        <main>

            <section className='contenedor'>
                <h1>Editar Juego</h1>
                <p>Completa la información que deseas editar del juego.</p>
            </section>

            <section className='contenedor'>
                <FormularioEdicion />
            </section>
    
        </main>
    )
}

export default EditarJuego;