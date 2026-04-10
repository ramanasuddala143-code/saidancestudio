import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Features />
      <Pricing />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
