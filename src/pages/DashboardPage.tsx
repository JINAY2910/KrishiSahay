import React from 'react';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Bell,
  MapPin,
  Sprout,
  DollarSign,
  Activity
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const weatherData = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    rainfall: 5.2
  };

  const soilMetrics = {
    pH: 7.2,
    nitrogen: 85,
    phosphorus: 72,
    potassium: 90,
    moisture: 68
  };

  const alerts = [
    { type: 'warning', message: 'Low nitrogen levels detected in Field A', time: '2 hours ago' },
    { type: 'info', message: 'Optimal planting conditions for wheat next week', time: '1 day ago' },
    { type: 'success', message: 'Irrigation cycle completed successfully', time: '3 hours ago' }
  ];

  const upcomingTasks = [
    { task: 'Apply fertilizer to Field B', date: 'Today', priority: 'High' },
    { task: 'Harvest wheat from Field A', date: 'Tomorrow', priority: 'Medium' },
    { task: 'Pest inspection - All fields', date: 'Feb 18', priority: 'Medium' },
    { task: 'Soil testing - Field C', date: 'Feb 20', priority: 'Low' }
  ];

  const cropData = [
    { name: 'Wheat', health: 92, growth: 'Excellent', area: '50 acres' },
    { name: 'Rice', health: 78, growth: 'Good', area: '30 acres' },
    { name: 'Corn', health: 85, growth: 'Good', area: '25 acres' }
  ];

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Farm Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Rajesh Kumar • Green Valley Farm</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-lg">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-green-800 font-medium">Punjab, India</span>
              </div>
              <Bell className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Weather Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <Thermometer className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-2xl font-bold text-gray-900">{weatherData.temperature}°C</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="text-2xl font-bold text-gray-900">{weatherData.humidity}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <Wind className="h-8 w-8 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Wind Speed</p>
                <p className="text-2xl font-bold text-gray-900">{weatherData.windSpeed} km/h</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Rainfall</p>
                <p className="text-2xl font-bold text-gray-900">{weatherData.rainfall} mm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Soil Health */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Activity className="h-5 w-5 text-green-600 mr-2" />
                Soil Health Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">pH Level</span>
                      <span className="text-sm font-medium text-green-600">Optimal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(soilMetrics.pH / 14) * 100}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-500">{soilMetrics.pH}</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Nitrogen</span>
                      <span className="text-sm font-medium text-yellow-600">Good</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${soilMetrics.nitrogen}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-500">{soilMetrics.nitrogen}%</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Phosphorus</span>
                      <span className="text-sm font-medium text-yellow-600">Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${soilMetrics.phosphorus}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-500">{soilMetrics.phosphorus}%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Potassium</span>
                      <span className="text-sm font-medium text-green-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${soilMetrics.potassium}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-500">{soilMetrics.potassium}%</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Moisture</span>
                      <span className="text-sm font-medium text-green-600">Good</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${soilMetrics.moisture}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-500">{soilMetrics.moisture}%</span>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Recommendation:</strong> Soil conditions are favorable for planting. Consider adding organic fertilizer to boost nitrogen levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Crop Status */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Sprout className="h-5 w-5 text-green-600 mr-2" />
                Crop Status Overview
              </h3>
              <div className="space-y-4">
                {cropData.map((crop, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{crop.name}</h4>
                        <p className="text-sm text-gray-600">{crop.area}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-600">{crop.growth}</p>
                        <p className="text-xs text-gray-500">Health: {crop.health}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${crop.health >= 90 ? 'bg-green-500' : crop.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${crop.health}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts and Tasks */}
          <div className="space-y-6">
            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                Recent Alerts
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                    alert.type === 'info' ? 'bg-blue-50 border-blue-200' :
                    'bg-green-50 border-green-200'
                  }`}>
                    <p className={`text-sm font-medium ${
                      alert.type === 'warning' ? 'text-yellow-800' :
                      alert.type === 'info' ? 'text-blue-800' :
                      'text-green-800'
                    }`}>
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                Upcoming Tasks
              </h3>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.task}</p>
                      <p className="text-xs text-gray-500">{task.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.priority === 'High' ? 'bg-red-100 text-red-800' :
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                Financial Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Month's Revenue</span>
                  <span className="text-lg font-semibold text-green-600">₹2,45,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Expenses</span>
                  <span className="text-lg font-semibold text-red-600">₹85,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm font-medium text-gray-900">Net Profit</span>
                  <span className="text-lg font-bold text-green-600">₹1,60,000</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+15% from last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;