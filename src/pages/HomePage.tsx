import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Satellite, TrendingUp, Wifi, RotateCw, MessageCircle, Users, Award, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Satellite className="h-8 w-8 text-green-600" />,
      title: 'Satellite Data Integration',
      description: 'Real-time precision agriculture powered by satellite imagery and IoT sensors.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Price Forecasting',
      description: 'AI-driven market predictions to help farmers grow profitable crops.'
    },
    {
      icon: <Wifi className="h-8 w-8 text-green-600" />,
      title: 'Offline Support',
      description: 'Full functionality in low-network areas with auto-sync capabilities.'
    },
    {
      icon: <RotateCw className="h-8 w-8 text-green-600" />,
      title: 'Crop Rotation Planning',
      description: 'Smart recommendations to maintain soil fertility and prevent pest build-up.'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: 'AI Assistant',
      description: 'Voice, image, and chat-based support for disease detection and advisory.'
    }
  ];

  const stats = [
    { value: '40%', label: 'Crop Loss Reduction', icon: <Award className="h-6 w-6" /> },
    { value: '50,000+', label: 'Farmers Helped', icon: <Users className="h-6 w-6" /> },
    { value: '35%', label: 'Yield Improvement', icon: <TrendingUp className="h-6 w-6" /> },
    { value: '95%', label: 'Satisfaction Rate', icon: <Star className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Punjab, India',
      text: 'AgriSmart AI helped me increase my wheat yield by 30% and avoid market crashes. The price forecasting feature is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Maharashtra, India',
      text: 'The offline support is a game-changer for our rural area. I can access all features even with poor internet connectivity.',
      rating: 5
    },
    {
      name: 'Mohamed Ali',
      location: 'Karnataka, India',
      text: 'The AI assistant detected early signs of crop disease through photos, saving my entire harvest. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Agriculture for
                <span className="text-yellow-400 block">Better Harvests</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Empower your farming with AI-driven insights, satellite data, and predictive analytics. 
                Increase yields, reduce costs, and make informed decisions with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold text-lg transition-colors group"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/ai-assistant"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-green-700 text-white rounded-lg font-semibold text-lg transition-colors"
                >
                  Try AI Assistant
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-100">Real-time monitoring active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">28°C</div>
                      <div className="text-sm text-green-100">Temperature</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">65%</div>
                      <div className="text-sm text-green-100">Humidity</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">7.2</div>
                      <div className="text-sm text-green-100">Soil pH</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">Good</div>
                      <div className="text-sm text-green-100">Crop Health</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    {React.cloneElement(stat.icon, { className: 'h-6 w-6 text-green-600' })}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI platform provides everything you need to optimize your farm operations,
              increase yields, and maximize profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200">
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors group"
            >
              View All Features
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials removed as per requirement */}

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join thousands of farmers who are already using AI to increase yields, 
            reduce costs, and make smarter farming decisions.
          </p>
          {/* CTA buttons removed as per requirement */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;