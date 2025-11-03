import React from 'react';
import { Clock } from 'lucide-react';
import { PendingRequestCard } from '../components/delivery/PendingRequestCard';

export const RequestsView = ({ pendingRequests }) => (
  <div>
    <h2 className="font-bold text-gray-800 mb-4">Minhas Solicitações</h2>
    {pendingRequests.length === 0 ? (
      <div className="text-center py-12 text-gray-500">
        <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>Nenhuma solicitação pendente</p>
      </div>
    ) : (
      <div className="space-y-3">
        {pendingRequests.map(request => (
          <PendingRequestCard key={request.id} request={request} />
        ))}
      </div>
    )}
  </div>
);