import React from 'react';
import { Thermometer, Droplets, Sun, Activity } from 'lucide-react';
import SensorCard from '../components/SensorCard';
import IrrigationAndHardwareControl from '../components/IrrigationAndHardwareControl';
import NotificationCenter from '../components/NotificationCenter';
import BackToTop from '../components/BackToTop';
import HardwareControl from '../components/HardwareControl';

const Dashboard = () => {
  const devices = [
    {
      id: 'temp1',
      name: 'Temperaturni senzor',
      type: 'sensor',
      status: 'online',
      value: '24.5',
      unit: '°C',
      icon: <Thermometer className="h-5 w-5" />,
      color: 'bg-red-100 text-red-800 border-red-200'
    },
    {
      id: 'fan1',
      name: 'Ventilator',
      type: 'actuator',
      status: 'online',
      value: 'ON',
      icon: <Activity className="h-5 w-5" />,
      color: 'bg-red-100 text-red-800 border-red-200'
    },
    {
      id: 'pump1',
      name: 'Elektroventil za vodu',
      type: 'actuator',
      status: 'warning',
      value: 'ON',
      icon: <Droplets className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Kontrolna tabla</h1>
          <p className="text-sm sm:text-base text-gray-600">Pregled stanja vaše pametne bašte</p>
        </div>

        {/* Devices Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {devices.map((device) => (
            <div key={device.id} className={`p-4 rounded-lg ${device.color}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg">
                    {device.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{device.name}</h4>
                    <div className="flex items-center space-x-1 text-sm">
                      <span className="capitalize">{device.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-semibold">
                  {device.value} {device.unit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sensor Cards - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <SensorCard
            title="Temperatura"
            value="24.5"
            unit="°C"
            trend="up"
            trendValue="+1.2°C"
            icon={<Thermometer className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />}
            color="bg-orange-500/20"
            optimal={true}
          />
          <SensorCard
            title="Vlažnost zemljišta"
            value="68"
            unit="%"
            trend="down"
            trendValue="-5%"
            icon={<Droplets className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />}
            color="bg-blue-500/20"
            optimal={true}
          />
          <SensorCard
            title="Svetlost"
            value="850"
            unit="lux"
            trend="stable"
            trendValue="0"
            icon={<Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />}
            color="bg-yellow-500/20"
            optimal={true}
          />
          <SensorCard
            title="pH vrednost"
            value="6.8"
            unit="pH"
            trend="up"
            trendValue="+0.2"
            icon={<Activity className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />}
            color="bg-green-500/20"
            optimal={false}
          />
        </div>

        {/* Combined Controls */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upravljanje sistemom</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6 sm:space-y-8">
            <IrrigationAndHardwareControl />
          </div>
          <div className="space-y-6 sm:space-y-8">
            <NotificationCenter />
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Dashboard;