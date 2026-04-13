import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, CheckCircle } from 'lucide-react';
import { addReport } from '../utils/storage';
import { convertFileToBase64 } from '../utils/fileHelpers';

const IssueForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    'Road Damage', 'Lighting', 'Debris', 'Signage', 'Traffic Signals', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }
      setImageFile(file);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let imageBase64 = null;
      if (imageFile) {
        imageBase64 = await convertFileToBase64(imageFile);
      }

      const reportData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        category: formData.category,
        location: formData.location.trim(),
        image: imageBase64
      };

      addReport(reportData);
      
      setSuccess(true);
      setFormData({ title: '', description: '', category: '', location: '' });
      setImageFile(null);
      setImagePreview(null);
      
      // Optionally redirect or reset
      setTimeout(() => {
        setSuccess(false);
        navigate('/');
      }, 3000);
      
    } catch (err) {
      setError("An error occurred while saving the report. Try a smaller image.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div style={styles.successContainer} className="card">
        <CheckCircle size={64} color="var(--success-color)" />
        <h2 style={{ marginTop: '1rem' }}>Report Submitted Successfully!</h2>
        <p className="text-muted" style={{ marginTop: '0.5rem' }}>
          Thank you for helping keep our streets safe. Redirecting to home...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={styles.formContainer}>
      <h2 style={{ marginBottom: '1.5rem' }}>Report a New Issue</h2>
      
      {error && (
        <div style={styles.errorAlert}>
          {error}
        </div>
      )}

      <div className="form-group">
        <label className="form-label" htmlFor="title">Issue Title *</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          className="form-control" 
          required 
          value={formData.title} 
          onChange={handleInputChange} 
          placeholder="e.g. Large pothole on Main St"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="category">Category *</label>
        <select 
          id="category" 
          name="category" 
          className="form-control" 
          required
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select a category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="location">Location / Address *</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          className="form-control" 
          required 
          value={formData.location} 
          onChange={handleInputChange} 
          placeholder="e.g. In front of 123 Baker Street"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="description">Description *</label>
        <textarea 
          id="description" 
          name="description" 
          className="form-control" 
          required 
          value={formData.description} 
          onChange={handleInputChange} 
          placeholder="Please describe the issue in detail..."
        />
      </div>

      <div className="form-group">
        <label className="form-label">Upload Image</label>
        <div style={styles.uploadContainer}>
          <input 
            type="file" 
            id="imageUpload" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: 'none' }} 
          />
          <label htmlFor="imageUpload" style={styles.uploadLabel}>
            <UploadCloud size={32} color="var(--primary-color)" style={{ marginBottom: '0.5rem' }} />
            <span>Click to upload an image</span>
            <span className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Max size 5MB</span>
          </label>
        </div>
        
        {imagePreview && (
          <div style={styles.previewContainer}>
            <span className="form-label">Preview:</span>
            <img src={imagePreview} alt="Preview" style={styles.previewImage} />
          </div>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{ width: '100%', marginTop: '1rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Report'}
      </button>
    </form>
  );
};

const styles = {
  formContainer: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  successContainer: {
    padding: '4rem 2rem',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  errorAlert: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '1rem',
    borderRadius: 'var(--radius-md)',
    marginBottom: '1.5rem',
    border: '1px solid #f87171'
  },
  uploadContainer: {
    border: '2px dashed var(--border-color)',
    borderRadius: 'var(--radius-md)',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: 'var(--bg-color)',
    transition: 'var(--transition)'
  },
  uploadLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'var(--text-main)'
  },
  previewContainer: {
    marginTop: '1rem'
  },
  previewImage: {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    marginTop: '0.5rem'
  }
};

export default IssueForm;
