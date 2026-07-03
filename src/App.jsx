import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wedding from './pages/Wedding';
import Engagement from './pages/Engagement';
import Story from './pages/Story';
import Gallery from './pages/Gallery';
import OtherEvents from './pages/OtherEvents';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/other-events" element={<OtherEvents />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
