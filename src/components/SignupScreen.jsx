import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", password: "", company: "", isAgency: "yes"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    navigate("/profile", { state: { user: formData } });
  };

  return (
    <div className="flex flex-col flex-1 justify-between py-1 w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
          Create your <br />PopX account
        </h2>
        <p className="text-xs text-slate-400 mt-1 mb-6">
          Provide your verification profile parameters to join the workspace network.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Company Name", name: "company", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative w-full">
              <input
                type={field.type}
                required={field.name === "fullName" || field.name === "email"}
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                placeholder=" "
                className="w-full px-3 pt-4.5 pb-1.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-violet-600 peer bg-white placeholder-transparent transition-all"
              />
              <label className="absolute left-3 top-1 text-[10px] font-semibold text-violet-600 tracking-wide uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-violet-600 pointer-events-none">
                {field.label} { (field.name === "fullName" || field.name === "email") && <span className="text-rose-500">*</span> }
              </label>
            </div>
          ))}

          {/* Radio Group Selection */}
          <div className="mt-1 w-full">
            <span className="text-xs font-semibold text-slate-700 block mb-2">
              Are you an Agency? <span className="text-rose-500">*</span>
            </span>
            <div className="flex gap-6 items-center">
              {["yes", "no"].map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-slate-800 capitalize cursor-pointer group">
                  <input
                    type="radio"
                    name="isAgency"
                    value={option}
                    checked={formData.isAgency === option}
                    onChange={(e) => setFormData({ ...formData, isAgency: e.target.value })}
                    className="w-4 h-4 text-violet-600 focus:ring-violet-500 accent-violet-600 cursor-pointer"
                  />
                  <span className="group-hover:text-violet-600 transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer text-center active:scale-[0.99] shadow-md shadow-violet-600/10"
      >
        Create Account
      </button>
    </div>
  );
}

export default SignupScreen;