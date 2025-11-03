import React from 'react';
import { Package, TrendingUp, Star } from 'lucide-react';
import { StatsCard } from '../components/stats/StatsCard';
import { ActiveDeliveryCard } from '../components/delivery/ActiveDeliveryCard';
import { LinkedRestaurantCard } from '../components/delivery/LinkedRestaurantCard';
import { CompletedDeliveryCard } from '../components/delivery/CompletedDeliveryCard';

export const HomeView = ({ 
  activeDeliveries, 
  linkedRestaurants, 
  completedToday,
  onCompleteDelivery 
}) => (
  <div className="space-y-4">
    {/* Estatísticas */}
    <div className="grid grid-cols-3 gap-3">
      <StatsCard 
        icon={Package} 
        label="Hoje" 
        value={completedToday.length}
        color="text-orange-500"
      />
      <StatsCard 
        icon={TrendingUp} 
        label="Ganhos" 
        value="R$ 28.50"
        color="text-green-500"
      />
      <StatsCard 
        icon={Star} 
        label="Avaliação" 
        value="4.9"
        color="text-yellow-500"
      />
    </div>

    {/* Entregas Ativas */}
    {activeDeliveries.length > 0 && (
      <div>
        <h2 className="font-bold text-gray-800 mb-3">Entregas Ativas</h2>
        {activeDeliveries.map(delivery => (
          <ActiveDeliveryCard 
            key={delivery.id}
            delivery={delivery}
            onComplete={onCompleteDelivery}
          />
        ))}
      </div>
    )}

    {/* Restaurantes Vinculados */}
    <div>
      <h2 className="font-bold text-gray-800 mb-3">Restaurantes Vinculados</h2>
      {linkedRestaurants.map(restaurant => (
        <LinkedRestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>

    {/* Completadas Hoje */}
    {completedToday.length > 0 && (
      <div>
        <h2 className="font-bold text-gray-800 mb-3">Completadas Hoje</h2>
        {completedToday.map(delivery => (
          <CompletedDeliveryCard key={delivery.id} delivery={delivery} />
        ))}
      </div>
    )}
  </div>
);