import React from 'react';
import IssueForm from '../components/IssueForm';

const ReportIssuePage = () => {
  return (
    <div className="container py-8">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Report a Street Issue</h1>
        <p className="text-muted" style={{ marginTop: '0.5rem' }}>
          Please provide accurate details to help us address the problem faster.
        </p>
      </div>
      <IssueForm />
    </div>
  );
};

export default ReportIssuePage;
