import React from 'react';
import Header from './components/Header.js';
import './App.css';


function App() {
  
  return (
    
    <div className="App">
      <Header />
    </div>




  );
}

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

export default App;
