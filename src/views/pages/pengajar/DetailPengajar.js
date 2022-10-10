import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../reduxsaga/config/config";
import { doGetGuruByIdRequest } from "../../../reduxsaga/actions/Guru";
import { pengajar } from "../../../gambar";

const DetailPengajar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gurudata } = useSelector((state) => state.guruState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetGuruByIdRequest(payload));
  }, []);

  return (
    <div className=" overflow-hidden">
      {gurudata.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold text-2xl font-poppins">
              Data {e.name}
            </h1>
            <img
              src={e.photo == "" ? pengajar : config.urlImage + "/" + e.photo}
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
              <h1 className="block col-span-2">{e.niu}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Alamat</h1>
              <h1 className="block col-span-5">{e.address}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Tanggal Lahir</h1>
              <h1 className="block col-span-2">{e.datebirth}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">Jenis Kelamin</h1>
              <h1 className="block col-span-2">{e.gender}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Pendidikan</h1>
              <h1 className="block col-span-2">{e.education}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Telepon</h1>
              <h1 className="block col-span-2">{e.telephone}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Ayah</h1>
              <h1 className="block col-span-2">{e.ayah}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Ibu</h1>
              <h1 className="block col-span-2">{e.ibu}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Mulai Masuk</h1>
              <h1 className="block col-span-2">{e.mulai_masuk}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Mulai Masuk</h1>
              <h1 className="block col-span-2">{e.mulai_vakum}</h1>
            </div>

            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
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

export default DetailPengajar;
