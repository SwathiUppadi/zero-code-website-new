import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProblemPage from './pages/ProblemPage';
import SolutionPage from './pages/SolutionPage';
import FeaturesPage from './pages/FeaturesPage';
import MCPToolsPage from './pages/MCPToolsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ErrorPage from './pages/ErrorPage';
import WaitlistPage from './pages/WaitlistPage';
import ChatPage from './pages/ChatPage';
import DownloadPage from './pages/DownloadPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ErrorBoundary>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/mcp-tools" element={<MCPToolsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/join-waitlist" element={<WaitlistPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
