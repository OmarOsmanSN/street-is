import React, { useState, useEffect } from 'react';
import PageHeader from '../components/layout/PageHeader';
import ReportCard from '../components/ReportCard';
import EmptyState from '../components/EmptyState';
import Card from '../components/ui/Card';
import { getReports } from '../utils/storage';
import { CATEGORIES, STATUS_OPTIONS } from '../constants';
import { Search, Filter, SlidersHorizontal, BarChart3 } from 'lucide-react';

const AdminDashboardPage = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    const data = getReports();
    setReports(data);
    setFilteredReports(data);
  }, []);

  useEffect(() => {
    let result = reports;

    if (searchTerm) {
      result = result.filter(r => 
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.locationText.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory) {
      result = result.filter(r => r.category === filterCategory);
    }

    if (filterStatus) {
      result = result.filter(r => r.status === filterStatus);
    }

    setFilteredReports(result);
  }, [searchTerm, filterCategory, filterStatus, reports]);

  const stats = {
    total: reports.length,
    new: reports.filter(r => r.status === 'New').length,
    inProgress: reports.filter(r => r.status === 'In Progress').length,
    resolved: reports.filter(r => r.status === 'Resolved').length
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
        <div>
          <PageHeader 
            title="Admin Dashboard" 
            subtitle="View, track and manage all community-reported street issues."
          />
        </div>
        
        {/* Quick Stats */}
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
          {[
            { label: 'Total', value: stats.total, color: 'var(--text-main)' },
            { label: 'New', value: stats.new, color: 'var(--primary)' },
            { label: 'Progress', value: stats.inProgress, color: 'var(--warning)' },
            { label: 'Resolved', value: stats.resolved, color: 'var(--success)' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', minWidth: '80px' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: '800', color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '0.625rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Card style={{ marginBottom: 'var(--space-xl)', padding: 'var(--space-md)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
          {/* Search */}
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search title or location..." 
              className="input"
              style={{ paddingLeft: '40px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div style={{ position: 'relative' }}>
            <Filter size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <select 
              className="select" 
              style={{ paddingLeft: '40px' }}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Status Filter */}
          <div style={{ position: 'relative' }}>
            <SlidersHorizontal size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <select 
              className="select" 
              style={{ paddingLeft: '40px' }}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
        </div>
      </Card>

      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
          {filteredReports.map(report => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      ) : (
        <EmptyState 
          title={reports.length === 0 ? "No reports submitted yet" : "No matching reports"}
          message={reports.length === 0 
            ? "Reports submitted by users will appear here for you to manage." 
            : "Try adjusting your search or filters to find what you're looking for."}
          actionLabel={reports.length === 0 ? "Go to Home" : "Clear Filters"}
          onAction={() => {
            if (reports.length === 0) {
              window.location.href = '/';
            } else {
              setSearchTerm('');
              setFilterCategory('');
              setFilterStatus('');
            }
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboardPage;
