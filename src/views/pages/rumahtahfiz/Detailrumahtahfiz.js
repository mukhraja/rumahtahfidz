import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { rumahtahfidz } from "../../../gambar";
import { doGetRumahTahfidzByIdRequest } from "../../../reduxsaga/actions/RumahTahfidz";

const Detailrumahtahfiz = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  console.log(rumahtahfidzdata);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetRumahTahfidzByIdRequest(payload));
  }, []);

  return (
    <div className=" overflow-hidden">
      {rumahtahfidzdata.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
            <h1 className="text-white font-semibold text-2xl font-poppins">
              Data {e.name}
            </h1>
            <img src={rumahtahfidz} className="h-20" />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Nama</h1>
              <h1 className="block col-span-2">{e.name}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">NIT</h1>
              <h1 className="block col-span-2">{e.nit}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Alamat</h1>
              <h1 className="block col-span-5">{e.address}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">No. Telepon</h1>
              <h1 className="block col-span-2">{e.telephone}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block col-span-2">Nama Kepala Tahfidz</h1>
              <h1 className="block col-span-2">{e.chief}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block col-span-2">Foto Tahfidz</h1>
              <h1 className="block col-span-2">{e.photo}</h1>
            </div>
            <div className="py-4 font-poppins">
              <button className="py-1 px-2 bg-blue-400 rounded-md text-white shadow-sm">
                Edit
              </button>
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2"
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
