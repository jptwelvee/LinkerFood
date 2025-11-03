import React from 'react';
import { Check } from 'lucide-react';
import { Card } from './ui/Card';

export const LinkedRestaurantCard = ({ restaurant }) => (
  <Card className="p-4 mb-3">
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-800">{restaurant.name}</p>
        <p className="text-sm text-green-600">
          Ganhos: R$ {restaurant.earnings.toFixed(2)}
        </p>
      </div>
      <Check className="w-6 h-6 text-green-500" />
    </div>
  </Card>
);