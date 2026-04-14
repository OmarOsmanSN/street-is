import React from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <main className="flex-grow" style={{ flexGrow: 1, padding: 'var(--space-xl) 0' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
