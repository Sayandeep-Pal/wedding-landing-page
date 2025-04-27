import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';

function App() {
  return (
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About/>
          <Services />
          <Gallery/>
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}

export default App;