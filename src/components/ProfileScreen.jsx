import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Camera, LogOut } from 'lucide-react';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userName = location.state?.name || "Marvin McKinney";
  const userEmail = location.state?.email || "marvin.mckinney@example.com";

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-5">Account Settings</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80" 
            alt="Avatar" 
            className="w-[76px] h-[76px] rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full border border-white flex cursor-pointer hover:bg-purple-700 transition-colors">
            <Camera className="w-3 h-3 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-base font-black text-slate-900">{userName}</h3>
          <p className="text-slate-500 text-sm mt-0.5">{userEmail}</p>
        </div>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed border-b border-dashed border-slate-200 pb-6 mb-6">
        Welcome to your profile console workspace. Here you can configure system security criteria, verify connected endpoints, modify active enterprise plans, and handle team access permissions.
      </p>

      <button 
        onClick={() => navigate('/')} 
        className="flex items-center justify-center gap-2 bg-red-50 text-red-500 hover:bg-red-100 transition-colors py-3.5 rounded-xl text-base font-bold w-full mt-auto mb-2"
      >
        <LogOut className="w-4 h-4" />
        Log Out
      </button>
    </div>
  );
};

export default ProfileScreen;