import React from 'react';

export const CompletedDeliveryCard = ({ delivery }) => (
  <div className="bg-gray-100 rounded-lg p-3 mb-2 flex justify-between items-center">
    <div>
      <p className="text-sm font-medium text-gray-800">{delivery.restaurant}</p>
      <p className="text-xs text-gray-500">{delivery.time}</p>
    </div>
    <p className="font-semibold text-green-600">{delivery.payment}</p>
  </div>
);