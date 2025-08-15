// Employee Card Component - displays individual employee information in card format
// Includes avatar, basic info, and action buttons
import React from 'react';
import Button from './Button';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Card Header with Avatar */}
      <div className="p-6 pb-4">
        <div className="flex items-center space-x-4">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {employee.name}
            </h3>
            <p className="text-sm text-gray-600">{employee.position}</p>
          </div>
        </div>
      </div>
      
      {/* Card Body with Employee Details */}
      <div className="px-6 pb-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Department:</span>
            <span className="text-sm font-medium text-gray-900">
              {employee.department}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Email:</span>
            <span className="text-sm text-blue-600 truncate max-w-[150px]">
              {employee.email}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Salary:</span>
            <span className="text-sm font-medium text-green-600">
              {employee.salary}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Joined:</span>
            <span className="text-sm text-gray-900">
              {new Date(employee.joinDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      
      {/* Card Footer with Action Buttons */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(employee)}
            className="flex-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </Button>
          
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(employee)}
            className="flex-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;