import React from 'react';
import Login from './Login';
import Home from './Home';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
   
       <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Login />} />
      </Routes>

  );
}

export default App;
