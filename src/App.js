import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Education />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
