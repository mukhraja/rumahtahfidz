import React from "react";
import { rumahtahfidz } from "../../../gambar";

const Tambahrumahtahfiz = () => {
  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Tambah Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md sm:pr-96">
        <div className="flex justify-between">
          <h1>Nama</h1>
          <span>:</span>
          <input className="border rounded-md w-1/2" />
        </div>
        <div className="flex justify-between">
          <h1>NIT</h1>
          <span>:</span>
          <input className="border rounded-md w-1/2" />
        </div>
        <div className="flex justify-between">
          <h1>Alamat</h1>
          <span>:</span>
          <input className="border rounded-md w-1/2" />
        </div>
        <div className="flex justify-between">
          <h1>No. Telepon</h1>
          <span>:</span>
          <input className="border rounded-md w-1/2" />
        </div>
        <div className="flex justify-between">
          <h1>Nama Kepala Tahfidz</h1>
          <span>:</span>
          <input className="border rounded-md w-1/2" />
        </div>
        <div className="flex justify-between">
          <h1>Foto Tahfidz</h1>
          <span>:</span>
          <input className="border rounded-md w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Tambahrumahtahfiz;
