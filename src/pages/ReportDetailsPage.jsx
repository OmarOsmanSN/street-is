import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Tag, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { getReportById, updateReportStatus } from '../utils/storage';
import { STATUS_OPTIONS } from '../constants';
import PageHeader from '../components/layout/PageHeader';
import MapPicker from '../components/MapPicker';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';

const ReportDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const data = getReportById(id);
    if (!data) {
      navigate('/not-found');
      return;
    }
    setReport(data);
  }, [id, navigate]);

  const handleStatusUpdate = (newStatus) => {
    setIsUpdating(true);
    // Simulate minor delay
    setTimeout(() => {
      const updated = updateReportStatus(report.id, newStatus);
      setReport(updated);
      setIsUpdating(false);
    }, 500);
  };

  if (!report) return null;

  return (
    <div className="container animate-fade-in">
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <Link to="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: '500' }}>
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>
              <StatusBadge status={report.status} />
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{report.category}</span>
            </div>
            <h1 style={{ marginBottom: '0' }}>{report.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginTop: 'var(--space-sm)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} />
                <span>Reported on {new Date(report.createdAt).toLocaleDateString()}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} />
                <span>ID: {report.id.substring(0, 8)}...</span>
              </div>
            </div>
          </div>

          <Card style={{ padding: 'var(--space-sm) var(--space-md)' }}>
            <label className="label" style={{ marginBottom: '8px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Update Status</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {STATUS_OPTIONS.map(opt => (
                <Button 
                  key={opt.value} 
                  variant={report.status === opt.value ? 'primary' : 'outline'}
                  size="sm"
                  style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                  onClick={() => handleStatusUpdate(opt.value)}
                  disabled={isUpdating}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
            <Card noPadding>
              <img 
                src={report.image} 
                alt={report.title} 
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', backgroundColor: 'var(--bg-main)', display: 'block' }} 
              />
            </Card>

            <Card>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>Detailed Description</h3>
              <p style={{ whiteSpace: 'pre-wrap', color: 'var(--text-main)', lineHeight: '1.6' }}>
                {report.description}
              </p>
            </Card>
          </div>

          <div style={{ display: 'grid', gap: 'var(--space-xl)', alignContent: 'start' }}>
            <Card>
              <h3 style={{ marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} color="var(--primary)" />
                Location Info
              </h3>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Description:</p>
                <p className="text-muted">{report.locationText}</p>
              </div>
              <div style={{ height: '250px', marginBottom: 'var(--space-md)' }}>
                <MapPicker isReadOnly selectedLocation={report.coordinates} height="100%" />
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-md)', fontSize: '0.8125rem' }}>
                <p className="text-muted">Coordinates: {report.coordinates.lat.toFixed(6)}, {report.coordinates.lng.toFixed(6)}</p>
              </div>
            </Card>

            <Card style={{ backgroundColor: 'var(--primary-light)', borderColor: 'rgba(37, 99, 235, 0.1)' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Status: {report.status}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--primary)', opacity: 0.8 }}>
                    {report.status === 'New' && "This report is currently waiting to be reviewed by the maintenance team."}
                    {report.status === 'In Progress' && "Working is currently underway or scheduled for this issue."}
                    {report.status === 'Resolved' && "This issue has been successfully resolved and closed."}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailsPage;
