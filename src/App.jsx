import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/encabezado/menu/menu'
import Footer from './components/footer/footer';
import Home from './components/home/Home';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactanos" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 