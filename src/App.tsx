import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import ChatbotPage from './pages/ChatbotPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/dashboard-preview" element={<DashboardPage />} />
        <Route path="/ai-assistant" element={<ChatbotPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;