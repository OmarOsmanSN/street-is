import React from 'react';
import { Inbox } from 'lucide-react';
import Button from './ui/Button';

const EmptyState = ({ 
  title = "No reports found", 
  message = "It looks like there aren't any reports here yet.",
  actionLabel,
  onAction
}) => {
  return (
    <div className="animate-fade-in" style={{ 
      textAlign: 'center', 
      padding: 'var(--space-xxl) var(--space-md)',
      backgroundColor: 'white',
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }}>
      <div style={{ 
        backgroundColor: 'var(--bg-main)', 
        padding: 'var(--space-lg)', 
        borderRadius: '50%',
        color: 'var(--text-muted)'
      }}>
        <Inbox size={48} />
      </div>
      <div style={{ maxWidth: '400px' }}>
        <h3 style={{ marginBottom: 'var(--space-xs)' }}>{title}</h3>
        <p className="text-muted" style={{ fontSize: '0.925rem' }}>{message}</p>
      </div>
      {actionLabel && onAction && (
        <Button variant="outline" onClick={onAction} style={{ marginTop: 'var(--space-sm)' }}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
