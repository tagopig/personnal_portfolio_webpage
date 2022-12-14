import React from 'react';
import './css/style.css';
//components
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
