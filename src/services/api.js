// Aqui você implementará as chamadas para o backend
// Por enquanto, retornamos dados mockados

import {
  mockNearbyRestaurants,
  mockActiveDeliveries,
  mockCompletedToday,
  mockLinkedRestaurants,
  mockPendingRequests
} from '../data/mockData';

export const deliveryAPI = {
  // Buscar restaurantes próximos
  getNearbyRestaurants: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockNearbyRestaurants), 500);
    });
  },

  // Buscar entregas ativas
  getActiveDeliveries: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockActiveDeliveries), 500);
    });
  },

  // Buscar restaurantes vinculados
  getLinkedRestaurants: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockLinkedRestaurants), 500);
    });
  },

  // Buscar solicitações pendentes
  getPendingRequests: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPendingRequests), 500);
    });
  },

  // Solicitar vínculo com restaurante
  requestLink: async (restaurantId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, id: restaurantId }), 500);
    });
  },

  // Completar entrega
  completeDelivery: async (deliveryId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, id: deliveryId }), 500);
    });
  }
};