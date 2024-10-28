import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  origin: string;
  destination: string;
  status: 'compliant' | 'non-compliant';
  quantity: number;
  gtaNumber: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GTA Number</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.origin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.status === 'compliant' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status === 'compliant' 
                      ? <CheckCircle className="w-4 h-4" /> 
                      : <XCircle className="w-4 h-4" />
                    }
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
    </div>
  );
}

export default TransactionsTable;