import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import ActivitiesPage from './pages/ActivityPage';
import Navbar from './components/Navbar';
//import axios from "axios";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
