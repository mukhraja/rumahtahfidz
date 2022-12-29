import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../reduxsaga/config/config";
import { doGetGuruByIdRequest } from "../../../reduxsaga/actions/Guru";
import { pengajar } from "../../../gambar";
import Moment from "react-moment";

const DetailPengajar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gurudata } = useSelector((state) => state.guruState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetGuruByIdRequest(payload));
  }, []);

  return (
    <div className="">
      {gurudata && (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
              Data {gurudata[0].name}
            </h1>
            <img
              src={
                gurudata[0].photo == ""
                  ? pengajar
                  : config.urlImage + "/" + gurudata[0].photo
              }
              className="h-20"
            />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].name}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">NIU</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].niu}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Tanggal Lahir</h1>
              <h1 className="block lg:col-span-1 col-span-1">
                {gurudata[0].tempat}
              </h1>
              <h1 className="block lg:col-span-1 col-span-1">/</h1>
              <h1 className="block lg:col-span-2 col-span-2">
                <Moment format="DD - MMMM - YYYY">
                  {gurudata[0].datebirth}
                </Moment>
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Jenis Kelamin</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].gender}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
              <h1 className="block lg:col-span-5 col-span-4">
                {gurudata[0].address}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Telepon</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].telephone}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs my-4">
              <h1 className="block lg:col-span-2 col-span-4">Orang Tua :</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Ayah</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].ayah}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs mb-4">
              <h1 className="block lg:col-span-2 col-span-4">Ibu</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].ibu}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Mulai Masuk</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                <Moment format="DD - MMMM - YYYY">
                  {gurudata[0].mulai_masuk}
                </Moment>
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Mulai Vakum</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].mulai_vakum == null ? (
                  ""
                ) : (
                  <Moment format="DD - MMMM - YYYY">
                    {gurudata[0].mulai_vakum}
                  </Moment>
                )}
              </h1>
            </div>

            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">
                No. Rumah Tahfidz
              </h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].Pondok.nit}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Penempatan</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {gurudata[0].Pondok.name}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs my-4">
              <h1 className="block lg:col-span-2 col-span-4">Hafalan :</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">IQRO</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {gurudata[0].Iqrogurus.length < 1
                  ? "Belum ada hafalan"
                  : gurudata[0].Iqrogurus.at(-1).name}
              </h1>
              <button
                onClick={() => navigate("/dataiqroguru/detail/" + id)}
                className="block lg:col-span-1 col-span-1 bg-mamasingle rounded-md py-1 text-white shadow-md"
              >
                Detail
              </button>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Surah Pendek</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {gurudata[0].Surahpendekgurus.length < 1
                  ? "Belum ada hafalan"
                  : gurudata[0].Surahpendekgurus.at(-1).name}
              </h1>
              <button
                onClick={() => navigate("/datasurahpendekguru/detail/" + id)}
                className="block lg:col-span-1 col-span-1 bg-mamasingle rounded-md py-1 text-white shadow-md"
              >
                Detail
              </button>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs mb-4">
              <h1 className="block lg:col-span-2 col-span-4">Al - Quran</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {gurudata[0].Alqurangurus.length < 1
                  ? "Belum ada hafalan"
                  : gurudata[0].Alqurangurus.at(-1).surah}
              </h1>
              <button
                onClick={() => navigate("/dataalquranguru/detail/" + id)}
                className="block lg:col-span-1 col-span-1 bg-mamasingle rounded-md py-1 text-white shadow-md"
              >
                Detail
              </button>
            </div>
            <div className="py-4 font-poppins">
              {/* {userProfilgurudata[0].role !== "1a2832f9-ceb7-4ff9-930a-af176c88dcc5" &&
              userProfilgurudata[0].role !== "1b864518-299d-469c-b270-4d4b9d5b120f" ? (
                <button
                  className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
                  onClick={() => navigate("/datapengajar/edit/" + id)}
                >
                  Edit
                </button>
              ) : (
                ""
              )} */}
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
                onClick={() => navigate("/datapengajar")}
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPengajar;
