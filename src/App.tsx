import React from 'react';
import { Users, Calendar, Activity, Heart } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import AppointmentList from './components/AppointmentList';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', patients: 400 },
  { name: 'Feb', patients: 300 },
  { name: 'Mar', patients: 500 },
  { name: 'Apr', patients: 450 },
  { name: 'May', patients: 470 },
  { name: 'Jun', patients: 600 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, Dr. ChandraShekhar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Patients"
            value="1,234"
            icon={Users}
            trend={{ value: "12%", positive: true }}
            color="bg-blue-500"
          />
          <StatCard
            title="Appointments"
            value="42"
            icon={Calendar}
            trend={{ value: "8%", positive: true }}
            color="bg-green-500"
          />
          <StatCard
            title="Recovery Rate"
            value="95%"
            icon={Activity}
            trend={{ value: "3%", positive: true }}
            color="bg-purple-500"
          />
          <StatCard
            title="Critical Cases"
            value="7"
            icon={Heart}
            trend={{ value: "2%", positive: false }}
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Patient Statistics</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="patients"
                    stroke="#3B82F6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <AppointmentList />
        </div>
      </main>
    </div>
  );
}

export default App;