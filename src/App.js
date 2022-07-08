import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
// import './placeholder.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
