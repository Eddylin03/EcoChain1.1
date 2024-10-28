import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Calendar, Award, Leaf } from 'lucide-react';

interface ComplianceMetric {
  title: string;
  status: 'compliant' | 'pending' | 'non-compliant';
  value: string;
  icon: React.ReactNode;
}

interface Certification {
  id: string;
  name: string;
  status: 'active' | 'expiring' | 'expired';
  issueDate: string;
  expiryDate: string;
  authority: string;
  contractAddress: string;
}

const complianceMetrics: ComplianceMetric[] = [
  {
    title: 'Health Inspections',
    status: 'compliant',
    value: '100%',
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
  },
  {
    title: 'Organic Certification',
    status: 'pending',
    value: 'In Review',
    icon: <Award className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: 'Deforestation-Free',
    status: 'compliant',
    value: 'Verified',
    icon: <Leaf className="w-6 h-6 text-green-500" />,
  },
];

const certifications: Certification[] = [
  {
    id: '1',
    name: 'Health Safety Standard',
    status: 'active',
    issueDate: '2024-01-15',
    expiryDate: '2025-01-15',
    authority: 'National Health Board',
    contractAddress: '0x1234...5678',
  },
  {
    id: '2',
    name: 'Organic Certification',
    status: 'expiring',
    issueDate: '2023-06-01',
    expiryDate: '2024-06-01',
    authority: 'Organic Standards Council',
    contractAddress: '0x8765...4321',
  },
];

const upcomingAudits = [
  {
    id: '1',
    title: 'Annual Health Inspection',
    date: '2024-04-15',
    type: 'Mandatory',
  },
  {
    id: '2',
    title: 'Organic Certification Renewal',
    date: '2024-05-01',
    type: 'Certification',
  },
];

function ComplianceDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Compliance & Certification Management</h1>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {complianceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{metric.title}</h3>
              {metric.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <p className={`text-sm ${
              metric.status === 'compliant' ? 'text-green-600' :
              metric.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
            </p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl shadow-sm mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Active Certifications</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-500">Issued by {cert.authority}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  cert.status === 'active' ? 'bg-green-100 text-green-800' :
                  cert.status === 'expiring' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Issue Date</p>
                  <p className="font-medium">{cert.issueDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Expiry Date</p>
                  <p className="font-medium">{cert.expiryDate}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Smart Contract Address</p>
                <p className="font-mono text-sm">{cert.contractAddress}</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="text-sm text-green-600 hover:text-green-700">
                  View Details
                </button>
                <button className="text-sm text-green-600 hover:text-green-700">
                  Generate QR Code
                </button>
                <button className="text-sm text-green-600 hover:text-green-700">
                  Verify on Blockchain
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Audits */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Audits & Deadlines</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {upcomingAudits.map((audit) => (
            <div key={audit.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{audit.title}</h3>
                  <p className="text-sm text-gray-500">{audit.date}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {audit.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComplianceDashboard;