import React from 'react';

export const AppHeader = ({ balance }) => (
  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 shadow-lg">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Trampaê</h1>
        <p className="text-sm opacity-90">Olá, Motorista!</p>
      </div>
      <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
        <p className="text-xs opacity-90">Saldo disponível</p>
        <p className="text-2xl font-bold">R$ {balance.toFixed(2)}</p>
      </div>
    </div>
  </div>
);