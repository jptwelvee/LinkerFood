import React from 'react';

export const Navigation = ({ currentView, onViewChange, pendingCount }) => {
  const NavButton = ({ view, label, badge }) => (
    <button
      onClick={() => onViewChange(view)}
      className={`flex-1 py-3 text-sm font-medium relative ${
        currentView === view 
          ? 'text-orange-500 border-b-2 border-orange-500' 
          : 'text-gray-500'
      }`}
    >
      {label}
      {badge > 0 && (
        <span className="absolute top-1 right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );

  return (
    <div className="bg-white border-b flex">
      <NavButton view="home" label="Entregas" />
      <NavButton view="discover" label="Descobrir" />
      <NavButton view="requests" label="Solicitações" badge={pendingCount} />
    </div>
  );
};