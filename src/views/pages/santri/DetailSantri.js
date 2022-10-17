import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import { santri } from "../../../gambar";
import config from "../../../reduxsaga/config/config";

const DetailSantri = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSantriByIdRequest(payload));
  }, []);

  return (
    <div className=" overflow-hidden">
      {santridata.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold text-2xl font-poppins">
              Data {e.name}
            </h1>
            <img
              src={e.photo == "" ? santri : config.urlImage + "/" + e.photo}
              className="h-20"
            />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Nama</h1>
              <h1 className="block col-span-2">{e.name}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">NIS</h1>
              <h1 className="block col-span-2">{e.nis}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Alamat</h1>
              <h1 className="block col-span-5">{e.address}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">Tanggal Lahir</h1>
              <h1 className="block col-span-2">{e.datebirth}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Jenis Kelamin</h1>
              <h1 className="block col-span-2">{e.gender}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">Pendidikan</h1>
              <h1 className="block col-span-2">{e.education}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Kota</h1>
              <h1 className="block col-span-2">{e.city}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">Provinsi</h1>
              <h1 className="block col-span-2">{e.province}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Parent</h1>
              <h1 className="block col-span-2">{e.parent}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">Telepon</h1>
              <h1 className="block col-span-2">{e.telephone}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Penempatan</h1>
              <h1 className="block col-span-2">{e.Pondok.name}</h1>
            </div>
            <div className="py-4 font-poppins">
              <button
                className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
                onClick={() => navigate("/datasantri/edit/" + id)}
              >
                Edit
              </button>
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
                onClick={() => navigate("/datasantri")}
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailSantri;
