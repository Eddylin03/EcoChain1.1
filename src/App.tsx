import React from 'react';
import { Tractor, Leaf, QrCode, Map as MapIcon, BarChart3, Users, FileText, ShieldCheck } from 'lucide-react';
import Map from './components/Map';
import RecentTransactions from './components/RecentTransactions';
import CommunityPage from './components/CommunityPage';
import CattleProfile from './components/CattleProfile';
import ComplianceDashboard from './components/ComplianceDashboard';

function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tractor size={24} />
            <span className="text-xl font-bold">EcoCattleTrack</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'dashboard'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'map'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <MapIcon size={20} />
            <span>Live Tracking</span>
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'community'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <Users size={20} />
            <span>Community</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'profile'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <FileText size={20} />
            <span>Cattle Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'compliance'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <ShieldCheck size={20} />
            <span>Compliance</span>
          </button>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Total Cattle</h3>
                <Tractor className="text-green-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">1,234</p>
              <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Sustainability Score</h3>
                <Leaf className="text-green-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-500 mt-2">Environmental compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Active Tracking</h3>
                <QrCode className="text-green-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">856</p>
              <p className="text-sm text-gray-500 mt-2">Cattle with active tags</p>
            </div>

            {/* Recent Transactions Section */}
            <div className="md:col-span-2 lg:col-span-3">
              <RecentTransactions />
            </div>
          </div>
        )}

        {/* Map View */}
        {activeTab === 'map' && (
          <div className="bg-white rounded-lg shadow-sm p-4 h-[600px]">
            <Map />
          </div>
        )}

        {/* Community Page */}
        {activeTab === 'community' && <CommunityPage />}

        {/* Cattle Profile */}
        {activeTab === 'profile' && <CattleProfile />}

        {/* Compliance Dashboard */}
        {activeTab === 'compliance' && <ComplianceDashboard />}
      </div>
    </div>
  );
}

export default App;