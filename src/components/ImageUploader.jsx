import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { convertFileToBase64 } from '../utils/fileHelpers';
import Button from './ui/Button';

const ImageUploader = ({ onImageSelect, initialImage = null }) => {
  const [preview, setPreview] = useState(initialImage);
  const [isHovering, setIsHovering] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image is too large (max 5MB)');
        return;
      }

      try {
        const base64 = await convertFileToBase64(file);
        setPreview(base64);
        onImageSelect(base64);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    }
  };

  const clearImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPreview(null);
    onImageSelect(null);
  };

  return (
    <div className="image-uploader">
      {preview ? (
        <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img 
            src={preview} 
            alt="Upload preview" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} 
          />
          <button
            onClick={clearImage}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              color: 'var(--danger)'
            }}
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <label
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            border: `2px dashed ${isHovering ? 'var(--primary)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            backgroundColor: isHovering ? 'var(--primary-light)' : 'white',
            transition: 'all var(--transition-fast)',
            color: 'var(--text-muted)'
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <Upload size={32} style={{ marginBottom: '0.75rem', color: isHovering ? 'var(--primary)' : 'var(--secondary)' }} />
          <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>Click to upload an image</p>
          <p style={{ fontSize: '0.75rem' }}>SVG, PNG, JPG (max 5MB)</p>
        </label>
      )}
    </div>
  );
};

export default ImageUploader;
