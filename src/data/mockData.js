import { saveReports, getReports } from '../utils/storage';

const mockReports = [
  {
    id: '1678881234567',
    title: 'Pothole on Main Street',
    description: 'There is a large pothole in the middle of the right lane that is damaging cars.',
    category: 'Road Damage',
    location: '123 Main St',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80',
    status: 'New',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
  },
  {
    id: '1678881234568',
    title: 'Broken Streetlight',
    description: 'The streetlight is completely dark, making the crosswalk dangerous at night.',
    category: 'Lighting',
    location: 'Corner of Elm and 5th Ave',
    image: 'https://images.unsplash.com/photo-1621272036047-bc0bf1ebc01e?auto=format&fit=crop&q=80',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
  },
  {
    id: '1678881234569',
    title: 'Fallen Tree Branch',
    description: 'A large tree branch has fallen over the sidewalk blocking pedestrian access.',
    category: 'Debris',
    location: 'Parkside Drive',
    image: 'https://images.unsplash.com/photo-1590848981457-3a1def10bd0b?auto=format&fit=crop&q=80',
    status: 'Resolved',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(), // 10 days ago
  }
];

export const loadMockDataIfEmpty = () => {
  const currentReports = getReports();
  if (currentReports.length === 0) {
    saveReports(mockReports);
  }
};
