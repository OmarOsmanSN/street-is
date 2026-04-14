import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import MapPicker from './MapPicker';
import ImageUploader from './ImageUploader';
import Button from './ui/Button';
import Card from './ui/Card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ReportForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    locationText: '',
    description: '',
    coordinates: null,
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleLocationSelect = (latlng) => {
    setFormData((prev) => ({ ...prev, coordinates: latlng }));
    if (errors.coordinates) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.coordinates;
        return newErrors;
      });
    }
  };

  const handleImageSelect = (base64) => {
    setFormData((prev) => ({ ...prev, image: base64 }));
    if (errors.image) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.image;
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.locationText.trim()) newErrors.locationText = 'Location description is required';
    if (!formData.description.trim()) newErrors.description = 'Detail description is required';
    if (!formData.coordinates) newErrors.coordinates = 'Please select a location on the map';
    if (!formData.image) newErrors.image = 'Please upload an image of the issue';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const result = await onSubmit(formData);
    if (result) {
      setSuccess(true);
      setFormData({
        title: '',
        category: '',
        locationText: '',
        description: '',
        coordinates: null,
        image: null,
      });
    }
  };

  if (success) {
    return (
      <Card className="animate-fade-in" style={{ textAlign: 'center', padding: 'var(--space-xxl)' }}>
        <div style={{ color: 'var(--success)', marginBottom: 'var(--space-md)' }}>
          <CheckCircle2 size={64} style={{ margin: '0 auto' }} />
        </div>
        <h2>Report Submitted!</h2>
        <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>
          Thank you for helping us keep our streets safe. Your report has been saved and will be reviewed by our team.
        </p>
        <Button onClick={() => setSuccess(false)}>Submit Another Report</Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }}>
        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          <Card>
            <h3 style={{ marginBottom: 'var(--space-lg)' }}>Issue Details</h3>
            
            <div className="form-field">
              <label className="label">Issue Title</label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="e.g. Large pothole on Main St"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <p style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '4px' }}>{errors.title}</p>}
            </div>

            <div className="form-field">
              <label className="label">Category</label>
              <select
                name="category"
                className="select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '4px' }}>{errors.category}</p>}
            </div>

            <div className="form-field">
              <label className="label">Location Description</label>
              <input
                type="text"
                name="locationText"
                className="input"
                placeholder="e.g. Near the bus stop at 123 Main St"
                value={formData.locationText}
                onChange={handleChange}
              />
              {errors.locationText && <p style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '4px' }}>{errors.locationText}</p>}
            </div>

            <div className="form-field">
              <label className="label">Detailed Description</label>
              <textarea
                name="description"
                className="textarea"
                placeholder="Please provide more details about the issue..."
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && <p style={{ color: 'var(--danger)', fontSize: '0.75rem', marginTop: '4px' }}>{errors.description}</p>}
            </div>
          </Card>

          <Card>
            <h3 style={{ marginBottom: 'var(--space-lg)' }}>Select Location</h3>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: 'var(--space-md)' }}>
              Click on the map to pinpoint exactly where the issue is.
            </p>
            <MapPicker onLocationSelect={handleLocationSelect} selectedLocation={formData.coordinates} />
            {errors.coordinates && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--danger)', fontSize: '0.75rem', marginTop: '8px' }}>
                <AlertCircle size={14} />
                <span>{errors.coordinates}</span>
              </div>
            )}
          </Card>

          <Card>
            <h3 style={{ marginBottom: 'var(--space-lg)' }}>Upload Photo</h3>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: 'var(--space-md)' }}>
              Please provide a clear photo of the issue to help our team understand the problem.
            </p>
            <ImageUploader onImageSelect={handleImageSelect} initialImage={formData.image} />
            {errors.image && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--danger)', fontSize: '0.75rem', marginTop: '8px' }}>
                <AlertCircle size={14} />
                <span>{errors.image}</span>
              </div>
            )}
          </Card>
        </div>

        <div style={{ marginTop: 'var(--space-md)' }}>
          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Report'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReportForm;
