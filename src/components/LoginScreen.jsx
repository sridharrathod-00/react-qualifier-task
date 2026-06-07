import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Smooth navigation passing authenticated state context cleanly
    navigate("/profile", { 
      state: { 
        user: { 
          fullName: "Marvin McKinney", 
          email: email, 
          company: "Enterprise Design Solutions", 
          isAgency: "yes" 
        } 
      } 
    });
  };

  return (
    <div className="flex flex-col flex-1 justify-between py-2 w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
          Signin to your <br />PopX account
        </h2>
        <p className="text-xs text-slate-400 mt-1 mb-8">
          Enter your corporate credentials below to access your workspace dashboard.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
          {/* Email Field */}
          <div className="relative w-full">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="w-full px-3 pt-4.5 pb-1.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-violet-600 peer bg-white placeholder-transparent transition-all"
            />
            <label className="absolute left-3 top-1 text-[10px] font-semibold text-violet-600 tracking-wide uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-violet-600 pointer-events-none">
              Email Address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative w-full">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="w-full px-3 pt-4.5 pb-1.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-violet-600 peer bg-white placeholder-transparent transition-all"
            />
            <label className="absolute left-3 top-1 text-[10px] font-semibold text-violet-600 tracking-wide uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-violet-600 pointer-events-none">
              Password
            </label>
          </div>
        </form>
      </div>

      <button
        onClick={handleLogin}
        className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer text-center active:scale-[0.99] shadow-md shadow-violet-600/10"
      >
        Login
      </button>
    </div>
  );
}

export default LoginScreen;