import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './components/Header';
import {About} from './components/About';



function App() {
  return (
    <div className="App">
        <div className="main-container">
          <Header />
          <About />

          <p className="copyright">&copy; Copyright Youth India Foundation </p>
        </div>
    </div>
  );
}

export default App;
