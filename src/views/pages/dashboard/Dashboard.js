import React, { useEffect, useState } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import {
  bacaiqro,
  bacajuz,
  hafalquran,
  pengajar,
  rumahtahfidz,
  santri,
} from "../../../gambar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import LoadingSpinnerAwal from "../../components/spinner/LoadingSprinnerAwal";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import { Toaster } from "react-hot-toast";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { santridata } = useSelector((state) => state.santriState);
  const { iqrosantridata } = useSelector((state) => state.iqroSantriState);
  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );
  const { surahpendeksantridata } = useSelector(
    (state) => state.surahPendekSantriState
  );
  const { gurudata } = useSelector((state) => state.guruState);
  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  const { userProfile } = useSelector((state) => state.userState);
  const { isLoading, isKoneksi, masterpondokdata } = useSelector(
    (state) => state.masterPondokState
  );

  const [countsantri, setCountSantri] = useState(0);
  const [countguru, setCountGuru] = useState(0);
  const [countiqro, setCountIqroSantri] = useState(0);
  const [countsurahpendek, setCountSurahPendekSantri] = useState(0);
  const [countalquran, setCountAlquranSantri] = useState(0);
  const [countmasterpondok, setCountMasterPondok] = useState(0);
  const [countpondok, setCountPondok] = useState(0);
  const [listmasterpondok, setListmasterpondok] = useState([]);
  const [listpondok, setListpondok] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      // TOTAL SANTRI
      const fetchtotalsantri = async () => {
        try {
          const data = await ApiSantri.getData(
            "/santri/getcountsantri/?pondokId=&masterpondokId="
          );
          setCountSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalsantri();
      // TOTAL GURU
      const fetchtotalguru = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/guru/getcountguru/?pondokId=&masterpondokId="
          );
          setCountGuru(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalguru();

      const fetchtotaliqrosantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/iqrosantri/getcountiqrosantri/?pondokId=&masterpondokId="
          );
          setCountIqroSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotaliqrosantri();

      const fetchtotalsurahpendeksantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/surahpendeksantri/getcountsurahpendeksantri/?pondokId=&masterpondokId="
          );
          setCountSurahPendekSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalsurahpendeksantri();

      const fetchtotalalquransantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/alquransantri/getcountalquransantri/?pondokId=&masterpondokId="
          );
          setCountAlquranSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalalquransantri();

      const fetchtotalmasterpondok = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/masterpondok/getcountmasterpondok"
          );

          setCountMasterPondok(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalmasterpondok();

      const fetchlistmasterpondok = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData("/masterpondok/getbysumsantri");
          setListmasterpondok(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistmasterpondok();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      // TOTAL SANTRI BY MASTER TAHFODZ

      const fetchtotalsantri = async () => {
        try {
          const data = await ApiSantri.getData(
            `/santri/getcountsantri/?pondokId=&masterpondokId=${userProfile.masterpondokId}`
          );
          setCountSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalsantri();

      // TOTAL GURU
      const fetchtotalguru = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/guru/getcountguru/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId
          );
          setCountGuru(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalguru();

      // TOTAL IQRO SANTRI

      const fetchtotaliqrosantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/iqrosantri/getcountiqrosantri/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId
          );
          setCountIqroSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotaliqrosantri();

      // TOTAL SURAH PENDEK SANTRI

      const fetchtotalsurahpendeksantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/surahpendeksantri/getcountsurahpendeksantri/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId
          );
          setCountSurahPendekSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalsurahpendeksantri();

      // TOTAL ALQURAN SANTRI

      const fetchtotalalquransantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/alquransantri/getcountalquransantri/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId
          );
          setCountAlquranSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalalquransantri();

      // TOTAL PONDOK
      const fetchtotalpondok = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/pondok/getcountpondok/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId
          );
          setCountPondok(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalpondok();

      // LIST PONDOK

      const fetchlistpondok = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlistpondokdashboard/?masterpondokId=" +
              userProfile.masterpondokId
          );
          setListpondok(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistpondok();
    } else {
      const fetchtotalsantri = async () => {
        try {
          const data = await ApiSantri.getData(
            `/santri/getcountsantri/?pondokId=${userProfile.pondokId}&masterpondokId=`
          );
          setCountSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalsantri();

      // TOTAL GURU

      const fetchtotalguru = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/guru/getcountguru/?pondokId=" +
              userProfile.pondokId +
              "&masterpondokId="
          );
          setCountGuru(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalguru();

      // TOTAL IQRO SANTRI

      const fetchtotaliqrosantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/iqrosantri/getcountiqrosantri/?pondokId=" +
              userProfile.pondokId +
              "&masterpondokId="
          );
          setCountIqroSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotaliqrosantri();

      // TOTAL SURAH PENDEK SANTRI

      const fetchtotalsurahpendeksantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/surahpendeksantri/getcountsurahpendeksantri/?pondokId=" +
              userProfile.pondokId +
              "&masterpondokId="
          );
          setCountSurahPendekSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalsurahpendeksantri();

      // TOTAL ALQURAN SANTRI

      const fetchtotalalquransantri = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/alquransantri/getcountalquransantri/?pondokId=" +
              userProfile.pondokId +
              "&masterpondokId="
          );
          setCountAlquranSantri(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalalquransantri();

      const fetchtotalpondok = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/pondok/getcountpondok/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId
          );
          setCountPondok(data.hasil);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchtotalpondok();

      // LIST PONDOK

      const fetchlistpondok = async () => {
        setLoading(true);
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlistpondokdashboard/?masterpondokId=" +
              userProfile.masterpondokId
          );
          setListpondok(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistpondok();
    }
  }, [userProfile]);

  return (
    <div className=" font-poppins">
      {Loading == true ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="sm:flex-none lg:flex justify-center mx-2">
        <div className="my-4 lg:ml-4 lg:mr-2 shadow-md rounded-lg lg:h-28 w-full bg-gradient-to-r from-green-400 ro bg-mamasingle hover:from-mamasingle hover:to-green-400">
          <div className="p-1 flex sm:flex-wrap justify-center lg:justify-around sm:static md:top-0 lg:relative lg:top-5">
            <Link to="/datasantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={santri} className="h-10" />
                </div>
                <h1 className=" font-medium">Santri</h1>
                <h2 className="font-medium">{countsantri}</h2>
              </div>
            </Link>
            <Link to="/dataalquransantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={hafalquran} className="h-10" />
                </div>
                <h1 className=" font-medium">Hafal Qur'an</h1>
                <h2 className="font-medium">{countalquran}</h2>
              </div>
            </Link>
            <Link to="/dataiqrosantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={bacaiqro} className="h-10" />
                </div>
                <h1 className=" font-medium">Baca Iqro</h1>
                <h2 className="font-medium">{countiqro}</h2>
              </div>
            </Link>
            <Link to="/datasurahpendeksantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={bacajuz} className="h-10" />
                </div>
                <h1 className=" font-medium">Baca Juz 30</h1>
                <h2 className="font-medium">{countsurahpendek}</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="my-4 lg:ml-2 lg:mr-4 shadow-md rounded-lg lg:h-28 sm:w-full lg:w-1/2 bg-gradient-to-r from-green-400 ro bg-mamasingle hover:from-mamasingle hover:to-green-400">
          <div className="p-1 flex sm:flex-wrap justify-center lg:justify-around sm:static sm:top-0 lg:relative lg:top-5">
            <Link
              to="/datapengajar"
              // className={`${
              //   userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f884"
              //     ? " pointer-events-none"
              //     : ""
              // }`}
            >
              <div className="shadow-md p-2 lg:px-1 py-4 text-center rounded-lg w-32 items-center bg-white sm:m-2 lg:m-0">
                <div className="flex justify-center pb-5">
                  <img src={pengajar} className="h-10" />
                </div>
                <h1 className=" font-medium">Pengajar</h1>
                <h2 className="font-medium">{countguru}</h2>
              </div>
            </Link>
            <Link
              to="/datarumahtahfiz"
              className={`${
                userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883"
                  ? "hidden"
                  : ""
              }`}
            >
              <div className="shadow-md p-2 lg:px-1 py-4 text-center rounded-lg w-32 items-center bg-white sm:m-2 lg:m-0">
                <div className="flex justify-center pb-5">
                  <img src={rumahtahfidz} className="h-10" />
                </div>
                <h1 className=" font-medium">Rumah Tahfidz</h1>
                <h2 className="font-medium">{countpondok}</h2>
              </div>
            </Link>
            <Link
              to="/datamasterrumahtahfiz"
              className={`${
                userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f883"
                  ? "hidden"
                  : ""
              }`}
            >
              <div className="shadow-md p-2 lg:px-1 py-4 text-center rounded-lg w-32 items-center bg-white sm:m-2 lg:m-0">
                <div className="flex justify-center pb-5">
                  <img src={rumahtahfidz} className="h-10" />
                </div>
                <h1 className=" font-medium">Master Tahfidz</h1>
                <h2 className="font-medium">{countmasterpondok}</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f883" ? (
        <div className=" lg:mt-10 sm:mt-4 mx-2 rounded-lg pt-5 shadow-md bg-white ">
          <div className="flex justify-between px-5 py-3">
            <div className="font-medium text-lg flex items-center">
              <span className="text-gray-700 mr-2">
                <HomeIcon className="w-5" />
              </span>
              <h1 className="text-sm">Santri Terbanyak</h1>
            </div>
            <button className="px-3 py-1 bg-mamasingle rounded-md text-white drop-shadow-md">
              <Link to="/datarumahtahfiz">Detail</Link>
            </button>
          </div>
          <div className="px-6 py-3">
            <div className="w-full shadow-inner  rounded-lg">
              <table className=" table-auto w-full rounded-xl">
                <thead className="shadow-gray-100 bg-mamamuda">
                  <tr className="text-left px-5">
                    <th className="px-4 py-4 text-gray-800">Rumah Tahfidz</th>
                    <th className="px-4 py-4 text-gray-800 w-1/2 text-center">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs font-light">
                  {listpondok.map((e, i) => (
                    <tr>
                      <td className="border border-gray-200 border-x-0 px-4 py-3">
                        {e.name}
                      </td>
                      <td className="border border-gray-200 border-x-0 px-4 py-3 text-center">
                        {e.total_santri_aktif} Santri
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className=" lg:mt-10 sm:mt-4 mx-2 rounded-lg pt-5 shadow-md bg-white ">
          <div className="flex justify-between px-5 py-3">
            <div className="font-medium text-lg flex items-center">
              <span className="text-gray-700 mr-2">
                <HomeIcon className="w-5" />
              </span>
              <h1 className="text-sm">Cabang Pondok Terbanyak</h1>
            </div>
            <button className="px-3 py-1 bg-mamasingle rounded-md text-white drop-shadow-md">
              <Link to="/datamasterrumahtahfiz">Detail</Link>
            </button>
          </div>
          <div className="px-6 py-3">
            <div className="w-full shadow-inner  rounded-lg">
              <table className=" table-auto w-full rounded-xl">
                <thead className="shadow-gray-100 bg-mamamuda">
                  <tr className="text-left px-5">
                    <th className="px-4 py-4 text-gray-800">Master Tahfidz</th>
                    <th className="px-4 py-4 text-gray-800 w-1/2 text-center">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs font-light">
                  {listmasterpondok.map((e, i) => (
                    <tr>
                      <td className="border border-gray-200 border-x-0 px-4 py-3">
                        {e.name}
                      </td>
                      <td className="border border-gray-200 border-x-0 px-4 py-3 text-center">
                        {e.total_pondok} Cabang
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
