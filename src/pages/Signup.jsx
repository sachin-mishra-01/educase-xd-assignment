import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneContainer from "../components/PhoneContainer";

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });
  const navigate = useNavigate();

  const update = (k, v) => setForm({ ...form, [k]: v });
  const canSubmit = form.fullName && form.email && form.password;

  return (
    <PhoneContainer>
      <h2 className="text-2xl font-bold text-gray-800  w-[50%]">Create your PopX account</h2>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-xs text-purple-600">Full Name*</label>
          <input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm" placeholder="Marry Doe"/>
        </div>

        <div>
          <label className="block text-xs text-purple-600">Phone number*</label>
          <input value={form.phone} type="number" onChange={(e) => update("phone", e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm" placeholder="9999999999"  />
        </div>

        <div>
          <label className="block text-xs text-purple-600">Email address*</label>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm" placeholder="abc@example.com" />
        </div>

        <div>
          <label className="block text-xs text-purple-600">Password*</label>
          <input type="password" value={form.password} onChange={(e) => update("password", e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm" placeholder="*******"
          />
        </div>

        <div>
          <label className="block text-xs text-purple-600">Company name</label>
          <input value={form.company} onChange={(e) => update("company", e.target.value)} className="w-full px-3 py-2 border rounded-md text-sm" placeholder="Company" />
        </div>

        <div>
          <p className="text-sm text-gray-700">Are you an Agency?*</p>

          <div className="flex gap-6 mt-2">

            <label className="flex items-center gap-2">
              <input type="radio" checked={form.agency === "yes"} onChange={() => update("agency", "yes")} />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" checked={form.agency === "no"} onChange={() => update("agency", "no")}  />
              No
            </label>

          </div>
        </div>
        
        
        <div className="h-[100px]"></div>
        
        <button disabled={!canSubmit} onClick={() => navigate("/account")} className={`w-full mt-6 py-3 rounded-md font-semibold ${   canSubmit   ? "bg-purple-600 text-white"   : "bg-gray-300 text-gray-600 cursor-not-allowed" }`} >
          Create Account

        </button>
         
      </div>

    </PhoneContainer>
  );

}

export default Signup;
