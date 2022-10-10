import React from "react";
import { logo } from "../../../gambar";

const Landing = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center font-poppins">
      <div className=" text-center">
        <img src={logo} className=" w-56" />
        <button className=" bg-mamasingle rounded-md px-4 py-1 text-white text-lg my-4 shadow-md">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Landing;
