import React from "react";
import { santri } from "../../../gambar";

const Santri = () => {
  return (
    <div>
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
    </div>
  );
};

export default Santri;
