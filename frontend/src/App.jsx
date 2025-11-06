import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from './components/navegacion.jsx';
import Footer from './components/footer.jsx';

// Páginas
import Biblioteca from './pages/biblioteca.jsx';
import Estadisticas from './pages/estadisticas.jsx';
import AgregarJuego from './pages/agregarJuego.jsx';
import AgregarResena from './pages/agregarReseña.jsx';

function App() {
  return (
    <Router>
      <Navegacion />

      <Routes>
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/agregar-juego" element={<AgregarJuego />} />
        <Route path="/resena" element={<AgregarResena />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
