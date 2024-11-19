import React from 'react';
import { Home, Users, Calendar, Activity, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600">Chandra Hospital</h2>
      </div>
      <nav className="mt-6">
        {[
          { icon: Home, label: 'Dashboard', active: true },
          { icon: Users, label: 'Patients' },
          { icon: Calendar, label: 'Appointments' },
          { icon: Activity, label: 'Analytics' },
          { icon: Settings, label: 'Settings' },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
              item.active ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="absolute bottom-8 w-full px-6">
        <button className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;