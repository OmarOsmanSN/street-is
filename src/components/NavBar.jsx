import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Home, PlusCircle, LayoutDashboard } from 'lucide-react';
import '../styles/index.css'; // Just to ensure CSS is loaded if needed, though we import in main

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <div className="container" style={styles.navContainer}>
        <NavLink to="/" style={styles.logo}>
          <MapPin size={24} color="var(--primary-color)" />
          <span style={styles.logoText}>Street Issue Reporter</span>
        </NavLink>
        
        <div style={styles.navLinks}>
          <NavLink 
            to="/" 
            style={({isActive}) => isActive ? {...styles.link, ...styles.activeLink} : styles.link}
            end
          >
            <Home size={18} />
            Home
          </NavLink>
          <NavLink 
            to="/report" 
            style={({isActive}) => isActive ? {...styles.link, ...styles.activeLink} : styles.link}
          >
            <PlusCircle size={18} />
            Report Issue
          </NavLink>
          <NavLink 
            to="/admin" 
            style={({isActive}) => isActive ? {...styles.link, ...styles.activeLink} : styles.link}
          >
            <LayoutDashboard size={18} />
            Admin Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'var(--surface-color)',
    borderBottom: '1px solid var(--border-color)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: 'var(--shadow-sm)'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
  },
  logoText: {
    fontWeight: 700,
    fontSize: '1.25rem',
    color: 'var(--text-main)',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
    fontSize: '0.95rem',
    padding: '0.5rem 0',
    transition: 'color 0.2s ease',
  },
  activeLink: {
    color: 'var(--primary-color)',
    borderBottom: '2px solid var(--primary-color)'
  }
};

export default NavBar;
