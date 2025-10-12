import { BrowserRouter as Router } from "react-router-dom";
import Navegacion from './components/navegacion.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <Router>
      <Navegacion />
      <Footer />
    </Router>
  );
}

export default App;
