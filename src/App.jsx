import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import ProfileScreen from "./components/ProfileScreen";

function App() {
  return (
    <Router>
      {/* 
        📱 MOBILE MODE (Default): Takes full width/height, scrolls naturally with the browser.
        🖥️ DESKTOP MODE (md:): Triggers a 375px x 812px smartphone mockup centered perfectly.
      */}
      <div className="w-full min-h-screen bg-white flex flex-col relative transition-all overflow-x-hidden
                      md:min-h-0 md:w-[375px] md:h-[812px] md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] 
                      md:rounded-[40px] md:border-[10px] md:border-slate-900 md:my-auto md:mx-auto">
        
        {/* Hardware Camera Notch Cosmetic — Only visible on Desktop viewports */}
        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-xl z-50 items-center justify-center">
          <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
        </div>

        {/* 
          Main Scroll Screen view:
          On Mobile, it uses native browser page viewport scrolling.
          On Desktop, it scrolls within the boundary constraints of the phone frame layout.
        */}
        <div className="w-full flex-1 pt-6 px-6 pb-8 flex flex-col bg-white
                        md:pt-10 md:overflow-y-auto no-scrollbar">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        
        {/* Cosmetic Home Indicator Bar — Only visible on Desktop viewports */}
        <div className="hidden md:flex w-full bg-white pb-1.5 justify-center items-center h-4">
          <div className="w-28 h-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;