import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', borderTop: '1px solid var(--border)', padding: 'var(--space-xl) 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <MapPin size={20} />
            <span style={{ fontWeight: '700' }}>StreetIssue Reporter</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.875rem', maxWidth: '400px' }}>
            A community-driven platform to report and track public infrastructure issues. 
            Making our streets safer and better, together.
          </p>
          <div style={{ borderTop: '1px solid var(--border)', width: '100%', paddingTop: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
            <p className="text-muted" style={{ fontSize: '0.75rem' }}>
              &copy; {new Date().getFullYear()} StreetIssue. Professional Prototype only. No real data is stored outside your browser.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
