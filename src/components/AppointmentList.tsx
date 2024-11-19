import React from 'react';

const appointments = [
  {
    id: 1,
    patient: 'Chandra Shekhar',
    time: '09:00 AM',
    type: 'Check-up',
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    patient: 'Harsh Yadav',
    time: '10:30 AM',
    type: 'Follow-up',
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    patient: 'Ayushi saini',
    time: '02:15 PM',
    type: 'Consultation',
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

const AppointmentList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold">Today's Appointments</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={appointment.image}
                alt={appointment.patient}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-medium">{appointment.patient}</h4>
                <p className="text-sm text-gray-500">
                  {appointment.time} • {appointment.type}
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'Confirmed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {appointment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;