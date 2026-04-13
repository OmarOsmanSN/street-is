import React, { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, Inbox } from 'lucide-react';
import IssueCard from '../components/IssueCard';
import { getReports, updateReportStatus } from '../utils/storage';

const AdminDashboardPage = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = [
    'Road Damage', 'Lighting', 'Debris', 'Signage', 'Traffic Signals', 'Other'
  ];

  useEffect(() => {
    loadReports();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [reports, searchTerm, statusFilter, categoryFilter]);

  const loadReports = () => {
    const data = getReports();
    // Sort by newest first
    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setReports(data);
  };

  const applyFilters = () => {
    let result = [...reports];

    if (searchTerm) {
      const lowerTheme = searchTerm.toLowerCase();
      result = result.filter(r => 
        r.title.toLowerCase().includes(lowerTheme) || 
        r.location.toLowerCase().includes(lowerTheme)
      );
    }

    if (statusFilter) {
      result = result.filter(r => r.status === statusFilter);
    }

    if (categoryFilter) {
      result = result.filter(r => r.category === categoryFilter);
    }

    setFilteredReports(result);
  };

  const handleStatusChange = (id, newStatus) => {
    updateReportStatus(id, newStatus);
    loadReports(); // Reload to reflect changes globally
  };

  return (
    <div className="container py-8">
      <div style={styles.header}>
        <div>
          <h1>Admin Dashboard</h1>
          <p className="text-muted" style={{ marginTop: '0.5rem' }}>
            Manage and resolve reported street issues
          </p>
        </div>
        <div style={styles.statBox}>
          <div>
            <div style={styles.statLabel}>Total Issues</div>
            <div style={styles.statValue}>{reports.length}</div>
          </div>
          <div>
            <div style={styles.statLabel}>New</div>
            <div style={{...styles.statValue, color: 'var(--primary-color)' }}>
              {reports.filter(r => r.status === 'New').length}
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={styles.controlsContainer}>
        <div style={styles.searchBox}>
          <Search size={20} color="var(--text-muted)" style={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search by title or location..." 
            className="form-control"
            style={{ paddingLeft: '2.5rem' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div style={styles.filterBox}>
          <div style={styles.filterItem}>
            <SlidersHorizontal size={18} color="var(--text-muted)" />
            <select 
              className="form-control" 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ minWidth: '150px' }}
            >
              <option value="">All Statuses</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <div style={styles.filterItem}>
            <Filter size={18} color="var(--text-muted)" />
            <select 
              className="form-control" 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{ minWidth: '150px' }}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={styles.grid}>
          {filteredReports.map(report => (
            <IssueCard 
              key={report.id} 
              report={report} 
              showStatusSelect={true}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIconWrapper}>
            <Inbox size={48} color="var(--text-muted)" />
          </div>
          <h3>No reports found</h3>
          <p className="text-muted" style={{ marginTop: '0.5rem' }}>
            {reports.length === 0 ? "There are no reported issues yet." : "No issues match your current filters."}
          </p>
          {(searchTerm || statusFilter || categoryFilter) && (
            <button 
              className="btn btn-outline" 
              style={{ marginTop: '1rem' }}
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('');
                setCategoryFilter('');
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Handle responsive grid via inline styles where possible or rely on CSS classes if we had them.
// We'll add some CSS variables via inline style for grid handling.
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  statBox: {
    display: 'flex',
    gap: '2rem',
    backgroundColor: 'var(--surface-color)',
    padding: '1rem 2rem',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)'
  },
  statLabel: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--text-main)',
    marginTop: '0.25rem'
  },
  controlsContainer: {
    padding: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  searchBox: {
    position: 'relative',
    flexGrow: 1,
    minWidth: '250px',
    maxWidth: '500px'
  },
  searchIcon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  filterBox: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: 'var(--surface-color)',
    borderRadius: 'var(--radius-lg)',
    border: '1px dashed var(--border-color)'
  },
  emptyIconWrapper: {
    display: 'inline-flex',
    padding: '1rem',
    backgroundColor: 'var(--bg-color)',
    borderRadius: '50%',
    marginBottom: '1rem'
  }
};

export default AdminDashboardPage;
