import React from "react";


function PhoneContainer({ children }) {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="phone-frame p-6 flex flex-col">
        {children}
      </div>
      
    </div>
  );
}

export default PhoneContainer;
