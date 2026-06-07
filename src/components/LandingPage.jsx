import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 justify-between py-2 w-full">
      {/* Brand Header */}
      <div className="flex flex-col items-center text-center mt-6 w-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-black text-lg">X</span>
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">PopX</span>
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Welcome to PopX
        </h1>
        <p className="text-sm text-slate-400 mt-2 max-w-[260px] leading-relaxed">
          Manage your creative agency workspace, collaborate on team milestones, and track productivity metrics.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full mb-4">
        <button
          onClick={() => navigate("/signup")}
          className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer shadow-sm active:scale-[0.99]"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl text-sm transition-colors cursor-pointer active:scale-[0.99]"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;