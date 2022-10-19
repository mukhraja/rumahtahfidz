import React, { useEffect } from "react";
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
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import { doGetIqroAwalSantriRequest } from "../../../reduxsaga/actions/Iqrosantri";
import { doGetAlquranAwalSantriRequest } from "../../../reduxsaga/actions/Alquransantri";
import { doGetSurahPendekAwalSantriRequest } from "../../../reduxsaga/actions/SurahPendekSantri";
import { doGetGuruRequest } from "../../../reduxsaga/actions/Guru";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { Link } from "react-router-dom";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  useEffect(() => {
    dispatch(doGetSantriRequest());
    dispatch(doGetIqroAwalSantriRequest());
    dispatch(doGetSurahPendekAwalSantriRequest());
    dispatch(doGetAlquranAwalSantriRequest());
    dispatch(doGetGuruRequest());
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  return (
    <div className=" font-poppins">
      <div className="sm:flex-none lg:flex w-full justify-center">
        <div className="my-4 lg:ml-4 lg:mr-2 sm:mx-2 shadow-md rounded-lg lg:h-40 w-full bg-gradient-to-r from-green-400 ro bg-mamasingle hover:from-mamasingle hover:to-green-400">
          <div className="p-4 flex sm:flex-wrap justify-center lg:justify-around sm:static md:top-0 lg:relative lg:top-5">
            <Link to="/datasantri">
              <div className="shadow-md p-3 lg:p-4 sm:m-2 lg:m-0 text-center rounded-lg w-40 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={santri} className="h-20" />
                </div>
                <h1 className=" font-medium">Santri</h1>
                <h2 className="font-medium">{santridata.length}</h2>
              </div>
            </Link>
            <Link to="/dataalquransantri">
              <div className="shadow-md p-3 lg:p-4 sm:m-2 lg:m-0 text-center rounded-lg w-40 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={hafalquran} className="h-20" />
                </div>
                <h1 className=" font-medium">Hafal Qur'an</h1>
                <h2 className="font-medium">{alquransantridata.length}</h2>
              </div>
            </Link>
            <Link to="/dataiqrosantri">
              <div className="shadow-md p-3 lg:p-4 sm:m-2 lg:m-0 text-center rounded-lg w-40 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={bacaiqro} className="h-20" />
                </div>
                <h1 className=" font-medium">Baca Iqro</h1>
                <h2 className="font-medium">{iqrosantridata.length}</h2>
              </div>
            </Link>
            <Link to="/datasurahpendeksantri">
              <div className="shadow-md p-3 lg:p-4 sm:m-2 lg:m-0 text-center rounded-lg w-40 items-center bg-white">
                <div className="flex justify-center pb-5">
                  <img src={bacajuz} className="h-20" />
                </div>
                <h1 className=" font-medium">Baca Juz 30</h1>
                <h2 className="font-medium">{surahpendeksantridata.length}</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="my-4 lg:ml-2 lg:mr-4 sm:mx-2 shadow-md rounded-lg lg:h-40 sm:w-full lg:w-1/2 bg-gradient-to-r from-green-400 ro bg-mamasingle hover:from-mamasingle hover:to-green-400">
          <div className="p-4 flex sm:flex-wrap justify-center lg:justify-around sm:static sm:top-0 lg:relative lg:top-5">
            <Link to="/datapengajar">
              <div className="shadow-md p-3 lg:p-4 text-center rounded-lg w-40 items-center bg-white sm:m-2 lg:m-0">
                <div className="flex justify-center pb-5">
                  <img src={pengajar} className="h-20" />
                </div>
                <h1 className=" font-medium">Pengajar</h1>
                <h2 className="font-medium">{gurudata.length}</h2>
              </div>
            </Link>
            <Link to="/datarumahtahfiz">
              <div className="shadow-md p-3 lg:p-4 text-center rounded-lg w-40 items-center bg-white sm:m-2 lg:m-0">
                <div className="flex justify-center pb-5">
                  <img src={rumahtahfidz} className="h-20" />
                </div>
                <h1 className=" font-medium">Rumah Tahfidz</h1>
                <h2 className="font-medium">{rumahtahfidzdata.length}</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:mt-24 sm:mt-4 mx-5  rounded-lg pt-5 shadow-md bg-white ">
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
              <tbody>
                {rumahtahfidzdata.map((e, i) => (
                  <tr>
                    <td className="border border-gray-200 border-x-0 px-4 py-3">
                      {e.name}
                    </td>
                    <td className="border border-gray-200 border-x-0 px-4 py-3">
                      <div className="w-full bg-gray-100 rounded-full">
                        <div
                          className="bg-gradient-to-r from-green-400 ro bg-mamasingle hover:from-mamasingle hover:to-green-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full py-2"
                          style={{ width: "90%" }}
                        >
                          {" "}
                          {e.Santris.length} %
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
