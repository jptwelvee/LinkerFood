import React from 'react';

export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-orange-100 text-orange-700',
    default: 'bg-gray-100 text-gray-700',
  };
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};