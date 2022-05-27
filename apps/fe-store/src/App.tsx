import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainNav from './components/nav';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <MainNav/>
      <Routes>
        <Route path="/" element={<div>hello home</div>} />
        <Route path="creator" element={<div>creator here</div>} />
      </Routes>
    </div>
  );
}

export default App;
