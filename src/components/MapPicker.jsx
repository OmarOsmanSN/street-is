import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { DEFAULT_VIEW } from '../constants';

// Fix for default marker icons in Leaflet with React
// This is a common issue where webpack/vite doesn't load the icons correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

/**
 * Click handler component for the map
 */
const MapEvents = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng);
    },
  });
  return null;
};

const MapPicker = ({ onLocationSelect, selectedLocation, isReadOnly = false, height = '300px' }) => {
  const [position, setPosition] = useState(selectedLocation || null);

  const handleMapClick = (latlng) => {
    if (isReadOnly) return;
    setPosition(latlng);
    onLocationSelect(latlng);
  };

  return (
    <div style={{ height, width: '100%', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
      <MapContainer 
        center={selectedLocation || DEFAULT_VIEW.center} 
        zoom={selectedLocation ? 16 : DEFAULT_VIEW.zoom} 
        scrollWheelZoom={!isReadOnly}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {!isReadOnly && <MapEvents onLocationSelect={handleMapClick} />}
        
        {position && <Marker position={position} />}
      </MapContainer>
      
      {!isReadOnly && !position && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: '600',
          boxShadow: 'var(--shadow-md)',
          color: 'var(--primary)',
          pointerEvents: 'none'
        }}>
          Click on the map to select location
        </div>
      )}
    </div>
  );
};

export default MapPicker;
