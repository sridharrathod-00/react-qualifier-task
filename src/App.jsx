import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <Router>
      {/* Centered Pixel-Perfect Mobile UI Canvas Viewport wrapper */}
      <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] overflow-hidden border-[10px] border-slate-900 flex flex-col relative mx-auto my-auto">
        <div className="flex-1 overflow-y-auto p-6 flex flex-col no-scrollbar">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;