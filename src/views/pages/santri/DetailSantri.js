import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import { santri } from "../../../gambar";
import config from "../../../reduxsaga/config/config";
import Moment from "react-moment";

const DetailSantri = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);
  const { userProfile } = useSelector((state) => state.userState);

  const [data, setDatas] = useState([]);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSantriByIdRequest(payload));
  }, []);

  return (
    <div className="">
      {santridata && (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
              Data {santridata[0].name}
            </h1>
            <img
              src={
                santridata[0].photo == ""
                  ? santri
                  : config.urlImage + "/" + santridata[0].photo
              }
              className="h-20"
            />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].name}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">NIS</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].nis}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs ">
              <h1 className="block lg:col-span-2 col-span-4">Tanggal Lahir</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].tempat} /{" "}
                <Moment format="DD-MM-YYYY">{santridata[0].datebirth}</Moment>
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Jenis Kelamin</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].gender}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
              <h1 className="block lg:col-span-5 col-span-4">
                {santridata[0].address}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Telepon</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].telephone}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs my-4">
              <h1 className="block lg:col-span-2 col-span-4">Orang Tua :</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Ayah</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].ayah}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs mb-4">
              <h1 className="block lg:col-span-2 col-span-4">Ibu</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].ibu}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Mulai Masuk</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                <Moment format="DD-MM-YYYY">{santridata[0].mulai_masuk}</Moment>
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Mulai Vakum</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].mulai_vakum == null ? (
                  ""
                ) : (
                  <Moment format="DD - MMMM - YYYY">
                    {santridata[0].mulai_vakum}
                  </Moment>
                )}
              </h1>
            </div>

            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">
                No. Rumah Tahfidz
              </h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].Pondok.nit}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Penempatan</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {santridata[0].Pondok.name}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs my-4">
              <h1 className="block lg:col-span-2 col-span-4">Hafalan :</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">IQRO</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {santridata[0].Iqrosantris.length < 1
                  ? "Belum ada hafalan"
                  : santridata[0].Iqrosantris.at(-1).name}
              </h1>
              <button
                onClick={() => navigate("/dataiqrosantri/detail/" + id)}
                className="block lg:col-span-1 col-span-1 bg-mamasingle rounded-md py-1 text-white shadow-md text-xs"
              >
                Detail
              </button>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Surah Pendek</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {santridata[0].Surahpendeksantris.length < 1
                  ? "Belum ada hafalan"
                  : santridata[0].Surahpendeksantris.at(-1).name}
              </h1>
              <button
                onClick={() => navigate("/datasurahpendeksantri/detail/" + id)}
                className="block lg:col-span-1 col-span-1 bg-mamasingle rounded-md py-1 text-white shadow-md text-xs"
              >
                Detail
              </button>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs mb-4">
              <h1 className="block lg:col-span-2 col-span-4">Al - Quran</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {santridata[0].Alquransantris.length < 1
                  ? "Belum ada hafalan"
                  : santridata[0].Alquransantris.at(-1).surah}
              </h1>
              <button
                onClick={() => navigate("/dataalquransantri/detail/" + id)}
                className="block lg:col-span-1 col-span-1 bg-mamasingle rounded-md py-1 text-white shadow-md text-xs"
              >
                Detail
              </button>
            </div>
            <div className="py-4 font-poppins">
              {/* {userProfilsantridata[0].role !== "1a2832f9-ceb7-4ff9-930a-af176c88dcc5" &&
              userProfilsantridata[0].role !== "1b864518-299d-469c-b270-4d4b9d5b120f" ? (
                <button
                  className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
                  onClick={() => navigate("/datasantri/edit/" + id)}
                >
                  Edit
                </button>
              ) : (
                ""
              )} */}
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
                onClick={() => navigate("/datasantri")}
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

export default DetailSantri;
