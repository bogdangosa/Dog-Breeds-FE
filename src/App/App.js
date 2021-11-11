import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Routes/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/"   element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
