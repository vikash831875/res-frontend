import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Aboutus from './pages/Aboutus';
import Reservation from './components/Reservation';
import Services from './pages/Services';
import Team from './components/Team';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='success' element={<Success />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='reservation' element={<Reservation />} />
        <Route path='qualities' element={<Services />} />
        <Route path='team' element={<Team />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
