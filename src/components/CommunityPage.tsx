import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { QRCodeSVG } from 'qrcode.react';
import { Coins, FileCheck, QrCode } from 'lucide-react';

interface ReportingFormData {
  cattleId: string;
  location: string;
  gtaNumber: string;
  transportDate: string;
  description: string;
}

function CommunityPage() {
  const [balance, setBalance] = useState('1,234.56');
  const [selectedCattle, setSelectedCattle] = useState('');
  const { register, handleSubmit, reset } = useForm<ReportingFormData>();

  const onSubmit = (data: ReportingFormData) => {
    console.log('Form submitted:', data);
    // Here we would integrate with blockchain
    reset();
  };

  const generateQRData = (cattleId: string) => {
    return JSON.stringify({
      id: cattleId,
      timestamp: new Date().toISOString(),
      verified: true,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Hub</h1>

      {/* Token Balance Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Coins className="w-6 h-6 mr-2 text-green-600" />
              Token Balance
            </h2>
            <p className="text-sm text-gray-500 mt-1">Your current EcoCattle tokens</p>
          </div>
          <div className="text-3xl font-bold text-green-600">{balance} ECT</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reporting Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
            <FileCheck className="w-6 h-6 mr-2 text-green-600" />
            Submit Report
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cattle ID
              </label>
              <input
                type="text"
                {...register('cattleId')}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                {...register('location')}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GTA Number
              </label>
              <input
                type="text"
                {...register('gtaNumber')}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transport Date
              </label>
              <input
                type="date"
                {...register('transportDate')}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                {...register('description')}
                rows={3}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Submit Report
            </button>
          </form>
        </div>

        {/* QR Code Verification */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
            <QrCode className="w-6 h-6 mr-2 text-green-600" />
            QR Code Verification
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Cattle ID for QR Code
              </label>
              <input
                type="text"
                value={selectedCattle}
                onChange={(e) => setSelectedCattle(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Enter cattle ID"
              />
            </div>

            {selectedCattle && (
              <div className="flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-lg">
                <QRCodeSVG
                  value={generateQRData(selectedCattle)}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
                <p className="text-sm text-gray-500">
                  Scan this QR code to verify cattle information on the blockchain
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;