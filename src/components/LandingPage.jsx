import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full justify-between items-center text-center">
      <div className="my-auto flex flex-col items-center">
        <div className="bg-purple-100 p-5 rounded-full inline-block mb-6">
          <ShieldAlert className="w-12 h-12 text-purple-600" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Welcome to PopX</h1>
        <p className="text-slate-500 text-sm px-4 leading-relaxed">
          Manage your creative agency projects, collaborate with team milestones, and view production data on a clean mobile dashboard layout.
        </p>
      </div>

      <div className="w-full mb-2">
        <button 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3.5 rounded-xl text-base font-bold shadow-md transition-all active:scale-[0.99]"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button 
          className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 py-3.5 rounded-xl text-base font-bold transition-all mt-3"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;