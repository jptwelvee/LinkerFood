import React from 'react';
import { Clock } from 'lucide-react';
import { Card } from './ui/Card';

export const PendingRequestCard = ({ request }) => (
  <Card className="p-4 mb-3">
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-800">{request.name}</p>
        <p className="text-sm text-orange-600">Aguardando aprovação</p>
      </div>
      <Clock className="w-6 h-6 text-orange-500" />
    </div>
  </Card>
);