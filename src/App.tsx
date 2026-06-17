import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wholesale from './pages/Wholesale';
import Divisions from './pages/Divisions';
import About from './pages/About';
import Retail from './pages/Retail';
import Production from './pages/Production';
import Quality from './pages/Quality';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import TechnicalCatalog from './pages/TechnicalCatalog';
import Sourcing from './pages/Sourcing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/about" element={<About />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/production" element={<Production />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/sourcing" element={<Sourcing />} />
        <Route path="/technical-catalog" element={<TechnicalCatalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
