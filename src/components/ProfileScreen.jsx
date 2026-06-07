import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const user = location.state?.user || {
    fullName: "Sridhar Rathod",
    email: "sridharrathod.dev@gmail.com",
    company: "Infoz IT Solutions",
    isAgency: "yes",
  };

  return (
    <div className="flex flex-col flex-1 justify-between py-2 w-full">
      <div className="w-full">
        <div className="border-b border-slate-100 pb-3 mb-5 w-full">
          <h2 className="text-lg font-bold text-slate-900">User Profile</h2>
        </div>

        <div className="flex items-start gap-4 mb-6 w-full">
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden">
              <span className="text-base font-bold text-slate-400">SR</span>
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-violet-600 rounded-full border-2 border-white flex items-center justify-center shadow">
              <span className="text-[8px] text-white font-bold">✓</span>
            </div>
          </div>

          <div className="pt-0.5 min-w-0 flex-1">
            <h3 className="text-base font-bold text-slate-900 truncate">
              {user.fullName}
            </h3>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col gap-3.5 w-full">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Company</span>
            <span className="text-sm font-medium text-slate-800 mt-0.5 block">{user.company || "Not Specified"}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Agency Status</span>
            <span className="text-sm font-medium text-slate-800 mt-0.5 block capitalize">{user.isAgency === "yes" ? "Registered Partner" : "Individual Member"}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full mt-6 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 font-medium rounded-xl text-sm transition-colors cursor-pointer text-center"
      >
        Sign Out
      </button>
    </div>
  );
}

export default ProfileScreen;