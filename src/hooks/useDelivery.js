import { useState, useEffect } from 'react';
import { deliveryAPI } from '../services/api';

export const useDelivery = () => {
  const [balance, setBalance] = useState(127.50);
  const [activeDeliveries, setActiveDeliveries] = useState([]);
  const [linkedRestaurants, setLinkedRestaurants] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [completedToday, setCompletedToday] = useState([]);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [active, linked, pending, nearby, completed] = await Promise.all([
        deliveryAPI.getActiveDeliveries(),
        deliveryAPI.getLinkedRestaurants(),
        deliveryAPI.getPendingRequests(),
        deliveryAPI.getNearbyRestaurants(),
        Promise.resolve([
          { id: 201, restaurant: 'Pizza Express', payment: 'R$ 9.00', time: '14:30' },
          { id: 202, restaurant: 'Pizza Express', payment: 'R$ 11.50', time: '15:45' },
          { id: 203, restaurant: 'Pizza Express', payment: 'R$ 8.00', time: '17:20' }
        ])
      ]);

      setActiveDeliveries(active);
      setLinkedRestaurants(linked);
      setPendingRequests(pending);
      setNearbyRestaurants(nearby);
      setCompletedToday(completed);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteDelivery = async (deliveryId) => {
    try {
      const delivery = activeDeliveries.find(d => d.id === deliveryId);
      const payment = parseFloat(delivery.payment.replace('R$ ', ''));
      
      await deliveryAPI.completeDelivery(deliveryId);
      
      setBalance(prevBalance => prevBalance + payment);
      setActiveDeliveries(prev => prev.filter(d => d.id !== deliveryId));
      
      // Adicionar ao histórico de completadas
      const completedDelivery = {
        id: deliveryId,
        restaurant: delivery.restaurant,
        payment: delivery.payment,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setCompletedToday(prev => [...prev, completedDelivery]);
    } catch (error) {
      console.error('Erro ao completar entrega:', error);
    }
  };

  const handleRequestLink = async (restaurant) => {
    try {
      await deliveryAPI.requestLink(restaurant.id);
      setPendingRequests(prev => [...prev, { ...restaurant, status: 'pending' }]);
      return true;
    } catch (error) {
      console.error('Erro ao solicitar vínculo:', error);
      return false;
    }
  };

  return {
    balance,
    activeDeliveries,
    linkedRestaurants,
    pendingRequests,
    completedToday,
    nearbyRestaurants,
    loading,
    handleCompleteDelivery,
    handleRequestLink,
    refreshData: loadData
  };
};