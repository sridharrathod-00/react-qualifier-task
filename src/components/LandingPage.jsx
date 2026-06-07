import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 justify-between py-4">
      {/* Top Section: Branding & Graphics */}
      <div className="flex flex-col items-center text-center mt-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center shadow-lg shadow-brand-accent/20">
            <span className="text-white font-black text-xl">X</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-brand-dark">PopX</span>
        </div>
        
        <h1 className="text-2xl font-bold text-brand-dark px-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-[280px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Bottom Section: Fluid Action Buttons */}
      <div className="flex flex-col gap-3 w-full mb-2">
        <button
          onClick={() => navigate("/signup")}
          className="w-full py-3.5 bg-brand-accent hover:bg-brand-accent/95 text-white font-semibold rounded-xl shadow-lg shadow-brand-accent/20 active:scale-[0.99] transition-all cursor-pointer text-sm"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full py-3.5 bg-brand-light hover:bg-slate-200 text-brand-dark font-semibold rounded-xl active:scale-[0.99] transition-all cursor-pointer text-sm"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;