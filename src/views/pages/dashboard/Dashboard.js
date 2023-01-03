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
import {
  doGetSantriByMasterTahfidzRequest,
  doGetSantriByRumahTahfidzRequest,
  doGetSantriByRumahTahfidzSucceed,
  doGetSantriRequest,
} from "../../../reduxsaga/actions/Santri";
import {
  doGetIqroAwalSantriRequest,
  doGetIqroSantriByMasterTahfidzRequest,
  doGetIqroSantriByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import {
  doGetAlquranAwalSantriRequest,
  doGetAlquranSantriByMasterTahfidzRequest,
  doGetAlquranSantriByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/Alquransantri";
import {
  doGetSurahPendekAwalSantriRequest,
  doGetSurahPendekSantriByMasterTahfidzRequest,
  doGetSurahPendekSantriByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/SurahPendekSantri";
import {
  doGetGuruByMasterTahfidzRequest,
  doGetGuruByRumahTahfidzRequest,
  doGetGuruRequest,
} from "../../../reduxsaga/actions/Guru";
import {
  doGetByRumahTahfidzRequest,
  doGetRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { Link } from "react-router-dom";
import { doGetSurahPendekGuruByRumahTahfidzRequest } from "../../../reduxsaga/actions/SurahPendekGuru";
import { doGetAlquranGuruByRumahTahfidzRequest } from "../../../reduxsaga/actions/Alquranguru";
import { doGetMasterPondokRequest } from "../../../reduxsaga/actions/Masterpondok";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import { ToastContainer } from "react-toastify";
import LoadingSpinnerAwal from "../../components/spinner/LoadingSprinnerAwal";

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

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetSantriRequest());
      dispatch(doGetIqroAwalSantriRequest());
      dispatch(doGetSurahPendekAwalSantriRequest());
      dispatch(doGetAlquranAwalSantriRequest());
      dispatch(doGetGuruRequest());
      dispatch(doGetMasterPondokRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(doGetSantriByMasterTahfidzRequest(userProfile.masterpondokId));
      dispatch(doGetGuruByMasterTahfidzRequest(userProfile.masterpondokId));
      dispatch(
        doGetIqroSantriByMasterTahfidzRequest(userProfile.masterpondokId)
      );
      dispatch(
        doGetSurahPendekSantriByMasterTahfidzRequest(userProfile.masterpondokId)
      );
      dispatch(
        doGetAlquranSantriByMasterTahfidzRequest(userProfile.masterpondokId)
      );
      dispatch(doGetByRumahTahfidzRequest(userProfile.masterpondokId));
      dispatch(doGetMasterPondokRequest());
    } else {
      dispatch(doGetSantriByRumahTahfidzRequest(userProfile.pondokId));
      dispatch(doGetGuruByRumahTahfidzRequest(userProfile.pondokId));
      dispatch(doGetIqroSantriByRumahTahfidzRequest(userProfile.pondokId));
      dispatch(
        doGetSurahPendekSantriByRumahTahfidzRequest(userProfile.pondokId)
      );
      dispatch(doGetAlquranSantriByRumahTahfidzRequest(userProfile.pondokId));
      dispatch(doGetMasterPondokRequest());
    }
  }, []);

  const [datasan, setDatasan] = useState([]);
  const [dataguru, setDataguru] = useState([]);

  useEffect(() => {
    setDatasan(santridata.filter((e) => e.mulai_vakum === null));
    setDataguru(gurudata.filter((e) => e.mulai_vakum === null));
  }, [santridata, gurudata]);

  // useEffect(() => {
  //   setDataguru(gurudata.filter((e) => e.mulai_vakum === null));
  // }, []);

  console.log("ini datasan ", datasan);
  return (
    <div className=" font-poppins">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      {isKoneksi ? <LoadingSpinnerAwal /> : ""}
      <div className="sm:flex-none lg:flex justify-center mx-2">
        <div className="my-4 lg:ml-4 lg:mr-2 shadow-md rounded-lg lg:h-28 w-full bg-gradient-to-r from-green-400 ro bg-mamasingle hover:from-mamasingle hover:to-green-400">
          <div className="p-1 flex sm:flex-wrap justify-center lg:justify-around sm:static md:top-0 lg:relative lg:top-5">
            <Link to="/datasantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={santri} className="h-10" />
                </div>
                <h1 className=" font-medium">Santri</h1>
                <h2 className="font-medium">{santridata && datasan.length}</h2>
              </div>
            </Link>
            <Link to="/dataalquransantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={hafalquran} className="h-10" />
                </div>
                <h1 className=" font-medium">Hafal Qur'an</h1>
                <h2 className="font-medium">
                  {alquransantridata && alquransantridata.length}
                </h2>
              </div>
            </Link>
            <Link to="/dataiqrosantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={bacaiqro} className="h-10" />
                </div>
                <h1 className=" font-medium">Baca Iqro</h1>
                <h2 className="font-medium">
                  {iqrosantridata && iqrosantridata.length}
                </h2>
              </div>
            </Link>
            <Link to="/datasurahpendeksantri">
              <div className="shadow-md p-2 lg:px-1 py-4 sm:m-2 lg:m-0 text-center rounded-lg w-32 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={bacajuz} className="h-10" />
                </div>
                <h1 className=" font-medium">Baca Juz 30</h1>
                <h2 className="font-medium">
                  {surahpendeksantridata && surahpendeksantridata.length}
                </h2>
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
                <h2 className="font-medium">{gurudata && dataguru.length}</h2>
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
                <h2 className="font-medium">
                  {rumahtahfidzdata && rumahtahfidzdata.length}
                </h2>
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
                <h2 className="font-medium">
                  {masterpondokdata && masterpondokdata.length}
                </h2>
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
                  {rumahtahfidzdata &&
                    rumahtahfidzdata
                      .sort((a, b) =>
                        a.Santris.length < b.Santris.length
                          ? 1
                          : a.Santris.length > b.Santris.length
                          ? -1
                          : 0
                      )
                      .map((e, i) => (
                        <tr>
                          <td className="border border-gray-200 border-x-0 px-4 py-3">
                            {e.name}
                          </td>
                          <td className="border border-gray-200 border-x-0 px-4 py-3 text-center">
                            {e.Santris.length} Santri
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
                  {masterpondokdata &&
                    masterpondokdata
                      .sort((a, b) =>
                        a.Pondoks.length < b.Pondoks.length
                          ? 1
                          : a.Pondoks.length > b.Pondoks.length
                          ? -1
                          : 0
                      )
                      .map((e, i) => (
                        <tr>
                          <td className="border border-gray-200 border-x-0 px-4 py-3">
                            {e.name}
                          </td>
                          <td className="border border-gray-200 border-x-0 px-4 py-3 text-center">
                            {e.Pondoks.length} Cabang
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Dashboard;
