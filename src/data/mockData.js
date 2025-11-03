export const mockNearbyRestaurants = [
  {
    id: 4,
    name: 'Restaurante do João',
    distance: '0.8 km',
    rating: 4.8,
    avgDelivery: 'R$ 8.50',
    deliveriesToday: 12,
    image: '🍽️'
  },
  {
    id: 5,
    name: 'Lanchonete da Maria',
    distance: '1.2 km',
    rating: 4.6,
    avgDelivery: 'R$ 7.00',
    deliveriesToday: 8,
    image: '🍔'
  },
  {
    id: 6,
    name: 'Pizzaria Bella',
    distance: '1.5 km',
    rating: 4.9,
    avgDelivery: 'R$ 10.00',
    deliveriesToday: 15,
    image: '🍕'
  },
  {
    id: 7,
    name: 'Açaí do Paraíba',
    distance: '2.1 km',
    rating: 4.7,
    avgDelivery: 'R$ 6.50',
    deliveriesToday: 20,
    image: '🥤'
  }
];

export const mockActiveDeliveries = [
  {
    id: 101,
    restaurant: 'Pizza Express',
    address: 'Rua das Flores, 123',
    payment: 'R$ 9.00',
    distance: '2.3 km',
    status: 'ready'
  }
];

export const mockCompletedToday = [
  { id: 201, restaurant: 'Pizza Express', payment: 'R$ 9.00', time: '14:30' },
  { id: 202, restaurant: 'Pizza Express', payment: 'R$ 11.50', time: '15:45' },
  { id: 203, restaurant: 'Pizza Express', payment: 'R$ 8.00', time: '17:20' }
];

export const mockLinkedRestaurants = [
  { id: 1, name: 'Pizza Express', status: 'approved', earnings: 45.00 }
];

export const mockPendingRequests = [
  { id: 2, name: 'Burger King', status: 'pending' },
  { id: 3, name: 'Sushi House', status: 'pending' }
];