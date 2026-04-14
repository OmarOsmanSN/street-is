import React from 'react';

const Card = ({ children, className = '', noPadding = false, hoverable = false, ...props }) => {
  const style = {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-md)',
    overflow: 'hidden',
    padding: noPadding ? '0' : 'var(--space-lg)',
    transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
    ...(hoverable ? { cursor: 'pointer' } : {}),
  };

  return (
    <div 
      className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`} 
      style={style} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
