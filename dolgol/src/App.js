import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dolgol from './component/Dolgol';
import HealthCheck from './component/HealthCheck';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/v1/dolgol' element={<Dolgol />} />
        <Route path='healthcheck' element={<HealthCheck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
