import React from 'react';

interface ComplianceData {
  total: number;
  compliant: number;
  pending: number;
  nonCompliant: number;
}

interface ComplianceChartProps {
  data: ComplianceData;
}

function ComplianceChart({ data }: ComplianceChartProps) {
  const getPercentage = (value: number) => ((value / data.total) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Compliance Overview</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Compliant</span>
            <span className="font-medium text-gray-900">{getPercentage(data.compliant)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${getPercentage(data.compliant)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Pending Review</span>
            <span className="font-medium text-gray-900">{getPercentage(data.pending)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: `${getPercentage(data.pending)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Non-Compliant</span>
            <span className="font-medium text-gray-900">{getPercentage(data.nonCompliant)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{ width: `${getPercentage(data.nonCompliant)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceChart;