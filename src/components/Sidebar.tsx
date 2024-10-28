import React from 'react';
import { Home, Map, FileText, Bell, Settings, Users } from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: 'dashboard' | 'community') => void;
  currentPage: 'dashboard' | 'community';
}

const menuItems = [
  { icon: Home, label: 'Dashboard', page: 'dashboard' as const },
  { icon: Users, label: 'Community', page: 'community' as const },
  { icon: Map, label: 'Tracking', page: 'dashboard' as const },
  { icon: FileText, label: 'Reports', page: 'dashboard' as const },
  { icon: Bell, label: 'Alerts', page: 'dashboard' as const },
  { icon: Settings, label: 'Settings', page: 'dashboard' as const }
];

function Sidebar({ onPageChange, currentPage }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-green-800 text-white flex flex-col items-center py-8">
      <div className="mb-8">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-green-800 text-xl font-bold">EC</span>
        </div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button 
                onClick={() => onPageChange(item.page)}
                className={`p-3 rounded-xl transition-colors duration-200 ${
                  currentPage === item.page ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="sr-only">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;