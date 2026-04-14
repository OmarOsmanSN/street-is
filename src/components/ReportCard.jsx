import React from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import StatusBadge from './ui/StatusBadge';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const ReportCard = ({ report }) => {
  const { id, title, category, locationText, createdAt, status, image } = report;

  return (
    <Card noPadding hoverable className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <StatusBadge status={status} />
        </div>
      </div>
      
      <div style={{ padding: 'var(--space-md)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--space-xs)', color: 'var(--primary)', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase' }}>
          {category}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }} className="text-truncate">{title}</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '8px' }}>
          <MapPin size={14} />
          <span className="text-truncate">{locationText}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 'var(--space-md)' }}>
          <Calendar size={14} />
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>

        <Link 
          to={`/report/${id}`} 
          style={{ 
            marginTop: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingTop: 'var(--space-md)',
            borderTop: '1px solid var(--border)',
            fontWeight: '600',
            fontSize: '0.875rem'
          }}
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  );
};

export default ReportCard;
