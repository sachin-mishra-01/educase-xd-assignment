import React from "react";
import PhoneContainer from "../components/PhoneContainer";
import img from '../assets/img.png'
import pic from '../assets/pic.png'

function Account() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <div className="phone-frame  flex flex-col ">
    
      <h3 className="p-4 text-lg h-[70px] font-medium text-gray-700 bg-white flex items-center ">Account Settings</h3>

      <div className=" rounded p-4"> 

        <div className="flex items-center gap-4  pb-4"> 

         <div className="relative w-16 h-16 mr-4">
  
            <img
              src={img}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 p-1 bg-purple-600 rounded-full">
              <img src={pic} alt="Camera" className="w-3 h-3 invert" />
            </div>
         </div>

          <div>
            <div className="font-semibold text-gray-800">Marry Doe</div>
            <div className="text-sm text-gray-500">marry@gmail.com</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 leading-6"> 
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
         
        
      </div>
       <div className=" w-full border-b border-dashed border-gray-700 mb-4"></div>
     </div>
    </div>
  );
}

export default Account;
