import React from 'react';

const StatusBadge = ({ status }) => {
  const getStyles = (status) => {
    switch (status) {
      case 'New':
        return {
          bg: 'var(--primary-light)',
          color: 'var(--primary)',
          border: 'rgba(37, 99, 235, 0.2)'
        };
      case 'In Progress':
        return {
          bg: 'var(--warning-light)',
          color: 'var(--warning)',
          border: 'rgba(245, 158, 11, 0.2)'
        };
      case 'Resolved':
        return {
          bg: 'var(--success-light)',
          color: 'var(--success)',
          border: 'rgba(16, 185, 129, 0.2)'
        };
      default:
        return {
          bg: '#f1f5f9',
          color: '#64748b',
          border: 'rgba(100, 116, 139, 0.2)'
        };
    }
  };

  const { bg, color, border } = getStyles(status);

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: bg,
    color: color,
    border: `1px solid ${border}`,
    textTransform: 'uppercase',
    letterSpacing: '0.025em'
  };

  return (
    <span style={style} className="status-badge">
      {status}
    </span>
  );
};

export default StatusBadge;
