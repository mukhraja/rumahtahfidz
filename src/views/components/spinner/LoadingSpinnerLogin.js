import React from "react";
import spin from "./spin.svg";

const LoadingSpinnerLogin = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-min-screen z-20 overflow-hidden bg-gray-200 flex flex-col items-center justify-center">
      {/* <div class="animate-pulse rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500">
        <div class="h-9 w-9 rounded-full bg-gray-700 opacity-75"></div>
      </div> */}
      <div className=" animate-pulse text-center font-poppins text-lg font-bold">
        <img src={spin} className="w-40 h-40" />
        <h1 className=" text-green-700">Mohon di tunggu . . .</h1>
      </div>
    </div>
  );
};

export default LoadingSpinnerLogin;
