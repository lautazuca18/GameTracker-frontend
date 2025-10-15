import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from './components/navegacion.jsx';
import Footer from './components/footer.jsx';

// Páginas
import Explorar from './pages/explorar.jsx';
import Biblioteca from './pages/biblioteca.jsx';
import Estadisticas from './pages/estadisticas.jsx';

function App() {
  return (
    <Router>
      <Navegacion />

      <Routes>
        <Route path="/" element={<Explorar />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
