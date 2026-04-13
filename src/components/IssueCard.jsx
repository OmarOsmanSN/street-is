import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Tag } from 'lucide-react';

const IssueCard = ({ report, showStatusSelect = false, onStatusChange }) => {
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'New': return 'badge badge-new';
      case 'In Progress': return 'badge badge-in-progress';
      case 'Resolved': return 'badge badge-resolved';
      default: return 'badge badge-new';
    }
  };

  const formattedDate = new Date(report.createdAt).toLocaleDateString();

  return (
    <div className="card" style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        {report.image ? (
          <img src={report.image} alt={report.title} style={styles.image} />
        ) : (
          <div style={styles.placeholderImage}>No Image</div>
        )}
        <div style={styles.statusBadgeContainer}>
          {showStatusSelect ? (
            <select 
              value={report.status} 
              onChange={(e) => onStatusChange(report.id, e.target.value)}
              className={getStatusBadgeClass(report.status)}
              style={styles.statusSelect}
            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          ) : (
            <span className={getStatusBadgeClass(report.status)}>
              {report.status}
            </span>
          )}
        </div>
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.title} className="text-truncate">{report.title}</h3>
        
        <div style={styles.metaInfo}>
          <div style={styles.metaItem}>
            <Tag size={14} /> <span>{report.category}</span>
          </div>
          <div style={styles.metaItem}>
            <MapPin size={14} /> <span className="text-truncate" style={{maxWidth: '120px'}}>{report.location}</span>
          </div>
          <div style={styles.metaItem}>
            <Calendar size={14} /> <span>{formattedDate}</span>
          </div>
        </div>

        <p style={styles.description}>{report.description}</p>

        <div style={styles.footer}>
          <Link to={`/report/${report.id}`} className="btn btn-outline" style={{width: '100%', padding: '0.5rem'}}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    backgroundColor: '#e2e8f0'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    fontWeight: 500
  },
  statusBadgeContainer: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
  statusSelect: {
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    outline: 'none',
    WebkitAppearance: 'none',
    paddingRight: '1rem'
  },
  content: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: '1.25rem',
    marginBottom: '0.75rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  metaInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '1rem',
    fontSize: '0.85rem',
    color: 'var(--text-muted)'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  description: {
    color: 'var(--text-main)',
    marginBottom: '1.5rem',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontSize: '0.95rem',
    flexGrow: 1
  },
  footer: {
    marginTop: 'auto'
  }
};

export default IssueCard;
