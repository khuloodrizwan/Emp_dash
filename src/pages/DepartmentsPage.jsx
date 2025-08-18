// Departments Page - view and manage all departments
import React, { useState, useMemo } from 'react';
import { employees } from '../data.js';
import { useNavigation } from '../contexts/NavigationContext';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const DepartmentsPage = () => {
  const { navigateTo } = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate department statistics
  const departmentStats = useMemo(() => {
    const deptMap = employees.reduce((acc, employee) => {
      const dept = employee.department;
      if (!acc[dept]) {
        acc[dept] = {
          name: dept,
          employeeCount: 0,
          employees: []
        };
      }
      acc[dept].employeeCount++;
      acc[dept].employees.push(employee);
      return acc;
    }, {});

    return Object.values(deptMap).sort((a, b) => b.employeeCount - a.employeeCount);
  }, []);

  // Filter departments based on search
  const filteredDepartments = useMemo(() => {
    if (!searchTerm) return departmentStats;
    return departmentStats.filter(dept =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [departmentStats, searchTerm]);

  // Department colors for visual distinction
  const getDepartmentColor = (index) => {
    const colors = [
      { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', icon: 'bg-blue-500' },
      { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', icon: 'bg-green-500' },
      { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', icon: 'bg-purple-500' },
      { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', icon: 'bg-orange-500' },
      { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', icon: 'bg-pink-500' },
      { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', icon: 'bg-indigo-500' },
      { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', icon: 'bg-teal-500' },
      { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', icon: 'bg-red-500' },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <button 
            onClick={() => navigateTo('dashboard')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Dashboard
          </button>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 dark:text-white font-medium">Departments</span>
        </nav>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Departments</h1>
            <p className="text-gray-600 dark:text-gray-400">Overview of all organizational departments</p>
          </div>
          <Button variant="primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Department
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Departments</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{departmentStats.length}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Largest Department</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white truncate">
                {departmentStats[0]?.name || 'N/A'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {departmentStats[0]?.employeeCount || 0} employees
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Employees/Dept</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {Math.round(employees.length / (departmentStats.length || 1))}
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <SearchBar 
            onSearch={setSearchTerm}
            placeholder="Search departments..."
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredDepartments.length} of {departmentStats.length} departments
          </p>
        </div>
      </div>

      {/* Department Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDepartments.map((department, index) => {
          const colors = getDepartmentColor(index);
          return (
            <div
              key={department.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              onClick={() => navigateTo('employees')}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${colors.bg} rounded-full`}>
                    <div className={`w-3 h-3 ${colors.icon} rounded-full`}></div>
                  </div>
                  <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                    {department.employeeCount} employees
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {department.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Active Projects</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {Math.floor(Math.random() * 8) + 1}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Performance</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {(85 + Math.floor(Math.random() * 15)).toFixed(0)}%
                    </span>
                  </div>
                </div>

                {/* Employee Avatars Preview */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {department.employees.slice(0, 3).map((employee, idx) => (
                      <div
                        key={employee.id}
                        className={`w-8 h-8 rounded-full ${colors.icon} flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-gray-800`}
                      >
                        {employee.name.charAt(0)}
                      </div>
                    ))}
                    {department.employeeCount > 3 && (
                      <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-gray-800">
                        +{department.employeeCount - 3}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateTo('employees');
                    }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    View All →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredDepartments.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center border border-gray-100 dark:border-gray-700">
          <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No departments found</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {searchTerm 
              ? `No departments match "${searchTerm}". Try adjusting your search.`
              : 'No departments have been created yet.'
            }
          </p>
          {searchTerm && (
            <Button variant="secondary" onClick={() => setSearchTerm('')}>
              Clear Search
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default DepartmentsPage;