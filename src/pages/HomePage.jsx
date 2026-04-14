import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, ShieldCheck, Map, PlusCircle, LayoutDashboard } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        padding: 'var(--space-xxl) 0', 
        background: 'linear-gradient(180deg, white 0%, var(--primary-light) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-flex', 
            padding: '0.5rem 1rem', 
            backgroundColor: 'white', 
            borderRadius: 'var(--radius-full)', 
            border: '1px solid var(--border)',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary)',
            marginBottom: 'var(--space-md)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            Community Reporting Tool
          </div>
          <h1 style={{ fontSize: '3.5rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>
            Improve Our Streets <span style={{ color: 'var(--primary)' }}>Together.</span>
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', marginTop: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
            Notice a pothole? Broken light? Garbage? Report it in seconds and help us keep our community safe and beautiful.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <Link to="/report">
              <Button style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                <PlusCircle size={20} />
                Report an Issue
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                <LayoutDashboard size={20} />
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof (Visual only) */}
      <section className="container" style={{ marginTop: '-40px' }}>
        <div className="grid grid-cols-1 grid-cols-3" style={{ gap: 'var(--space-lg)' }}>
          {[
            { label: 'Active Issues', value: '124', color: 'var(--primary)' },
            { label: 'Resolved', value: '890', color: 'var(--success)' },
            { label: 'Response Time', value: '< 24h', color: 'var(--warning)' }
          ].map((stat) => (
            <Card key={stat.label} style={{ textAlign: 'center', padding: 'var(--space-md)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="container section">
        <h2 className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>How it Works</h2>
        <div className="grid grid-cols-1 grid-cols-3" style={{ gap: 'var(--space-xl)' }}>
          {[
            {
              icon: <Map size={32} />,
              title: "1. Locate",
              desc: "Spot a problem and mark its exact location on our interactive map."
            },
            {
              icon: <AlertTriangle size={32} />,
              title: "2. Describe",
              desc: "Add a photo and a brief description of the issue."
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "3. Resolve",
              desc: "Our team tracks the issue and updates you as it gets fixed."
            }
          ].map((step, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 'var(--space-md)' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--primary-light)', 
                color: 'var(--primary)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-md) auto'
              }}>
                {step.icon}
              </div>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>{step.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container" style={{ marginBottom: 'var(--space-xxl)' }}>
        <div style={{ 
          backgroundColor: 'var(--text-main)', 
          color: 'white', 
          borderRadius: 'var(--radius-lg)', 
          padding: 'var(--space-xxl)',
          textAlign: 'center',
          backgroundImage: 'radial-gradient(circle at top right, #3b82f633, transparent)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>Ready to make a difference?</h2>
          <p style={{ opacity: 0.8, fontSize: '1.125rem', marginBottom: 'var(--space-xl)', maxWidth: '600px', margin: '0 auto var(--space-xl) auto' }}>
            It only takes 2 minutes to report an issue. Your neighbors will thank you.
          </p>
          <Link to="/report">
            <Button variant="primary" style={{ backgroundColor: 'white', color: 'var(--text-main)', padding: '0.75rem 2rem' }}>
              Start Reporting
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
