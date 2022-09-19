import React from "react";
import { rumahtahfidz } from "../../../gambar";

const Tambahiqro = () => {
  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Hafalan Iqro
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Tahfidz</h1>
          <span>:</span>
          <input className="border rounded-md block col-span-2 pl-2 py-1" />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Santri</h1>
          <span>:</span>
          <input className="border rounded-md block col-span-2 pl-2 py-1" />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Iqro</h1>
          <span>:</span>
          <input className="border rounded-md block col-span-2 pl-2 py-1" />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Halaman</h1>
          <span>:</span>
          <input className="border rounded-md block col-span-2 pl-2 py-1" />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Tanggal Selesai</h1>
          <span>:</span>
          <input className="border rounded-md block col-span-2 pl-2 py-1" />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Keterangan</h1>
          <span>:</span>
          <input className="border rounded-md block col-span-2 pl-2 py-1" />
        </div>
        <div>
          <button className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm">
            SIMPAN
          </button>
          <button className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tambahiqro;
