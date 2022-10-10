import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDownloadExcel } from "react-export-table-to-excel";
import { santri } from "../../../../gambar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetSantriRequest } from "../../../../reduxsaga/actions/Santri";
import { doGetRumahTahfidzRequest } from "../../../../reduxsaga/actions/RumahTahfidz";
const LaporanSantri = () => {
  const tableRef = useRef(null);

  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [select, setSelect] = useState("");
  console.log(select);

  const { santridata } = useSelector((state) => state.santriState);
  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
    dispatch(doGetSantriRequest());
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Laporan Data Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
      <div className="mt-4 p-4 mx-4 bg-white rounded-lg shadow-lg">
        <div className=" font-poppins py-2 flex">
          <div className=" flex">
            <h1>Pilih Tahfidz</h1>
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
        <div style={{ width: "1100px" }}>
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
                    className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left"
                  >
                    Surah Pendek
                  </th>
                  <th
                    scope="col"
                    rowSpan="2"
                    className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left"
                  >
                    Alquran
                  </th>
                </tr>
                <tr>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    IQRO 1
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    IQRO 2
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    IQRO 3
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    IQRO 4
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    IQRO 5
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    IQRO 6
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    An Naba'
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    An Nazi’at
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Abasa'
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    At Takwir
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Infithar
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Muthaffifin
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Insyiqaq
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Buruj
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Ath Thariq
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al A’laa
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Ghasyiah
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Fajr
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Balad
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Asy Syams
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Lail
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Ad Dhuha
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Asy Syarh
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    At Tin
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al ‘Alaq
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Qadr
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Bayyinah
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Az Zalzalah
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al ‘Aadiyah
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Qari’ah
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    At Takatsur
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al ‘Ashr
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Humazah
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Fiil
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Quraisy
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Ma’un
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Kautsar
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Kafirun
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    An Nashr
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Lahab
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Ikhlash
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    Al Falaq
                  </td>
                  <td className="text-sm font-medium text-gray-900 px-8 border-r py-4 text-left">
                    An Nas
                  </td>
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
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Iqrosantris.map((e, i, array) => {
                              if (e.name == 1 && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Iqrosantris.map((e, i, array) => {
                              if (e.name == 2 && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Iqrosantris.map((e, i, array) => {
                              if (e.name == 3 && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Iqrosantris.map((e, i, array) => {
                              if (e.name == 4 && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Iqrosantris.map((e, i, array) => {
                              if (e.name == 5 && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Iqrosantris.map((e, i, array) => {
                              if (e.name == 6 && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Surahpendeksantris.map((e, i, array) => {
                              if (
                                e.name == "An Nazi’at" &&
                                e.ket == "selesai"
                              ) {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-8 border-r py-4 whitespace-nowrap">
                          <div className=" flex justify-center">
                            {e.Surahpendeksantris.map((e, i, array) => {
                              if (e.name == "An Naba’" && e.ket == "selesai") {
                                // return <CheckCircleIcon className="h-6" />;
                                return "selesai";
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </td>
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
