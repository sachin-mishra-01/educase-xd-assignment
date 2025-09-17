import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PhoneContainer from "../components/PhoneContainer";

function Login() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const canLogin = email && pass;

  return (
    <PhoneContainer>

      <h2 className="text-2xl font-bold text-gray-800 w-[70%]">Signin to your PopX account</h2>

      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-xs text-purple-600">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" className="w-full px-3 py-2 border rounded-md text-sm" />
        </div>

        <div>
          <label className="block text-xs text-purple-600">Password</label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter password" className="w-full px-3 py-2 border rounded-md text-sm" />
        </div>

        <button
          disabled={!canLogin}
          onClick={() => navigate("/account")}
          className={`w-full py-3 rounded-md font-semibold ${ canLogin  ? "bg-gray-800 text-white"  : "bg-gray-300 text-gray-600 cursor-not-allowed" }`}
        >
          Login
        </button>

      </div>

    </PhoneContainer>
  );
}

export default Login;
