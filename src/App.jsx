import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ReportIssuePage from './pages/ReportIssuePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ReportDetailsPage from './pages/ReportDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import { loadMockDataIfEmpty } from './data/mockData';

function App() {
  useEffect(() => {
    // Load some mock data if localStorage is empty to give a good first impression
    loadMockDataIfEmpty();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportIssuePage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/report/:id" element={<ReportDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
