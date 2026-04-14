import React from 'react';

const PageHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div style={{ 
      marginBottom: 'var(--space-xl)', 
      textAlign: centered ? 'center' : 'left',
      maxWidth: centered ? '800px' : '100%',
      margin: centered ? '0 auto var(--space-xl) auto' : '0 0 var(--space-xl) 0'
    }}>
      <h1 className="animate-fade-in" style={{ marginBottom: 'var(--space-xs)' }}>{title}</h1>
      {subtitle && (
        <p className="text-muted animate-fade-in" style={{ fontSize: '1.125rem', animationDelay: '100ms' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
