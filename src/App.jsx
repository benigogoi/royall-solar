import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ClientsPage from './pages/ClientsPage';
import SupportPage from './pages/SupportPage';
import CertificationsPage from './pages/CertificationsPage';
import OnGridPage from './pages/OnGridPage';
import OffGridPage from './pages/OffGridPage';
import HybridPage from './pages/HybridPage';
import ProjectsPage from './pages/ProjectsPage';
import NetMeteringPage from './pages/NetMeteringPage';
import ResidentialPage from './pages/ResidentialPage';
import PMSuryaGharPage from './pages/PMSuryaGharPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/dealership" element={<ClientsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/on-grid" element={<OnGridPage />} />
        <Route path="/off-grid" element={<OffGridPage />} />
        <Route path="/hybrid" element={<HybridPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/net-metering" element={<NetMeteringPage />} />
        <Route path="/residential-solar" element={<ResidentialPage />} />
        <Route path="/pm-surya-ghar" element={<PMSuryaGharPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
