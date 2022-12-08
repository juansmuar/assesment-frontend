import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalle/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;
