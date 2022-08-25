import React from 'react'
import './App.css';
import Navigation from './comonents/Navigation';
import HeroSection from './comonents/HeroSection';
import StatSection from './comonents/StatSection';
function App() {
  return (
    <div className="App">
     <Navigation/>
     <HeroSection/>
     <StatSection/>
    </div>
  );
}

export default App;
