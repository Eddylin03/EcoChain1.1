import React, { Suspense } from 'react';
import { Farm, TreePine, Truck, Users } from 'lucide-react';
import MetricCard from './MetricCard';
import AlertsList from './AlertsList';
import ComplianceChart from './ComplianceChart';
import TransactionsTable from './TransactionsTable';

const Map = React.lazy(() => import('./Map'));

const metrics = [
  { title: 'Total Cattle', value: '12,453', change: 2.5, icon: <Farm className="w-6 h-6 text-blue-600" /> },
  { title: 'Protected Area', value: '45,678 ha', change: -1.2, icon: <TreePine className="w-6 h-6 text-green-600" /> },
  { title: 'Active Transports', value: '234', change: 5.8, icon: <Truck className="w-6 h-6 text-purple-600" /> },
  { title: 'Verified Suppliers', value: '89', change: 3.1, icon: <Users className="w-6 h-6 text-orange-600" /> }
];

const alerts = [
  { id: '1', type: 'deforestation', severity: 'high', message: 'Potential deforestation detected in Area B-7', timestamp: '2 hours ago' },
  { id: '2', type: 'movement', severity: 'medium', message: 'Unauthorized cattle movement detected', timestamp: '4 hours ago' },
  { id: '3', type: 'compliance', severity: 'low', message: 'Certification renewal required for Farm XYZ', timestamp: '1 day ago' }
];

const complianceData = {
  total: 100,
  compliant: 75,
  pending: 15,
  nonCompliant: 10
};

const transactions = [
  {
    id: '1',
    date: '2024-03-15',
    origin: 'Fazenda São João',
    destination: 'Frigorífico Central',
    status: 'compliant',
    quantity: 50,
    gtaNumber: 'GTA-2024-001'
  },
  {
    id: '2',
    date: '2024-03-14',
    origin: 'Rancho Verde',
    destination: 'Fazenda Esperança',
    status: 'non-compliant',
    quantity: 25,
    gtaNumber: 'GTA-2024-002'
  }
];

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">EcoCattleTrack Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Live Cattle Tracking</h2>
          <div className="h-[400px] relative">
            <Suspense fallback={
              <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
                Loading map...
              </div>
            }>
              <Map />
            </Suspense>
          </div>
        </div>

        <div className="lg:col-span-1">
          <AlertsList alerts={alerts} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-1">
          <ComplianceChart data={complianceData} />
        </div>
        <div className="lg:col-span-2">
          <TransactionsTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;