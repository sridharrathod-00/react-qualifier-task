import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import ProfileScreen from "./components/ProfileScreen";

function App() {
  return (
    <Router>
      <div className="w-full h-screen md:h-[812px] md:w-[375px] bg-white md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] md:rounded-[40px] overflow-hidden md:border-[10px] md:border-slate-900 flex flex-col relative mx-auto my-auto transition-all">
        
        {/* Hardware cosmetics - Displayed strictly on Desktop Mockups */}
        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-xl z-50 items-center justify-center">
          <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
        </div>

        {/* Dynamic Screen Viewport Container */}
        <div className="flex-1 overflow-y-auto pt-6 md:pt-10 pb-6 px-6 flex flex-col bg-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        
        {/* Home bar cosmetic - Displayed strictly on Desktop Mockups */}
        <div className="hidden md:flex w-full bg-white pb-1.5 justify-center items-center h-4">
          <div className="w-28 h-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;