import { getReports, saveReports } from '../utils/storage';

const mockReports = [
  {
    id: 'mock-1',
    title: 'Large Pothole on High Street',
    description: 'A very deep pothole located right in the middle of the road. Multiple cars have been swerving to avoid it, creating a dangerous situation.',
    category: 'Pothole',
    locationText: 'High Street, near the library',
    coordinates: { lat: 51.505, lng: -0.09 },
    image: 'https://images.unsplash.com/photo-1544473403-43915358118d?q=80&w=800&auto=format&fit=crop',
    status: 'New',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
  },
  {
    id: 'mock-2',
    title: 'Broken Street Light',
    description: 'The street light at the corner of Baker St and 5th is flickering and mostly dark. This makes the intersection very dark at night.',
    category: 'Broken Street Light',
    locationText: 'Corner of Baker St and 5th',
    coordinates: { lat: 51.51, lng: -0.1 },
    image: 'https://images.unsplash.com/photo-1510519133418-2417dfbb6663?q=80&w=800&auto=format&fit=crop',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
  },
  {
    id: 'mock-3',
    title: 'Illegal Garbage Dumping',
    description: 'A pile of old furniture and black bags has been left on the sidewalk, blocking pedestrian access.',
    category: 'Garbage',
    locationText: 'Green Lane, Alleyway entrance',
    coordinates: { lat: 51.515, lng: -0.08 },
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=800&auto=format&fit=crop',
    status: 'Resolved',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(), // 10 days ago
  }
];

/**
 * Seed localStorage with mock data if it's currently empty
 */
export const loadMockDataIfEmpty = () => {
  const currentReports = getReports();
  if (currentReports.length === 0) {
    saveReports(mockReports);
  }
};
