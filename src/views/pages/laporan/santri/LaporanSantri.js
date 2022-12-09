import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDownloadExcel } from "react-export-table-to-excel";
import { santri } from "../../../../gambar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  doGetSantriByMasterTahfidzRequest,
  doGetSantriByRumahTahfidzRequest,
  doGetSantriRequest,
} from "../../../../reduxsaga/actions/Santri";
import {
  doGetByRumahTahfidzRequest,
  doGetRumahTahfidzRequest,
} from "../../../../reduxsaga/actions/RumahTahfidz";
const LaporanSantri = () => {
  const tableRef = useRef(null);

  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [select, setSelect] = useState("");
  console.log(select);

  const { santridata } = useSelector((state) => state.santriState);
  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetRumahTahfidzRequest());
      dispatch(doGetSantriRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(doGetByRumahTahfidzRequest(userProfile.masterpondokId));
      dispatch(doGetSantriByMasterTahfidzRequest(userProfile.masterpondokId));
    }
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const hafalsantri = [
    "IQRO 1",
    "IQRO 2",
    "IQRO 3",
    "IQRO 4",
    "IQRO 5",
    "IQRO 6",
    "An Naba’",
    "An Nazi’at",
    "Abasa'",
    "At Takwir",
    "Al Infithar",
    "Al Muthaffifin",
    "Al Insyiqaq",
    "Al Buruj",
    "Ath Thariq",
    "Al A’laa",
    "Al Ghasyiah",
    "Al Fajr",
    "Al Balad",
    "Asy Syams",
    "Al Lail",
    "Ad Dhuha",
    "Asy Syarh",
    "At Tin",
    "Al ‘Alaq",
    "Al Qadr",
    "Al Bayyinah",
    "Az Zalzalah",
    "Al ‘Aadiyah",
    "Al Qari’ah",
    "At Takatsur",
    "Al ‘Ashr",
    "Al Humazah",
    "Al Fiil",
    "Quraisy",
    "Al Ma’un",
    "Al Kautsar",
    "Al Kafirun",
    "An Nashr",
    "Al Lahab",
    "Al Ikhlash",
    "Al Falaq",
    "An Nas",
    "Juz 1",
    "Juz 2",
    "Juz 3",
    "Juz 4",
    "Juz 5",
    "Juz 6",
    "Juz 7",
    "Juz 8",
    "Juz 9",
    "Juz 10",
    "Juz 11",
    "Juz 12",
    "Juz 13",
    "Juz 14",
    "Juz 15",
    "Juz 16",
    "Juz 17",
    "Juz 18",
    "Juz 19",
    "Juz 20",
    "Juz 21",
    "Juz 22",
    "Juz 23",
    "Juz 24",
    "Juz 25",
    "Juz 26",
    "Juz 27",
    "Juz 28",
    "Juz 29",
    "Juz 30",
  ];

  const hafalsantriiqro = [
    "IQRO 1",
    "IQRO 2",
    "IQRO 3",
    "IQRO 4",
    "IQRO 5",
    "IQRO 6",
  ];

  const hafalsantrisurahpendek = [
    "An Naba’",
    "An Nazi’at",
    "Abasa'",
    "At Takwir",
    "Al Infithar",
    "Al Muthaffifin",
    "Al Insyiqaq",
    "Al Buruj",
    "Ath Thariq",
    "Al A’laa",
    "Al Ghasyiah",
    "Al Fajr",
    "Al Balad",
    "Asy Syams",
    "Al Lail",
    "Ad Dhuha",
    "Asy Syarh",
    "At Tin",
    "Al ‘Alaq",
    "Al Qadr",
    "Al Bayyinah",
    "Az Zalzalah",
    "Al ‘Aadiyah",
    "Al Qari’ah",
    "At Takatsur",
    "Al ‘Ashr",
    "Al Humazah",
    "Al Fiil",
    "Quraisy",
    "Al Ma’un",
    "Al Kautsar",
    "Al Kafirun",
    "An Nashr",
    "Al Lahab",
    "Al Ikhlash",
    "Al Falaq",
    "An Nas",
  ];

  const hafalsantrialquran = [
    "Juz 1",
    "Juz 2",
    "Juz 3",
    "Juz 4",
    "Juz 5",
    "Juz 6",
    "Juz 7",
    "Juz 8",
    "Juz 9",
    "Juz 10",
    "Juz 11",
    "Juz 12",
    "Juz 13",
    "Juz 14",
    "Juz 15",
    "Juz 16",
    "Juz 17",
    "Juz 18",
    "Juz 19",
    "Juz 20",
    "Juz 21",
    "Juz 22",
    "Juz 23",
    "Juz 24",
    "Juz 25",
    "Juz 26",
    "Juz 27",
    "Juz 28",
    "Juz 29",
    "Juz 30",
  ];

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Laporan Data Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
      <div className="mt-4 p-4 mx-4 bg-white rounded-lg shadow-lg">
        <div className=" font-poppins py-2 flex">
          <div className=" flex">
            <h1 className="md:py-2">Pilih Tahfidz</h1>
            <select
              name="pondokId"
              id="pondokId"
              value={select}
              onChange={handleChange}
              autoComplete="pondokId"
              class="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs mx-2"
            >
              <option value="" selected disabled hidden>
                Pilih Rumah Tahfidz
              </option>
              <option value="">All</option>
              {rumahtahfidzdata.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
          </div>
          <button
            className=" bg-blue-400 px-4 rounded-md shadow-md text-white mx-2"
            onClick={onDownload}
          >
            Cetak
          </button>
        </div>
        <div
          style={{
            width: window.innerWidth / 1.4,
          }}
        >
          <div className=" overflow-auto">
            <table className=" font-poppins" ref={tableRef}>
              <thead className="border-b bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    rowSpan="2"
                    className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    colSpan="6"
                    className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-center"
                  >
                    IQRO
                  </th>
                  <th
                    scope="col"
                    colSpan="37"
                    className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-center"
                  >
                    Surah Pendek
                  </th>
                  <th
                    scope="col"
                    colSpan="30"
                    className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-center"
                  >
                    Alquran
                  </th>
                </tr>
                <tr>
                  {hafalsantri.map((e) => (
                    <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-center">
                      {e}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {santridata &&
                  santridata
                    .filter((el) => {
                      if (select === "") {
                        return el;
                      } else if (el.PondokId.includes(select)) {
                        return el;
                      }
                    })
                    .map((e) => (
                      <tr className=" border-b">
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          {e.name}
                        </td>
                        {hafalsantriiqro.map((hafal) => (
                          <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                            <div className=" flex justify-center">
                              {e.Iqrosantris.map((e, i, array) => {
                                if (e.name == hafal && e.ket == "selesai") {
                                  // return <CheckCircleIcon className="h-6" />;
                                  return "selesai";
                                } else {
                                  return null;
                                }
                              })}
                            </div>
                          </td>
                        ))}
                        {hafalsantrisurahpendek.map((hafal) => (
                          <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                            <div className=" flex justify-center">
                              {e.Surahpendeksantris.map((e, i, array) => {
                                if (e.name == hafal && e.ket == "selesai") {
                                  // return <CheckCircleIcon className="h-6" />;
                                  return "selesai";
                                } else {
                                  return null;
                                }
                              })}
                            </div>
                          </td>
                        ))}
                        {hafalsantrialquran.map((hafal) => (
                          <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                            <div className=" flex justify-center">
                              {e.Alquransantris.map((e, i, array) => {
                                if (e.juz == hafal && e.ket == "selesai") {
                                  // return <CheckCircleIcon className="h-6" />;
                                  return "selesai";
                                } else {
                                  return null;
                                }
                              })}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default LaporanSantri;
