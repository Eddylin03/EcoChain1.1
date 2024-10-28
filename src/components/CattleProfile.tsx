import React, { useState } from 'react';
import { Camera, Upload, Save, Scan, FileCheck } from 'lucide-react';

interface VaccinationRecord {
  name: string;
  date: string;
  nextDue: string;
}

interface HealthRecord {
  condition: string;
  diagnosisDate: string;
  treatment: string;
  status: 'active' | 'resolved';
}

function CattleProfile() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [vaccinations, setVaccinations] = useState<VaccinationRecord[]>([]);
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);

  const generateUniqueId = () => {
    return 'ECT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addVaccination = () => {
    setVaccinations([
      ...vaccinations,
      { name: '', date: '', nextDue: '' }
    ]);
  };

  const addHealthRecord = () => {
    setHealthRecords([
      ...healthRecords,
      { condition: '', diagnosisDate: '', treatment: '', status: 'active' }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cattle Profile Registration</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo Upload Section */}
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
            {photo ? (
              <div className="relative w-full h-48">
                <img
                  src={photo}
                  alt="Cattle"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => setPhoto(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  ×
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">Upload Photo</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </label>
            )}
          </div>

          {/* Basic Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Cattle ID</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    defaultValue={generateUniqueId()}
                    className="flex-1 rounded-l-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                  <button className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100">
                    <Scan className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Breed</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                <option>Angus</option>
                <option>Hereford</option>
                <option>Brahman</option>
                <option>Nelore</option>
                <option>Charolais</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Birth Date</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Sex</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Information */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Owner Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Owner Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Farm/Ranch Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Blockchain Wallet Address</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="0x..."
            />
          </div>
        </div>
      </div>

      {/* Vaccination Records */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Vaccination Records</h2>
          <button
            onClick={addVaccination}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Add Vaccination
          </button>
        </div>
        
        {vaccinations.map((vaccination, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vaccine Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Given</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Next Due Date</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Health Records */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Health Records</h2>
          <button
            onClick={addHealthRecord}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Add Health Record
          </button>
        </div>

        {healthRecords.map((record, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">Condition</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Diagnosis Date</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Treatment</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                <option value="active">Active</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default CattleProfile;