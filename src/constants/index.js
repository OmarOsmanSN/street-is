export const CATEGORIES = [
  'Pothole',
  'Broken Street Light',
  'Garbage',
  'Water Leak',
  'Damaged Sidewalk',
  'Traffic Sign Issue',
  'Other'
];

export const STATUS_OPTIONS = [
  { value: 'New', label: 'New', color: 'var(--primary)' },
  { value: 'In Progress', label: 'In Progress', color: 'var(--warning)' },
  { value: 'Resolved', label: 'Resolved', color: 'var(--success)' }
];

export const STORAGE_KEY = 'street_issue_reports';

export const DEFAULT_VIEW = {
  center: [51.505, -0.09], // London as default
  zoom: 13
};
