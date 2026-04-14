import { STORAGE_KEY } from '../constants';

/**
 * Get all reports from localStorage
 */
export const getReports = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error parsing localStorage data:', error);
        return [];
    }
};

/**
 * Save reports array to localStorage
 */
export const saveReports = (reports) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

/**
 * Add a new report
 */
export const addReport = (reportData) => {
    const reports = getReports();
    const newReport = {
        ...reportData,
        id: crypto.randomUUID(),
        status: 'New',
        createdAt: new Date().toISOString()
    };
    
    reports.unshift(newReport); // Add to beginning (newest first)
    saveReports(reports);
    return newReport;
};

/**
 * Get a single report by ID
 */
export const getReportById = (id) => {
    const reports = getReports();
    return reports.find(r => r.id === id) || null;
};

/**
 * Update the status of a report
 */
export const updateReportStatus = (id, newStatus) => {
    const reports = getReports();
    const index = reports.findIndex(r => r.id === id);
    
    if (index !== -1) {
        reports[index].status = newStatus;
        saveReports(reports);
        return reports[index];
    }
    return null;
};
