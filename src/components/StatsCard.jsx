// Stats Card Component - clickable cards with navigation functionality
import React from 'react';

const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  iconBgColor = 'bg-blue-100', 
  iconTextColor = 'text-blue-600',
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
        <div className={`p-3 ${iconBgColor} dark:bg-opacity-20 rounded-full`}>
          <div className={`w-6 h-6 ${iconTextColor} dark:text-white`}>
            {icon}
          </div>
        </div>
      </div>
      {subtitle && (
        <div className="mt-4">
          <span className="text-green-600 dark:text-green-400 text-sm font-medium">
            {subtitle.highlight}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
            {subtitle.text}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;