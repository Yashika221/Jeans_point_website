import './index.css';
import './styles/HomeStyle.css'
import Home from "./pages/Home";
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Items from './pages/Items';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
