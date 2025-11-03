import React from 'react';
import { AvailableRestaurantCard } from '../components/delivery/AvailableRestaurantCard';

export const DiscoverView = ({ restaurants, onRequestLink }) => (
  <div>
    <h2 className="font-bold text-gray-800 mb-4">Restaurantes Próximos</h2>
    <div className="space-y-3">
      {restaurants.map(restaurant => (
        <AvailableRestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onRequestLink={onRequestLink}
        />
      ))}
    </div>
  </div>
);