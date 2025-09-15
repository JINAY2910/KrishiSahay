import React from 'react';
import { Satellite, TrendingUp, Wifi, RotateCw, MessageCircle, BarChart3, Shield, Globe, Camera, Mic, Calendar } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const coreFeatures = [
    {
      icon: <Satellite className="h-12 w-12 text-green-600" />,
      title: 'Satellite/Soil Data Integration',
      description: 'Real-time precision agriculture powered by satellite imagery, IoT sensors, and APIs like Soil Grids and Bhuvan for accurate soil health mapping and crop recommendations.',
      benefits: [
        'Real-time soil health monitoring',
        'Satellite imagery analysis',
        'IoT sensor data integration',
        'Precise fertilizer recommendations'
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: 'Market Demand & Price Forecasting',
      description: 'AI-driven price predictions using CNNs and ML to help farmers grow profitable crops and avoid market risks.',
      benefits: [
        'Accurate price predictions',
        'Market trend analysis',
        'Crop demand forecasting',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: <Wifi className="h-12 w-12 text-green-600" />,
      title: 'Offline/Low Connectivity Support',
      description: 'Full functionality in low-network areas with auto-sync and access to government schemes in local languages.',
      benefits: [
        'Works in remote areas',
        'Auto-sync when connected',
        'Local language support',
        'Government scheme access'
      ]
    },
    {
      icon: <RotateCw className="h-12 w-12 text-green-600" />,
      title: 'AI-driven Crop Rotation Planning',
      description: 'Smart AI-driven recommendations to maintain soil fertility and prevent pest build-up.',
      benefits: [
        'Soil fertility maintenance',
        'Pest prevention strategies',
        'Optimized crop sequences',
        'Seasonal planning assistance'
      ]
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-green-600" />,
      title: 'Multimodal AI Support',
      description: 'Voice, image, and chat-based support for disease detection and advisory services.',
      benefits: [
        'Voice command support',
        'Image-based disease detection',
        'Real-time chat assistance',
        'Multi-language support'
      ]
    }
  ];

  const extraFeatures = [
    {
      icon: <BarChart3 className="h-8 w-8 text-yellow-600" />,
      title: 'Personalized Farm Dashboards',
      description: 'Custom dashboards with real-time metrics, alerts, and personalized recommendations for your specific farm.'
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-600" />,
      title: 'AI-driven Advisory Services',
      description: 'Expert advisory for allied income sources including dairy, poultry, and agro-tourism opportunities.'
    },
    {
      icon: <Camera className="h-8 w-8 text-yellow-600" />,
      title: 'Predictive Disease Detection',
      description: 'Image-based disease detection with 40% loss reduction through early identification and treatment recommendations.'
    }
  ];

  const technicalFeatures = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'API Integrations',
      details: ['Soil Grids API', 'Bhuvan Satellite Data', 'Weather APIs', 'Government Schemes']
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: 'Voice & Image AI',
      details: ['Voice Recognition', 'Image Processing', 'Disease Detection', 'Multilingual Support']
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Smart Planning',
      details: ['Crop Calendar', 'Weather Predictions', 'Market Analysis', 'Risk Assessment']
    }
  ];

  return (
    <div className="py-20 space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-800"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 2px, transparent 2px), radial-gradient(circle at 80% 30%, white 2px, transparent 2px), radial-gradient(circle at 30% 80%, white 2px, transparent 2px)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Explore Powerful
                <span className="text-yellow-400 block">AI-Driven Farm Features</span>
              </h1>
              <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
                From satellite insights to market forecasting, unlock tools that boost yield,
                reduce risk, and simplify daily operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20">Real-time Analytics</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20">Offline Ready</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20">Multimodal AI</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20">Actionable Advisory</span>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/10">
                    <div className="text-2xl font-bold text-yellow-300">+35%</div>
                    <div className="text-green-100 text-sm">Yield Improvement</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10">
                    <div className="text-2xl font-bold text-yellow-300">-40%</div>
                    <div className="text-green-100 text-sm">Loss Reduction</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10">
                    <div className="text-2xl font-bold text-yellow-300">95%</div>
                    <div className="text-green-100 text-sm">Satisfaction</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10">
                    <div className="text-2xl font-bold text-yellow-300">24x7</div>
                    <div className="text-green-100 text-sm">AI Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features as Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Platform Features</h2>
          <p className="text-xl text-gray-600">Everything you need for modern, data-driven farming</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-green-50 to-transparent"></div>
              <div className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">Featured</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="text-green-700 font-medium hover:underline">Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Features */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Extended features that make our platform truly comprehensive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all border border-gray-100">
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-yellow-50 rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Infrastructure
          </h2>
          <p className="text-xl text-gray-600">
            Built on robust technology for reliable, scalable performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center mb-5">
                <div className="p-2.5 bg-green-50 rounded-xl mr-3">
                  {React.cloneElement(feature.icon, { className: 'h-6 w-6 text-green-600' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Future of Farming
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Ready to unlock the full potential of your farm with AI-powered insights and automation?
          </p>
          {/* CTA buttons removed as per requirement */}
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;