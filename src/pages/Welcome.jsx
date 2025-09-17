import React from "react";
import { useNavigate } from "react-router-dom";
import PhoneContainer from "../components/PhoneContainer";

function Welcome() {
  const navigate = useNavigate();

  return (
    <PhoneContainer>

      <div className="mt-[120%] ">

        <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-8 space-y-3">
          <button

            onClick={() => navigate("/signup")}
            className="w-full py-3 rounded-md bg-purple-600 text-white font-semibold shadow-sm"
          >
            Create Account
          </button>

          <button

            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-md bg-purple-200 text-gray-800 font-medium"
          >
            Already Registered? Login

          </button>
        </div>

      </div>

    </PhoneContainer>
  );
}

export default Welcome;
