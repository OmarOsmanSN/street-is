import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 'var(--space-xxl) 0',
      textAlign: 'center'
    }}>
      <div style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
        <FileQuestion size={80} />
      </div>
      <h1 style={{ fontSize: '4rem', marginBottom: 'var(--space-xs)' }}>404</h1>
      <h2>Page Not Found</h2>
      <p className="text-muted" style={{ maxWidth: '400px', marginTop: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>
          <Home size={18} />
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
