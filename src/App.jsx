import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';

import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="grain-overlay"></div>
      <Header />
      <main>
        <Hero />
        <Studio />
        <Services />
        <Portfolio />
        <Process />

        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
