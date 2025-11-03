import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export const ActiveDeliveryCard = ({ delivery, onComplete }) => (
  <Card className="p-4 mb-3">
    <div className="flex justify-between items-start mb-3">
      <div>
        <p className="font-semibold text-gray-800">{delivery.restaurant}</p>
        <p className="text-sm text-gray-600">{delivery.address}</p>
      </div>
      <Badge variant="success">Pronto</Badge>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {delivery.distance}
        </span>
        <span className="flex items-center gap-1">
          <DollarSign className="w-4 h-4" />
          {delivery.payment}
        </span>
      </div>
      <Button onClick={() => onComplete(delivery.id)} className="text-sm">
        Finalizar
      </Button>
    </div>
  </Card>
);