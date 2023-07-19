import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';
import NavBar from "./components/NavBar.js"
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
 
  return (
    <div>
    <NavBar/>
      <ScrollToTop/>
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
