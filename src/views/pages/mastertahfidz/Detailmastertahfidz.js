import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ApiSantri from "../../../api/ApiSantri";
import { rumahtahfidz } from "../../../gambar";
import { doGetMasterPondokByIdRequest } from "../../../reduxsaga/actions/Masterpondok";
import { doGetRumahTahfidzByIdRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Detailmastertahfidz = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { masterpondokdata } = useSelector((state) => state.masterPondokState);

  const [detailpondok, setDetailpondok] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdetailmasterpondok = async () => {
      try {
        const data = await ApiSantri.getData(
          "/masterpondok/getbyid/?masterpondokId=" + id
        );
        setLoading(false);
        setDetailpondok(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };

    fetchdetailmasterpondok();
  }, []);

  return (
    <div className="">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      {detailpondok.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
              Data {e.name}
            </h1>
            <img
              src={e.logo == "" ? rumahtahfidz : config.urlImage + "/" + e.logo}
              className="h-20"
            />
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
              </div>
            </div>
            <div className="py-4 font-poppins">
              <button
                className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
                onClick={() => navigate("/datamasterrumahtahfiz/edit/" + id)}
              >
                Edit
              </button>
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
                onClick={() => navigate("/datamasterrumahtahfiz")}
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

export default Detailmastertahfidz;
