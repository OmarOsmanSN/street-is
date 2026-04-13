import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container py-8" style={styles.container}>
      <div style={styles.iconWrapper}>
        <HelpCircle size={64} color="var(--primary-color)" />
      </div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1.5rem', fontWeight: 500 }}>Page Not Found</h2>
      <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '400px', lineHeight: 1.6 }}>
        The page you are looking for doesn't exist or has been moved. 
        Please check the URL or navigate back to the home page.
      </p>
      
      <Link to="/" className="btn btn-primary">
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '60vh'
  },
  iconWrapper: {
    backgroundColor: '#eff6ff',
    padding: '1.5rem',
    borderRadius: '50%',
    marginBottom: '2rem'
  }
};

export default NotFoundPage;
