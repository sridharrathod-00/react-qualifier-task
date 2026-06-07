import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col h-full">
      <button onClick={() => navigate('/')} className="w-fit mb-6 text-slate-800 hover:text-purple-600 transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <h2 className="text-2xl font-black text-slate-900 mb-1.5">Signin to PopX</h2>
      <p className="text-slate-400 text-sm mb-8">Please enter your verified work email address and password credentials to access your secure portal.</p>

      <form onSubmit={(e) => { e.preventDefault(); if(email && password) navigate('/profile', { state: { name: "Marvin McKinney", email } }); }} className="flex-1">
        <div className="flex flex-col gap-1.5 mb-4 relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address" 
            className="p-3.5 pt-4 border border-slate-300 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-full transition-all"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="flex flex-col gap-1.5 mb-6 relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            className="p-3.5 pt-4 border border-slate-300 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-full transition-all"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white py-3.5 rounded-xl text-base font-bold shadow-md hover:bg-purple-700 transition-all">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;