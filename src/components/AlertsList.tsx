import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

interface Alert {
  id: string;
  type: 'deforestation' | 'movement' | 'compliance';
  severity: 'high' | 'medium' | 'low';
  message: string;
  timestamp: string;
}

interface AlertsListProps {
  alerts: readonly Alert[];
}

function AlertsList({ alerts }: AlertsListProps) {
  const getSeverityIcon = (severity: Alert['severity']) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'low':
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Recent Alerts</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-6 flex items-start space-x-4">
            {getSeverityIcon(alert.severity)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{alert.message}</p>
              <p className="text-sm text-gray-500">{alert.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertsList;