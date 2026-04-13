export const STORAGE_KEY = 'street_issues_reports';

export const getReports = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveReports = (reports) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
};

export const addReport = (report) => {
  const reports = getReports();
  const newReport = {
    ...report,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'New',
  };
  reports.push(newReport);
  saveReports(reports);
  return newReport;
};

export const updateReportStatus = (id, newStatus) => {
  const reports = getReports();
  const reportIndex = reports.findIndex((r) => r.id === id);
  if (reportIndex !== -1) {
    reports[reportIndex].status = newStatus;
    saveReports(reports);
    return reports[reportIndex];
  }
  return null;
};

export const getReportById = (id) => {
  const reports = getReports();
  return reports.find((r) => r.id === id) || null;
};
