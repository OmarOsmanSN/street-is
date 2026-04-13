import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Tag, AlertCircle } from 'lucide-react';
import { getReportById, updateReportStatus } from '../utils/storage';

const ReportDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);

  useEffect(() => {
    const data = getReportById(id);
    if (!data) {
      navigate('/not-found');
    } else {
      setReport(data);
    }
  }, [id, navigate]);

  if (!report) return null;

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    const updated = updateReportStatus(report.id, newStatus);
    if (updated) {
      setReport({ ...report, status: updated.status });
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'New': return 'var(--primary-color)';
      case 'In Progress': return 'var(--warning-color)';
      case 'Resolved': return 'var(--success-color)';
      default: return 'var(--text-main)';
    }
  };

  return (
    <div className="container py-8" style={styles.container}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/admin" style={styles.backLink}>
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </div>

      <div className="card" style={styles.detailsCard}>
        <div style={styles.imageSection}>
          {report.image ? (
            <img src={report.image} alt={report.title} style={styles.image} />
          ) : (
            <div style={styles.noImage}>
              <AlertCircle size={48} color="var(--text-muted)" />
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>No image provided</p>
            </div>
          )}
        </div>

        <div style={styles.infoSection}>
          <div style={styles.headerRow}>
            <h1>{report.title}</h1>
            <div style={styles.statusBox}>
              <label style={styles.statusLabel}>Status</label>
              <select 
                style={{...styles.statusSelect, color: getStatusColor(report.status)}}
                value={report.status}
                onChange={handleStatusChange}
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>

          <div style={styles.metadataGrid}>
            <div style={styles.metadataItem}>
              <div style={styles.metadataIcon}><Tag size={18} /></div>
              <div>
                <div style={styles.metadataLabel}>Category</div>
                <div style={styles.metadataValue}>{report.category}</div>
              </div>
            </div>
            
            <div style={styles.metadataItem}>
              <div style={styles.metadataIcon}><MapPin size={18} /></div>
              <div>
                <div style={styles.metadataLabel}>Location</div>
                <div style={styles.metadataValue}>{report.location}</div>
              </div>
            </div>
            
            <div style={styles.metadataItem}>
              <div style={styles.metadataIcon}><Calendar size={18} /></div>
              <div>
                <div style={styles.metadataLabel}>Reported On</div>
                <div style={styles.metadataValue}>{new Date(report.createdAt).toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div style={styles.descriptionBox}>
            <h3 style={{ marginBottom: '0.75rem' }}>Description</h3>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{report.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px'
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
    transition: 'color 0.2s',
    textDecoration: 'none'
  },
  detailsCard: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  imageSection: {
    width: '100%',
    height: '400px',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-color)'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  noImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoSection: {
    padding: '2rem'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  },
  statusBox: {
    backgroundColor: 'var(--bg-color)',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)'
  },
  statusLabel: {
    display: 'block',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontWeight: 600,
    marginBottom: '0.25rem'
  },
  statusSelect: {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
    width: '100%'
  },
  metadataGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: 'var(--bg-color)',
    borderRadius: 'var(--radius-lg)'
  },
  metadataItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  metadataIcon: {
    backgroundColor: 'var(--surface-color)',
    padding: '0.5rem',
    borderRadius: 'var(--radius-md)',
    color: 'var(--primary-color)',
    boxShadow: 'var(--shadow-sm)'
  },
  metadataLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginBottom: '0.25rem'
  },
  metadataValue: {
    fontWeight: 600,
    color: 'var(--text-main)'
  },
  descriptionBox: {
    borderTop: '1px solid var(--border-color)',
    paddingTop: '2rem'
  }
};

export default ReportDetailsPage;
