import React from 'react';
import { Star } from 'lucide-react';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';

export const RequestDetailView = ({ restaurant, onBack, onConfirm }) => (
  <div>
    <button
      onClick={onBack}
      className="text-orange-500 mb-4 flex items-center gap-2"
    >
      ← Voltar
    </button>
    <Card className="p-6">
      <div className="text-center mb-6">
        <div className="text-6xl mb-3">{restaurant.image}</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h2>
        <p className="text-sm text-gray-600">{restaurant.distance} de distância</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Avaliação</span>
          <span className="font-semibold flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            {restaurant.rating}
          </span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Média por entrega</span>
          <span className="font-semibold text-green-600">{restaurant.avgDelivery}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-600">Entregas hoje</span>
          <span className="font-semibold">{restaurant.deliveriesToday}</span>
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">
          O dono do restaurante receberá sua solicitação e poderá aprovar seu vínculo. 
          Você será notificado quando houver uma resposta.
        </p>
      </div>

      <Button onClick={onConfirm} className="w-full py-3">
        Enviar Solicitação
      </Button>
    </Card>
  </div>
);