import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';

const App = () => {
  return (
    
    <BrowserRouter>
      <nav>
      <NavLink to="/" exact="true">
  Home
</NavLink>
<NavLink to="/about" exact="true">
  About
</NavLink>
<NavLink to="/stocks" exact="true">
  Stocks
</NavLink>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/stocks/:symbol" element={<Stock/>} />
        <Route path="/stocks" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

