import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center my-auto">
          <strong className="font-bold text-2xl">
            Data berhasil ditambahkan
          </strong>
          <div className="flex justify-center">
            <button
              className="py-2 px-4 bg-blue-400 text-white"
              onClick={() => navigate("/datasantri")}
            >
              KEMBALI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
