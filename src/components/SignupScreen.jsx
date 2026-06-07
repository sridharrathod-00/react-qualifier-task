import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    // Pass user profile state cleanly through the router DOM allocation
    navigate("/profile", { state: { user: formData } });
  };

  return (
    <div className="flex flex-col flex-1 justify-between py-2">
      <div>
        <h2 className="text-2xl font-bold text-brand-dark mb-1">
          Create your <br />PopX account
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Fill in the details below to get started.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Company Name", name: "company", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                required={field.name === "fullName" || field.name === "email"}
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                placeholder=" "
                className="w-full px-4 pt-5 pb-2 text-sm text-brand-dark border border-slate-200 rounded-xl focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 peer bg-white placeholder-transparent transition-all"
              />
              <label className="absolute left-4 top-1.5 text-[10px] font-medium text-brand-accent tracking-wide uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-brand-accent pointer-events-none">
                {field.label} <span className="text-rose-500">*</span>
              </label>
            </div>
          ))}

          {/* Agency Selection Radio Matrix */}
          <div className="mt-2">
            <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
              Are you an Agency? <span className="text-rose-500">*</span>
            </label>
            <div className="flex gap-6 items-center">
              {["yes", "no"].map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-brand-dark font-medium capitalize cursor-pointer group">
                  <input
                    type="radio"
                    name="isAgency"
                    value={option}
                    checked={formData.isAgency === option}
                    onChange={(e) => setFormData({ ...formData, isAgency: e.target.value })}
                    className="w-4 h-4 text-brand-accent border-slate-300 focus:ring-brand-accent accent-brand-accent cursor-pointer"
                  />
                  <span className="group-hover:text-brand-accent transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3.5 bg-brand-accent hover:bg-brand-accent/95 text-white font-semibold rounded-xl shadow-lg shadow-brand-accent/20 active:scale-[0.99] transition-all cursor-pointer text-sm text-center"
      >
        Create Account
      </button>
    </div>
  );
}

export default SignupScreen;