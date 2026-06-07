// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <Router>
      {/* 
        On Mobile (default): width and height are 100% (w-full h-full), no rounded corners, no borders.
        On Desktop (md: breakpoint): locks down to a pixel-perfect 375x812 container, centers itself, adds device borders and rounded edges.
      */}
      <div className="w-full h-full min-h-screen md:min-h-0 md:w-[375px] md:h-[812px] bg-white md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] md:rounded-[48px] overflow-hidden md:border-[12px] md:border-slate-900 flex flex-col relative mx-auto my-auto transition-all">
        
        {/* Hardware notch detail - Hidden on native mobile screens, only visible on desktop mockup */}
        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-slate-900 rounded-b-2xl z-50 items-center justify-center">
          <div className="w-12 h-1 bg-slate-800 rounded-full mb-1"></div>
        </div>

        {/* Inner screen content view container */}
        <div className="flex-1 overflow-y-auto pt-6 md:pt-10 pb-6 px-6 flex flex-col no-scrollbar bg-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        
        {/* Bottom indicator line - Hidden on native mobile screens, only visible on desktop mockup */}
        <div className="hidden md:flex w-full bg-white pb-2 justify-center items-center h-5">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;