import './pages.css';

function Estadisticas() {
  return (

    <main className='contenedor'>

      <section className='estadisticaTitulo'>
        <h1>Mis Estadisticas de Juego</h1>
      </section>

      <section className='estadisticaTarjertas'>

        <div className='tarjetaEstadistica'>
          <p>total de juegos</p>
          <h2>125</h2>
        </div>

        <div className='tarjetaEstadistica'>
          <p>juegos completados</p>
          <h2>78</h2>
        </div>
        
        <div className='tarjetaEstadistica'>
          <p>horas jugadas</p>
          <h2>450h</h2>
        </div>

      </section>
      
    </main>
    
  );
}

export default Estadisticas;
