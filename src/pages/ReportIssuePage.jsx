import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import ReportForm from '../components/ReportForm';
import { addReport } from '../utils/storage';

const ReportIssuePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (reportData) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      addReport(reportData);
      setIsSubmitting(false);
      return true;
    } catch (error) {
      console.error('Error adding report:', error);
      setIsSubmitting(false);
      alert('Failed to save report. Please try again.');
      return false;
    }
  };

  return (
    <div className="container">
      <PageHeader 
        title="Report a Street Issue" 
        subtitle="Help us improve our community by reporting issues like potholes, broken lights, or illegal dumping."
        centered
      />
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ReportForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default ReportIssuePage;
