import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ApiSantri from "../../../api/ApiSantri";
import { rumahtahfidz } from "../../../gambar";
import { doGetRumahTahfidzByIdRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Detailrumahtahfiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pondok, setListpondok] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchlistpondok = async () => {
      try {
        const data = await ApiSantri.getData(
          "/pondok/getlistbyid/?pondokId=" + id
        );
        setLoading(false);
        setListpondok(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };

    fetchlistpondok();
  }, []);

  return (
    <div className="">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      {pondok.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
              Data {e.name}
            </h1>
            <img src={rumahtahfidz} className="h-20 w-20 object-cover" />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="flex-none md:flex flex-row-reverse justify-between">
              <div className="w-full md:w-1/2 my-2 justify-center flex">
                <img
                  src={
                    e.photo == ""
                      ? rumahtahfidz
                      : config.urlImage + "/" + e.photo
                  }
                  className="w-1/2 object-fit h-full rounded-md"
                />
              </div>
              <div className="w-full">
                <div className="grid grid-cols-8 p-2 text-xs">
                  <h1 className="block col-span-4">Nama</h1>
                  <h1 className="block col-span-4">{e.name}</h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
                  <h1 className="block col-span-4">NIT</h1>
                  <h1 className="block col-span-4">{e.nit}</h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs">
                  <h1 className="block col-span-4">Alamat</h1>
                  <h1 className="block col-span-4">{e.address}</h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
                  <h1 className="block col-span-4">No. Telepon</h1>
                  <h1 className="block col-span-4">{e.telephone}</h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs">
                  <h1 className="block col-span-4">Nama Kepala Tahfidz</h1>
                  <h1 className="block col-span-4">{e.chief}</h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
                  <h1 className="block col-span-4">Ustadz/ah Aktif</h1>
                  <h1 className="block col-span-4">
                    {e.total_guru_aktif} Orang
                  </h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs ">
                  <h1 className="block col-span-4">Ustadz/ah Vakum</h1>
                  <h1 className="block col-span-4">
                    {e.total_guru_vakum} Orang
                  </h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
                  <h1 className="block col-span-4">Santri Aktif</h1>
                  <h1 className="block col-span-4">
                    {e.total_santri_aktif} Orang
                  </h1>
                </div>
                <div className="grid grid-cols-8 p-2 text-xs">
                  <h1 className="block col-span-4">Santri Vakum</h1>
                  <h1 className="block col-span-4">
                    {e.total_santri_vakum} Orang
                  </h1>
                </div>
              </div>
            </div>
            <div className="py-4 font-poppins">
              {/* {userProfile.role !== "1a2832f9-ceb7-4ff9-930a-af176c88dcc5" &&
              userProfile.role !== "1b864518-299d-469c-b270-4d4b9d5b120f" ? (
                <button
                  className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
                  onClick={() => navigate("/datarumahtahfiz/edit/" + id)}
                >
                  Edit
                </button>
              ) : (
                ""
              )} */}
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
                onClick={() => navigate(-1)}
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

export default Detailrumahtahfiz;
