import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';
import ReportIssuePage from './pages/ReportIssuePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ReportDetailsPage from './pages/ReportDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

// Data loading
import { loadMockDataIfEmpty } from './data/mockData';

function App() {
  useEffect(() => {
    // Initialize mock data if storage is empty for a better first experience
    loadMockDataIfEmpty();
  }, []);

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportIssuePage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/report/:id" element={<ReportDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
