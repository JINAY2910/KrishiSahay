import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Upload, 
  Image as ImageIcon, 
  Bot, 
  User, 
  Bug,
  Camera,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  image?: string;
}

interface AIResponse {
  type: 'crop_recommendation' | 'disease_prediction';
  data: {
    name: string;
    confidence?: number;
    yield?: string;
    profitability?: number;
    treatments?: string[];
    preventive?: string[];
    tips?: string[];
  };
}

const ChatbotPage: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'crop' | 'disease'>('crop');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting message
    const initialMessage: Message = {
      id: '1',
      type: 'bot',
      content: "Hello! 👋 I'm your Smart Farming Assistant. Would you like to get crop recommendations or check plant health today?",
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModeSwitch = (mode: 'crop' | 'disease') => {
    setActiveMode(mode);
    setAiResponse(null);
    setUploadedImage(null);
    
    const modeMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: mode === 'crop' 
        ? "Great! I'll help you find the best crops for your soil. Please share your soil data (pH, nitrogen, phosphorus, potassium levels) and location."
        : "I'll help you identify plant diseases. You can upload a photo of the affected plant or describe the symptoms you're seeing.",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, modeMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() && !uploadedImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputText || 'Image uploaded',
      timestamp: new Date(),
      image: uploadedImage || undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const botResponse = generateAIResponse(inputText, uploadedImage, activeMode);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setAiResponse(botResponse.data);
      setIsLoading(false);
      setUploadedImage(null);
    }, 2000);
  };

  const generateAIResponse = (text: string, image: string | null, mode: 'crop' | 'disease') => {
    if (mode === 'crop') {
      return {
        message: "Based on your soil conditions and location, I've analyzed the best crop options for you. Check the recommendation card for detailed insights!",
        data: {
          type: 'crop_recommendation' as const,
          data: {
            name: 'Wheat (HD-2967)',
            yield: '45-50 quintals/hectare',
            profitability: 85,
            tips: [
              'Plant during October-November for optimal growth',
              'Maintain soil moisture at 70-80% during grain filling',
              'Apply nitrogen in 3 splits for better utilization',
              'Monitor for rust diseases during flowering stage'
            ]
          }
        }
      };
    } else {
      return {
        message: image 
          ? "I've analyzed your plant image. The results show potential disease symptoms. Please check the diagnosis card for treatment recommendations."
          : "Based on your symptom description, I've identified a possible plant disease. Here are my findings and treatment suggestions.",
        data: {
          type: 'disease_prediction' as const,
          data: {
            name: 'Late Blight (Phytophthora infestans)',
            confidence: 87,
            treatments: [
              'Apply copper-based fungicide (Bordeaux mixture)',
              'Use systemic fungicides like Metalaxyl',
              'Remove and destroy infected plant parts',
              'Improve air circulation around plants'
            ],
            preventive: [
              'Avoid overhead watering',
              'Plant resistant varieties',
              'Maintain proper plant spacing',
              'Apply preventive fungicide sprays'
            ]
          }
        }
      };
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setInputText("My tomato plants have brown spots on leaves and stems");
        setIsListening(false);
      }, 3000);
    }
  };

  const removeUploadedImage = () => {
    setUploadedImage(null);
  };

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Farming Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant crop recommendations and early disease predictions using advanced AI technology
          </p>
        </div>

        {/* Mode Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-md p-2 border border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => handleModeSwitch('crop')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeMode === 'crop'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="h-5 w-5" />
                <span>Crop Recommendation</span>
              </button>
              <button
                onClick={() => handleModeSwitch('disease')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeMode === 'disease'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Bug className="h-5 w-5" />
                <span>Early Disease Prediction</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                    <p className="text-sm text-gray-600">
                      {activeMode === 'crop' ? 'Crop Recommendation Mode' : 'Early Disease Prediction Mode'}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-blue-100' 
                          : 'bg-green-100'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="h-4 w-4 text-blue-600" />
                        ) : (
                          <Bot className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        {message.image && (
                          <img 
                            src={message.image} 
                            alt="Uploaded" 
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200">
                {uploadedImage && (
                  <div className="mb-3 relative inline-block">
                    <img 
                      src={uploadedImage} 
                      alt="Upload preview" 
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={removeUploadedImage}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={
                        activeMode === 'crop'
                          ? "Enter soil data (pH, NPK levels) and location..."
                          : "Describe plant symptoms or upload an image..."
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pr-12"
                    />
                  </div>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Upload image"
                  >
                    <ImageIcon className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={handleVoiceToggle}
                    className={`p-3 rounded-lg transition-colors ${
                      isListening 
                        ? 'text-red-600 bg-red-50 hover:bg-red-100' 
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                    title={isListening ? "Stop listening" : "Start voice input"}
                  >
                    {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  </button>
                  
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() && !uploadedImage}
                    className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Response Card */}
          <div className="space-y-6">
            {aiResponse ? (
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {aiResponse.type === 'crop_recommendation' ? (
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Bug className="h-6 w-6 text-orange-600" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {aiResponse.type === 'crop_recommendation' ? 'Crop Recommendation' : 'Early Disease Diagnosis'}
                    </h3>
                    <p className="text-sm text-gray-600">AI Analysis Results</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{aiResponse.data.name}</h4>
                    
                    {aiResponse.data.confidence && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Confidence</span>
                          <span className="text-sm font-medium text-green-600">{aiResponse.data.confidence}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${aiResponse.data.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {aiResponse.data.yield && (
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Expected Yield: {aiResponse.data.yield}</span>
                      </div>
                    )}

                    {aiResponse.data.profitability && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Profitability Score: {aiResponse.data.profitability}%</span>
                      </div>
                    )}
                  </div>

                  {aiResponse.data.treatments && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                        Treatment Options
                      </h5>
                      <ul className="space-y-1">
                        {aiResponse.data.treatments.map((treatment, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {aiResponse.data.preventive && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Preventive Measures
                      </h5>
                      <ul className="space-y-1">
                        {aiResponse.data.preventive.map((measure, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {measure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {aiResponse.data.tips && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                        <FileText className="h-4 w-4 text-blue-600 mr-2" />
                        Cultivation Tips
                      </h5>
                      <ul className="space-y-1">
                        {aiResponse.data.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {activeMode === 'crop' ? (
                      <TrendingUp className="h-8 w-8 text-gray-400" />
                    ) : (
                      <Camera className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {activeMode === 'crop' ? 'Crop Recommendation' : 'Early Disease Analysis'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {activeMode === 'crop' 
                      ? 'Share your soil data to get personalized crop recommendations'
                      : 'Upload a plant image or describe symptoms to get early disease diagnosis'
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Quick Tips */}
            <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">💡 Quick Tips</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {activeMode === 'crop' ? (
                  <>
                    <p>• Include soil pH, NPK levels, and location for better recommendations</p>
                    <p>• Mention your preferred crop type or farming goals</p>
                    <p>• Consider seasonal weather patterns in your area</p>
                  </>
                ) : (
                  <>
                    <p>• Take clear, well-lit photos of affected plant parts</p>
                    <p>• Include multiple angles if possible</p>
                    <p>• Describe when symptoms first appeared</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;