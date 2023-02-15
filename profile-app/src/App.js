
import './App.css';
import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
    <Header />
      <About />
<Project />

  <Footer />

    </div>
  );
}

export default App;
