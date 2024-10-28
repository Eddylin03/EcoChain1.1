import React from 'react';

const transactions = [
  {
    date: '2024-03-15',
    origin: 'Fazenda São João',
    destination: 'Frigorífico Central',
    status: 'compliant',
    quantity: 50,
    gtaNumber: 'GTA-2024-001'
  },
  {
    date: '2024-03-14',
    origin: 'Rancho Verde',
    destination: 'Fazenda Esperança',
    status: 'non-compliant',
    quantity: 25,
    gtaNumber: 'GTA-2024-002'
  }
];

export default function RecentTransactions() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GTA Number</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.origin}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.destination}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  transaction.status === 'compliant' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.gtaNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}