// Main App Component - handles layout and routing
// Combines Navbar, Sidebar, and Dashboard components
import React from 'react';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <Navbar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;