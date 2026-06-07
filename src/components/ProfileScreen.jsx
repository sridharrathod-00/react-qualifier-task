import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Clean fallback context reading standard form inputs securely
  const user = location.state?.user || {
    fullName: "Sridhar Rathod",
    email: "sridharrathod.dev@gmail.com",
    company: "Infoz IT Solutions",
    isAgency: "yes",
  };

  return (
    <div className="flex flex-col flex-1 justify-between py-2">
      <div>
        {/* Header Block Section */}
        <div className="border-b border-slate-100 pb-4 mb-5">
          <h2 className="text-xl font-bold text-brand-dark">Account Profile</h2>
        </div>

        {/* Info Layout Matrix */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 bg-slate-100 rounded-full border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
              <span className="text-xl font-bold text-slate-400">SR</span>
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center shadow">
              <span className="text-[10px] text-white font-bold">✓</span>
            </div>
          </div>

          <div className="pt-1 min-w-0 flex-1">
            <h3 className="text-base font-bold text-brand-dark truncate">
              {user.fullName}
            </h3>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        {/* Context Card Block */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-3.5">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Professional Affiliation
            </span>
            <span className="text-sm font-semibold text-brand-dark mt-0.5 block">
              {user.company || "Not Specified"}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Agency Operations status
            </span>
            <span className="text-sm font-semibold text-brand-dark mt-0.5 block capitalize">
              {user.isAgency === "yes" ? "Registered Agency Partner" : "Individual Professional"}
            </span>
          </div>
        </div>
      </div>

      {/* Logout Navigation */}
      <button
        onClick={() => navigate("/")}
        className="w-full mt-6 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold rounded-xl active:scale-[0.99] transition-all cursor-pointer text-sm text-center"
      >
        Sign Out
      </button>
    </div>
  );
}

export default ProfileScreen;