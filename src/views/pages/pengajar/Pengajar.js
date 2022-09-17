import React from "react";
import { pengajar } from "../../../gambar";

const Pengajar = () => {
  return (
    <div>
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Pengajar
        </h1>
        <img src={pengajar} className="h-20" />
      </div>
    </div>
  );
};

export default Pengajar;
