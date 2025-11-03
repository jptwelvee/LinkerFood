import React from 'react';
import { Card } from './ui/Card';

export const StatsCard = ({ icon: Icon, label, value, color }) => (
  <Card className="p-3 text-center">
    <Icon className={`w-5 h-5 ${color} mx-auto mb-1`} />
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-lg font-bold text-gray-800">{value}</p>
  </Card>
);