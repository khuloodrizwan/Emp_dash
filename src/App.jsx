// Main App Component - handles layout, routing, and context providers
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import EmployeesPage from './pages/EmployeesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import './App.css';

// Main Layout Component with routing logic
const MainLayout = () => {
  const { currentPage } = useNavigation();

  // Render different pages based on current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'employees':
        return <EmployeesPage />;
      case 'departments':
        return <DepartmentsPage />;
      case 'analytics':
        return (
          <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Analytics Dashboard</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Advanced analytics and reporting features coming soon! Track employee performance, 
                  department metrics, and organizational insights.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    💡 This page is under development
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'payroll':
        return (
          <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payroll Management</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive payroll system for salary management, tax calculations, 
                  and payment processing.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    💼 This page is under development
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reports & Documentation</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Generate detailed reports, export data, and create documentation 
                  for compliance and analysis.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    📊 This page is under development
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">System Settings</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Configure system preferences, user permissions, and application settings.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ⚙️ This page is under development
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Help & Support</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Find answers to common questions, access documentation, and get support.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    📚 This page is under development
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <Navbar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

// Main App Component with all providers
function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <MainLayout />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;