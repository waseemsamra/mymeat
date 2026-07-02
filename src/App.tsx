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
import TechnicalSpecs from './pages/TechnicalSpecs';
import BeefWholesale from './pages/BeefWholesale';
import MuttonWholesale from './pages/MuttonWholesale';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beef-wholesale-dubai" element={<BeefWholesale />} />
        <Route path="/mutton-wholesale-dubai" element={<MuttonWholesale />} />
        <Route path="/beef-mutton-lamb-wholesale-dubai" element={<Wholesale />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/about-marahib-food-stuff" element={<About />} />
        <Route path="/retail-beef-mutton-lamb-dubai" element={<Retail />} />
        <Route path="/meat-production-facility-dubai" element={<Production />} />
        <Route path="/beef-quality-certification-haccp" element={<Quality />} />
        <Route path="/beef-mutton-lamb-catalog-dubai" element={<Catalog />} />
        <Route path="/global-beef-sourcing-australia-pakistan-india" element={<Sourcing />} />
        <Route path="/technical-beef-catalog-dubai" element={<TechnicalCatalog />} />
        <Route path="/beef-ribeye-technical-specs" element={<TechnicalSpecs />} />
        <Route path="/contact-wholesale-dubai" element={<Contact />} />
      </Routes>
      <WhatsAppChat />
    </Router>
  );
}

export default App;