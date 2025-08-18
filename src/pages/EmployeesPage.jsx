// Employees Page - dedicated page for employee management
import React, { useState, useCallback, useMemo } from 'react';
import { employees as initialEmployees } from '../data.js';
import EmployeeCard from '../components/EmployeeCard';
import EmployeeTable from '../components/EmployeeTable';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useNavigation } from '../contexts/NavigationContext';

const EmployeesPage = () => {
  const { navigateTo } = useNavigation();
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('cards');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Filter employees based on search term and department
  const filteredEmployees = useMemo(() => {
    return employees.filter(employee => {
      const matchesSearch = searchTerm === '' || 
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = selectedDepartment === 'all' || 
        employee.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [employees, searchTerm, selectedDepartment]);

  // Get unique departments
  const departments = useMemo(() => {
    return [...new Set(employees.map(emp => emp.department))].sort();
  }, [employees]);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDeleteEmployee = (employee) => {
    if (window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
      setEmployees(prev => prev.filter(emp => emp.id !== employee.id));
    }
  };

  const handleSaveEmployee = (employeeData) => {
    if (editingEmployee) {
      setEmployees(prev => prev.map(emp => 
        emp.id === editingEmployee.id ? employeeData : emp
      ));
    } else {
      setEmployees(prev => [...prev, employeeData]);
    }
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
          <span className="text-gray-900 dark:text-white font-medium">Employees</span>
        </nav>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Employees</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage and monitor your workforce</p>
          </div>
          <Button
            onClick={handleAddEmployee}
            variant="primary"
            className="whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Employee
          </Button>
        </div>
      </div>

      {/* Controls Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left side - Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search employees by name, position, or department..."
            />
            
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[160px]"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'cards'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2" />
              </svg>
              Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Table
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="font-medium text-gray-900 dark:text-white">{filteredEmployees.length}</span> of{' '}
            <span className="font-medium text-gray-900 dark:text-white">{employees.length}</span> employees
            {selectedDepartment !== 'all' && (
              <span> in <span className="font-medium text-blue-600 dark:text-blue-400">{selectedDepartment}</span></span>
            )}
            {searchTerm && (
              <span> matching "<span className="font-medium text-blue-600 dark:text-blue-400">{searchTerm}</span>"</span>
            )}
          </p>
        </div>
      </div>

      {/* Employee Display */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={handleEditEmployee}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>
      ) : (
        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />
      )}

      {/* Empty State */}
      {filteredEmployees.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center border border-gray-100 dark:border-gray-700">
          <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No employees found</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            {searchTerm || selectedDepartment !== 'all'
              ? 'Try adjusting your search criteria or filters to find employees.'
              : 'Get started by adding your first employee to the system.'
            }
          </p>
          <div className="flex justify-center gap-3">
            {(searchTerm || selectedDepartment !== 'all') && (
              <Button
                variant="secondary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
              >
                Clear Filters
              </Button>
            )}
            <Button
              variant="primary"
              onClick={handleAddEmployee}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Employee
            </Button>
          </div>
        </div>
      )}

      {/* Modal for Add/Edit Employee */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEmployee}
        employee={editingEmployee}
        title={editingEmployee ? `Edit ${editingEmployee.name}` : 'Add New Employee'}
      />
    </div>
  );
};

export default EmployeesPage;