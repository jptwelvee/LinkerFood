// Funções utilitárias

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDistance = (meters) => {
  if (meters < 1000) {
    return `${meters}m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const calculateEarnings = (deliveries) => {
  return deliveries.reduce((total, delivery) => {
    const value = parseFloat(delivery.payment.replace('R$ ', ''));
    return total + value;
  }, 0);
};