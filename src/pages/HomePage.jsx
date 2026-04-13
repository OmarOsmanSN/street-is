import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, ShieldCheck, Map } from 'lucide-react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Improve Our Streets Together</h1>
          <p style={styles.heroSubtitle}>
            Easily report street problems such as potholes, broken lights, and debris. 
            Help us keep the community safe and beautiful.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/report" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <AlertTriangle size={20} />
              Report an Issue Now
            </Link>
            <Link to="/admin" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'white' }}>
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-8" style={{ marginTop: '2rem' }}>
        <h2 className="text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          <div className="card" style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <Map size={32} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>1. Spot a Problem</h3>
            <p className="text-muted text-center">
              Notice a pothole, broken streetlight, or any other issue in your neighborhood.
            </p>
          </div>
          <div className="card" style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <AlertTriangle size={32} color="var(--primary-color)" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>2. Report It</h3>
            <p className="text-muted text-center">
              Fill out a simple form with details and an image of the problem area.
            </p>
          </div>
          <div className="card" style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <ShieldCheck size={32} color="var(--success-color)" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>3. Get It Fixed</h3>
            <p className="text-muted text-center">
              Admins track the issues on the dashboard and update the status until resolved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 4rem)'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    padding: '6rem 1.5rem',
    textAlign: 'center',
    borderBottom: '1px solid #bfdbfe'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#1e3a8a',
    marginBottom: '1.5rem',
    fontWeight: 800,
    letterSpacing: '-0.02em'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#475569',
    marginBottom: '2.5rem',
    lineHeight: 1.6
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  featureCard: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s'
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  }
};

export default HomePage;
