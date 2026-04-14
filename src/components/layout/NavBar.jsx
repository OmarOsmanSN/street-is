import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MapPin, PlusCircle, LayoutDashboard, Home } from 'lucide-react';

const NavBar = () => {
  const navItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.925rem',
    fontWeight: '500',
    color: 'var(--text-muted)',
    transition: 'all var(--transition-fast)',
  };

  const activeStyle = {
    color: 'var(--primary)',
    backgroundColor: 'var(--primary-light)',
  };

  return (
    <nav 
      style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid var(--border)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50,
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div className="container" style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
          <div style={{ backgroundColor: 'var(--primary)', padding: '0.5rem', borderRadius: '12px', color: 'white' }}>
            <MapPin size={24} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.025em' }}>StreetReporter</span>
        </Link>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle}
            end
          >
            <Home size={18} />
            <span className="nav-text">Home</span>
          </NavLink>
          
          <NavLink 
            to="/report" 
            style={({ isActive }) => isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle}
          >
            <PlusCircle size={18} />
            <span className="nav-text">Report Issue</span>
          </NavLink>

          <NavLink 
            to="/admin" 
            style={({ isActive }) => isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle}
          >
            <LayoutDashboard size={18} />
            <span className="nav-text">Admin</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
