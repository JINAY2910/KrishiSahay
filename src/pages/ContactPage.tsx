import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: 'Email Us',
      info: 'support@agrismartai.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Call Us',
      info: '+91 98765 43210',
      description: 'Available 24/7 for emergency support'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: 'Visit Us',
      info: 'New Delhi, India',
      description: 'Agricultural Technology Hub'
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: 'Business Hours',
      info: 'Mon - Sat: 9:00 AM - 8:00 PM',
      description: 'Sunday: Emergency support only'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our AI-powered agriculture platform? We're here to help you 
              transform your farming operations with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information Cards */}
        <section className="-mt-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-green-50 rounded-lg">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-green-700 font-medium mb-2">{info.info}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. Our agricultural experts will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                      placeholder="Tell us about your farming needs, questions, or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-green-600 hover:text-green-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-green-600 hover:text-green-700 underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* Map and Additional Info */}
          <section className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-20"></div>
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600">
                  Agricultural Technology Hub<br />
                  New Delhi, India
                </p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Emergency Agricultural Support</p>
                    <p className="text-gray-600 text-sm">Call our 24/7 helpline for urgent farming issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Technical Support</p>
                    <p className="text-gray-600 text-sm">Get help with platform features and troubleshooting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Training Sessions</p>
                    <p className="text-gray-600 text-sm">Schedule personalized training for your team</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Call Emergency Support
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;