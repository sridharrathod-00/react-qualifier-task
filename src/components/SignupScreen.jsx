import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState('yes');

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Pass the name and email down to the profile view dynamically
      navigate('/profile', { state: { name, email } });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <button onClick={() => navigate('/')} className="w-fit mb-4 text-slate-800 hover:text-purple-600 transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <h2 className="text-2xl font-black text-slate-900 mb-6">Create your<br />PopX account</h2>

      <form onSubmit={handleSignup} className="flex-1 flex flex-col gap-4">
        <div className="relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Full Name *</label>
          <input type="text" placeholder="Enter full name" className="p-3 border border-slate-300 rounded-xl text-sm w-full outline-none focus:border-purple-500" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Phone Number *</label>
          <input type="text" placeholder="Enter phone number" className="p-3 border border-slate-300 rounded-xl text-sm w-full outline-none focus:border-purple-500" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div className="relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Email Address *</label>
          <input type="email" placeholder="Enter email address" className="p-3 border border-slate-300 rounded-xl text-sm w-full outline-none focus:border-purple-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Password *</label>
          <input type="password" placeholder="Enter password" className="p-3 border border-slate-300 rounded-xl text-sm w-full outline-none focus:border-purple-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="relative">
          <label className="text-xs font-bold text-purple-600 absolute -top-2 left-3 bg-white px-1">Company Name</label>
          <input type="text" placeholder="Enter company name" className="p-3 border border-slate-300 rounded-xl text-sm w-full outline-none focus:border-purple-500" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 block mb-2">Are you an Agency? *</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-800 cursor-pointer">
              <input type="radio" name="agency" value="yes" checked={isAgency === 'yes'} onChange={() => setIsAgency('yes')} className="accent-purple-600 w-4 h-4" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-800 cursor-pointer">
              <input type="radio" name="agency" value="no" checked={isAgency === 'no'} onChange={() => setIsAgency('no')} className="accent-purple-600 w-4 h-4" /> No
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white py-3.5 rounded-xl text-base font-bold shadow-md hover:bg-purple-700 transition-all mt-auto mb-2">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupScreen;