import React, { useState } from 'react';
import { AppHeader } from './components/layout/AppHeader';
import { Navigation } from '/components/layout/Navigation';
import { HomeView } from './views/HomeView';
import { DiscoverView } from './views/DiscoverView';
import { RequestsView } from './views/RequestsView';
import { RequestDetailView } from './views/RequestDetailView';
import { useDelivery } from './hooks/useDelivery';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const {
    balance,
    activeDeliveries,
    linkedRestaurants,
    pendingRequests,
    completedToday,
    nearbyRestaurants,
    loading,
    handleCompleteDelivery,
    handleRequestLink
  } = useDelivery();

  const onRequestLink = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setView('request');
  };

  const onConfirmRequest = async () => {
    const success = await handleRequestLink(selectedRestaurant);
    if (success) {
      setView('requests');
      setSelectedRestaurant(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <AppHeader balance={balance} />
      
      <Navigation 
        currentView={view}
        onViewChange={setView}
        pendingCount={pendingRequests.length}
      />

      <div className="p-4">
        {view === 'home' && (
          <HomeView
            activeDeliveries={activeDeliveries}
            linkedRestaurants={linkedRestaurants}
            completedToday={completedToday}
            onCompleteDelivery={handleCompleteDelivery}
          />
        )}

        {view === 'discover' && (
          <DiscoverView
            restaurants={nearbyRestaurants}
            onRequestLink={onRequestLink}
          />
        )}

        {view === 'requests' && (
          <RequestsView pendingRequests={pendingRequests} />
        )}

        {view === 'request' && selectedRestaurant && (
          <RequestDetailView
            restaurant={selectedRestaurant}
            onBack={() => setView('discover')}
            onConfirm={onConfirmRequest}
          />
        )}
      </div>
    </div>
  );
}