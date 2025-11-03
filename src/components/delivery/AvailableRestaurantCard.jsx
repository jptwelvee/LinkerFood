import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export const AvailableRestaurantCard = ({ restaurant, onRequestLink }) => (
  <Card className="p-4 mb-3">
    <div className="flex items-start gap-3">
      <div className="text-4xl">{restaurant.image}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
          <MapPin className="w-4 h-4" />
          <span>{restaurant.distance}</span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            {restaurant.rating}
          </span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <p className="text-gray-600">Média por entrega</p>
            <p className="font-bold text-green-600">{restaurant.avgDelivery}</p>
          </div>
          <Button onClick={() => onRequestLink(restaurant)} className="text-sm">
            Solicitar Vínculo
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {restaurant.deliveriesToday} entregas hoje
        </p>
      </div>
    </div>
  </Card>
);