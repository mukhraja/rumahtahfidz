import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../reduxsaga/config/config";
import { pengajar } from "../../../gambar";
import Moment from "react-moment";
import axios from "axios";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";
import { Toaster } from "react-hot-toast";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const DetailPengajar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listguru, setListGuru] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdetailguru = async () => {
      try {
        const data = await ApiSantri.getData("/guru/getbyid/" + id);
        setLoading(false);
        setListGuru(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };

    fetchdetailguru();
  }, []);

  return (
    <div className="">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      {listguru.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
              Data {e.name}
            </h1>
            <img
              src={e.photo == "" ? pengajar : config.urlImage + "/" + e.photo}
              className="h-20 w-20 object-cover"
            />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.name}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">NIU</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.niu}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Tanggal Lahir</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {e.tempat} /{" "}
                <Moment format="DD - MMMM - YYYY">{e.datebirth}</Moment>
              </h1>
              {/* <h1 className="block lg:col-span-1 col-span-1">/</h1> */}
              {/* <h1 className="block lg:col-span-2 col-span-2">
                <Moment format="DD - MMMM - YYYY">
                  {e.datebirth}
                </Moment>
              </h1> */}
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Jenis Kelamin</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.gender}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
              <h1 className="block lg:col-span-5 col-span-4">{e.address}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Telepon</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.telephone}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs my-4">
              <h1 className="block lg:col-span-2 col-span-4">Orang Tua :</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Ayah</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.ayah}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs mb-4">
              <h1 className="block lg:col-span-2 col-span-4">Ibu</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.ibu}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Mulai Masuk</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                <Moment format="DD - MMMM - YYYY">{e.mulai_masuk}</Moment>
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Mulai Vakum</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {e.mulai_vakum == "0000-00-00 00:00:00" ||
                e.mulai_vakum == null ? (
                  " - "
                ) : (
                  <Moment format="DD - MMMM - YYYY">{e.mulai_vakum}</Moment>
                )}
              </h1>
            </div>
            {/* 
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">
                No. Rumah Tahfidz
              </h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {listguru.Pondok.nit}
              </h1>
            </div> */}
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Penempatan</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                {e.nama_pondok}
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs my-4">
              <h1 className="block lg:col-span-2 col-span-4">Hafalan :</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">IQRO</h1>
              <h1 className="block lg:col-span-5 col-span-3">
                {e.hafalan_iqro == null ? "Belum ada hafalan" : e.hafalan_iqro}
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
                {e.hafalan_surahpendek == null
                  ? "Belum ada hafalan"
                  : e.hafalan_surahpendek}
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
                {e.hafalan_alquran == null
                  ? "Belum ada hafalan"
                  : e.hafalan_alquran}
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
      ))}
    </div>
  );
};

export default DetailPengajar;
